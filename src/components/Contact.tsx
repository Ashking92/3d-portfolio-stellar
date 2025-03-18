
import { motion } from 'framer-motion';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactCharacter from './ContactCharacter';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-portfolio-dark-blue/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading mx-auto">Contact Me</h2>
          <p className="text-portfolio-gray max-w-3xl mx-auto">
            Feel free to reach out to me for collaborations, job opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      
      <ContactCharacter />
    </section>
  );
};

export default Contact;
