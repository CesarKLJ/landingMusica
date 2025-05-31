import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedMusic } from './components/FeaturedMusic';
import { Artists } from './components/Artists';
import { Events } from './components/Events';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { MusicPlayerProvider } from './context/MusicPlayerContext';

function App() {
  return (
    <MusicPlayerProvider>
      <div className="bg-gradient-to-b from-dark-800 to-dark-900 text-white min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <FeaturedMusic />
          <Artists />
          <Events />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;