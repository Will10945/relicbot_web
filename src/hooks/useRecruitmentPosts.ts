import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import RecruitmentImport from "../entities/RecruitmentImport";
import ms from "ms";


const apiClient = new APIClient<RecruitmentImport>('/squads/active');

const useRecruitmentPosts = () => {
    
    return useQuery<FetchResponse<RecruitmentImport>>({
        queryKey: ['activeRecruitmentPosts'],
        queryFn: apiClient.getAll,
        staleTime: ms('1m'),
        cacheTime: ms('1m'),
        refetchInterval: ms('1m'),
        keepPreviousData: true
    });
};

export default useRecruitmentPosts;
