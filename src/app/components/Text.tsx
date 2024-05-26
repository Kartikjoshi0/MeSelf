'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
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
        <div ref={container} className="text-container flex flex-col pt-5 gap-2 text-2xl pl-10 w-screen h-screen border-2 border-solid border-black">
            <div className="text">HI there its</div>
            <div className="text">good to see</div>
            <div className="text">u here</div>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat distinctio ea dignissimos laudantium tenetur adipisci vitae error culpa quas. Alias aliquid atque consequatur provident ab qui ipsa illum aperiam. Magnam.</div>

            
        </div>
    );
};

export default Text;
