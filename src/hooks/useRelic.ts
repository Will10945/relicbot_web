import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import Relic from "../entities/Relic";


const apiClient = new APIClient<Relic>('/relics');

const useRelic = (id: number) => useQuery({
    queryKey: ['relics', id],
    queryFn: () => apiClient.get(id),
    staleTime: ms('24h'), //24 hours
    keepPreviousData: true
});


export default useRelic;
