import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedWorks from '../components/FeaturedWorks';
import CinematicWorks from '../components/CinematicWorks';
import CreativeAds from '../components/CreativeAds';
import Skills from '../components/Skills';
import Feedbacks from '../components/Feedbacks';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <About />
      <FeaturedWorks />
      <CinematicWorks />
      <CreativeAds />
      <Skills />
      <Feedbacks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;