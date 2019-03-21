import React from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Info from '../components/Info';
import Navigation from '../components/Navigation';

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <Header />
      <Cards />
      <Info />
      <Footer />
    </div>
  );
}

export default Home;
