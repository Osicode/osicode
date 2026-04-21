import React from 'react';
import { motion } from 'framer-motion';

const Download = () => {
  return (
    <motion.div 
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            style={{ marginBottom: '3rem' }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}assets/logo_happy.png`} 
              alt="Packabunch" 
              style={{ width: '150px', filter: 'drop-shadow(0 0 20px rgba(0,240,255,0.5))' }}
            />
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
          >
            Get <span className="text-gradient">Packabunch</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}
          >
            Choose your platform – Available on Google Play & direct APK. All downloads are 100% safe, no malware, verified by Google Play Protect.
          </motion.p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="glass-panel" 
              style={{ flex: '1 1 300px', maxWidth: '400px', padding: '3rem 2rem' }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem', color: 'white' }}>
                <i className="fa-brands fa-apple"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>App Store</h3>
              <div style={{ display: 'inline-block', background: 'rgba(255, 255, 255, 0.1)', padding: '10px 20px', borderRadius: '50px', color: 'var(--text-muted)', fontWeight: 'bold' }}>
                Coming Soon
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="glass-panel" 
              style={{ flex: '1 1 300px', maxWidth: '400px', padding: '3rem 2rem' }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem', color: '#3DDC84' }}>
                <i className="fa-brands fa-google-play"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Google Play</h3>
              <div style={{ display: 'inline-block', background: 'rgba(255, 255, 255, 0.1)', padding: '10px 20px', borderRadius: '50px', color: 'var(--text-muted)', fontWeight: 'bold' }}>
                Coming Soon
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="glass-panel" 
              style={{ flex: '1 1 300px', maxWidth: '400px', padding: '3rem 2rem' }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--accent-pink)' }}>
                <i className="fa-brands fa-android"></i>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Direct APK</h3>
              <a href="https://drive.google.com/uc?export=download&id=177T7bev6al_v4G5JfpyBsJ3sZDxDEYSX" target="_blank" rel="noreferrer" className="interactive" style={{ display: 'inline-block', background: 'var(--accent-pink)', padding: '10px 20px', borderRadius: '50px', color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                Download (v1.0)
              </a>
            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Download;
