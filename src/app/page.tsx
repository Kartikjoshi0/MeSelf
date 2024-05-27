'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projects from './components/Projects';
import Text from './components/Text';
import Intro from './components/Intro';
import Tech from './components/Tech';
gsap.registerPlugin(ScrollTrigger);


const Home = () => {
  useEffect(() => {
    const panels = gsap.utils.toArray('.pannel');
    panels.forEach((panel , i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        scrub:true,
        // snap: {
        //   snapTo: 1,
        //   duration: { min: 0.2, max: 0.5 },
        //   delay: 0.1, 
        // }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
    <div className=' relative z-2 overflow-hidden'>
      <div className='pannel  w-screen h-[500px] bg-black'><Intro /></div>
      <div  className='pannel  w-screen h-[500px] bg-stone-50 '><Tech /></div>
    </div>
    <div className='relative z-50'>
      <Projects />
    </div>
    <div  className='pannel  w-screen h-[500px] bg-gray-200 '></div>

    </>
    
  );
};

export default Home;
