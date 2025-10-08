import { motion } from 'framer-motion';
import { FaFileAlt, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

const PublicationsSection = () => {
  const publications = [
    {
      year: "2024",
      title: "Utilization of electronic documents in handling Vietnam national union of students and student's movement affairs",
      authors: "V.L Phuc, N.P.H Anh, N.T.K Anh and L.T Thoai",
      venue: "Proceedings The second scientific conference of global Vietnamese young scientifics",
      publisher: "Hanoi National University Publishing",
      color: "indigo"
    },
    {
      year: "2022",
      title: "Product Information Lookup System Based On Images",
      authors: "Le Thanh Thoai, Huynh Anh Du",
      supervisor: "Dr. Tran Son Hai",
      venue: "Proceedings of the Student Scientific Research Conference 2021 - 2022 school year",
      publisher: "Ho Chi Minh City University of Education Publishing",
      color: "purple"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
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
            <FaFileAlt className="text-4xl text-indigo-600" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Publications
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400"></div>

          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-${pub.color}-600 ring-4 ring-white transform -translate-x-1/2 md:translate-x-0`}></div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  {/* Year Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <FaCalendarAlt className={`text-${pub.color}-600`} />
                    <span className={`text-sm font-bold text-${pub.color}-600 bg-${pub.color}-50 px-3 py-1 rounded-full`}>
                      {pub.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <p className="text-gray-700 mb-2 text-sm">
                    <strong>Authors:</strong> {pub.authors}
                  </p>

                  {/* Supervisor if exists */}
                  {pub.supervisor && (
                    <p className="text-gray-700 mb-2 text-sm">
                      <strong>Supervisor:</strong> {pub.supervisor}
                    </p>
                  )}

                  {/* Venue */}
                  <p className="text-gray-600 mb-1 text-sm italic">
                    {pub.venue}
                  </p>

                  {/* Publisher */}
                  <p className="text-gray-500 text-sm">
                    {pub.publisher}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {publications.length}
            </div>
            <div className="text-gray-600">Publications</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-gray-600">Years Active</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-gray-600">Conference Papers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;
