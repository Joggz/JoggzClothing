import React, { Component } from 'react';

import HomePage from '../pages/homepage/homepage.component';
import { Switch, Route} from 'react-router-dom';
// import Directory from '../components/directory/directory.component';



const Hatspage = ( ) => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

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
          <Route exact path='/hats' component={ Hatspage } />
          <Route exact path='/Sneakers' component={ Sneakers } />
          
        </Switch>
      </div>
    );
  }
  


export default App;
