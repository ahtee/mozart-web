import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Info from '../components/Info';

function Home() {
  return (
    <div>
      <Header title="Mozart" subTitle="Container orchestration in Go" />
      <Cards />
      <Info />
    </div>
  );
}

export default Home;
