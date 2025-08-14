import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaVenusMars, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaUser, FaBriefcase, FaGraduationCap, FaCode, FaLanguage, FaCertificate } from 'react-icons/fa';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Resume = () => {
  useEffect(() => {
    document.body.classList.add('bg-black');
    return () => {
      document.body.classList.remove('bg-black');
    };
  }, []);

  const cardVariants = {
    offscreen: {
      y: 30,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.6
      }
    }
  };

  return (
    <div className="bg-black font-sans text-gray-200 min-h-screen mt-20 py-4 px-3 sm:py-8 sm:px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.header 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
          className="bg-gray-900 rounded-lg shadow-lg overflow-hidden mb-4 sm:mb-6 border border-gray-800"
        >
          <div className="p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">Adnan Asad</h1>
            <p className="text-base sm:text-lg text-gray-400 mb-3 sm:mb-4">Full Stack Developer | Data Scientist | Machine Learning Engineer</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center">
                <FaVenusMars className="mr-2 text-blue-400 text-sm sm:text-base" />
                <span>Male</span>
              </div>
              
              <div className="flex items-center">
                <FaPhone className="mr-2 text-blue-400 text-sm sm:text-base" />
                <a 
                  href="tel:+9203043983892" 
                  className="hover:text-blue-400 transition-colors break-all"
                >
                  (+92) 304-3983892
                </a>
              </div>
              
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-400 text-sm sm:text-base" />
                <a 
                  href="mailto:binasad126@gmail.com" 
                  className="hover:text-blue-400 transition-colors break-all"
                >
                  binasad126@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <FaLinkedin className="mr-2 text-blue-400 text-sm sm:text-base" />
                <a 
                  href="https://linkedin.com/in/eng-adnan-asad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors break-all"
                >
                  linkedin.com/in/eng-adnan-asad
                </a>
              </div>
              
              <div className="flex items-center">
                <FaWhatsapp className="mr-2 text-blue-400 text-sm sm:text-base" />
                <a 
                  href="https://wa.me/923043983892" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors break-all"
                >
                  0304-3983892
                </a>
              </div>
              
              <div className="sm:col-span-2 flex items-start">
                <FaMapMarkerAlt className="mr-2 text-blue-400 mt-0.5 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm">
                  Pakistan
                </span>
              </div>
            </div>
          </div>
        </motion.header>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-4 sm:space-y-6">
            {/* About Me */}
            <motion.section 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 border border-gray-800"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 border-b-2 border-blue-500 pb-1 sm:pb-2 flex items-center">
                <FaUser className="mr-2 text-blue-400 text-sm sm:text-base" />
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Results-driven Full Stack Developer with 2.5+ years of professional experience in Frontend and Backend development. Skilled in building scalable web applications, API integration, and data-driven solutions. Experienced in Laravel, Python (Django, ML, Data Mining), and modern frontend frameworks. Expert in web scraping with 150+ scrapers built, API development, and machine learning applications. Adept at working in collaborative environments and delivering user-focused solutions with high-quality code.
              </p>
            </motion.section>

            {/* Work Experience */}
            <motion.section 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 border border-gray-800"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 border-b-2 border-blue-500 pb-1 sm:pb-2 flex items-center">
                <FaBriefcase className="mr-2 text-blue-400 text-sm sm:text-base" />
                WORK EXPERIENCE
              </h2>
              
              {/* Current Job */}
              <div className="mb-4 sm:mb-6">
                <h3 className="font-bold text-base sm:text-lg text-white">YoshaySoft Tech</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-gray-400 mb-2">
                  <span className="font-medium text-sm sm:text-base">Full Stack Developer</span>
                  <span className="text-xs sm:text-sm bg-green-900 text-green-300 px-2 py-1 rounded mt-1 sm:mt-0">Sept 2024 - Present</span>
                </div>
                <ul className="text-gray-300 text-xs sm:text-sm mt-2 space-y-1">
                  <li>• Designed and implemented scalable backend APIs</li>
                  <li>• Developed Python-based scrapers and data processing tools</li>
                  <li>• Created dashboards for client analytics and reporting</li>
                </ul>
              </div>

              {/* Previous Job */}
              <div className="mb-3 sm:mb-4">
                <h3 className="font-bold text-base sm:text-lg text-white">Codesinc</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-gray-400 mb-2">
                  <span className="font-medium text-sm sm:text-base">Full Stack Developer</span>
                  <span className="text-xs sm:text-sm bg-blue-900 text-blue-300 px-2 py-1 rounded mt-1 sm:mt-0">Oct 2022 - Aug 2024</span>
                </div>
                <ul className="text-gray-300 text-xs sm:text-sm mt-2 space-y-1">
                  <li>• Developed and maintained Laravel & Django-based applications</li>
                  <li>• Integrated APIs for various client projects</li>
                  <li>• Worked on Shopify integrations with Laravel backends</li>
                </ul>
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 border border-gray-800"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 border-b-2 border-blue-500 pb-1 sm:pb-2 flex items-center">
                <FaCode className="mr-2 text-blue-400 text-sm sm:text-base" />
                KEY PROJECTS
              </h2>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Laravel/Livewire Projects:</h4>
                  <ul className="text-gray-300 text-xs sm:text-sm mt-1 ml-4 space-y-0.5">
                    <li>• Etihad Grabia APIs - Backend APIs for multi-services provider</li>
                    <li>• LMS APIs - Learning Management System APIs</li>
                    <li>• CRM (Questify) - Social media follower packages subscription</li>
                    <li>• Quicksignage, Signmaker, Signns - E-commerce signage platforms</li>
                    <li>• Alabeera International Institute - Online Quran academy</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">Python Projects:</h4>
                  <ul className="text-gray-300 text-xs sm:text-sm mt-1 ml-4 space-y-0.5">
                    <li>• Talkless (Lead Developer) - Desktop app for live calls</li>
                    <li>• Dictionary Project - API-powered dictionary system</li>
                    <li>• 150+ Web Scrapers - Data extraction from various sources</li>
                    <li>• Deep Learning Projects - AI model experimentation</li>
                    <li>• ML Data Mining & Visualization - Large dataset analysis</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Education */}
            <motion.section 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 border border-gray-800"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 border-b-2 border-blue-500 pb-1 sm:pb-2 flex items-center">
                <FaGraduationCap className="mr-2 text-blue-400 text-sm sm:text-base" />
                EDUCATION
              </h2>
              <div className="mb-3 sm:mb-4">
                <h3 className="font-bold text-base sm:text-lg text-white">SOFTWARE ENGINEERING</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-gray-400 mb-1 sm:mb-2">
                  <span className="font-medium text-sm sm:text-base">Bachelor's Degree</span>
                  <span className="text-xs sm:text-sm bg-blue-900 text-blue-300 px-2 py-1 rounded mt-1 sm:mt-0">Graduated</span>
                </div>
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 border border-gray-800"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 border-b-2 border-blue-500 pb-1 sm:pb-2 flex items-center">
                <FaCertificate className="mr-2 text-blue-400 text-sm sm:text-base" />
                CERTIFICATIONS
              </h2>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-medium text-white text-sm sm:text-base">Python for Data Science</span>
                  <span className="text-xs sm:text-sm bg-purple-900 text-purple-300 px-2 py-1 rounded mt-1 sm:mt-0">2024</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <span className="font-medium text-white text-sm sm:text-base">Data Visualization and Cognos Dashboard</span>
                  <span className="text-xs sm:text-sm bg-purple-900 text-purple-300 px-2 py-1 rounded mt-1 sm:mt-0">2024</span>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Technical Skills */}
            <motion.section 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 border border-gray-800"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 border-b-2 border-blue-500 pb-1 sm:pb-2 flex items-center">
                <FaCode className="mr-2 text-blue-400 text-sm sm:text-base" />
                TECHNICAL SKILLS
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm mb-2">Programming & Scripting:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Python'].map((skill) => (
                      <span key={skill} className="bg-blue-900 text-blue-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm mb-2">Frameworks & Libraries:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {['Laravel', 'Livewire', 'Django', 'React.js', 'jQuery', 'Bootstrap', 'Tailwind CSS'].map((skill) => (
                      <span key={skill} className="bg-green-900 text-green-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm mb-2">Data Science & ML:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {['Data Mining', 'Web Scraping', 'Deep Learning', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'].map((skill) => (
                      <span key={skill} className="bg-purple-900 text-purple-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm mb-2">Tools & Platforms:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {['Git & GitHub', 'VS Code', 'Postman', 'Shopify', 'WordPress', 'Jupyter Notebook'].map((skill) => (
                      <span key={skill} className="bg-yellow-900 text-yellow-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm mb-2">Database Management:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {['MySQL', 'SQLite'].map((skill) => (
                      <span key={skill} className="bg-red-900 text-red-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Languages */}
            <motion.section 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 border border-gray-800"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 border-b-2 border-blue-500 pb-1 sm:pb-2 flex items-center">
                <FaLanguage className="mr-2 text-blue-400 text-sm sm:text-base" />
                LANGUAGE SKILLS
              </h2>
              
              <div className="mb-3 sm:mb-4">
                <h3 className="font-medium text-white mb-1 sm:mb-2 text-sm sm:text-base">Native Languages:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Urdu', 'Punjabi'].map((lang) => (
                    <span key={lang} className="bg-blue-900 text-blue-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-3 sm:mb-4">
                <h3 className="font-medium text-white mb-1 sm:mb-2 text-sm sm:text-base">Fluent Languages:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Saraiki', 'Balochi'].map((lang) => (
                    <span key={lang} className="bg-green-900 text-green-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-white mb-1 sm:mb-2 text-sm sm:text-base">Professional Language:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-800 text-xs sm:text-sm rounded-lg overflow-hidden">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="py-1 sm:py-2 px-2 sm:px-4 text-left text-gray-300">Language</th>
                        <th className="py-1 sm:py-2 px-2 sm:px-4 text-left text-gray-300">Understanding</th>
                        <th className="py-1 sm:py-2 px-2 sm:px-4 text-left text-gray-300">Speaking</th>
                        <th className="py-1 sm:py-2 px-2 sm:px-4 text-left text-gray-300">Writing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-700">
                        <td className="py-1 sm:py-2 px-2 sm:px-4 text-gray-300">ENGLISH</td>
                        <td className="py-1 sm:py-2 px-2 sm:px-4 text-gray-300">C1</td>
                        <td className="py-1 sm:py-2 px-2 sm:px-4 text-gray-300">B2</td>
                        <td className="py-1 sm:py-2 px-2 sm:px-4 text-gray-300">C1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xxs sm:text-xs text-gray-500 mt-1 sm:mt-2">
                  Common European Framework of Reference for Languages: C1 = Proficient user | B2 = Independent user
                </p>
              </div>
            </motion.section>

            {/* Key Achievements */}
            <motion.section 
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 border border-gray-800"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 border-b-2 border-blue-500 pb-1 sm:pb-2 flex items-center">
                <FaCertificate className="mr-2 text-blue-400 text-sm sm:text-base" />
                KEY ACHIEVEMENTS
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                  <span className="text-gray-300 text-sm">Web Scrapers Built</span>
                  <span className="text-blue-400 font-bold text-lg">150+</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                  <span className="text-gray-300 text-sm">Years Experience</span>
                  <span className="text-green-400 font-bold text-lg">2.5+</span>
                </div>
                <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                  <span className="text-gray-300 text-sm">LMS & CRM Systems</span>
                  <span className="text-purple-400 font-bold text-lg">Multiple</span>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;