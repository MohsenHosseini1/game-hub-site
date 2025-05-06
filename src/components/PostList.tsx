import usePosts from "../hooks/usePosts.ts";
// import {useState} from "react";

const PostList = () => {
    const pageSize = 10;
    // const [page, setPage] = useState(1);

    const {data,isPending,isError,fetchNextPage} = usePosts(pageSize)
    return (
        <ul>
            {data?.pages.map(page => (
                page.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))
            ))

            }
            <div>
                <button onClick={() => {
                    fetchNextPage()
                }}>
                    Next Page
                </button>
            </div>
        </ul>
    )
}
export default PostList