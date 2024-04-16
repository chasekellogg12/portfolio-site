import { BackgroundGradient } from "./BackgroundGradient";
import hs from '../assets/headshot.jpeg';

export const ProjectCard = ({title, image, technologies, desc, demoLink, repoLink} ) => {
    return (
        <div className='flex justify-center w-full'>
            <BackgroundGradient containerClassName="flex w-[1100px] h-[400px] justify-center" className="flex h-full rounded-[22px] w-full p-4 sm:p-10 bg-zinc-900 dark:bg-zinc-900">
                <div id="projectInfo" className='flex flex-col justify-between w-1/2 h-full'>
                    <div className='space-y-2'>
                        <p className="mb-2 text-2xl text-left text-white">
                            {title}
                        </p>
                        <div className='flex justify-start w-full space-x-3'>
                            {demoLink &&
                                <div className='flex items-center p-1 px-3 font-bold text-white rounded-lg bg-teal'>
                                    <span>Demo</span>
                                </div>
                            }
                            {repoLink &&
                                <div className='flex items-center p-1 px-3 font-bold text-white rounded-lg bg-teal'>
                                    <span>Repo</span>
                                </div>
                            }
                        </div>
                        <ul className="pl-5 text-sm text-left list-disc text-neutral-400">
                            {desc.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex justify-start w-full space-x-3'>
                        {technologies.map((tech, idx) => (
                            <div key={idx} className='flex items-center p-1 px-2 text-xs font-bold text-white bg-black rounded-full'>
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="projectPhoto" className='flex items-center justify-center w-1/2'>
                    <img
                        src={image}
                        alt="img"
                        className="object-contain w-full h-full"
                    />
                </div>
            </BackgroundGradient>
        </div>
     );
  }
  
  export default ProjectCard;