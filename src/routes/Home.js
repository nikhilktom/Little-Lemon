import React from 'react';
import HeaderElement from '../components/HeaderElement';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Footer from '../components/Footer';
import About from '../components/About';

const Home = () => {
  return (
    <>
      <HeaderElement />
      <HeroSection />
      <Specials />
      <About/>
      <Footer />
    </>
  )
}

export default Home
