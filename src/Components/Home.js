import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="CutiCuti"
        description="Mostre aqui seu bichinho"
      />
      <Feed />
    </section>
  );
};

export default Home;
