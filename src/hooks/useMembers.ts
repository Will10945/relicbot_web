import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import Member from "../entities/Member";


const apiClient = new APIClient<Member>('/members');

const useMembers = () => {
//     const [data, setData] = useState<any>(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
    
//     useEffect(() => {
//         const fetchData = async () => {
//             console.log('Grabbing members')
//             try{
//                 const res = useQuery<FetchResponse<Member>>({
//                     queryKey: ['members'],
//                     queryFn: apiClient.getAll,
//                     staleTime: ms('2h'), //2 hours
//                     cacheTime: ms('2h'),
//                     refetchInterval: ms('1m'),
//                     keepPreviousData: true
//                 });
//                 setData(res.data?.results);
//             } catch (err: any) {
//                 setError(err.message);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     console.info("Grabbed members", data);
//     return { data, isLoading, error };

    return useQuery<FetchResponse<Member>>({
        queryKey: ['members'],
        queryFn: apiClient.getAll,
        staleTime: ms('2h'), //2 hours
        cacheTime: ms('2h'),
        refetchInterval: ms('1m'),
        keepPreviousData: true
    });
};


export default useMembers;
