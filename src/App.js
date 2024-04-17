import './App.css';
import './index.css'; // adjust this path if your CSS file is located differently
import { BackgroundBeams } from './BackgroundBeams';
import Navbar from './components/Navbar';
import hs from './assets/headshot.jpeg';
import { BackgroundGradient } from './components/BackgroundGradient';
import ProjectCard from './components/ProjectCard';
import jukeboxd from './assets/Jukeboxd.png';
import musicplayer from './assets/MusicPlayer.jpeg';
import HDhs from './assets/HDHeadshot.jpg';
import emorylane from './assets/EmoryLane.png';
import predictingtraffic from './assets/PredictingTraffic.png';
import { motion } from "framer-motion";
import { LampContainer } from './components/LampContainer';

function App() {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' , block: 'start' });
    }
};
  return (
    <div id="main-container" className="relative min-h-screen bg-d-blue inter">
      <Navbar></Navbar>
      <BackgroundBeams className="z-20"></BackgroundBeams>

      <div className="flex-col items-center pt-36">
        <section id="home" className="relative z-auto flex items-center justify-center w-full min-h-screen text-center">
          <div className='w-[900px] flex justify-center bg-transparent items-center flex-col'>
            <LampContainer className="justify-center bg-transparent">
              <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="py-4 mt-8 text-4xl font-medium tracking-tight text-center text-transparent bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text md:text-7xl">
                  Hello, I'm Chase. <br /> I'm a software developer. <br />
              </motion.h1>
              <motion.button 
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                onClick={() => scrollTo('portfolio')}
                className='z-40 items-center p-2 px-4 text-lg text-white rounded-full bg-cyan-500 hover:bg-cyan-800'>
                  Learn More
              </motion.button>
            </LampContainer>
          </div>
        </section>


        <section id="portfolio" className="relative z-40 flex items-center justify-center min-h-screen text-center bg-transparent scroll-m-24">
          <div className='flex-col items-center w-screen space-y-6'>
            <div>
              <h2 id="portfolio-title" className="text-3xl font-bold text-white">Portfolio</h2>
            </div>
            <div className='flex flex-col items-center justify-center w-full space-y-8'>
              <ProjectCard title="Jukeboxd" image={jukeboxd} technologies={["Java", "Spring Boot", "JavaScript", "React", "PostgreSQL", "TailwindCSS", "Spotify API", "Git", "HTML"]} demoLink="https://jukeboxd.vercel.app/" repoLink="https://github.com/chasekellogg12/jukeboxd-frontend" desc={["Developed a full-stack social platform similar to movie-reviewing site ‘Letterboxd’ but for music instead of films", "Designed a robust RESTful API with full CRUD operations and JWT authentication (Spring Security), allowing users to search 100 million+ songs (Spotify API), write reviews, engage with posts, customize profiles, and follow others", "Wrote a Python script to make 500+ bot users in minutes using Selenium WebDriver & GPT-4 (to generate user info)"]}/>
              <ProjectCard title="In-Background Music Streaming App (IOS)" image={musicplayer} technologies={["Swift", "Python", "Flask", "Git", "YouTube API"]} repoLink="https://github.com/chasekellogg12/ios-music-player" desc={["Built an app that displays videos from YouTube’s API given a query and streams audio in my device’s background to preserve battery while listening (≈1% saved per 5 mins), combining YouTube’s vast library with Spotify’s ease-of-use", "Reduced runtime of extracting audio-only streams in my backend by 150% via profiling then pre-fetching & caching "]} />
              <ProjectCard title="EmoryLane" image={emorylane} technologies={["React", "TypeScript", "NodeJS", "NextJS", "Firebase", "TailwindCSS", "Git", "Jira"]} demoLink="https://docs.google.com/document/d/19TlJ24T7ci_K5Ef62upkgecXB2ZEHeErT_sZ3pgIBj8/edit?usp=sharing" desc={["Crafted a full-stack web yearbook for my graduating class on which 100+ users shared college photos & memories", "Implemented key components & pages including a comment section with dynamic comment loading & a post feed", "Collaborated with a team of 7 developers using Git, Jira, and Agile SCRUM methodology for effective product delivery", "Modeled a comprehensive Figma mockup (adhering to WCAG for accessibility) that outlined UI elements & features"]}/>
              <ProjectCard title="Post-Collision Traffic Predictor" image={predictingtraffic} technologies={["Python", "Git"]} demoLink="https://docs.google.com/document/d/18MUvH01U_uS5NO4cedWCPc6JjTxyTPYeQHGhpe3Ww1g/edit?usp=sharing" repoLink="https://github.com/chasekellogg12/PredictingTrafficSeverity.git" desc={["Compared accuracy, F1 score & AUC of ML algorithms (KNN, Naïve Bayes, Logistic Regression, Decision Trees, Random Forest, xgBoost) on 7.7 million+ samples of car crashes to most effectively predict traffic for first responders", "Preprocessed the data via encoding, binning, & feature engineering/selection & conducted hyperparameter tuning"]}/>
            </div>
          </div>
        </section>
        
        <section id="contact" className="relative z-40 flex items-center justify-center min-h-screen text-center text-white bg-transparent">
          <div className='space-y-6'>
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <div className='flex-col items-center justify-center'>
              <p>Feel free to shoot me a message via</p>
              <p className='text-xl font-bold text-cyan-500'>chasekellogg12@gmail.com</p>
            </div>
            <h3>or</h3>
            <div className='flex-col items-center justify-center h-full space-y-8'>
            
              <a href="https://www.linkedin.com/in/chasekellogg/" target="_blank" rel="noopener noreferrer" className='p-2 px-4 mt-8 text-xl font-bold text-white rounded-full bg-cyan-500 hover:bg-cyan-800'>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
   );
}

export default App;
