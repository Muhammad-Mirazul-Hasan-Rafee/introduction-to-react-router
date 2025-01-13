import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const{name , website} = user;
    return (
        <div>
            <h2>Details about users: {name}</h2>
            <p>{name}'s Website: {website}</p>
        </div>
    );
};

export default UserDetails;