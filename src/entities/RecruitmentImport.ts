export default interface RecruitmentImport {
    SquadID: string;
    Style: string;
    Era: string;
    CycleRequirement: number;
    Host: number;
    CurrentCount: number;
    Filled: number;
    UserMsg: string;
    CreatedAt: number;
    Active: number;
    OriginatingServer: number;
    Rehost: number;
    ClosedAt: number;
    MemberIDs: {
        [MemberID: number]: {
            ServerID?: number;
            AnonymousUsers?: number;
        }
    };
    RelicIDs: {
        [RelicID: number]: {
            Offcycle?: number;
        }
    };
    RefinementIDs: {
        Oncycle: number[];
        Offcycle: number[];
    }
}