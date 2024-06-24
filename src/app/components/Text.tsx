'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
interface textProp{
    heading: string,
    about: string,
    tech: any
}

const Text = ({heading , about , tech}: textProp) => {
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(container.current!.querySelectorAll('.text'), {
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

        return () => ctx.revert(); 
    }, []);

    return (
        <div ref={container} className="h-[300px] text-container shadow-2xl shadow-stone-100 bg-white rounded-md  flex flex-col  gap-2  p-10 ">
            <div className="text text-xl sm:text-4xl">{heading}</div>
            <div className="text text-sm sm:text-lg opacity-75">{about}</div>
            <div className="text opacity-0 sm:opacity-100 sm:text-sm flex gap-5">{tech}</div>            
        </div>
    );
};

export default Text;
