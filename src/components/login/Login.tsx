import React from 'react';
import './Login.scss';
import { Button } from '@mui/material';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

const Login = () => {
    const signin = () => {
        signInWithPopup(auth, provider)
            .catch((error) => {
                alert(error.message);
            })
    }
    return (
        <div className='login'>
            <div className='loginLogo'>
                <img src='./discordIcon.png' alt='' />
            </div>
            <Button onClick={signin}>ログイン</Button>
        </div>
    )
}

export default Login
