import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = ({ copyrightText, githubLink = "https://github.com/thoailt" }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: githubLink,
      color: 'hover:text-purple-300'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:thoailt@hcmue.edu.vn',
      color: 'hover:text-pink-300'
    }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-12">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`text-white/80 transition-colors duration-200 ${link.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            className="text-white/90 text-sm space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div dangerouslySetInnerHTML={{ __html: copyrightText || `${currentYear} © Thoai Le` }} />
            <div className="text-white/70 flex items-center justify-center gap-1">
              Made with <FaHeart className="text-pink-300 animate-pulse h-4 w-4" /> using React + Vite
            </div>
            <div className="text-white/60 text-xs">
              Original template by{' '}
              <a
                href="https://github.com/senli1073/senli1073.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline transition-colors"
              >
                Sen Li
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
