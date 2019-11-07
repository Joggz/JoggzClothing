import React from "react";

import './signIn.style.scss';
import { signInWithGoogle } from '../../Firebase/Firebase.utils';
import FormInput from '../FormInput/FormInput.component';
import CustomButton from "../customButton/customButton.component";

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = ( e ) => {
        e.preventDefault();

        this.setState({
            email: '', password: ''
        })
    }
    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className='sign-in'>
              <h2>I already have an account</h2>
              <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    required
                    label='email'
                />
                
                <FormInput 
                    name='password'
                    type='password'
                    handleChange={this.handleChange}
                    value={this.state.password}
                    required
                    label='password'
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>
             
                </form>
                

             </div>
        )
    }
}


export default SignIn;