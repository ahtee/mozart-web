import React, { Component } from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Info from '../components/Info';
import Navigation from '../components/Navigation';

export default class Home extends Component {

    render() {
      return (
        <div class="Home">
          <Navigation />
          <Header />
          <Cards />
          <Info />
          <Footer />
        </div> // App.js
      );
  }
}