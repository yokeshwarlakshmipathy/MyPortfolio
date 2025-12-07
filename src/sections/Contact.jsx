import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import Section from '../components/Section';
import { personalInfo } from '../data';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only - would typically send to backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's Work Together"
      className="gradient-bg"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {personalInfo.email}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone}`}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] border border-gray-200/50 dark:border-gray-700/50 group"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {personalInfo.phone}
                  </p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="secondary"
                href={personalInfo.github}
                icon={Github}
              >
                GitHub
              </Button>
              <Button
                variant="secondary"
                href={personalInfo.linkedin}
                icon={Linkedin}
              >
                LinkedIn
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="card-gradient rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200/60 dark:border-gray-800/60 relative overflow-hidden"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm hover:shadow-md"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none shadow-sm hover:shadow-md"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                icon={Send}
                className="w-full"
              >
                Send Message
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
