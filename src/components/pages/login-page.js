import React from "react";
import './login-page.css';
import { Redirect } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {
    console.log(isLoggedIn)

    if (isLoggedIn) {
        return <Redirect to='/' />;
    }

    return (
        <div className='jumbotron card'>
            <p>Login to see the secret page1</p>
            <button
                className='btn btn-primary login-btn'
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    );
};

export default LoginPage;