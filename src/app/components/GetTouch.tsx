import Link from "next/link"
import Image from "next/image"
import meImage from '../../../public/profile/profile.jpeg'
import { IoMdDownload } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";




const GetTouch = () => {
    return (
        <div  >
            <div className="text-2xl p-[50px]  sm:text-4xl ml-[100px] sm:ml-[500px]">Get in Touch</div>
            <div className="flex gap-10 justify-evenly">
                <div className="icon w-[250px] h-[350px] ">
                <Image  className="panel flex-shrink-0  w-auto sm:w-full h-1/2 sm:h-full rounded-full sm:rounded-lg " src={meImage} alt="React" />
                </div>

                <div className="flex flex-col items-center">
                <div className="flex items-center mt-10 p-10 w-[200px] h-[50px] text-2xl bg-white hover:bg-green-300 rounded-lg">
                        <a className="flex gap-4 items-center"
                            href="/myOriginalCV.pdf" 
                            download="Kartik_Joshi_Resume.pdf" 
                        >
                        <IoMdDownload />Resume
                        </a>
                    </div>
                    <div className="p-10 ml-[100px] text-2xl cursor-pointer" >
                        < Link className="flex m-2 gap-2 items-center" href={"https://www.linkedin.com/in/kartik-joshi-64304b217/"}><CiLinkedin /> LinkedIn</Link>
                        <Link className="flex m-2 gap-2 items-center " href={'https://x.com/jKai_99'}><BsTwitterX />Twitter</Link>
                        <Link className="flex m-2 gap-2 items-center " href={'https://github.com/Kartikjoshi0'}><BsGithub /> Github</Link>
                        <div className="flex m-2 gap-2 items-center" ><IoIosMail /> 20kartikjoshi@gmail.com</div>

                        
                        
                    
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default GetTouch
