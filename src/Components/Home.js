import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title=""
        description="Compartilhe com a gente o seu bichinho no dia a dia e acompanhe também outros animaizinhos :)"
      />
      <Feed />
    </section>
  );
};

export default Home;
