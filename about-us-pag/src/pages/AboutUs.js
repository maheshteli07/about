import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../components/AnimatedSection';

const AboutUs = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [hoveredSections, setHoveredSections] = useState([false, false, false, false, false]);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const handleSectionHover = (index) => {
    const newHoveredSections = [...hoveredSections];
    newHoveredSections[index] = true;
    setHoveredSections(newHoveredSections);
  };

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://picsum.photos/seed/sarah/300/300',
      bio: 'Leading with vision and passion for innovation.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://picsum.photos/seed/michael/300/300',
      bio: 'Driving technological excellence and growth.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Design Director',
      image: 'https://picsum.photos/seed/emily/300/300',
      bio: 'Creating beautiful and functional experiences.',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Head of Operations',
      image: 'https://picsum.photos/seed/david/300/300',
      bio: 'Ensuring smooth and efficient operations.',
    },
  ];

  // Values data
  const values = [
    {
      id: 1,
      title: 'Innovation',
      description: 'We embrace creativity and push boundaries to deliver cutting-edge solutions.',
      icon: '💡',
    },
    {
      id: 2,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles in all we do.',
      icon: '🤝',
    },
    {
      id: 3,
      title: 'Excellence',
      description: 'We strive for the highest quality in every project and interaction.',
      icon: '⭐',
    },
    {
      id: 4,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.',
      icon: '🌟',
    },
  ];

  // Social media data with actual logos
  const socialMedia = [
    {
      id: 1,
      name: 'Instagram',
      logo: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      ),
      link: '#', // Add Instagram link here
      color: '#E1306C',
    },
    {
      id: 2,
      name: 'YouTube',
      logo: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      link: '#', // Add YouTube link here
      color: '#FF0000',
    },
    {
      id: 3,
      name: 'Gmail',
      logo: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      link: '#', // Add Gmail link here
      color: '#EA4335',
    },
    {
      id: 4,
      name: 'LinkedIn',
      logo: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      link: '#', // Add LinkedIn link here
      color: '#0077B5',
    },
    {
      id: 5,
      name: 'Telegram',
      logo: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.95 6.41-.09.49-.27.65-.44.67-.37.04-.65-.23-.96-.45-.53-.37-1.32-.92-1.89-1.19-.49-.23-.84-.01-1.14.24-.63.54-.49.42-1.53 1.64-.35.41-.65.61-1.01.59-.26-.01-.85-.15-1.26-.27-1.04-.32-1.86-.5-1.79-1.05.04-.28.4-.57 1.08-.86 3.11-1.46 5.18-2.42 6.22-2.9 2.96-1.39 3.58-1.63 3.99-1.63.09 0 .29.02.42.12.12.1.15.23.17.33.01.08.01.15-.01.27z"/>
        </svg>
      ),
      link: '#', // Add Telegram link here
      color: '#0088CC',
    },
  ];

  // Parallax background component
  const ParallaxBackground = () => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0,
    });

    return (
      <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-50 to-white"
          style={{ y: inView ? [0, -50, 0] : 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-20 right-10 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-pink-200 rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-pink-300 rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    );
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <ParallaxBackground />
        
        {/* Hero Section */}
        <section 
          className={`relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 mb-6 sm:mb-8 transition-all duration-500 ${
            hoveredSections[0] ? 'border-4 border-pink-300 rounded-xl shadow-lg bg-pink-50' : ''
          }`}
          onMouseEnter={() => handleSectionHover(0)}
        >
          <div className="max-w-6xl mx-auto text-center px-2">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={pageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-4 sm:mb-6 heading-underline"
            >
              IEEE SIT SB
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={pageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-base sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto"
            >
              IEEE SIT SB is an IEEE Student Branch in SIT under the IEEE Bangalore Section wing.The team envisions to organize activities which reflect the intent of young minds and put forth the ingenuity that the team holds about a better tomorrow. The members take part in various global and national IEEE symposiums, conferences and workshops to comprehend the trending and upcoming technologies considering a number of domains. IEEE SIT SB renders various technical fields of interest having pioneered an array of subgroups to cater a nurturing platform for the members. To name a few subgroups are Robotics, Web development, App development, Blogging and Digital Design
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={pageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center space-x-4"
            >
              <div className="w-12 h-1 sm:w-16 bg-pink-500 rounded"></div>
              <span className="text-gray-500 font-medium text-sm sm:text-base">Est. 2002</span>
              <div className="w-12 h-1 sm:w-16 bg-pink-500 rounded"></div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section 
          className={`py-12 sm:py-16 md:py-20 px-4 bg-white mb-6 sm:mb-8 transition-all duration-500 ${
            hoveredSections[1] ? 'border-4 border-pink-200 rounded-xl shadow-lg bg-pink-50' : ''
          }`}
          onMouseEnter={() => handleSectionHover(1)}
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 heading-underline">WIE IEEE SIT SB</h2>
                <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto rounded"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="p-4 sm:p-6 rounded-xl border-2 border-pink-100 bg-pink-50">
                  <p className="text-base sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    WIE IEEE SIT SB under the aegis of IEEE SIT SB points out at advancing and encouraging women in the technical domain and to transform them into innovative engineers. It aims at aiding and comforting women in the automated era whose contribution to the society globally has only been linear. WIE IEEE SIT SB believes that by transforming a group of young women can actually change the course of technology considering the dedication, determination, passion and compassion they possess. The activities organised are not just technical symposiums but also humanitarian activities to cater the basic needs of an orphan or teaching exercises for under privileged students in the rural areas.
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  className="relative"
                >
                  <img 
                    src="https://ieeesbcek.org/images/wie.png" 
                    alt="Our Mission" 
                    className="rounded-2xl shadow-2xl w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-2xl"></div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Vision Section */}
        <section 
          className={`py-12 sm:py-16 md:py-20 px-4 bg-pink-50 mb-6 sm:mb-8 transition-all duration-500 ${
            hoveredSections[2] ? 'border-4 border-pink-300 rounded-xl shadow-lg bg-white' : ''
          }`}
          onMouseEnter={() => handleSectionHover(2)}
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 heading-underline">WIE CODE</h2>
                <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto rounded"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  className="relative order-2 md:order-1"
                >
                  <img 
                    src="https://picsum.photos/seed/vision/600/400" 
                    alt="Our Vision" 
                    className="rounded-2xl shadow-2xl w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent rounded-2xl"></div>
                </motion.div>
                <div className="order-1 md:order-2 p-4 sm:p-6 rounded-xl border-2 border-pink-200 bg-white">
                  <p className="text-base sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    WIE CODE is the flag ship event formulated by WIE IEEE SIT SB which is a 12 hour National Level hackathon contemplating the real world problems to build a software or a hardware solution opting the domain of interest. WIE Code started in the year 2019-20 and has been anticipated each year ever since. It aims at encouraging women in the field of technology to build the real time problems a palpable and pertinent solution. WIE Code sets a theme throwing light on the much accepted fact that innovation can change the course of technology. It is a mere attempt at making the attendees thoughtful and inventive through vigorous mentoring and a competitive environment. The event has gathered enough crowd every year to have made it to the list of being of the most triumphant events hosted by WIE IEEE SIT SB.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Values Section */}
        <section 
          className={`py-12 sm:py-16 md:py-20 px-4 bg-white mb-6 sm:mb-8 transition-all duration-500 ${
            hoveredSections[3] ? 'border-4 border-pink-200 rounded-xl shadow-lg bg-pink-50' : ''
          }`}
          onMouseEnter={() => handleSectionHover(3)}
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 heading-underline">Our Values</h2>
                <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto rounded"></div>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={value.id} delay={0.2 + index * 0.1}>
                  <motion.div
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 20px 40px rgba(236, 72, 153, 0.15)'
                    }}
                    className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-pink-100 text-center"
                  >
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{value.icon}</div>
                    <h3 className="text-base sm:text-base md:text-lg font-bold text-black mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-base sm:text-base md:text-lg text-gray-700">{value.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section 
          className={`py-8 sm:py-12 px-4 bg-pink-50 mb-6 sm:mb-8 transition-all duration-500 ${
            hoveredSections[4] ? 'border-4 border-pink-300 rounded-xl shadow-lg bg-white' : ''
          }`}
          onMouseEnter={() => handleSectionHover(4)}
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="text-center mb-6 sm:mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 heading-underline">Follow Us</h2>
                <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto rounded"></div>
              </div>
            </AnimatedSection>
            
            <div className="flex justify-center space-x-6 sm:space-x-8">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md transition-all duration-300"
                  style={{ color: social.color }}
                  title={social.name}
                >
                  {social.logo}
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-black text-white text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-base md:text-lg"
          >
            © 2025 IEEE SIT SB. All rights reserved.
          </motion.p>
        </footer>
        
        <style jsx global>{`
          .heading-underline {
            position: relative;
            display: inline-block;
          }
          
          .heading-underline::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 50%;
            width: 0;
            height: 3px;
            background: #ec4899;
            transform: translateX(-50%);
            transition: width 0.5s ease;
          }
          
          .heading-underline:hover::after {
            width: 100%;
          }
          
          @media (max-width: 640px) {
            .heading-underline::after {
              bottom: -6px;
              height: 2px;
            }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUs;