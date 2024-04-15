function Navbar() {
    return (
        <div id='navbar' className='fixed inset-x-0 top-0 z-10 h-16 text-white bg-teal'>
            <div className='flex items-center justify-between w-full h-full'>
                <div id='home-button' className='flex justify-center w-1/2'>
                    <button className='text-3xl font-bold text-white'>CHASE KELLOGG</button>
                </div>
                <div id='info-buttons' className='flex w-1/2 justify-evenly'>
                    <button>About</button>
                    <button>Portfolio</button>
                    <button>Technologies</button>
                    <button>Contact</button>
                </div>

            </div>
        </div>
     );
  }
  
  export default Navbar;