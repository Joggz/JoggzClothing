import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import HomePage from '../pages/homepage/homepage.component';
import { Switch, Route} from 'react-router-dom';
import Header from '../components/Header/header.component';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up'
import SignIn from '../components/signIn/signIn.component';
import { auth, createUserProfileDocument } from '../Firebase/Firebase.utils';
import  setCurrentUser from '../redux/user/user_action'

class App extends React.Component {
  // constructor(){
  //   super();

  //   this.state = {
  //    currentUser : null,
  //   }

  // }
  

  unsubcribeFromAuth = null;


  componentDidMount(){
    const { setCurrentUser } = this.props;
    console.log(setCurrentUser)

    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
         
        userRef.onSnapshot(snapshot => {
          setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            })
          }, () => {
            console.log(this.state)
          })
        

       setCurrentUser(userAuth)

      }
      
      
      console.log(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  
  render(){
    return (
      <div >
        <Header/>
        {/* USED CDN ON HERE AND IT WORKED, CHECK TOP CORNER OF BROWSER */}
        <Switch>
          <Route exact path='/' component={ HomePage } />
          {/* <Route exact path='/hats' component={ Hatspage } /> */}
          {/* <Route exact path='/Sneakers' component={ Sneakers } /> */}
          <Route exact path='/signin' component={ SignInAndSignUpPage } />
          
          
        </Switch>
      </div>
    );
  }
   
  }
  
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  // setCurrentUser: dispatch({type:'SET_CURRENT_USER'})
})

export default connect(null, mapDispatchToProps)(App);
