import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Commissions from './components/Commissions';

function App() {
  return (
    <Layout>
      <Hero />
      <Gallery />
            <Commissions />
          </Layout>
  );
}

export default App;