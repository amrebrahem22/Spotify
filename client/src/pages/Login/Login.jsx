import React from 'react'
import darkLogo from '../../images/dark-logo.jpg'
import { accessUrl } from '../../spotify'
import './login.css';

const Login = () => {
    return (
        <div className="login">
            <img src={darkLogo} alt="Dark" />

            <a href={accessUrl}>Login to Spotify</a>
        </div>
    )
}

export default Login
