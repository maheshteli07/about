import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../components/AnimatedSection';

const AboutUs = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

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
          className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full opacity-20 blur-3xl"
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
          className="absolute bottom-20 left-10 w-96 h-96 bg-pink-300 rounded-full opacity-20 blur-3xl"
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
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={pageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-black mb-6"
            >
              About Our Company
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={pageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
            >
              We're a team of passionate innovators dedicated to creating exceptional experiences 
              that make a difference in people's lives.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={pageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center space-x-4"
            >
              <div className="w-16 h-1 bg-pink-500 rounded"></div>
              <span className="text-gray-500 font-medium">Est. 2020</span>
              <div className="w-16 h-1 bg-pink-500 rounded"></div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Mission</h2>
                <div className="w-24 h-1 bg-pink-500 mx-auto rounded"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to empower businesses and individuals through innovative solutions 
                    that transform challenges into opportunities. We believe in the power of technology 
                    to create meaningful connections and drive positive change in the world.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    By combining cutting-edge technology with human-centered design, we create 
                    experiences that are not only functional but also delightful and inspiring.
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative"
                >
                  <img 
                    src="https://picsum.photos/seed/mission/600/400" 
                    alt="Our Mission" 
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-2xl"></div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-4 bg-pink-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Vision</h2>
                <div className="w-24 h-1 bg-pink-500 mx-auto rounded"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative order-2 md:order-1"
                >
                  <img 
                    src="https://picsum.photos/seed/vision/600/400" 
                    alt="Our Vision" 
                    className="rounded-2xl shadow-2xl w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent rounded-2xl"></div>
                </motion.div>
                <div className="order-1 md:order-2">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We envision a future where technology seamlessly integrates with human life, 
                    enhancing our capabilities and bringing us closer together. Our goal is to be at 
                    the forefront of this transformation, leading the way with innovative solutions 
                    that set new standards for excellence.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Through continuous learning and adaptation, we strive to create a world where 
                    everyone has access to the tools and opportunities they need to thrive.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Values</h2>
                <div className="w-24 h-1 bg-pink-500 mx-auto rounded"></div>
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={value.id} delay={0.2 + index * 0.1}>
                  <motion.div
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100 text-center"
                  >
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-pink-50">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Meet Our Team</h2>
                <div className="w-24 h-1 bg-pink-500 mx-auto rounded"></div>
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedSection key={member.id} delay={0.2 + index * 0.1}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                          <p className="text-sm opacity-90">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold text-black">{member.name}</h3>
                      <p className="text-pink-600 font-medium">{member.role}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join Our Journey?
              </h2>
              <p className="text-xl text-pink-100 mb-8">
                Be part of our story and help us shape the future together.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <button className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-colors duration-300 shadow-lg">
                  Get in Touch
                </button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutUs;