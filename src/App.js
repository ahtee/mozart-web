import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from './layouts/Home';

export default class App extends Component {

  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/components" />
      </Switch>
      </div>
    );
  }
}
