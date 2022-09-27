import React from 'react';
import TextHeader from '../components/TextHeader';
import DisplayText from '../components/DisplayText';
import '../styles/Profile.css';
import user from '../data/user';

function Profile() {
    return (
        <>
            <TextHeader text="Profile" />
            <div className="Profile">
                <DisplayText text={user.name} />
                <DisplayText text={user.email} />
                {/* //TODO: Feature 'Update profile' */}
            </div>
        </>
    );
}

export default Profile;
