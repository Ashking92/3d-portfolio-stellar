
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-portfolio-navy/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold font-space gradient-text">
          Yash<span className="text-portfolio-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <Button asChild variant="outline" size="sm" className="ml-4 border-portfolio-light-blue text-portfolio-light-blue hover:bg-portfolio-light-blue/20">
            <a href="#" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-portfolio-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 h-screen w-3/4 bg-portfolio-dark-blue/95 backdrop-blur-md p-6 pt-20 shadow-lg z-50"
          >
            <nav className="flex flex-col space-y-6 text-lg">
              <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
              <a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>Experience</a>
              <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
              <Button asChild variant="outline" className="mt-6 border-portfolio-light-blue text-portfolio-light-blue hover:bg-portfolio-light-blue/20">
                <a href="#" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navigation;
