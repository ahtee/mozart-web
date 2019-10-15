import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './layouts/Home';
import Components from './layouts/Components';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import NotFound from './layouts/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation title="Mozart" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/components" component={Components} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
