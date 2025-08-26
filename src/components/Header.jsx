import Logo from '../assets/images/logolensaloka.png';
import { FiMenu } from "react-icons/fi";

const navLinks = [
    { name: 'Clients', href: '#clients' },
    { name: 'Why', href: '#why' },
    { name: 'Services', href: '#services' },
    { name: 'Instant Prints', href: '#instant-prints' },
    { name: 'What U Get', href: '#what-u-get' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonial', href: '#testimonial' },
];

import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-white w-full sticky top-0 z-50">
      <div className="container mx-auto pt-10 px-6 sm:px-12">
        <nav className="flex items-center justify-between py-3 md:py-4 relative">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={Logo} alt="Lensaloka Logo" className="w-55" />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 lg:gap-8 font-primary text-base lg:text-lg">
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-secondary transition-colors duration-200">{link.name}</a>
              </li>
            ))}
          </ul>
          
          {/* Mobile/Tablet Nav (Hamburger) */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#EAC347]"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu size={28} />
          </button>
          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#273F3A] shadow-lg md:hidden animate-fadeIn z-40">
              <ul className="flex flex-col py-4 font-secondary text-base">
                {navLinks.map(link => (
                  <li key={link.name} className="px-6 py-2">
                    <a
                      href={link.href}
                      className="block w-full hover:text-white transition-colors duration-200"
                      onClick={() => setMenuOpen(false)}
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