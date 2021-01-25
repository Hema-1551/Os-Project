import React from 'react';
import {Router} from '@reach/router';
import Home from './homepage'
import SignIn from './SignIn'


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
          
        </Router>
    );
}

export default Application;