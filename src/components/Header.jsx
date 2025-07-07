import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  // simple function to toggle the mobile menu
  const toggleMobileMenu = () => {
    // get the mobile menu element
    const mobileMenu = document.getElementById('mobileMenu')

    // If it has the  "hidden" class, remove it. Otherwise , add it
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    }
    else{
      mobileMenu.classList.add('hidden');
    }
  }

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 w-full">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
        Sadatul
      </h1>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          Home
        </a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          Skills
        </a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          Projects
        </a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          Experience
        </a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          Blogs
        </a>
      </nav>
      {/* Contact me button */}
      <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50'>Contact me</button>

      {/* mobile menu button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <GiHamburgerMenu />
      </button>

      {/* mobile menu - hidden by default */}
      <div id="mobileMenu" className="hidden fixed top-16 bottom-0 left-0 right-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
        <nav className="flex flex-col items-center">
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Home
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Skills
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Projects
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Experience
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            Blogs
          </a>
        </nav>
      </div>


    </header>
  );
};

export default Header;
