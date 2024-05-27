'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
interface textProp{
    heading: string,
    about: string,
    tech: string
}

const Text = ({heading , about , tech}: textProp) => {
    const container = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(container.current.querySelectorAll('.text'), {
                ease: 'power4',
                y: 800,
                x: -300,
                duration: 1.5,
                stagger: {
                    each: 0.2
                },
                scrollTrigger: {
                    trigger: container.current,
                    start:'top 50%',
                    end: 'top 40%',
                    toggleActions: 'play none none reverse'
                }
            });
        }, container);

        return () => ctx.revert(); // Clean up on unmount
    }, []);

    return (
        <div ref={container} className="text-container w-[600px] h-[350px] pr-[100px] shadow-2xl shadow-stone-100 bg-white rounded-md  flex flex-col  gap-2 text-2xl pl-10 w-screen h-screen">
            <div className="text text-4xl">{heading}</div>
            <div className="text">{about}</div>
            <div className="text">{tech}</div>            
        </div>
    );
};

export default Text;
