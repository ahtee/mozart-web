import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default class Home extends Component {
  render() {

    return (
      <div className="Home">
        <Nav />
        <Jumbotron>
          <h1 className="display-3"><i className="fab fa-megaport"></i> Mozart</h1>
          <p className="lead">Container orchestration in Go</p>
          <Button outline color="success">Get Started</Button>
        </Jumbotron>
        <Cards />
        <Footer />
      </div> // App.js
    );
  }
}