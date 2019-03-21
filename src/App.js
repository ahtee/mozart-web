import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './layouts/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/components" />
      </Switch>
    </div>
  );
}

export default App;
