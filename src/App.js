import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Home from './layouts/Home';

class App extends Component {

  render() {
    return (
      <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/components" />
      </Switch>
      </div>
    );
  }
}

export default App;
