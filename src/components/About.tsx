
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Code, Layers, Smartphone, Wrench } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">About Me</h2>
          <p className="text-portfolio-gray max-w-3xl mx-auto">
            I'm a passionate developer currently studying Computer Science at Theem College of Engineering. 
            I love working with modern web technologies and building creative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full rounded-lg overflow-hidden glow-effect">
              <img 
                src="/lovable-uploads/602da913-16c9-492c-8e80-2bab038c44ea.png" 
                alt="Yash Pawar on a motorcycle" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-space mb-4 text-portfolio-white">
              Enthusiastic and Learning Developer
            </h3>
            <p className="text-portfolio-light-gray mb-6">
              I'm passionate about building innovative solutions and exploring new technologies. My journey in tech started with my interest in solving real-world problems through code. When I'm not coding, you can find me exploring on my Royal Enfield motorcycle.
            </p>
            <p className="text-portfolio-light-gray mb-6">
              I've worked on various projects involving web and app development, from simple websites to more complex applications. I believe in continuous learning and improving my skills to become a better developer every day.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center text-portfolio-light-blue">
                <span className="font-medium">Location:</span>
                <span className="ml-2 text-portfolio-light-gray">Boisar, India</span>
              </div>
              <div className="flex items-center text-portfolio-light-blue">
                <span className="font-medium">Age:</span>
                <span className="ml-2 text-portfolio-light-gray">20</span>
              </div>
              <div className="flex items-center text-portfolio-light-blue">
                <span className="font-medium">Study:</span>
                <span className="ml-2 text-portfolio-light-gray">Computer Science</span>
              </div>
              <div className="flex items-center text-portfolio-light-blue">
                <span className="font-medium">Email:</span>
                <span className="ml-2 text-portfolio-light-gray truncate">yash92pawar74@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold font-space mb-8 text-center text-portfolio-white">
            What I Do
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full bg-portfolio-dark-blue/50 border-portfolio-teal text-portfolio-white p-6 hover:shadow-md hover:shadow-portfolio-light-blue/20 transition-all duration-300">
                <div className="rounded-full bg-portfolio-light-blue/20 w-14 h-14 flex items-center justify-center mb-4">
                  <Code size={28} className="text-portfolio-light-blue" />
                </div>
                <h4 className="text-xl font-bold mb-3">Web Development</h4>
                <p className="text-portfolio-gray">Creating responsive websites using React.js, Next.js, and other modern frameworks with clean code practices.</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full bg-portfolio-dark-blue/50 border-portfolio-teal text-portfolio-white p-6 hover:shadow-md hover:shadow-portfolio-light-blue/20 transition-all duration-300">
                <div className="rounded-full bg-portfolio-light-blue/20 w-14 h-14 flex items-center justify-center mb-4">
                  <Smartphone size={28} className="text-portfolio-light-blue" />
                </div>
                <h4 className="text-xl font-bold mb-3">App Development</h4>
                <p className="text-portfolio-gray">Building mobile applications with focus on user experience and performance optimization.</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full bg-portfolio-dark-blue/50 border-portfolio-teal text-portfolio-white p-6 hover:shadow-md hover:shadow-portfolio-light-blue/20 transition-all duration-300">
                <div className="rounded-full bg-portfolio-light-blue/20 w-14 h-14 flex items-center justify-center mb-4">
                  <Layers size={28} className="text-portfolio-light-blue" />
                </div>
                <h4 className="text-xl font-bold mb-3">UI/UX Design</h4>
                <p className="text-portfolio-gray">Designing intuitive user interfaces with attention to detail and user experience principles.</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full bg-portfolio-dark-blue/50 border-portfolio-teal text-portfolio-white p-6 hover:shadow-md hover:shadow-portfolio-light-blue/20 transition-all duration-300">
                <div className="rounded-full bg-portfolio-light-blue/20 w-14 h-14 flex items-center justify-center mb-4">
                  <Wrench size={28} className="text-portfolio-light-blue" />
                </div>
                <h4 className="text-xl font-bold mb-3">Problem Solving</h4>
                <p className="text-portfolio-gray">Applying analytical thinking to solve complex problems and create efficient solutions.</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
