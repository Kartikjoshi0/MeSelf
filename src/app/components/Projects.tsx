import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Text from './Text';
import profile from '../../../public/project/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg'

import ProjectImage from './ProjectImage';
gsap.registerPlugin(ScrollTrigger);

const Projects=()=>{
    useEffect(()=>{
        const panels = gsap.utils.toArray('.project-panel');
        gsap.to(panels,{
            xPercent:-100*(panels.length-1),
            ease:'none',
            scrollTrigger:{
                trigger:'.projects-container',
                pin:true,
                start:'center center',
                scrub:true,
                // snap:1/(panels.length-1),
                end: () => `+=${(panels[0]as HTMLElement).offsetWidth * panels.length}`
            }
        })
        // gsap.to('.panel',{
        //     x:100,
        //     y:-100,
        //     ease:'none',
        //     duration:5,
        //     scrollTrigger:{
        //         trigger:'.text-panel',
        //         pin:true,
        //         start:'top bottom ',
        //         end:'top 80%',
        //         scrub: 1,
        //     }
        // })
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          };
    },[])
    return <div className="projects-container flex  w-screen h-[500px] overflow-hidden">

    <div className='  project-panel  shrink-0 w-screen h-[500px] bg-stone flex-col '>
        <div className=' text-6xl pl-[100px] pt-5'>Projects</div>
        <div className="text-panel  text-2xl flex flex-row ">
            <div className=' w-[200px] h-[200px] my-[30px] mx-[80px] '>
                <ProjectImage  src={profile}/>
            </div>
            <div className=' w-[200px] h-[200px]'><Text /></div>
        </div>
    </div>


    <div className=' project-panel shrink-0 w-screen h-[500px] bg-white'>
    <div className="text-panel w-fit text-2xl flex flex-row ">
    <div className=' w-[200px] h-[200px] my-[30px] mx-[80px] border border-3 border-gray-800 border-solid'>
                <ProjectImage  src={profile}/>
            </div>
            <div className=' w-[200px] h-[200px]'><Text /></div>
        </div>
    </div>
    <div className='project-panel shrink-0 w-screen h-[500px] bg-gray-300'>
    <div className="text-panel w-fit text-2xl    ">
            <div className="panel ">Textdcfdsf</div>
        </div>
    </div>
  </div>
}
export default Projects