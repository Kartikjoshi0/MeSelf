import { useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Card=()=>{
    useEffect(()=>{
        gsap.to('.panel',{
            x:400,
            y:-200,
            duration:5,
            scrollTrigger:{
                trigger:'.text-panel',
                pin:true,
                scrub:true,
                snap:{
                    snapTo:1,
                    delay:0.1,
                    ease:'none'
                }
            }
        })
    },[])
    return (
        <div className="text-panel text-2xl w-screen h-screen border-2 border-solid rounded-md border-gray-900  flex items-center ">
            <div className="panel m-4 p-4">Text</div>
        </div>
    )
}
export default Card;