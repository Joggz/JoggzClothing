import React, { Component } from 'react';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../customButton/customButton.component';

import { auth, createUserProfileDocument } from '../../Firebase/Firebase.utils';

import './sign-up.style.scss';

class Signup extends Component {
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) =>  {
         e.preventDefault();
         const { displayName, email, password, confirmPassword} = this.state;

         if(password !== confirmPassword) {
             alert('Password mismatch')
             return;
         }

         try {
         const { user } = await auth.createUserWithEmailAndPassword(email, password)
             await createUserProfileDocument(user, {displayName});

             this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
             })
             console.log(this.state)
         } catch (error) {
             console.error(error)
         }

    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h3 className="title">I do not have an account</h3>
                <span>Sign up with  email and password</span>
                    <form onSubmit={this.handleSubmit}>
                <FormInput 
                 type='text'
                 name='displayName'
                 value={displayName}
                 label='DisplayName'
                 onChange={this.handleChange}
                />
                <FormInput 
                 type='email'
                 name='email'
                 value={email}
                 label='Email'
                 onChange={this.handleChange}
                />
                <FormInput 
                 type='password'
                 name='password'
                 value={password}
                 label='Password'
                 onChange={this.handleChange}
                />
                <FormInput 
                 type='password'
                 name='confirmPassword'
                 value={confirmPassword}
                 label='confirmPassword'
                 onChange={this.handleChange}
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
              </form>  
            </div>
        )
    }
}


export default Signup