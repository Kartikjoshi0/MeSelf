'use client'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projects from './components/Projects';
import Text from './components/Text';
import Intro from './components/Intro';
import Tech from './components/Tech';
import GetTouch from './components/GetTouch';
gsap.registerPlugin(ScrollTrigger);


const Home = () => {
  useEffect(() => {
    const panels = gsap.utils.toArray('.pannel');
    panels.forEach((panel , i) => {
      ScrollTrigger.create({
        trigger: '.panel',
        start: 'top top',
        pin: true,
        pinSpacing: false,
        scrub:true
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='overflow-hidden'>
    <div className=' relative z-2 overflow-hidden'>
      <div className='pannel  w-screen h-[600px] bg-black'><Intro /></div>
      <div  className='pannel  w-screen h-[500px] bg-stone-50 '><Tech /></div>
    </div>
    <div className='relative z-50'>
      <Projects />
    </div>
    <div  className='pannel  w-screen h-[500px] bg-gray-200 '><GetTouch /></div>

    </div>
    
  );
};

export default Home;
