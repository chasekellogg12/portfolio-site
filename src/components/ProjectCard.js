import { BackgroundGradient } from "./BackgroundGradient";
import hs from '../assets/headshot.jpeg';

export const ProjectCard = ({title, image, technologies, desc, demoLink, repoLink} ) => {
    return (
        <div className='flex justify-center w-full'>
            <BackgroundGradient containerClassName="flex w-[1100px] h-[400px] justify-center" className="flex h-full rounded-[22px] w-full pl-10 pt-10 pb-10  bg-zinc-900 dark:bg-zinc-900 overflow-auto">
                <div id="projectInfo" className='flex flex-col justify-between w-1/2 h-full'>
                    <div className='mb-2 space-y-2'>
                        <p className="mb-2 text-2xl text-left text-white">
                            {title}
                        </p>
                        <div className='flex justify-start w-full space-x-3 overflow-x-auto'>
                            {technologies.map((tech, idx) => (
                                <div key={idx} className='flex items-center p-1 px-2 text-xs font-bold rounded-full text-nowrap text-neutral-400 bg-l-purple'>
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                        <ul className="pt-3 pl-5 text-sm text-left list-disc text-neutral-400">
                            {desc.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex justify-start w-full mt-3 space-x-6'>
                            {demoLink &&
                                <a href={demoLink} target="_blank" rel="noopener noreferrer" className='flex items-center p-1 px-3 font-bold text-white rounded-lg bg-mint'>
                                    <span>Demo</span>
                                </a>
                            }
                            {repoLink &&
                                <a href={repoLink} target="_blank" rel="noopener noreferrer" className='flex items-center p-1 px-3 font-bold text-white rounded-lg bg-mint'>
                                    <span>Repo</span>
                                </a>
                            }
                    </div>
                </div>
                <div id="projectPhoto" className='flex items-end w-1/2'>
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