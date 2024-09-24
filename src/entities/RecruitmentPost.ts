import Member from "./Member";
import Refinement from "./Refinement";
import Relic from "./Relic";

export default interface RecruitmentPost {
    SquadID: string;
    Style: string;
    Era: string;
    CycleRequirement: number;
    Host: Member;
    CurrentCount: number;
    Filled: number;
    UserMsg: string;
    CreatedAt: number;
    Active: number;
    OriginatingServer: number;
    Rehost: number;
    ClosedAt: number;
    Members: Member[];
    Relics: {
        Oncycle: Relic[];
        Offcycle: Relic[];
    };
    Refinements: {
        Oncycle: Refinement[];
        Offcycle: Refinement[];
    }
}