import Image from "next/image"
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";



interface ImageProp{
    src:any
}

const ProjectImage=({src}: ImageProp)=>{
    const containerRef=useRef(null);
    const mainContainerRef=useRef(null);

    // useGSAP(()=>{
    //     gsap.to(containerRef.current,{
    //        opacity:1,
    //        width:'100%',
    //        height:'100%',
    //        duration:1.5,
    //        scrollTrigger:{
    //         trigger:mainContainerRef.current,
    //         markers:true,
    //         start:'top 30%',
    //         end:'top 20%',
    //         toggleActions: 'play none none reverse',

    //        }
    //     })
    // })
    return (
        <div ref={mainContainerRef} className="  flex justify-center pt-[50px] flex overflow-x-scroll border border-3 border-green-500 border-solid" >
        <Image
        className="shrink-0 space-x-4"
        ref={containerRef}
        src={src}
        alt="React"
        objectFit="cover"
        width={300}
        height={300}/>
        <Image
        className="shrink-0 "
        ref={containerRef}
        src={src}
        alt="React"
        objectFit="cover"
        width={300}
        height={300}/>
        
       
        </div>
    )
}
export default ProjectImage 