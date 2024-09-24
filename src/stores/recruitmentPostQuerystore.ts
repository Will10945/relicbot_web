import { create } from "zustand";


interface RecruitmentSearchQuery {
    searchText?: string;
    Style?: string;
    Era?: string;
    CycleRequirement?: number;
    Host?: number;
    CurrentCount?: number;
    Members?: [memberId: number];
    Relics?: [relicId: number];
    Refinements?: [refinementId: number];
}

interface RecruitmentSearchQueryStore {
    recruitmentPostQuery: RecruitmentSearchQuery;
    setSearchText: (searchText: string) => void;
    setStyle: (Style: string) => void;
    setEra: (Era: string) => void;
    setCycleRequirement: (CycleRequirement: number) => void;
    setHost: (Host: number) => void;
    setCurrentCount: (CurrentCount: number) => void;
    setMembers: (Members: [memberId: number]) => void;
    setRelics: (Relics: [relicId: number]) => void;
    setRefinement: (Refinements: [refinementId: number]) => void;
}

const useRecruitmentSearchQueryStore = create<RecruitmentSearchQueryStore>(set => ({
    recruitmentPostQuery: {},
    setSearchText: (searchText) => set(store => ({ recruitmentPostQuery: { ...store.recruitmentPostQuery, searchText }})),
    setStyle: (Style) => set((store) => ({ recruitmentPostQuery: { ...store.recruitmentPostQuery, Style }})),
    setEra: (Era) => set((store) => ({ recruitmentPostQuery: { ...store.recruitmentPostQuery, Era }})),
    setCycleRequirement: (CycleRequirement) => set((store) => ({ recruitmentPostQuery: { ...store.recruitmentPostQuery, CycleRequirement }})),
    setHost: (Host) => set((store) => ({ recruitmentPostQuery: { ...store.recruitmentPostQuery, Host }})),
    setCurrentCount: (CurrentCount) => set((store) => ({ recruitmentPostQuery: { ...store.recruitmentPostQuery, CurrentCount }})),
    setMembers: (Members) => set((store) => ({ recruitmentPostQuery: { ...store.recruitmentPostQuery, Members }})),
    setRelics: (Relics) => set((store) => ({ recruitmentPostQuery: { ...store.recruitmentPostQuery, Relics }})),
    setRefinement: (Refinements) => set((store) => ({ recruitmentPostQuery: { ...store.recruitmentPostQuery, Refinements }}))
}));

export default useRecruitmentSearchQueryStore;
