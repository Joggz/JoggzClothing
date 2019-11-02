import React, { Component } from 'react';

import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/ShopPage/ShopPage';

import { Switch, Route} from 'react-router-dom';

import '../container/App.css';


const Hatspage = ( props) => {
  console.log(props)
  return(
  <div>
    <h1>HATS PAGE</h1>
  </div>
  )
  };

const Sneakers = ( ) => (
  <div>
    <h1>Sneakers PAGE</h1>
  </div>
);
function App() {

    return (
      <div >
        {/* USED CDN ON HERE AND IT WORKED, CHECK TOP CORNER OF BROWSER */}
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/shop' component={ ShopPage } />
          
          
        </Switch>
      </div>
    );
  }
  


export default App;
