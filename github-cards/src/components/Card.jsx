import React from "react";

import '../styles/Card.css';

class Card extends React.Component {
    render() {
        const profile = this.props;

        return (
            <>
                <div className="Github-profile">
                    <img src={profile.avatar_url} alt="profile"/>
                    <div className="Info">
                            <div className="Name">{profile.name}</div>
                            <div className="Company">{profile.company}</div>
                    </div>
                </div>
            </>
        );
    };
};

export default Card;
