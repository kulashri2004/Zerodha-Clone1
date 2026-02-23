import React from 'react';
import Hero from './Hero';
import Team from './Team';
import { useEffect } from 'react';

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
    return ( 
        <>
         
          <Hero />
          <Team />
         
        </>
     );
}

export default AboutPage;