import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
    return (
        <div id="projects" className="flex flex-col gap-20 mt-16 justify-start items-center">
            <h2 className="text-center text-white text-4xl font-bold">My Projects</h2>
            <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">


                <ProjectCard
                    imgUrl={"/Discord.png"}
                    title={"Discord Clone"}
                    description={"A fully functional discord-clone using next.js,prisma,supabase,uploadThings,liveKit( for vedio and audio calling) "}
                    githubLink={"https://github.com/deepanshu2711/discord-clone"}
                />


                <ProjectCard
                    imgUrl={"/Genius.png"}
                    title={"Genius AI Platform"}
                    description={"AI platform using next.js and clerk for authentication and authorization, Have three different AI models from Conversation , Code Generation and Image Generation "}
                    githubLink={"https://github.com/deepanshu2711/Ai_saas"}
                />

                <ProjectCard
                    imgUrl={"/xlogo.png"}
                    title={"Twitter(X) Clone"}
                    description={"A Twitter clone using Next.js , MongoDb as database and clerk for authentication and authorization in which user can tweet like other tweets comment on tweets and delete tweets it also have a user profile section where user can edit their profile"}
                    githubLink={"https://github.com/deepanshu2711/Twitter_Clone"}
                />



                <ProjectCard
                    imgUrl={"/Blog.png"}
                    title={"Mern Blog"}
                    description={"Blog web application based on MERN (MongoDB,Express.js,React.js,Node.js) stack with Authentication jwt-cookies and redux for state management "}
                    githubLink={"https://github.com/deepanshu2711/Mern-Blog-Beginner-Friendly"}
                />

                <ProjectCard
                    imgUrl={"/realEstate.png"}
                    title={"Real Estate Web App"}
                    description={"a comprehensive real estate platform leveraging the power of MERN stack (MongoDB, Express.js, React, Node.js) alongside Firebase Authentication, Tailwind CSS for sleek styling, and JWT for secure authentication and authorization"}
                    githubLink={"https://github.com/deepanshu2711/Real-EState-MERN-stack"}
                />

                <ProjectCard
                    imgUrl={"/Gleam.png"}
                    title={"Gleam Google Clone"}
                    description={"A Google clone which based on next.js which uses google developers tool search engine to fetch data and return text and Images based on user search "}
                    githubLink={"https://github.com/deepanshu2711/gleam-google-clone"}
                />




            </div>
        </div>
    );
}

export default ProjectSection;