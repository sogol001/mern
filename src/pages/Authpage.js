import React from 'react';
import AuthForm from '../Components/Auth/AuthForm/index';

const Authpage = ({isAuthenticated, authHandler}) => {

    return (
        <>
            <AuthForm isAuthenticated={isAuthenticated} authHandler={authHandler}  />
            </>
    );
};
export default Authpage;

