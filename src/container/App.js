import React, { Component } from 'react';
import { connect } from 'react-redux';


import './App.css';
import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/ShopPage/ShopPage'
import Header from '../components/Header/header.component';
import Checkout from '../pages/checkout/checkout.component';
import { Switch, Route, Redirect} from 'react-router-dom';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selector';
import { auth, createUserProfileDocument } from '../Firebase/Firebase.utils';
import  setCurrentUser from '../redux/user/user_action'

class App extends React.Component {

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
    // const {currentUser} = this.props.currentUser
    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/signin'  render= {() => 
            this.props.currentUser ? ( <Redirect to='/' />) : ( <SignInAndSignUpPage />)}
           />
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={Checkout}/>
          
        </Switch>
      </div>
    );
  }
   
  }
  
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  // setCurrentUser: dispatch({type:'SET_CURRENT_USER'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
