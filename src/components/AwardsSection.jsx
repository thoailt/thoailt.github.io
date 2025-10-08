import { motion } from 'framer-motion';
import { FaAward, FaTrophy, FaMedal, FaStar, FaExternalLinkAlt } from 'react-icons/fa';

const AwardsSection = () => {
  const awards = [
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: "Outstanding Student with five good merits",
      level: "Central Level",
      year: "2023",
      color: "from-yellow-400 to-orange-500",
      highlight: true
    },
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: "Student with five good merits",
      level: "Central Level",
      year: "2022",
      color: "from-indigo-400 to-purple-500",
      highlight: true
    },
    {
      icon: <FaStar className="w-8 h-8" />,
      title: "Excellent Graduation",
      level: "GPA: 3.67/4.0",
      year: "2023",
      color: "from-purple-400 to-pink-500",
      highlight: false
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Academic Incentive Scholarship of HCMUE",
      level: "6 Terms",
      year: "2019 - 2023",
      color: "from-pink-400 to-rose-500",
      highlight: false
    }
  ];

  const mediaLinks = [
    {
      title: "Thanh Niên News",
      url: "https://thanhnien.vn/chang-thu-khoa-gioi-giang-va-dien-trai-185230815203217782.htm",
      icon: "📰"
    },
    {
      title: "Tiền Phong News",
      url: "https://svvn.tienphong.vn/chang-sinh-vien-5-tot-la-dang-vien-lien-tiep-dat-hoc-bong-trong-hoc-tap-post1516601.tpo",
      icon: "📄"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FaTrophy className="text-4xl text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Awards & Honors
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                award.highlight ? 'border-yellow-400' : 'border-gray-100'
              } h-full relative overflow-hidden`}>
                {/* Glow Effect for Highlights */}
                {award.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${award.color} text-white mb-4 shadow-lg`}>
                    {award.icon}
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-0 right-0">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {award.title}
                  </h3>

                  {/* Level */}
                  <p className={`text-sm font-semibold bg-gradient-to-r ${award.color} bg-clip-text text-transparent`}>
                    {award.level}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">📺</span>
            Media Coverage
          </h3>
          <div className="flex flex-wrap gap-4">
            {mediaLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white transition-all shadow-lg"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="font-medium">{link.title}</span>
                <FaExternalLinkAlt className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AwardsSection;
