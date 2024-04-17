function Navbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' , block: 'start' });
        }
    };
    return (
        <div id='navbar' className='fixed inset-x-0 top-0 z-50 h-16 text-center text-d-blue bg-cyan-500'>
            <div className='flex items-center justify-between w-full h-full'>
                <div id='home-button' className='flex justify-center w-1/2'>
                    <button 
                        className="text-3xl font-bold "
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
                    <button 
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                            }}>
                            About
                    </button>
                    <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                    <button>Resume</button>
                </div>

            </div>
        </div>
     );
  }
  
  export default Navbar;