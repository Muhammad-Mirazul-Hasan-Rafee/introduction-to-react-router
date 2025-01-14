import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const navigate= useNavigate();
    const {id , title , body} = post;
    console.log(postId);
    const handleGoBack= ()=>{

        navigate(-1);

    };
    return (
        <div>
            <h3>Post Details About: </h3>
            <h3>Post Id: {id}</h3>
            <p>Post Title: {title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>

           

        </div>
    );
};

export default PostDetails;