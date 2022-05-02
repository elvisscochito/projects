import React from "react";

import ImageButton from '../components/ImageButton';

const Overview = () => {
    return (
        <>
            <ImageButton pictureName={"profile"} caption={"Profile"} />
            <ImageButton pictureName={"leaderboard"} caption={"Leaderboard"} />
            <ImageButton pictureName={"help"} caption={"Help"} />
        </>
    );
};

export default Overview;
