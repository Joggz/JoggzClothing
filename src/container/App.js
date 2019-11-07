import React, { Component } from 'react';

import './App.css';
import HomePage from '../pages/homepage/homepage.component';
import { Switch, Route} from 'react-router-dom';
import Header from '../components/Header/header.component';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up'
import SignIn from '../components/signIn/signIn.component';
import { auth } from '../Firebase/Firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
     currentUser : null,
    }

  }

  unsubcribeFromAuth = null;


  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  
  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        {/* USED CDN ON HERE AND IT WORKED, CHECK TOP CORNER OF BROWSER */}
        <Switch>
          <Route exact path='/' component={ HomePage } />
          {/* <Route exact path='/hats' component={ Hatspage } /> */}
          {/* <Route exact path='/Sneakers' component={ Sneakers } /> */}
          <Route exact path='/signin' component={ SignIn } />
          
          
        </Switch>
      </div>
    );
  }
   
  }
  


export default App;
