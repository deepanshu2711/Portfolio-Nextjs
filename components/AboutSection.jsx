"use client"
import Image from "next/image";
import { useRef, useState, useTransition } from "react";
import TabButton from "./TabButton";
const Tab_Data = [
    {
        id:"skills",
        name:"skills",
        content :(
            <ul>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>React</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Javascript</li>
                <li>Tailwind</li>
                <li>Java</li>
            </ul>
        )
    },
    {
        id:"Education",
        name:"Education",
        content:(
            <ul>
                <li>B.Tech: Computer Science (2020-2024)</li>
                <li>12th: 12th Standard</li>
                <li>10th: 10th Standard</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const aboutref = useRef(null);
    const[tab,settab] = useState("skills");
    const [isPending,startTransition] = useTransition();

    const handleTabChange =(id)=>{
        startTransition(()=>{
            settab(id);
        })
    }
    return ( 
        <section id="about" className="text-white grid grid-cols-1 md:grid-cols-2 gap-3" ref={aboutref}>
            <div className=" py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src={"/about.png"} width={500} height={500} alt="about" />
            </div>
            <div className="flex flex-col justify-start mt-8 sm:mt-10 md:mt-20">
                <h1 className=" text-center text-white text-4xl mb-4 font-semibold">About Me</h1>
                <p className="text-base md:text-lg text-gray-300">
                I am an ambitious and detail-oriented upcoming graduate with a strong foundation in software
                development, particularly skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js. Eager to
                contribute my technical skills and fresh perspectives to innovative projects, I am excited about embarking
                on a fulfilling career in the tech industry and as a developer.
                </p>
                <div className="flex flex-row mt-8">
                <TabButton selectTab={()=>handleTabChange("skills")} active={tab === "skills"} >Skills</TabButton>
                <TabButton selectTab={()=>handleTabChange("Education")} active={tab === "Education"} >Education</TabButton>
                    
                </div>
                <div className="mt-8">
                    {Tab_Data.find((t) =>t.id === tab).content}
                </div>
            </div>
        </section>
     );

     
}
 
export default AboutSection;