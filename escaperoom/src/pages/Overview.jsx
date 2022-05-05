import React from "react";

import ImageButton from '../components/ImageButton';
import '../styles/Overview.css';

const Overview = () => {
    return (
        <div className="Overview">
            <ImageButton pictureName={"profile"} caption={"PROFILE"} />
            <ImageButton pictureName={"scoreboard"} caption={"LEADERBOARD"} />
            <ImageButton pictureName={"help"} caption={"HELP"} />
        </div>
    );
};

export default Overview;
