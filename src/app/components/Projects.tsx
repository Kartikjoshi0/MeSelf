import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Text from './Text';
import profile from '../../../public/project/houcine-ncib-B4TjXnI0Y2c-unsplash.jpg'
import profile1 from '../../../public/aws-icon.svg'
import profile2 from '../../../public/nextjs-icon.svg'


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
      
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          };
    },[])
    return <div className="projects-container flex bg-stone-50  w-screen h-[500px] overflow-hidden ">

    <div className='  project-panel  shrink-0 w-screen h-[500px]  flex-col '>
        <div className=' text-6xl pl-[100px] pt-5'>Projects</div>
        <div className="text-panel  text-2xl flex flex-row ">
            <div className='w-1/2 h-[300px] my-10 mx-10 '>
            <ProjectImage  src1={profile} src2={profile1} src3={profile2}/>

            </div>
            <div className='w-1/2  '><Text heading='Leetcode clone' about='this is a webapplication loremfsjkafhdsjghfkdjgkfdjglkfdkgend' tech='rect nodejs aws etc ' /></div>
        </div>
    </div>


    <div className=' project-panel shrink-0 w-screen h-[500px] m-10'>
    <div className="text-panel  text-2xl flex flex-row ">
            <div className='w-1/2 h-[300px] my-10 mx-10  '>
            <ProjectImage  src1={profile} src2={profile1} src3={profile2}/>

            </div>
            <div className='w-1/2 h-[300px]  m-10  '><Text heading='Leetcode clone' about='this is a webapplication loremfsjkafhdsjghfkdjgkfdjglkfdkg' tech='rect nodejs aws etc ' /></div>
        </div>
    </div>
    <div className='project-panel shrink-0 w-screen h-[500px] m-10'>
    <div className="text-panel  text-2xl flex flex-row  ">
    <div className='w-1/2 h-[300px] my-10 mx-10 '>
            <ProjectImage  src1={profile} src2={profile1} src3={profile2}/>

            </div>
            <div className='w-1/2 h-[300px]  m-10  '><Text heading='Leetcode clone' about='this is a webapplication loremfsjkafhdsjghfkdjgkfdjglkfdkg' tech='rect nodejs aws etc ' /></div>
        </div>
    </div>
  </div>
}
export default Projects