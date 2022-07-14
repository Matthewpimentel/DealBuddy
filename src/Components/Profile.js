import LoggedInNav from "./LoggedInNav";
import { useEffect } from "react";
const Profile = () => {
        let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    return(
        <div>
            <LoggedInNav/>
            <h1>{userDetails[0]}'s Profile</h1>
        </div>
    )
}

export default Profile;