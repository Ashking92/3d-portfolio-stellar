
import { motion } from 'framer-motion';
import { Phone, Hand } from 'lucide-react';

const ContactCharacter = () => {
  return (
    <div className="absolute bottom-10 left-10 z-10 hidden md:block">
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Character with phone */}
        <div className="flex items-end">
          <motion.div 
            className="w-16 h-16 bg-portfolio-light-blue/20 rounded-full flex items-center justify-center"
            animate={{ 
              rotate: [0, -5, 0, 5, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut" 
            }}
          >
            <Phone className="w-8 h-8 text-portfolio-light-blue" />
          </motion.div>
          
          {/* Hand sign */}
          <motion.div 
            className="ml-2 mb-2"
            animate={{ 
              rotate: [0, 10, 0],
              x: [0, 3, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut" 
            }}
          >
            <Hand className="w-10 h-10 text-portfolio-light-blue" />
          </motion.div>
        </div>
        
        {/* Call us message */}
        <motion.div 
          className="mt-4 bg-portfolio-dark-blue/80 backdrop-blur-sm p-3 rounded-lg border border-portfolio-light-blue/30 max-w-[160px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-portfolio-white text-center text-sm">
            Call us now!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactCharacter;
