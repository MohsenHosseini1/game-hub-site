import usePost from "../hooks/usePost.ts";
import {useState} from "react";

const PostDetail = () => {

    const [postId,setPostId] = useState("")
    const {data,isPending,isError} = usePost(postId);
    return (
        <div>
            <select onChange={(event) => setPostId(event.target.value)}>
                <option value="">
                    choose your post
                </option>
                <option value="1">
                    post1
                </option>
                <option value="2">
                    post2
                </option>
                <option value="3">
                    post3
                </option>

            </select>
            <div>
                <h2>
                    {data?.title}
                </h2>
                <p>
                    {data?.body}
                </p>
            </div>
        </div>
    )
}
export default PostDetail;