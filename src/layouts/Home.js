import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Info from '../components/Info';

export default class Home extends Component {

    render() {

    return (
      <div>
        <Jumbotron>
          <h1 className="display-3"><i className="fab fa-megaport"></i> Mozart</h1>
          <p className="lead">Container orchestration in Go</p>
          <Button outline color="success">Get Started</Button>
        </Jumbotron>
        <Cards />
        <Info />
        <Footer />
      </div> // App.js
    );
  }
}