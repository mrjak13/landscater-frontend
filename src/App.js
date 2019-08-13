import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './Logo'
import Welcome from './Welcome'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
    	<Logo />
      <Navbar />
      <Switch>
      	<Route exact path='/home' component={Welcome} />
      	<Route exact path='/about' component={About} />
      	<Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
