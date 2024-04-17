
function Navbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' , block: 'start' });
        }
    };
    return (
        <div id='navbar' className='fixed inset-x-0 top-0 z-50 h-16 font-medium text-center text-white bg-zinc-900'>
            <div className='flex items-center justify-around w-full h-full'>
                <div id='home-button' className='flex w-1/2 pl-20'>
                    <button 
                        className="text-3xl font-bold text-white"
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
                    <button onClick={() => scrollToSection('about')}>About</button>
                    <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                    <a href="/ChaseKellogg_Portfolio_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
            </div>
        </div>
     );
  }
  
  export default Navbar;