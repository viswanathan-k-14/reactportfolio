import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <Timeline />
      <Skills />
    </div>
  );
};

export default HomeScreen;
