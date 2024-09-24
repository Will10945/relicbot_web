import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import Relic from "../entities/Relic";


const apiClient = new APIClient<Relic>('/relics');

const useRelics = () => {

    return useQuery<FetchResponse<Relic>>({
    queryKey: ['relics'],
    queryFn: apiClient.getAll,
    staleTime: ms('2h'), //2 hours
    cacheTime: ms('2h'),
    refetchInterval: ms('1m'),
    keepPreviousData: true
});
}


export default useRelics;
