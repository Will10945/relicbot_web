import { v4 } from "uuid";

const REFINEMENTS = {
    "Intact": ["I", "Int", "Intact"],
    "Exceptional": ["E", "Excep", "Exc", "Exceptional"],
    "Flawless": ["F", "Flaw", "Flawless"],
    "Radiant": ["R", "Rad", "Radiant"]
}

const ERAS = ['Lith', 'Meso', 'Neo', 'Axi'];

interface NewPost {
    SquadID: string;
    Style: string;
    Era: string;
    CycleRequirement: number;
    Host: string;
    CurrentCount: number;
    Filled: number;
    UserMsg: string;
    CreatedAt: number;
    Active: number;
    Members: string[];
    Relics: {
        Oncycle: string[];
        Offcycle: string[];
    };
    Refinements: {
        Oncycle: string[];
        Offcycle: string[];
    }
}

function titleCase(str: string) {

    const strTitleArr = str.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase());
    const strTitle = strTitleArr.join(' ');

    return strTitle;
}

function checkRefinement(str: string): string {

    var ref = '';

    Object.entries(REFINEMENTS).forEach(r => {
        if (r[1].includes(str)) ref = r[0];
    })

    return ref;
}

const parseRecruitmentInputs = (recPostString: string, uid: string) => {

    const recPostArr = recPostString.split('\n');
    console.log(recPostArr);

    const newRecruitmentPosts = [] as NewPost[];

    recPostArr.map(rec => {
        
        var newPost = { 
            SquadID: v4(),
            Host: uid,
            CreatedAt: Date.now(),
            Filled: 0,
            Active: 1,
            UserMsg: "",
         } as NewPost;

        var offcToggle = false;
        
        // rec = titleCase(rec);
        rec.split(' ').forEach(word => {

            const wordRaw = word;
            word = titleCase(word);

            const ref = checkRefinement(word);

            if (ERAS.includes(word)) {
                newPost.Era = word;
            }
            else if (word.match(/^[1-4]b[1-4][iefr]$/gi)) {
                
                const style = word[0] == word[2] ? word.substring(0, 3) : null;
                if (!style) {
                    console.log("Invalid Style");
                    return;
                }
                newPost.Style = style;

                const _ref = checkRefinement(word[word.length - 1].toUpperCase());

                if (!newPost.Refinements) newPost.Refinements = { Oncycle: [], Offcycle: []}
                if (!offcToggle) newPost.Refinements.Oncycle.push(_ref);
                else newPost.Refinements.Offcycle.push(_ref);

            }
            else if (word.match(/^[A-Z]\d{1,2}/)) {
                if (!newPost.Era) return;
                    if (!newPost.Relics) newPost.Relics = { Oncycle: [], Offcycle: []}
                    if (!offcToggle) {
                        newPost.Relics['Oncycle'].push(`${newPost.Era} ${word}`);
                    }
                    if (offcToggle) newPost.Relics.Offcycle.push(`${newPost.Era} ${word}`);
            }
            else if (["W", "With", "W/", "W\\"].includes(word)) {
                offcToggle = true;
            }
            else if (word.match(/^[1-4]b[1-4]$/gi)) {
                const style = word[0] == word[2] ? parseInt(word[0]) : null;
                if (!style) {
                    console.log("Invalid Style");
                    return;
                }

                newPost.Style = word.substring(0, 3);
            }
            else if (ref && !newPost.Refinements || (newPost.Refinements?.Oncycle.length == 0 && !offcToggle) || (newPost.Refinements?.Offcycle.length == 0 && offcToggle)) {
                if (!newPost.Refinements) newPost.Refinements = { Oncycle: [], Offcycle: []}
                if (!offcToggle) newPost.Refinements.Oncycle.push(ref);
                else newPost.Refinements.Offcycle.push(ref);
            }
            else if (word.match(/^\d+\+/)) {
                newPost.CycleRequirement = parseInt(word.substring(0, word.length - 1));
            }
            else newPost.UserMsg += ` ${wordRaw}`;

        });
        
        console.log(newPost);
        newRecruitmentPosts.push(newPost);

    });

    
    console.log(newRecruitmentPosts);

}

export default parseRecruitmentInputs;