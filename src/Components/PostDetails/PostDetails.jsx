import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id , title , body} = post;
    return (
        <div>
            <h3>Post Details About: </h3>
            <h3>Post Id: {id}</h3>
            <p>Post Title: {title}</p>
            <p>{body}</p>

           

        </div>
    );
};

export default PostDetails;