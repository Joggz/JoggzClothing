import React, { Component } from 'react';

import './App.css';
import HomePage from '../pages/homepage/homepage.component';
import { Switch, Route} from 'react-router-dom';
import Header from '../components/Header/header.component';
// import Directory from '../components/directory/directory.component';


function App() {

  const Hatspage = () => (
    <div>
      HATPAGE
    </div>
  )

  const Sneakers = () => (
    <div>
      Sneakers
    </div>
  )

    return (
      <div >
        <Header />
        {/* USED CDN ON HERE AND IT WORKED, CHECK TOP CORNER OF BROWSER */}
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/hats' component={ Hatspage } />
          <Route exact path='/Sneakers' component={ Sneakers } />
          
        </Switch>
      </div>
    );
  }
  


export default App;
