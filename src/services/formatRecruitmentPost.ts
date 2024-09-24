import Member from "../entities/Member";
import RecruitmentImport from "../entities/RecruitmentImport";
import RecruitmentPost from "../entities/RecruitmentPost";
import Refinement from "../entities/Refinement";
import Relic from "../entities/Relic";

export default function(recruitmentImport: RecruitmentImport, members: Member[], relics: Relic[], refinements: Refinement[]): RecruitmentPost {
    var recruitmentPost = {} as RecruitmentPost;

    const onRelicIds = Object.entries(recruitmentImport.RelicIDs).filter(r => 
        !r[1].Offcycle).map(r => parseInt(r[0]));
    const offRelicIds = Object.entries(recruitmentImport.RelicIDs).filter(r => 
        r[1].Offcycle).map(r => parseInt(r[0]));
    const onRefinementIds = recruitmentImport.RefinementIDs.Oncycle;
    const offRefinementIds = recruitmentImport.RefinementIDs.Offcycle;

    recruitmentPost = {
        SquadID: recruitmentImport.SquadID,
        Style: recruitmentImport.Style,
        Era: recruitmentImport.Era,
        CycleRequirement: recruitmentImport.CycleRequirement,
        Host: members.find((m) => m.MemberID == recruitmentImport.Host) || ({} as Member),
        CurrentCount: recruitmentImport.CurrentCount,
        Filled: recruitmentImport.Filled,
        UserMsg: recruitmentImport.UserMsg,
        CreatedAt: recruitmentImport.CreatedAt,
        Active: recruitmentImport.Active,
        OriginatingServer: recruitmentImport.OriginatingServer,
        Rehost: recruitmentImport.Rehost,
        ClosedAt: recruitmentImport.ClosedAt,
        Members: Object.keys(recruitmentImport.MemberIDs).map(m => members.find((_m) => _m.MemberID == parseInt(m)) || ({} as Member)),
        Relics: {
            Oncycle: onRelicIds.map(r => relics.find((_r) => _r.ID == r) || ({} as Relic)),
            Offcycle: offRelicIds.map(r => relics.find((_r) => _r.ID == r) || ({} as Relic)),
        },
        Refinements: {
            Oncycle: onRefinementIds.map(r => refinements.find(_r => _r.ID == r) || {} as Refinement),
            Offcycle: offRefinementIds.map(r => refinements.find(_r => _r.ID == r) || {} as Refinement),
        }
    }

    return recruitmentPost;
}