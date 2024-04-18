
function Navbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' , block: 'start' });
        }
    };
    return (
        <div id='navbar' className='fixed inset-x-0 top-0 z-50 h-16 font-medium text-center text-white border-b-2 border-purple-500 bg-zinc-900'>
            <div className='flex items-center justify-around w-full h-full'>
                <div id='home-button' className='flex w-1/2 pl-20'>
                    <button 
                        className="text-3xl font-extrabold text-center text-transparent bg-gradient-to-b from-white to-white hover:to-purple-500 hover:via-purple-600 hover:from-purple-700 bg-clip-text"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                            }}>
                            Chase Kellogg
                    </button>
                </div>
                <div id='info-buttons' className='flex w-1/2 justify-evenly'>
                    <button className='text-transparent bg-gradient-to-b from-white to-white hover:to-purple-500 hover:via-purple-600 hover:from-purple-700 bg-clip-text' onClick={() => scrollToSection('about')}>About</button>
                    <button className='text-transparent bg-gradient-to-b from-white to-white hover:to-purple-500 hover:via-purple-600 hover:from-purple-700 bg-clip-text' onClick={() => scrollToSection('portfolio')}>Portfolio</button>
                    <button className='text-transparent bg-gradient-to-b from-white to-white hover:to-purple-500 hover:via-purple-600 hover:from-purple-700 bg-clip-text'  onClick={() => scrollToSection('contact')}>Contact</button>
                    <a className='text-transparent bg-gradient-to-b from-white to-white hover:to-purple-500 hover:via-purple-600 hover:from-purple-700 bg-clip-text' href="/ChaseKellogg_Portfolio_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
        </div>
     );
  }
  
  export default Navbar;