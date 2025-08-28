import Logo from '../assets/images/logolensaloka.png';
import { FiMenu } from "react-icons/fi";

const navLinks = [
    { name: 'Clients', href: '#clients' },
    { name: 'Why', href: '#why' },
    { name: 'Services', href: '#services' },
    { name: 'Instant Prints', href: '#instant-prints' },
    { name: 'What You Get', href: '#what-u-get' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonial', href: '#testimonial' },
];

import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 100; // Perkiraan tinggi header dalam pixel
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CSS untuk memastikan header selalu di atas semua elemen
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .header-override {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        z-index: 999999 !important;
        width: 100% !important;
      }
      
      /* Pastikan header selalu di atas semua section */
      body > div > div > section:not(.header-section) {
        z-index: 1 !important;
        position: relative !important;
      }
      
      /* Override z-index untuk elemen yang mungkin konflik */
      .swiper,
      .swiper-wrapper,
      .swiper-container,
      video,
      [class*="z-"] {
        z-index: auto !important;
      }
      
      /* Khusus untuk section hero agar tidak menutupi header */
      section[class*="min-h-screen"] {
        z-index: 1 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  console.log('Current menuOpen state:', menuOpen); // Debug state

  return (
    <header 
      className={`header-override text-white w-full fixed top-0 transition-all duration-300
        ${isScrolled ? 'bg-[#273F3A] shadow-lg' : 'bg-transparent'}
      `}
      style={{ 
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        transform: 'translate3d(0, 0, 0)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform',
        isolation: 'isolate'
      }}
    >
      <div className={`container mx-auto px-6 sm:px-12 transition-all duration-300 ${isScrolled ? 'pt-2' : 'pt-10'}`}>
        <nav className="flex items-center justify-between py-3 md:py-4 relative" style={{ pointerEvents: 'all' }}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" style={{ pointerEvents: 'all' }}>
            <img src={Logo} alt="Lensaloka Logo" className="w-30 xl:w-40" style={{ pointerEvents: 'none' }} />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-6 lg:gap-8 font-primary text-base lg:text-lg" style={{ pointerEvents: 'all' }}>
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-secondary transition-colors duration-200" style={{ pointerEvents: 'all' }}>{link.name}</a>
              </li>
            ))}
          </ul>
          
          {/* Mobile/Tablet Nav (Hamburger) */}
          <button
            className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#EAC347] cursor-pointer relative z-[9999]"
            aria-label="Open menu"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMenuOpen(!menuOpen);
              console.log('Menu clicked:', !menuOpen);
            }}
            style={{ 
              pointerEvents: 'all',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <FiMenu size={28} style={{ pointerEvents: 'none' }} />
          </button>
          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div 
              className="absolute top-full left-0 w-full bg-primary shadow-xl lg:hidden"
              style={{ 
                zIndex: 999999,
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                width: '100%',
                minHeight: '200px',
                border: '2px solid #EAC347',
                borderRadius: '8px',
              }}
            >
              <ul className="flex flex-col py-6 font-secondary text-base" style={{ margin: 0, padding: '1.5rem 0' }}>
                {navLinks.map(link => (
                  <li key={link.name} className="px-6 py-3">
                    <a
                      href={link.href}
                      className="block w-full text-white hover:text-[#EAC347] transition-colors duration-200"
                      onClick={() => {
                        setMenuOpen(false);
                        console.log('Link clicked:', link.name);
                      }}
                      style={{ 
                        color: 'white',
                        fontSize: '16px',
                        padding: '8px 0',
                        display: 'block',
                        textDecoration: 'none'
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;