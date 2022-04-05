import React from "react";

import Avatar from "../components/Avatar";
import Text from "../components/Text";

const Profile = ({profileName}) => {
    return (
        <>
            <Text textCaption={profileName} />

            <Text textCaption={"Profile"} />
            <Avatar id={2} username={"@username"} />
        </>
    );
};

export default Profile;
