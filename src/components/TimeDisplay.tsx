
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-portfolio-dark-blue/80 
                 backdrop-blur-sm px-6 py-3 rounded-full border border-portfolio-light-blue/20
                 text-portfolio-light-blue font-space text-lg shadow-lg shadow-portfolio-light-blue/10"
    >
      {formattedTime}
    </motion.div>
  );
};

export default TimeDisplay;
