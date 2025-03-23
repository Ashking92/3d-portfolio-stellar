
import { motion } from 'framer-motion';
import HeroScene from './HeroScene';
import WorkingDeveloper from './WorkingDeveloper';
import { Button } from './ui/button';
import { ChevronDown, Download, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-portfolio-light-blue text-lg md:text-xl mb-2 font-medium flex items-center">
              <span className="inline-block w-10 h-0.5 bg-portfolio-light-blue mr-3"></span>
              Hello, I'm
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space mb-4">
              <span className="gradient-text">Yash Pawar</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-portfolio-gray mb-6">
              Web & App Developer
            </h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-portfolio-light-gray text-base md:text-lg mb-8 max-w-2xl"
          >
            I create responsive websites and applications with modern technologies. 
            Passionate about developing creative solutions and learning new technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="bg-portfolio-light-blue hover:bg-portfolio-blue text-white group">
              <a href="#projects">
                <span>View My Projects</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-portfolio-light-blue text-portfolio-light-blue hover:bg-portfolio-light-blue/20">
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-portfolio-light-gray hover:text-portfolio-light-blue hover:bg-portfolio-light-blue/10">
              <a href="#" download>
                <Download className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-8 flex items-center space-x-6"
          >
            <a href="https://github.com/Ashking92" target="_blank" rel="noopener noreferrer" 
               className="text-portfolio-gray hover:text-portfolio-light-blue transition-colors duration-300">
              <Github size={24} />
            </a>
            <div className="h-6 w-px bg-portfolio-gray/30"></div>
            <span className="text-portfolio-light-gray text-sm">Available for freelance work</span>
          </motion.div>
        </div>
      </div>
      
      {/* Working Developer character */}
      <WorkingDeveloper />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float"
      >
        <a href="#about" aria-label="Scroll down" className="flex flex-col items-center space-y-2">
          <span className="text-portfolio-light-gray text-sm">Scroll Down</span>
          <ChevronDown size={32} className="text-portfolio-light-blue" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
