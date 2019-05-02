import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './layouts/Home';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/components" />
      </Switch>
    </>
  );
}

export default App;
