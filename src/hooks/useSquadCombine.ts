import { useEffect, useState } from "react";
import useMembers from "./useMembers";
import useRecruitmentPosts from "./useRecruitmentPosts";
import useRefinements from "./useRefinements";
import useRelics from "./useRelics";
import RecruitmentPost from "../entities/RecruitmentPost";
import formatRecruitmentPost from "../services/formatRecruitmentPost";
import Member from "../entities/Member";
import Relic from "../entities/Relic";
import Refinement from "../entities/Refinement";


const useSquadCombine = () => {

    const { data: members_data, isLoading: members_isLoading, error: members_error} = useMembers();
    const { data: relics_data, isLoading: relics_isLoading, error: relics_error} = useRelics();
    const { data: refinements_data, isLoading: refinements_isLoading, error: refinements_error} = useRefinements();
    const { data: squads_data, isLoading: squads_isLoading, error: squads_error } = useRecruitmentPosts();

    const [squads, setSquads] = useState<RecruitmentPost[] | undefined>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {

        if (!squads_isLoading && !members_isLoading && !relics_isLoading && !refinements_isLoading) {
            if (squads_error || members_error || relics_error || refinements_error) {
                setError(squads_error || members_error || relics_error || refinements_error);
            } else {
                
                const _squads = squads_data?.results.map(s => formatRecruitmentPost(
                    s,
                    members_data?.results || [] as Member[],
                    relics_data?.results || [] as Relic[],
                    refinements_data?.results || [] as Refinement[]
                )) || [] as RecruitmentPost[];

                setSquads(_squads);
            }
            setIsLoading(false);
        }

    }, [members_isLoading, relics_isLoading, refinements_isLoading, 
        members_error, relics_error, refinements_error, 
        members_data, relics_data, refinements_data]);

    return { squads, isLoading, error };

}

export default useSquadCombine;