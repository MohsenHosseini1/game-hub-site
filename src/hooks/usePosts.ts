import {keepPreviousData, useInfiniteQuery, useQuery} from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

const usePosts  = (pageSize:string) => (
    useInfiniteQuery({
        querykey:["post"],
        initialPageParam:1,
        queryFn:({pageParam}) => axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _start: (pageParam - 1) * pageSize,
                _limit: pageSize
            }
        }).then(res => res.data),
        getNextPageParam:(lastPage,allPages) => {


            return lastPage.length > 0 ? allPages.length + 1 : undefined
        }


    })
);

export default usePosts;
// useQuery({
//         queryKey: ["posts",page],
//         queryFn: () => axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts?", {
//             params: {
//                 _start: (page - 1) * pageSize ,
//                 _limit: pageSize
//             }
//
//         }).then(res => res.data),
//         placeholderData:keepPreviousData
//     }
// )