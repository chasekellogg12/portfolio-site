import './App.css';
import './index.css'; // adjust this path if your CSS file is located differently
import { BackgroundBeams } from './BackgroundBeams';
import Navbar from './components/Navbar';
import hs from './assets/headshot.jpeg';

function App() {
  // have 
  return (
    <div id="main-container" className="relative min-h-screen bg-d-blue inter">
      <Navbar></Navbar>
      <BackgroundBeams className="z-0"></BackgroundBeams>

      <div className="flex-col items-center pt-16">
        <section id="about" className="relative z-10 flex items-center justify-center w-full min-h-screen text-center">
          <div className='w-[900px] flex justify-between bg-white'>
            <div className='flex w-1/2'>
              <img src={hs} alt="Headshot" className="scale-75 rounded-full " />
            </div>
            <div className='flex flex-col items-center justify-center w-1/2'>
              <p className="w-full text-lg text-blue-500">Hello, I'm Chase!</p>
              <span className='w-full'>I love programming!</span>
            </div>
          </div>
        </section>


        <section id="technologies" className="relative z-10 flex items-center justify-center min-h-screen text-center bg-transparent">
          <div>
            <h2 className="text-xl font-bold">Technologies I Use</h2>
            <p>Here's what I'm currently working with...</p>
          </div>
        </section>
        <section id="contact" className="relative z-10 flex items-center justify-center min-h-screen text-center bg-white">
          <div>
            <h2 className="text-xl font-bold">Contact Me</h2>
            <p>Feel free to reach out via email or social media.</p>
          </div>
        </section>
      </div>
    </div>
   );
}

export default App;
