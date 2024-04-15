import './App.css';
import './index.css'; // adjust this path if your CSS file is located differently
import { BackgroundBeams } from './BackgroundBeams';
import Navbar from './components/Navbar';

function App() {
  return (
    <div id="main-container" className="relative min-h-screen bg-d-blue">
      <Navbar></Navbar>
      <BackgroundBeams className="z-0"></BackgroundBeams>
    </div>
   );
}

export default App;
