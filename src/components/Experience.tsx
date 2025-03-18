
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card } from './ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-portfolio-dark-blue/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Experience & Education</h2>
          <p className="text-portfolio-gray max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase size={24} className="text-portfolio-light-blue mr-3" />
              <h3 className="text-2xl font-bold text-portfolio-white">Work Experience</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-portfolio-teal/30">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-portfolio-navy border-2 border-portfolio-light-blue flex items-center justify-center">
                  <span className="text-portfolio-light-blue">1</span>
                </div>
                <Card className="bg-portfolio-dark-blue/50 border-portfolio-teal p-6">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="text-xl font-semibold text-portfolio-white">Fund Raising - Internship</h4>
                    <span className="text-portfolio-light-blue text-sm bg-portfolio-light-blue/10 px-3 py-1 rounded-full">
                      Mar 2024 - Present
                    </span>
                  </div>
                  <h5 className="text-portfolio-light-gray mb-3">Inamigos Foundation, Virtual</h5>
                  <p className="text-portfolio-gray">
                    Working on fundraising campaigns and strategies for the nonprofit organization, helping to support their mission and community initiatives.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-portfolio-navy border-2 border-portfolio-light-blue flex items-center justify-center">
                  <span className="text-portfolio-light-blue">2</span>
                </div>
                <Card className="bg-portfolio-dark-blue/50 border-portfolio-teal p-6">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="text-xl font-semibold text-portfolio-white">Web & App Developer</h4>
                    <span className="text-portfolio-light-blue text-sm bg-portfolio-light-blue/10 px-3 py-1 rounded-full">
                      Mar 2023 - Sep 2023
                    </span>
                  </div>
                  <h5 className="text-portfolio-light-gray mb-3">Freelance, Virtual</h5>
                  <p className="text-portfolio-gray">
                    Developed and maintained websites and applications using React.js, Next.js, Firebase, and Tailwind CSS. Collaborated on multiple projects, delivering responsive and user-friendly web solutions.
                  </p>
                  <p className="text-portfolio-gray mt-2">
                    GitHub: Showcasing multiple projects, including web and app development using React.js, Next.js, Firebase, and Tailwind CSS. Active in open-source contributions and real-time app development.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap size={24} className="text-portfolio-light-blue mr-3" />
              <h3 className="text-2xl font-bold text-portfolio-white">Education</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-portfolio-teal/30">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-portfolio-navy border-2 border-portfolio-light-blue flex items-center justify-center">
                  <span className="text-portfolio-light-blue">1</span>
                </div>
                <Card className="bg-portfolio-dark-blue/50 border-portfolio-teal p-6">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="text-xl font-semibold text-portfolio-white">Bachelor of Science (B.Sc), Computer Science</h4>
                    <span className="text-portfolio-light-blue text-sm bg-portfolio-light-blue/10 px-3 py-1 rounded-full">
                      2023 - 2026
                    </span>
                  </div>
                  <h5 className="text-portfolio-light-gray mb-3">Theem College Of Engineering</h5>
                  <p className="text-portfolio-gray">
                    Currently pursuing a Bachelor's degree in Computer Science with a focus on software development and web technologies.
                  </p>
                  <p className="text-portfolio-gray mt-2">
                    CGPA: 5.50/10
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-portfolio-navy border-2 border-portfolio-light-blue flex items-center justify-center">
                  <span className="text-portfolio-light-blue">2</span>
                </div>
                <Card className="bg-portfolio-dark-blue/50 border-portfolio-teal p-6">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="text-xl font-semibold text-portfolio-white">Senior Secondary (XII), Science</h4>
                    <span className="text-portfolio-light-blue text-sm bg-portfolio-light-blue/10 px-3 py-1 rounded-full">
                      2023
                    </span>
                  </div>
                  <h5 className="text-portfolio-light-gray mb-3">Sonopant Dandekar Shikshan Mandali</h5>
                  <p className="text-portfolio-gray">
                    Completed Senior Secondary education with a focus on Science subjects.
                  </p>
                  <p className="text-portfolio-gray mt-2">
                    Percentage: 49.50%
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-portfolio-navy border-2 border-portfolio-light-blue flex items-center justify-center">
                  <span className="text-portfolio-light-blue">3</span>
                </div>
                <Card className="bg-portfolio-dark-blue/50 border-portfolio-teal p-6">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="text-xl font-semibold text-portfolio-white">Secondary (X)</h4>
                    <span className="text-portfolio-light-blue text-sm bg-portfolio-light-blue/10 px-3 py-1 rounded-full">
                      2021
                    </span>
                  </div>
                  <h5 className="text-portfolio-light-gray mb-3">R H Save Vidyalaya Tarapur</h5>
                  <p className="text-portfolio-gray">
                    Completed Secondary education with general subjects.
                  </p>
                  <p className="text-portfolio-gray mt-2">
                    Percentage: 70.00%
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <div className="flex items-center mb-8">
            <Award size={24} className="text-portfolio-light-blue mr-3" />
            <h3 className="text-2xl font-bold text-portfolio-white">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-portfolio-dark-blue/50 border-portfolio-teal p-6 hover:shadow-md hover:shadow-portfolio-light-blue/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-portfolio-white mb-3">Website Development</h4>
              <p className="text-portfolio-gray mb-3">Great Learning, Virtual</p>
              <p className="text-portfolio-light-blue text-sm">Mar 2024 - Jun 2024</p>
            </Card>

            <Card className="bg-portfolio-dark-blue/50 border-portfolio-teal p-6 hover:shadow-md hover:shadow-portfolio-light-blue/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-portfolio-white mb-3">Android Application Development</h4>
              <p className="text-portfolio-gray mb-3">Great Learning, Virtual</p>
              <p className="text-portfolio-light-blue text-sm">Mar 2024 - Jun 2024</p>
            </Card>

            <Card className="bg-portfolio-dark-blue/50 border-portfolio-teal p-6 hover:shadow-md hover:shadow-portfolio-light-blue/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-portfolio-white mb-3">Ethical Hacking - Mobile Platforms And Network Architecture</h4>
              <p className="text-portfolio-gray mb-3">Great Learning, Virtual</p>
              <p className="text-portfolio-light-blue text-sm">Mar 2021 - Jun 2021</p>
            </Card>

            <Card className="bg-portfolio-dark-blue/50 border-portfolio-teal p-6 hover:shadow-md hover:shadow-portfolio-light-blue/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-portfolio-white mb-3">Advanced Cyber Security - Threats And Governance</h4>
              <p className="text-portfolio-gray mb-3">Great Learning, Virtual</p>
              <p className="text-portfolio-light-blue text-sm">Apr 2020 - Aug 2020</p>
            </Card>

            <Card className="bg-portfolio-dark-blue/50 border-portfolio-teal p-6 hover:shadow-md hover:shadow-portfolio-light-blue/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-portfolio-white mb-3">Front End Development - CSS</h4>
              <p className="text-portfolio-gray mb-3">Great Learning, Virtual</p>
              <p className="text-portfolio-light-blue text-sm">Feb 2020 - Apr 2020</p>
            </Card>

            <Card className="bg-portfolio-dark-blue/50 border-portfolio-teal p-6 hover:shadow-md hover:shadow-portfolio-light-blue/20 transition-all duration-300">
              <h4 className="text-xl font-semibold text-portfolio-white mb-3">Build A Website Using ChatGPT</h4>
              <p className="text-portfolio-gray mb-3">Great Learning, Virtual</p>
              <p className="text-portfolio-light-blue text-sm">Jan 2020 - Feb 2020</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
