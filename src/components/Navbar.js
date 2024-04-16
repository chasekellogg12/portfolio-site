function Navbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' , block: 'start' });
        }
    };
    return (
        <div id='navbar' className='fixed inset-x-0 top-0 z-40 h-16 text-white bg-teal'>
            <div className='flex items-center justify-between w-full h-full'>
                <div id='home-button' className='flex justify-center w-1/2'>
                    <button onClick={() => scrollToSection('home')} className='text-3xl font-bold text-white'>CHASE KELLOGG</button>
                </div>
                <div id='info-buttons' className='flex w-1/2 justify-evenly'>
                    <button onClick={() => scrollToSection('home')}>About</button>
                    <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                    <button>Resume</button>
                </div>

            </div>
        </div>
     );
  }
  
  export default Navbar;