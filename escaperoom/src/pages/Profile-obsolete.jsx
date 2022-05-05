import React from "react";

import Avatar from "../components/Avatar";
import Text from "../components/Text";
import '../styles/Profile.css';

const Profile = () => {
    return (
        <div className="Profile">
            <Text textCaption={"Profile"} />
            <Avatar id={2} username={"@username"} />
        </div>
    );
};

export default Profile;
