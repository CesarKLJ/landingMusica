import React, { useState, useEffect } from 'react';
import { Music, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-800/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold">
            <Music className="h-8 w-8 text-primary-500" />
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Harmonia
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#music" className="nav-link">
              Music
            </a>
            <a href="#artists" className="nav-link">
              Artists
            </a>
            <a href="#events" className="nav-link">
              Events
            </a>
            <a
              href="#subscribe"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 font-medium"
            >
              Subscribe
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark-700/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="nav-link py-2" onClick={toggleMenu}>
                Home
              </a>
              <a href="#music" className="nav-link py-2" onClick={toggleMenu}>
                Music
              </a>
              <a href="#artists" className="nav-link py-2" onClick={toggleMenu}>
                Artists
              </a>
              <a href="#events" className="nav-link py-2" onClick={toggleMenu}>
                Events
              </a>
              <a
                href="#subscribe"
                className="py-2 px-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-center font-medium"
                onClick={toggleMenu}
              >
                Subscribe
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};