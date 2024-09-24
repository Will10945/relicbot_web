import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import Member from "../entities/Member";


const apiClient = new APIClient<Member>('/members');

const useMember = (id: number) => useQuery({
    queryKey: ['members', id],
    queryFn: () => apiClient.get(id),
    staleTime: ms('24h'), //24 hours
    keepPreviousData: true
});


export default useMember;
