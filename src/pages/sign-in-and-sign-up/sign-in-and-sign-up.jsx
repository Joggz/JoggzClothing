import React from "react";

import SignIn from '../../components/signIn/signIn.component';
import Signup from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.style.scss';

const SignInAndSignUpPage =  () => (
    <div className='sign-in-and-sign-up'>
       <SignIn/>
       <Signup/>
    </div>

)

export default SignInAndSignUpPage