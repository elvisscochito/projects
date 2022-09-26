import React from 'react';
import TextHeader from '../components/TextHeader';
import DisplayText from '../components/DisplayText';
import '../styles/Profile.css';

function Profile() {
    return (
        <>
            <TextHeader text="Profile" />
            <div className="Profile">
                <DisplayText text="Nombre completo" />
                <DisplayText text="Correo electrónico" />
                {/* //TODO: Feature 'Update profile' */}
            </div>
        </>
    );
}

export default Profile;
