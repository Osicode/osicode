import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="section">
        <div className="container">
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{ flex: '1 1 400px' }}
            >
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{
                  position: 'absolute', top: '-20px', left: '-20px', right: '-20px', bottom: '-20px',
                  background: 'linear-gradient(45deg, var(--accent-cyan), var(--accent-purple))',
                  borderRadius: '30px', zIndex: -1, opacity: 0.5, filter: 'blur(20px)'
                }}></div>
                <img 
                  src={`${import.meta.env.BASE_URL}assets/about.png`} 
                  alt="Thomas Etiuzale Osholene" 
                  style={{ width: '100%', maxWidth: '400px', borderRadius: '24px', border: '2px solid rgba(255,255,255,0.1)' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{ 
                  display: 'none', width: '100%', maxWidth: '400px', height: '400px', 
                  background: 'var(--bg-glass)', borderRadius: '24px', border: '2px solid rgba(255,255,255,0.1)',
                  justifyContent: 'center', alignItems: 'center', fontSize: '100px'
                }}>
                  👨‍💻
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ flex: '1 1 500px' }}
            >
              <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                Meet the <span className="text-gradient">Creator</span>
              </h2>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '2rem' }}>
                Thomas Etiuzale Osholene (OsiCode)
              </h3>
              
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                  Hi! I'm Thomas, a passionate software developer from Nigeria. I love creating educational and entertaining experiences for children. <strong>PACKABUNCH</strong> is my first mobile game, designed to boost logic and problem-solving skills through fun space puzzles.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                  As a Math Instructor and a student of Software Development at <strong>BYU-Idaho Online</strong>, I combine teaching experience with coding to build high-quality apps. My goal is to make learning enjoyable and accessible for kids everywhere.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                  When I'm not coding under the <strong>OsiCode</strong> brand, I enjoy teaching math, exploring new technologies, and dreaming up new puzzle ideas. Thank you for supporting my journey!
                </p>
                <p style={{ fontStyle: 'italic', color: 'var(--accent-pink)' }}>
                  Follow me on this space adventure – more exciting games are on the way!
                </p>
                
                <div style={{ display: 'flex', gap: '15px', marginTop: '2rem' }}>
                  <a href="https://www.linkedin.com/in/thomas-etiuzale" target="_blank" rel="noreferrer" className="interactive" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 15px', borderRadius: '20px', fontSize: '14px', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="fa-brands fa-linkedin" style={{ color: '#0077b5' }}></i> LinkedIn
                  </a>
                  <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>Math Instructor</span>
                  <span style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 15px', borderRadius: '20px', fontSize: '14px' }}>BYU-Idaho Student</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
