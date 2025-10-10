import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaGraduationCap, FaMicroscope, FaUniversity } from 'react-icons/fa';

// Check if user prefers reduced motion
const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const AboutSection = ({ content }) => {
  const shouldAnimate = !prefersReducedMotion();
  const infoCards = [
    {
      icon: <FaUniversity className="w-6 h-6" />,
      title: "Current Position",
      description: "Teaching Assistant & Master's Student",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FaMicroscope className="w-6 h-6" />,
      title: "Research Lab",
      description: "AeroSat Vision Lab, NTUT, Taiwan",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Research Interests",
      description: "Computer Vision, Remote Sensing",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="home" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              viewport={{ once: true }}
              transition={shouldAnimate ? { duration: 0.3, delay: index * 0.1 } : {}}
              whileHover={shouldAnimate ? { y: -8, transition: { duration: 0.2 } } : {}}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${card.color} text-white mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              I'm a teaching assistant and master's student at the <strong className="text-indigo-600">Faculty of Information Technology, Ho Chi Minh City University of Education, Vietnam</strong>. I am conducting my research under the supervision of <strong className="text-purple-600">Asst. Prof. Trong-An Bui</strong> at the <a href="https://asvlab.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-purple-600 transition-colors">AeroSat Vision Lab</a>, National Taipei University of Technology (NTUT), Taiwan, and co-supervised by <strong className="text-purple-600">Dr. Hai-Son Tran</strong>, Faculty of Information Technology, HCMUE.
            </p>

            {/* Contact & Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://github.com/thoailt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg"
              >
                <FaGithub className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="mailto:thoailt@hcmue.edu.vn"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
              >
                <FaEnvelope className="w-5 h-5" />
                <span className="font-medium">thoailt@hcmue.edu.vn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaGraduationCap className="text-indigo-600" />
            Education
          </h3>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-indigo-600">
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  2023.10 - Present
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">Computer Science (Research)</h4>
              <p className="text-gray-600">Faculty of Information Technology, Ho Chi Minh City University of Education, Vietnam</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-600">
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  2019.09 - 2023.06
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">Information Technology (Software Engineer)</h4>
              <p className="text-gray-600 mb-4">Faculty of Information Technology, Ho Chi Minh City University of Education, Vietnam</p>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                    3.67/4.0
                  </div>
                  <div className="text-xs text-gray-600 mt-1">GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    6
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Scholarships</div>
                </div>
                <div className="text-center col-span-2 md:col-span-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Excellent
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Graduation</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
