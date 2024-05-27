import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from 'gsap';

interface ImageProp {
  src1: any,
  src2: any,
  src3: any


}

const ProjectImage = ({ src1,src2,src3 }: ImageProp) => {
  const mainContainerRef = useRef(null);
  const panelContainerRef = useRef(null);

  useEffect(() => {
    const panels = panelContainerRef.current.children;

    // Create GSAP timeline for the animation
    const tl = gsap.timeline({ repeat: -1,yoyo:true,delay:1, defaults: { duration: 3, ease: 'power1.inOut' } });
    
    // Define the animation
    tl.to(panelContainerRef.current, { x: '-100%', duration: 3 })
      .to(panelContainerRef.current, { x: '-200%', duration: 3 })
      .to(panelContainerRef.current, { x: '0%', duration: 0 }); // Loop back to the start

  }, []);

  return (
    <div 
      ref={mainContainerRef} 
      className="w-full h-full overflow-hidden  " 
    >
      <div 
        ref={panelContainerRef} 
        className="panel-container flex w-full h-full shadow-2xl shadow-stone-100"
      >
        <Image className="panel flex-shrink-0 w-full h-full" src={src1} alt="React" />
        <Image className="panel flex-shrink-0 w-full h-full" src={src2} alt="React" />
        <Image className="panel flex-shrink-0 w-full h-full" src={src3} alt="React" />
      </div>
    </div>
  );
};

export default ProjectImage;
