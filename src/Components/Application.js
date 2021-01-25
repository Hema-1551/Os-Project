import React from 'react';
import {Router} from '@reach/router';
import Home from './homepage'
import SignIn from './SignIn'
import SignUp from './SignUp'
import PasswordReset from './PasswordReset'


function Application(){

    const user = null;

    return(
        <Router>
         <Home path="/" />
         {/* 
         <SignUp path="signUp" />
         <PasswordReset path = "passwordReset" />
         */} 
         <SignIn path="SignIn" />
         <SignUp path="SignUp" />
         <PasswordReset path ="/passwordReset" />
        </Router>
    );
}

export default Application;