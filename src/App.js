import './App.css';
import './index.css'; // adjust this path if your CSS file is located differently
import { BackgroundBeams } from './BackgroundBeams';
import Navbar from './components/Navbar';
import hs from './assets/headshot.jpeg';
import { BackgroundGradient } from './components/BackgroundGradient';
import ProjectCard from './components/ProjectCard';
import jukeboxd from './assets/Jukeboxd.png';

function App() {
  // have 
  return (
    <div id="main-container" className="relative min-h-screen bg-d-blue inter">
      <Navbar></Navbar>
      <BackgroundBeams className="z-0"></BackgroundBeams>

      <div className="flex-col items-center pt-16">
        <section id="about" className="relative z-10 flex items-center justify-center w-full min-h-screen text-center">
          <div className='w-[900px] flex justify-between bg-transparent'>
            <div className='flex flex-col items-center justify-center w-1/2'>
              <p className="w-full text-5xl text-gray-200">Hello, I'm Chase!</p>
              <span className='w-full text-3xl text-white'>I love programming.</span>
            </div>
            <div className='flex w-1/2'>
              <img src={hs} alt="Headshot" className="scale-75 rounded-full " />
            </div>
          </div>
        </section>


        <section id="portfolio" className="relative z-10 flex items-center justify-center min-h-screen text-center bg-transparent">
          <div className='flex-col items-center w-screen space-y-6'>
            <div>
              <h2 className="text-3xl font-bold text-white">Portfolio</h2>
            </div>
            <div className='flex-col items-center w-screen space-x-4'>
              <ProjectCard title="Jukeboxd" image={jukeboxd} technologies={["React", "SpringBoot", "CSS"]} demoLink="https://jukeboxd.vercel.app/" repoLink="https://github.com/chasekellogg12/jukeboxd-frontend" desc={["Developed a full-stack social platform similar to movie-reviewing site ‘Letterboxd’ but for music instead of films", "Designed a robust RESTful API with full CRUD operations and JWT authentication (Spring Security), allowing users to search 100 million+ songs (Spotify API), write reviews, engage with posts, customize profiles, and follow others", "Wrote a Python script to make 500+ bot users in minutes using Selenium WebDriver & GPT-4 (to generate user info)"]}/>
            </div>
          </div>
        </section>
        <section id="contact" className="relative z-10 flex items-center justify-center min-h-screen text-center bg-transparent">
          <div>
            <h2 className="text-xl font-bold">Portfolio</h2>
            <p>Feel free to reach out via email or social media.</p>
          </div>
        </section>
      </div>
    </div>
   );
}

export default App;
