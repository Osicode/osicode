import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Download from './pages/Download';
import About from './pages/About';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      document.body.classList.add('has-custom-cursor');
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${clicking ? 'clicking' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      🚀
    </div>
  );
};

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -1000, transition: { duration: 1, ease: "easeInOut" } }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'var(--bg-space)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999999
      }}
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ marginBottom: '2rem' }}
      >
        <img src={`${import.meta.env.BASE_URL}assets/icon.png`} alt="OsiCode Loading" style={{ width: '100px', filter: 'drop-shadow(0 0 20px var(--accent-cyan))' }} />
      </motion.div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 500);
        }}
        style={{
          height: 4,
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-pink))',
          borderRadius: 2,
          marginTop: '2rem'
        }}
      />
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'white', marginTop: '1rem', letterSpacing: '4px' }}>
        IGNITION SEQUENCE START
      </h2>
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/download" element={<Download />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <CustomCursor />
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <Layout>
          <AnimatedRoutes />
        </Layout>
      )}
    </Router>
  );
}

export default App;

