import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Text from './Text';
import Image from 'next/image';


import nextImg from '../../../public/nextjs-icon.svg';
import nodeImg from '../../../public/node-js-icon.svg';
import postgresImg from '../../../public/postgresql-icon.svg';
import tsImg from '../../../public/typescript-programming-language-icon.svg';
import jsImg from '../../../public/javascript-programming-language-icon.svg';
import rectImg from '../../../public/react-js-icon.svg';


import blogImage1 from '../../../public/project/blog1.png'
import blogImage2 from '../../../public/project/blog2.png'
import blogImage3 from '../../../public/project/blog3.png'
import myDraw1 from '../../../public/project/myDraw1.png'
import myDraw2 from '../../../public/project/myDraw2.png'
import myDraw3 from '../../../public/project/myDraw3.png'
import myPay1 from '../../../public/project/paytm1.png'
import myPay2 from '../../../public/project/paytm2.png'
import myPay3 from '../../../public/project/paytm3.png'
import eliteCode1 from '../../../public/project/code1.png'
import eliteCode2 from '../../../public/project/code2.png'
import eliteCode3 from '../../../public/project/code3.png'






import gitImg from '../../../public/github-icon.svg';
import ProjectImage from './ProjectImage';
import Link from 'next/link';

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
                end: () => `+=${(panels[0]as HTMLElement).offsetWidth * panels.length}`
            }
        })
      
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          };
    },[])
    return <div className="projects-container flex bg-stone-50  w-screen h-[500px] overflow-hidden ">

    <div className='project-panel  shrink-0 w-screen h-[500px]  flex-col  '>
        <div className='text-2xl sm:text-6xl pl-[100px] pt-[30px] '>Projects</div>
        <div className="text-panel  text-2xl  flex flex-row ">
            <div className='w-full sm:w-1/2 h-auto sm:h-[300px] my-10 mx-10 '>
            <ProjectImage  src1={eliteCode1} src2={eliteCode2} src3={eliteCode3} link={'https://github.com/Kartikjoshi0/EliteCode'}/>

            </div>
           
            <div className='w-full  sm:w-1/2 '>
                <Text heading='ELite-Code' about='LeetCode-like application featuring data structures and algorithms (DSA) problems, with support for coding in over 30 programming languages.' 
                tech={<><Image className='icon' src={nextImg} alt={'Next.js'} width={50} height={50} />
 <Image className='icon' src={nodeImg} alt={'Node.js'} width={50} height={50} />
 <Image className='icon' src={postgresImg} alt={'PostgreSQL'} width={50} height={50} />
 <Image className='icon ' src={jsImg} alt={'JavaScript'} width={50} height={50} />
 <Image className='icon ' src={tsImg} alt={'TypeScript'} width={50} height={50} />
 <Image className='icon ' src={rectImg} alt={'React'} width={50} height={50} /></>} />
            </div>
        </div>
    </div>


    <div className=' project-panel shrink-0 w-screen h-[500px] m-10'>
    <div className="text-panel  text-2xl flex flex-row ">
            <div className=' w-full sm:w-1/2 h-auto sm:h-[300px] my-10 mx-10 '>
            <ProjectImage  src1={blogImage1} src2={blogImage2} src3={blogImage3} link='https://github.com/Kartikjoshi0/Medium_blog'/>
            </div>
            <div className='w-full sm:w-1/2 h-[300px]  m-10  '><Text heading='Medium-Blog' about='Medium like web application that offers a user-friendly interface for
 writing blogs and and sharing them with others' tech={<><Image className='icon' src={nextImg} alt={'Next.js'} width={50} height={50} />
 <Image className='icon' src={nodeImg} alt={'Node.js'} width={50} height={50} />
 <Image className='icon' src={postgresImg} alt={'PostgreSQL'} width={50} height={50} />
 <Image className='icon ' src={jsImg} alt={'JavaScript'} width={50} height={50} />
 <Image className='icon ' src={tsImg} alt={'TypeScript'} width={50} height={50} />
 <Image className='icon ' src={rectImg} alt={'React'} width={50} height={50} /></>} /></div>
        </div>
    </div>


    <div className='project-panel shrink-0 w-screen h-[500px] m-10'>
    <div className="text-panel  text-2xl flex flex-row  ">
    <div className='w-1/2 h-[300px] my-10 mx-10 '>
            <ProjectImage  src1={myPay1} src2={myPay2} src3={myPay3} link='https://github.com/Kartikjoshi0/Paytm-typescript'/>

            </div>
            <div className='w-1/2 h-[300px] m-10 '><Text heading='MyPay' about='Web application that offers a user-friendly interface for
 managing financial transactions.' tech={<><Image className='icon' src={nodeImg} alt={'Node.js'} width={50} height={50} />
 <Image className='icon' src={postgresImg} alt={'PostgreSQL'} width={50} height={50} />
 <Image className='icon ' src={jsImg} alt={'JavaScript'} width={50} height={50} />
 <Image className='icon ' src={tsImg} alt={'TypeScript'} width={50} height={50} />
 <Image className='icon ' src={rectImg} alt={'React'} width={50} height={50} />
 </>} /></div>
 
        </div>
    </div>


    <div className='project-panel shrink-0 w-screen h-[500px] m-10  '>
    <div className="text-panel  text-2xl flex flex-row  ">
    <div className='w-1/2 h-[300px] my-10 mx-10 '>
            <ProjectImage  src1={myDraw1} src2={myDraw2} src3={myDraw3} link='https://github.com/Kartikjoshi0/MyDraw'/>

            </div>
            <div className='w-1/2 h-[300px] m-10 '><Text heading='MyDraw' about='Web application that offers a user-friendly interface for
            drawing shapes using react canvas.' 
 tech={<>
 <Image className='icon ' src={jsImg} alt={'JavaScript'} width={50} height={50} />
 <Image className='icon ' src={tsImg} alt={'TypeScript'} width={50} height={50} />
 <Image className='icon ' src={rectImg} alt={'React'} width={50} height={50} />
 </>}  />

 
        </div>
    </div>
    </div>


    <div className='project-panel shrink-0 w-screen h-[500px] m-10  '>
    <div className=' flex  ml-[100px] mt-[150px] gap-5 sm:gap-10  '>
        <h1 className='text-sm sm:text-2xl  '>More on...</h1>
        <div><Link href={'https://github.com/Kartikjoshi0'}><Image className='icon' src={gitImg} alt={'Github '} width={50} height={50} /></Link></div>

        </div>
            
   

    </div>
    

  </div>
}
export default Projects



