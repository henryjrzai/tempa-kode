import { OutlineButton } from "./Buttons";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('hero');
  // State untuk mengontrol menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sectionIds = ['hero', 'service', 'testimoni', 'workflow', 'price'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Tutup menu mobile saat link diklik
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (section) => {
    return section === activeSection 
      ? "block py-2 px-3 font-bold text-primary md:bg-transparent md:text-primary md:p-0" 
      : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 rounded-[50px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mt-2.5 p-4 bg-white/25 shadow-lg backdrop-blur-[30.5px] rounded-[50px] border border-white/18">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo.webp" width={70} height={70} alt="Tempa Kode"/>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          <OutlineButton text="Start project" className="px-14"></OutlineButton> 
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-sticky" 
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <a href="#hero" onClick={handleNavLinkClick} className={isActive('hero')} aria-current={activeSection === 'hero' ? 'page' : undefined}>Home</a>
            </li>
            <li>
              <a href="#service" onClick={handleNavLinkClick} className={isActive('service')} aria-current={activeSection === 'service' ? 'page' : undefined}>Service</a>
            </li>
            <li>
              <a href="#testimoni" onClick={handleNavLinkClick} className={isActive('testimoni')} aria-current={activeSection === 'testimoni' ? 'page' : undefined}>Testimoni</a>
            </li>
            <li>
              <a href="#workflow" onClick={handleNavLinkClick} className={isActive('workflow')} aria-current={activeSection === 'workflow' ? 'page' : undefined}>Alur Kerja</a>
            </li>
            <li>
              <a href="#price" onClick={handleNavLinkClick} className={isActive('price')} aria-current={activeSection === 'price' ? 'page' : undefined}>Harga</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}