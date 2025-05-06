import {useQuery} from "@tanstack/react-query";
import axios from "axios";


interface Post {
    id: number;
    title: string;
    body: string;
}

const usePost = (postId:string) => (
    useQuery({
        queryKey: ["posts",postId],
        queryFn: () => axios.get<Post>("https://jsonplaceholder.typicode.com/posts/" + postId).then(res => res.data),
    }
)
);
export default usePost;