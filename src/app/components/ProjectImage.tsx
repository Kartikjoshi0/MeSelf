import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import Link from "next/link";

interface ImageProp {
  src1: any,
  src2: any,
  src3: any,
  link: string


}

const ProjectImage = ({ src1,src2,src3,link }: ImageProp) => {
  const mainContainerRef = useRef(null);
  const panelContainerRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline for the animation
    const tl = gsap.timeline({ repeat: -1,yoyo:true, defaults: { duration: 3, ease: 'power1.inOut' } });
    
    // Define the animation
    tl.to(panelContainerRef.current, { x: '-100%',delay:2, duration: 2 })
      .to(panelContainerRef.current, { x: '-200%',delay:2, duration: 2 })
      .to(panelContainerRef.current, { x: '0%',delay:2, duration: 0 }); // Loop back to the start

  }, []);

  return (
    <div 
      ref={mainContainerRef} 
      className="w-full h-full overflow-hidden  " 
    >
      <Link className="cursor-pointer" href={link}><div 
        ref={panelContainerRef} 
        className="panel-container flex w-full h-full "
      >
        <Image className="panel flex-shrink-0 w-full h-full rounded-lg shadow-4xl shadow-stone-100" src={src1} alt="React" />
        <Image className="panel flex-shrink-0 w-full h-full rounded-lg shadow-4xl shadow-stone-100" src={src2} alt="React" />
        <Image className="panel flex-shrink-0 w-full h-full rounded-lg shadow-4xl shadow-stone-100" src={src3} alt="React" />
        
      </div>
      </Link>
    </div>
  );
};

export default ProjectImage;
