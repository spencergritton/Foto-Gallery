import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Shop from './Shop.js';
import Portfolio from './Portfolio.js';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Shop' component={Shop}/>
      <Route path='/Portfolio' component={Portfolio}/>
    </Switch>
  </main>
)

export default Main;
