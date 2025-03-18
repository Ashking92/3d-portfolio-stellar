
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Button } from './ui/button';

const projectsData = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A responsive personal portfolio website built with React and Three.js, featuring 3D elements and animations.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 2,
    title: "E-commerce Web App",
    description: "A full-featured e-commerce web application with user authentication, product listing, cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Next.js", "Firebase", "Stripe", "Tailwind CSS"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 3,
    title: "Chat Application",
    description: "Real-time chat application with features like user authentication, private messaging, and group chats.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "Firebase", "Socket.io", "CSS"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A task management application with user-friendly interface, allowing users to create, organize, and track their tasks efficiently.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["React", "Redux", "Material UI", "Node.js"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 5,
    title: "Weather Application",
    description: "A weather application that displays current weather and forecasts for locations around the world.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    githubLink: "#",
    demoLink: "#",
  },
  {
    id: 6,
    title: "AI Chatbot Interface",
    description: "An interactive AI chatbot interface that uses natural language processing to provide responses to user queries.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["React", "Node.js", "OpenAI API", "CSS"],
    githubLink: "#",
    demoLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Projects</h2>
          <p className="text-portfolio-gray max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've learned along my journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full bg-portfolio-dark-blue/50 border-portfolio-teal hover:shadow-lg hover:shadow-portfolio-light-blue/20 transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-portfolio-white mb-2">{project.title}</h3>
                  <p className="text-portfolio-gray mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-portfolio-light-blue/20 text-portfolio-light-blue px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3 mt-4">
                    <Button asChild variant="outline" size="sm" className="text-portfolio-light-blue border-portfolio-light-blue hover:bg-portfolio-light-blue/20">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="bg-portfolio-light-blue hover:bg-portfolio-blue">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg" className="border-portfolio-light-blue text-portfolio-light-blue hover:bg-portfolio-light-blue/20">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Code className="mr-2 h-5 w-5" />
              View More Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
