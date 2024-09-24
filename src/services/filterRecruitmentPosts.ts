import RecruitmentPost from "../entities/RecruitmentPost";

export default function filterRecruitmentPosts(recruitmentPost: RecruitmentPost, regex: RegExp) {
    var str = `${recruitmentPost.Host.MemberName}, ${recruitmentPost.Members.map(m => m.MemberName).join(", ")}, ${recruitmentPost.Relics.Oncycle.map(r => r.Relic).join(", ")},${recruitmentPost.Relics.Offcycle.map(r => r.Relic).join(", ")},${recruitmentPost.Style}, ${recruitmentPost.Refinements.Oncycle.map(r => r.Name).join(", ")}, ${recruitmentPost.Refinements.Offcycle.map(r => r.Name).join(", ")}`;
    var matches;
    try {
        // matches = str.toLowerCase().match(regex);
        matches = regex.test(str.toLowerCase());
    } catch {
        matches = true;
    }

    return matches;
    
}