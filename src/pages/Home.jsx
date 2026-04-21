import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="page"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
          
          <motion.div variants={itemVariants} style={{ flex: '1 1 400px' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              The Ultimate Space Puzzle by <br />
              <span className="text-gradient">OsiCode</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Boost your IQ and have fun! <strong>PACKABUNCH</strong> is the ultimate brain-boosting space puzzle for kids. Rescue Blockychums, explore galaxies, and sharpen your mind.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/download" className="btn-primary">Get Packabunch</Link>
              <Link to="/about" className="btn-secondary">Learn More</Link>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '300px', height: '300px', background: 'var(--accent-cyan)', 
                filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%', zIndex: -1
              }}></div>
              <img 
                src="/assets/icon.png" 
                alt="Packabunch Game Icon" 
                style={{ width: '100%', maxWidth: '350px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }} 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <div className="container">
          <motion.h2 variants={itemVariants} style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '1rem' }}>
            Why Play <span className="text-gradient">Packabunch?</span>
          </motion.h2>
          <motion.p variants={itemVariants} style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.2rem' }}>
            ✨ PACKABUNCH makes learning fun – every level challenges young minds! ✨
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <motion.div variants={itemVariants} className="glass-panel" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}><i className="fa-solid fa-brain"></i></div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>Boosts IQ</h3>
              <p style={{ color: 'var(--text-muted)' }}>Strategic puzzle-solving increases logic & memory by up to 30%.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="glass-panel" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-pink)' }}><i className="fa-solid fa-rocket"></i></div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-pink)' }}>Space Adventure</h3>
              <p style={{ color: 'var(--text-muted)' }}>Travel through 3 unique planets, rescue rangers & earn stars.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="glass-panel" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-purple)' }}><i className="fa-solid fa-shield-halved"></i></div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-purple)' }}>Kid-Safe</h3>
              <p style={{ color: 'var(--text-muted)' }}>No data collection, COPPA compliant & parental gate.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="glass-panel" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-yellow)' }}><i className="fa-solid fa-gift"></i></div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-yellow)' }}>Daily Rewards</h3>
              <p style={{ color: 'var(--text-muted)' }}>Keep streak & unlock cool badges and stickers.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Game Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
            
            <motion.div variants={itemVariants} style={{ flex: '1 1 300px' }} className="glass-panel">
              <h2 style={{ fontSize: '2rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-robot" style={{ marginRight: '10px' }}></i>
                Choose Your Robot Companion
              </h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}><strong style={{ color: 'white' }}>Spacey:</strong> Your friendly guide through the cosmos!</li>
                <li style={{ marginBottom: '1rem' }}><strong style={{ color: 'white' }}>Cosmo the Comedian:</strong> Makes space puns and keeps you laughing!</li>
                <li style={{ marginBottom: '1rem' }}><strong style={{ color: 'white' }}>Professor Nova:</strong> Shares amazing space facts!</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} style={{ flex: '1 1 300px' }} className="glass-panel">
              <h2 style={{ fontSize: '2rem', color: 'var(--accent-pink)', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-earth-americas" style={{ marginRight: '10px' }}></i>
                Explore Different Planets
              </h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}><strong style={{ color: 'white' }}>Starry Night:</strong> Dark mode with twinkling stars.</li>
                <li style={{ marginBottom: '1rem' }}><strong style={{ color: 'white' }}>Zeus Realm:</strong> Mortal Kombat style thunder realm.</li>
                <li style={{ marginBottom: '1rem' }}><strong style={{ color: 'white' }}>Sunshine Valley:</strong> Bright and colorful world (default).</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Game Modes Showcase */}
      <section className="section" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <div className="container">
          <motion.h2 variants={itemVariants} style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>
            6 Exciting <span className="text-gradient">Game Modes</span>
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'CLASSIC', desc: '4 pieces, classic puzzle' },
              { title: 'PENTA', desc: '5 pieces, more challenge' },
              { title: 'MIX', desc: 'Mixed sizes, 8 pieces' },
              { title: 'SUPERNOVA', desc: 'Time pressure, rescue Rangers' },
              { title: 'KIDS', desc: 'Larger pieces, easy start' },
              { title: 'EPIC', desc: '3 complex pieces' }
            ].map((mode, i) => (
              <motion.div key={i} variants={itemVariants} className="glass-panel" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>{mode.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{mode.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Home;
