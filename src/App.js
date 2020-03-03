import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./login/login";
import Signup from "./login/signup";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => <Router>
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/signup" component={Signup}/>
  </Switch>
</Router>

export default App;
