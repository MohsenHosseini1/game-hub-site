import usePost from "../usePost.ts";

const PostList = () => {
    const {data,isPending,isError} = usePost()
    return (
        <ul>
            {data?.map(post => (
                <li key={post.id}>
                    {post.title}
                </li>
                ))}
        </ul>
    )
}
export default PostList