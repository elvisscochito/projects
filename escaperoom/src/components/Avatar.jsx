import React from "react";

import '../styles/Avatar.css';

const Avatar = ({id, username}) => {
    const src = `https://randomuser.me/api/portraits/lego/${id}.jpg`

    return (
        <>
            <figure>
                <img src={src} />
                <figcaption>Username: <strong>{username}</strong></figcaption>
            </figure>
        </>
    );
};

export default Avatar;
