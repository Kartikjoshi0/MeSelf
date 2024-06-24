import {  useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

// Images
import rectImg from '../../../public/react-js-icon.svg';
import jsImg from '../../../public/javascript-programming-language-icon.svg';
import tsImg from '../../../public/typescript-programming-language-icon.svg';
import awsImg from '../../../public/aws-icon.svg';
import mongoImg from '../../../public/mongodb-icon.svg';
import nextImg from '../../../public/nextjs-icon.svg';
import nodeImg from '../../../public/node-js-icon.svg';
import postgresImg from '../../../public/postgresql-icon.svg';
import reduxImg from '../../../public/redux-icon.svg';
import gitImg from '../../../public/github-icon.svg';
import dockerImg from '../../../public/docker-icon.svg';

import tailwindImg from '../../../public/tailwind-css-icon.svg';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Draggable);

const Tech = () => {
    const mainContainerRef=useRef(null);
    const containerRef = useRef(null);
    useGSAP(()=>{
        gsap.from('.icon',{
            opacity:0,
            width:'40%',
            height:'40%',
            
           duration:1,
           ease:'power2.inOut',
           stagger:{
            each:0.2
           },
           scrollTrigger:{
            trigger:mainContainerRef.current,
            start:'top center',
            end:'top 40% ',
            toggleActions: 'play none none reverse',
            
            
           }
        })
    },{scope:containerRef})

   

    return (
        <div  ref={mainContainerRef} className=" w-screen h-screen ">
            <div className="text-2xl  sm:text-6xl pl-[150px] sm:pl-[400px]">Tech stack</div>
            
                <div ref={containerRef} className="grid grid-cols-3  sm:flex m-5 mr-10 p-10 shadow-2xl shadow-stone-100 gap-3 justify-around pt-10  overflow-hidden opacity-1 bg-white  rounded-md ">
                    <Image className='icon ' src={rectImg} alt={'React'} width={100} height={100} />
                    <Image className='icon ' src={jsImg} alt={'JavaScript'} width={80} height={80} />
                    <Image className='icon ' src={tsImg} alt={'TypeScript'} width={80} height={80} />
                    <Image className='icon' src={awsImg} alt={'AWS'} width={80} height={80} />
                    <Image className='icon' src={mongoImg} alt={'MongoDB'} width={50} height={50} />
                    <Image className='icon' src={nextImg} alt={'Next.js'} width={80} height={80} />
                    <Image className='icon' src={nodeImg} alt={'Node.js'} width={80} height={80} />
                    <Image className='icon' src={postgresImg} alt={'PostgreSQL'} width={80} height={80} />
                    <Image className='icon' src={tailwindImg} alt={'Tailwind CSS'} width={80} height={80} />
                    <Image className='icon' src={dockerImg} alt={'Docker'} width={100} height={100} />
                    <Image className='icon' src={gitImg} alt={'Github '} width={80} height={80} />
                </div>
            </div>
    );
};

export default Tech;
