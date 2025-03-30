import {useQuery} from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

const usePost  = () => (
    useQuery({
            queryKey: ["posts"],
            queryFn: () => axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts").then(res => res.data)
        }
    )
);

export default usePost;