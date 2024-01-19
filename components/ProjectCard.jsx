import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";

const ProjectCard = ({imgUrl,title,description,githubLink,liveLink}) => {
    return ( 
        <div className="hover:bg-[#181818] p-3 rounded-xl hover:transition hover:scale-105 transition-all">
        <div className="">
        <div className="h-52 md:h-60 rounded-t-xl relative hover:opacity-50 group  " style={{backgroundImage: `url(${imgUrl})` ,backgroundSize:"cover"}} >
            <div className=" flex items-center justify-center h-full gap-20 ">
            <Link href={githubLink} className=" hidden group-hover:flex hover:opacity-100 " >
            <FaGithub className="w-10 h-10 font-extrabold" />
            </Link>
            <Link href={liveLink} className="hidden group-hover:flex">
            <IoCodeSlash className="w-10 h-10 font-extrabold"  />
            </Link>
            </div>
        </div>
        </div>
            
            <div className="">
                <h3 className="text-xl text-white mt-4">{title}</h3>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
     );
}
 
export default ProjectCard;