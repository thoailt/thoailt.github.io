import { motion } from 'framer-motion';

const Card = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
