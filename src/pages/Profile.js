import React from 'react';
import Profile from '../Components/Profile/ProfileInfo';

const profile = ({isAuthenticated, logoutHandler}) => {
    return (
        <>
            <Profile isAuthenticated={isAuthenticated} logoutHandler={logoutHandler} />
        </>
    );
};
export default profile;
