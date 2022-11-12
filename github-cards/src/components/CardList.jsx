import React from 'react';

import Card from './Card';

function CardList(props) {
    return (
        <>
            {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
        </>
    );
};

export default CardList;
