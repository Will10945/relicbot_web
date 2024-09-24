import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import Refinement from "../entities/Refinement";


const apiClient = new APIClient<Refinement>('/refinements');

const useRefinements = () => {

    return useQuery<FetchResponse<Refinement>>({
    queryKey: ['refinements'],
    queryFn: apiClient.getAll,
    staleTime: ms('1m'), //2 hours
    cacheTime: ms('2h'),
    refetchInterval: ms('1m'),
    keepPreviousData: true
});

}


export default useRefinements;
