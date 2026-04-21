import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WAECQuizMockup = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  
  const questions = [
    {
      q: "Which of the following is NOT a programming language?",
      options: ["Python", "HTML", "Java", "C++"],
      answer: 1
    },
    {
      q: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Hyper Transfer Machine Language", "Home Tool Markup Language"],
      answer: 0
    }
  ];

  const handleAnswer = (idx) => {
    if (idx === questions[step].answer) setScore(score + 1);
    setStep(step + 1);
  };

  return (
    <div style={{
      width: '300px', height: '600px', 
      background: '#050a1f',
      borderRadius: '36px',
      border: '8px solid #222',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ background: '#111', padding: '15px', textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>
        WAEC Prep Master
      </div>

      <div style={{ padding: '20px', height: 'calc(100% - 50px)', display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait">
          {step < questions.length ? (
            <motion.div 
              key={step}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              style={{ flex: 1 }}
            >
              <div style={{ background: 'var(--accent-purple)', color: '#fff', padding: '5px 10px', borderRadius: '15px', display: 'inline-block', fontSize: '12px', marginBottom: '15px' }}>
                Question {step + 1} of {questions.length}
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '20px', color: 'var(--text-main)' }}>{questions[step].q}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {questions[step].options.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleAnswer(i)}
                    className="interactive"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      padding: '15px',
                      borderRadius: '10px',
                      color: 'var(--text-main)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 240, 255, 0.2)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="result"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ textAlign: 'center', marginTop: '50px' }}
            >
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎓</div>
              <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '10px' }}>Preliminary Exam Complete</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                You scored {score} out of {questions.length}
              </p>
              <div style={{ background: 'rgba(255,0,85,0.1)', padding: '15px', borderRadius: '10px', border: '1px solid var(--accent-pink)' }}>
                <strong style={{ color: 'var(--accent-pink)' }}>Weakness Detected:</strong>
                <p style={{ fontSize: '14px', marginTop: '5px', color: 'var(--text-main)' }}>You need more practice in Core Programming Concepts.</p>
              </div>
              <button 
                onClick={() => {setStep(0); setScore(0);}}
                className="interactive"
                style={{
                  marginTop: '30px', background: 'var(--accent-cyan)', color: '#000', 
                  border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer'
                }}
              >
                Retake Exam
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="page"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <section className="section">
        <div className="container">
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3.5rem' }}>Upcoming <span className="text-gradient">Projects</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              We're constantly building new and exciting applications. Check out what's coming next from OsiCode.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            
            {/* Project 1: WAEC App */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
              <motion.div variants={itemVariants} style={{ flex: '1 1 400px' }}>
                <div className="glass-panel">
                  <h2 style={{ fontSize: '2rem', color: 'var(--accent-cyan)' }}>Nigeria WAEC Quiz App</h2>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem' }}>
                    <span style={{ background: 'rgba(0, 240, 255, 0.2)', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', color: 'var(--accent-cyan)' }}>Education</span>
                    <span style={{ background: 'rgba(255, 0, 85, 0.2)', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', color: 'var(--accent-pink)' }}>Coming Soon</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    An interactive quiz app that helps students prepare for WAEC exams. It includes preliminary tests to identify weaknesses and personalized study plans.
                  </p>
                  <p style={{ fontStyle: 'italic', color: 'var(--accent-yellow)' }}>
                    Try the interactive mockup to see how the preliminary exam works! 👉
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                <WAECQuizMockup />
              </motion.div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }} />

            {/* Project 2: WHY App */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', flexDirection: 'row-reverse' }}>
              <motion.div variants={itemVariants} style={{ flex: '1 1 400px' }}>
                <div className="glass-panel">
                  <h2 style={{ fontSize: '2rem', color: 'var(--accent-purple)' }}>WHY - The Learning App</h2>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem' }}>
                    <span style={{ background: 'rgba(112, 0, 255, 0.2)', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', color: 'var(--accent-purple)' }}>Knowledge</span>
                    <span style={{ background: 'rgba(255, 234, 126, 0.2)', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', color: 'var(--accent-yellow)' }}>October 2026</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    Have you ever wondered why the sky is blue, or why we yawn? The "WHY" app has different categories explaining the most popular "Why" questions people ask.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '300px', height: '600px', background: 'linear-gradient(180deg, #1a0b2e 0%, #050a1f 100%)', borderRadius: '36px', border: '8px solid #222', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', overflow: 'hidden', position: 'relative'
                }}>
                  <div style={{ background: '#111', padding: '15px', textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>WHY App</div>
                  <div style={{ padding: '20px', textAlign: 'center', paddingTop: '50px' }}>
                    <h3 style={{ fontSize: '40px', marginBottom: '20px' }}>🤔</h3>
                    <h4 style={{ color: 'var(--accent-purple)', fontSize: '24px', marginBottom: '20px' }}>Why do we dream?</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.6', textAlign: 'left', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px' }}>
                      Dreams are essentially stories we play out in our head overnight. They help process emotions, consolidate memories, and solve problems while our body rests.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)' }} />

            {/* Project 3: Packabunch Playable Snippet */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
              <motion.div variants={itemVariants} style={{ flex: '1 1 400px' }}>
                <div className="glass-panel">
                  <h2 style={{ fontSize: '2rem', color: 'var(--accent-pink)' }}>Play PACKABUNCH</h2>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem' }}>
                    <span style={{ background: 'rgba(255, 0, 85, 0.2)', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', color: 'var(--accent-pink)' }}>Live</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    Try out a snippet of our flagship space puzzle game right here in your browser!
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '320px', height: '550px', borderRadius: '36px', border: '8px solid #222', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', overflow: 'hidden', position: 'relative', background: 'black'
                }}>
                  <iframe 
                    src="/game/index.html" 
                    title="Packabunch Game"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  ></iframe>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
