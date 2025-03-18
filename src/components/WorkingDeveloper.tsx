
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hand, ChevronDown, Laptop } from 'lucide-react';

const WorkingDeveloper = () => {
  const [showMessage, setShowMessage] = useState(false);
  
  useEffect(() => {
    // Show the message after 5 seconds
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 z-10 hidden md:block">
      <div className="relative">
        {/* Developer character */}
        <motion.div 
          className="flex flex-col items-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Developer */}
          <div className="relative">
            <motion.div 
              className="w-20 h-20 bg-portfolio-light-blue/20 rounded-full flex items-center justify-center mb-2"
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }}
            >
              <Laptop className="w-12 h-12 text-portfolio-light-blue" />
            </motion.div>
            
            {/* Typing hands */}
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4"
              animate={{ 
                y: [0, -2, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 0.5,
                ease: "easeInOut" 
              }}
            >
              <Hand className="w-6 h-6 text-portfolio-light-blue" />
            </motion.div>
          </div>
          
          {/* Scroll down message */}
          {showMessage && (
            <motion.div 
              className="mt-4 bg-portfolio-dark-blue/80 backdrop-blur-sm p-3 rounded-lg border border-portfolio-light-blue/30 max-w-[180px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-portfolio-white text-center text-sm">
                Scroll down for About section
              </p>
              <motion.div 
                className="flex justify-center mt-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
              >
                <ChevronDown className="text-portfolio-light-blue w-5 h-5" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkingDeveloper;
