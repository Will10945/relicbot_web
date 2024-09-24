export default interface Member {
    MemberID: number;
    DiscordID?: number;
    MemberName: string;
    AllowMerging?: number;
    HostLimit?: number;
    CycleDefault?: number;
    Muted?: number;
    Badge?: number;
    SquadChatTime?: number;
    Admin?: number;
}