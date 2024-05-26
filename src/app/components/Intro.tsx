
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";

const Intro=()=>{
    const container=useRef();
    const name=useRef()
    useGSAP(()=>{
        gsap.to(container.current,{
            width: '100%', 
            backgroundColor: 'white',
            height:'100%',
            duration: 2,
            ease: 'power1.inOut',

        })
        gsap.to('.Name-text',{
            y:-300,
            color:'black',
            opacity:1,
            duration:1.5,
            ease:'power4',
            delay:2,
            stagger:{
                each:1
            }
            
        }
        )
        gsap.to('.icons',{
            x:-100,
            opacity:1,
            duration:1.5,
            ease:'power4',
            delay:2
        })
        
    })


    return (
       <div ref={container} className="w-screen h-screen flex flex-col justify-end  ">
        <div className='icons opacity-0 flex pl-[900px]  text-4xl gap-3'>
            <div><BsGithub /></div>
            <div><CiLinkedin /></div>
            <div><BsTwitterX /></div>
           </div>
           <div ref={name} className='Name-text text-9xl  opacity-0 pl-5 '>Kartik Joshi</div> 
           <div className='Name-text text-4xl opacity-0 pl-[600px]'>full stack devloper</div>
           
        </div>
        
     
    )
}

export default Intro