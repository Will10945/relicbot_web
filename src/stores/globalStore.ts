import  { create } from "zustand";
import useRelics from "../hooks/useRelics";
import useRefinements from "../hooks/useRefinements";
import useMembers from "../hooks/useMembers";

interface GlobalTableStore {
    relics?: {
        [relicId: number]: string
    };
    refinements?: {
        [refinementId: number]: string;
    };
    members?: {
        [memberId: number]: string;
    };
    setRelicNames: (relicId: number) => void;
    setRefinements: (refinementId: number) => void;
    setMemberNames: (memberId: number) => void;
}

const useGlobalTableStore = create<GlobalTableStore>(set => ({
    relics: {},
    refinements: {},
    members: {},
    setRelicNames: () => {
        const { data } = useRelics();
        const rels: {[key: number]: string} = {};
        data?.results.forEach(r => rels[r.ID] = r.Name)
        return set((store) => ({ ...store, relics: rels }))
    },
    setRefinements: () => {
        const { data } = useRefinements();
        const refs: {[key: number]: string} = {};
        data?.results.forEach(r => refs[r.ID] = r.Name)
        return set((store) => ({ ...store, refinements: refs }))
    },
    setMemberNames: () => {
        const { data } = useMembers();
        const mems: {[key: number]: string} = {};
        data?.results.forEach(r => mems[r.MemberID] = r.MemberName)
        return set((store) => ({ ...store, members: mems }))
    },
}))

export default useGlobalTableStore;