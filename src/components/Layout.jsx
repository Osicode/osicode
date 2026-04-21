import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Modal = ({ title, content, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="text-gradient" style={{ marginBottom: '20px' }}>{title}</h2>
        <div style={{ color: 'var(--text-main)', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
          {content}
        </div>
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const openModal = (modalName, e) => {
    e.preventDefault();
    setActiveModal(modalName);
  };

  const closeModal = () => setActiveModal(null);

  const modalContent = {
    terms: `Effective Date: April 20, 2026\n\nBy using PACKABUNCH, you agree to these Terms. The App is for personal, non-commercial entertainment. The App includes third-party ads via Google AdMob.\n\nIntellectual Property: The original game code is based on an open-source project under MIT License. Modifications, graphics, sounds, and branding are owned by Thomas Etiuzale Osholene (OsiCode). You may not redistribute the app without permission.\n\nDisclaimer: The App is provided "AS IS" without warranties.`,
    support: `Need help? Email us at packabunchas@gmail.com. We'll reply within 48 hours. For parental inquiries or data deletion requests, please use the same email with the subject "Parental Request".`,
    license: `MIT License (PACKABUNCH Game Code)\nCopyright (c) 2021 Mattia Fortunati\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software...\n\n--------------------------------------------------\n\nMIT License (ZzFX – Tiny JavaScript Sound Library)\nCopyright (c) 2019 Frank Force (KilledByAPixel)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files...`
  };

  return (
    <div className="app-container">
      <div className="space-bg">
        <div className="moon"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <NavLink to="/" className="nav-logo" onClick={closeMenu}>
            <img src={`${import.meta.env.BASE_URL}assets/logo_happy.png`} alt="OsiCode Logo" />
            <span className="text-gradient">OsiCode</span>
          </NavLink>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
          
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Projects</NavLink>
            <NavLink to="/download" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>Download</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={closeMenu}>About</NavLink>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div style={{ flex: '1', minWidth: '250px' }}>
              <div className="footer-logo text-gradient">OsiCode</div>
              <p style={{ color: 'var(--text-muted)', maxWidth: '300px', marginBottom: '1rem' }}>
                Developing educational and entertaining experiences for children. Home of PACKABUNCH.
              </p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '300px' }}>
                <i className="fa-solid fa-location-dot" style={{ color: 'var(--accent-pink)', marginTop: '4px' }}></i>
                <div>
                  9 Idubor Street Off Airport Road<br/>
                  Suburb: Oredo<br/>
                  Benin City, Edo State<br/>
                  Postal Code: 300102<br/>
                  Nigeria (NG)
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px' }}>
                <i className="fa-solid fa-envelope" style={{ color: 'var(--accent-pink)' }}></i>
                <span>packabunchas@gmail.com</span>
              </div>
            </div>
            
            <div className="footer-links" style={{ flex: '1', minWidth: '250px', justifyContent: 'space-around' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <strong style={{ color: 'white' }}>Navigation</strong>
                <NavLink to="/" className="footer-link">Home</NavLink>
                <NavLink to="/projects" className="footer-link">Projects</NavLink>
                <NavLink to="/download" className="footer-link">Download</NavLink>
                <NavLink to="/about" className="footer-link">About</NavLink>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <strong style={{ color: 'white' }}>Legal & Support</strong>
                <a href={`${import.meta.env.BASE_URL}assets/packabunch Privacy Policy.pdf`} target="_blank" rel="noreferrer" className="footer-link">Privacy Policy</a>
                <button onClick={(e) => openModal('terms', e)} className="footer-link">Terms & Conditions</button>
                <button onClick={(e) => openModal('support', e)} className="footer-link">Support</button>
                <button onClick={(e) => openModal('license', e)} className="footer-link">Open Source Licenses</button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Thomas Etiuzale Osholene (OsiCode). All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal title="Terms & Conditions" content={modalContent.terms} isOpen={activeModal === 'terms'} onClose={closeModal} />
      <Modal title="Support" content={modalContent.support} isOpen={activeModal === 'support'} onClose={closeModal} />
      <Modal title="Open Source Licenses" content={modalContent.license} isOpen={activeModal === 'license'} onClose={closeModal} />

    </div>
  );
};

export default Layout;
