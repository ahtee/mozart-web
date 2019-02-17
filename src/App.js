import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import './App.css';
import Navigation from './components/Navigation';
import Home from './layouts/Home';

class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <Home />
      </div>
    );
  }
}

export default App;
