import { memo } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';

const Section = ({
  id,
  title,
  icon,
  content,
  loading = false,
  bgClass = "bg-white",
  titleColor = "text-gray-900"
}) => {
  return (
    <section id={id} className={`section-padding ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {title && (
            <motion.h2
              className={`text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3 ${titleColor}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {icon && <span className="text-indigo-600">{icon}</span>}
              {title}
            </motion.h2>
          )}

          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          ) : (
            <motion.div
              className="markdown-content"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
              >
                {content}
              </ReactMarkdown>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(Section);
