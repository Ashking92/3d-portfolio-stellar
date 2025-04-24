import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

const projectsData = [
  {
    id: 1,
    title: "Deadpool Lab",
    description: "An immersive web experience showcasing Deadpool's world with interactive elements and stunning visuals.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/deadpool-lab",
    demoLink: "https://deadpool20.vercel.app",
  },
  {
    id: 2,
    title: "Relax Trader",
    description: "A comprehensive trading platform with real-time market data, advanced analytics, and portfolio management.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "Redux", "TradingView API", "WebSocket"],
    githubLink: "https://github.com/yourusername/relax-trader",
    demoLink: "https://relaxtrader.com",
  },
  {
    id: 3,
    title: "Ex Box",
    description: "A modern gaming platform interface inspired by Xbox, featuring game library management and social features.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/yourusername/ex-box",
    demoLink: "https://ex-box-reborn.vercel.app",
  },
  {
    id: 4,
    title: "Promptopia",
    description: "A prompt-sharing application for AI enthusiasts to discover, create and share creative prompts for AI models.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS"],
    githubLink: "https://github.com/Ashking92/promptopia",
    demoLink: "https://promptopia-ruby-eight.vercel.app/",
  },
  {
    id: 5,
    title: "Next Admin Dashboard",
    description: "A modern admin dashboard built with Next.js featuring data visualization, user management, and analytics tools.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["Next.js", "Chart.js", "MongoDB", "NextAuth"],
    githubLink: "https://github.com/Ashking92/nextadmindashboard",
    demoLink: "https://nextadmindashboard-ek5v.vercel.app/",
  },
  {
    id: 6,
    title: "Spotify Clone",
    description: "A Spotify clone application featuring music streaming functionality, playlists, and user authentication.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["React", "Next.js", "Supabase", "Stripe"],
    githubLink: "https://github.com/Ashking92/spotify-clone",
    demoLink: "https://spotify-clone-sigma-ashen.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-portfolio-navy to-portfolio-dark-blue">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Featured Projects</h2>
          <p className="text-portfolio-gray max-w-3xl mx-auto">
            Explore some of my latest projects, showcasing a blend of creativity and technical expertise.
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
              <Card className="group h-full bg-gradient-to-br from-portfolio-dark-blue/90 to-portfolio-navy/90 border-portfolio-light-blue/20 hover:border-portfolio-light-blue/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-portfolio-light-blue/20">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark-blue/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-between items-center">
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-portfolio-light-blue hover:text-portfolio-light-orange hover:bg-portfolio-light-blue/10"
                            >
                              <Github className="w-5 h-5" />
                            </Button>
                          </HoverCardTrigger>
                          <HoverCardContent className="bg-portfolio-dark-blue/95 border-portfolio-light-blue/30">
                            <p className="text-portfolio-white">View Source Code</p>
                          </HoverCardContent>
                        </HoverCard>
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-portfolio-light-blue hover:text-portfolio-light-orange hover:bg-portfolio-light-blue/10"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Button>
                          </HoverCardTrigger>
                          <HoverCardContent className="bg-portfolio-dark-blue/95 border-portfolio-light-blue/30">
                            <p className="text-portfolio-white">View Live Demo</p>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-portfolio-white mb-2 group-hover:text-portfolio-light-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-portfolio-gray mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge 
                        key={i}
                        variant="outline"
                        className="bg-portfolio-light-blue/10 text-portfolio-light-blue border-portfolio-light-blue/20 hover:bg-portfolio-light-blue/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3 mt-4">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className="w-1/2 border-portfolio-light-blue text-portfolio-light-blue hover:bg-portfolio-light-blue/10 hover:text-portfolio-light-orange"
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      size="sm" 
                      className="w-1/2 bg-portfolio-light-blue hover:bg-portfolio-blue text-white"
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 w-4 h-4" />
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
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-portfolio-light-blue text-portfolio-light-blue hover:bg-portfolio-light-blue/10 hover:text-portfolio-light-orange"
          >
            <a 
              href="https://github.com/Ashking92" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
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
