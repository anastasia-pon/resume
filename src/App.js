import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import Additional from './components/Additional/Additional';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Card />
        <Work />
        <Education />
        <Additional />
      </main>
      <Footer />
    </div>
  );
}

export default App;
