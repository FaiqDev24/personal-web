import { useEffect, useRef } from 'react';
import fotoProfil from '../assets/foto-putih.png';

export default function Hero() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Immediate fade-in on mount
    const t1 = setTimeout(() => {
      textRef.current?.classList.add('visible');
    }, 200);
    const t2 = setTimeout(() => {
      imgRef.current?.classList.add('visible');
    }, 500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 1.5rem 60px',
      background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.18) 0%, transparent 70%), #080d14',
    }}>
      {/* Background grid decoration */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto', width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '3rem', flexWrap: 'wrap',
      }}>
        {/* Left: Text */}
        <div
          ref={textRef}
          className="fade-in-left"
          style={{ flex: '1 1 340px', maxWidth: '560px' }}
        >
          <span style={{
            display: 'inline-block',
            background: 'rgba(59,130,246,0.15)',
            border: '1px solid rgba(59,130,246,0.3)',
            borderRadius: '999px',
            padding: '0.35rem 1rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#60a5fa',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>
            👋 Welcome to my portfolio
          </span>

          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '0.75rem', letterSpacing: '-1px' }}>
            Hi, I'm{' '}
            <span style={{ background: 'linear-gradient(135deg, #60a5fa, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Faiq
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', fontWeight: 600, color: '#94a3b8', marginBottom: '1.25rem' }}>
            Full-Stack Web Developer
          </p>

          <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.8, maxWidth: '440px', marginBottom: '2rem' }}>
            Passionate about building beautiful, fast, and accessible web experiences.
            I turn ideas into elegant digital products using modern technologies.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                color: '#fff', textDecoration: 'none',
                padding: '0.75rem 1.75rem', borderRadius: '12px',
                fontWeight: 700, fontSize: '0.9rem',
                boxShadow: '0 4px 24px rgba(59,130,246,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(59,130,246,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(59,130,246,0.35)'; }}
            >
              🚀 See My Work
            </a>
            <a
              href="#profile"
              onClick={(e) => { e.preventDefault(); document.querySelector('#profile')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'transparent',
                border: '1px solid rgba(59,130,246,0.4)',
                color: '#60a5fa', textDecoration: 'none',
                padding: '0.75rem 1.75rem', borderRadius: '12px',
                fontWeight: 700, fontSize: '0.9rem',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(59,130,246,0.1)'; e.currentTarget.style.borderColor = '#60a5fa'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; }}
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right: Avatar */}
        <div
          ref={imgRef}
          className="fade-in-right"
          style={{ flex: '1 1 340px', maxWidth: '560px', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            position: 'relative',
            animation: 'float 4s ease-in-out infinite',
            width: '100%',
            maxWidth: '400px',
          }}>
            {/* Glow ring */}
            <div style={{
              position: 'absolute', inset: '-12px',
              borderRadius: '40%',
              background: 'conic-gradient(#3b82f6, #818cf8, #3b82f6)',
              animation: 'spin 8s linear infinite',
              opacity: 0.6,
              filter: 'blur(8px)',
            }} />
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              borderRadius: '10%',
              overflow: 'hidden',
              border: '2px solid rgba(59,130,246,0.5)',
              position: 'relative',
              background: 'linear-gradient(135deg, #1e3a5f, #0f172a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img src={fotoProfil} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          color: '#475569', fontSize: '0.75rem', fontWeight: 500,
          animation: 'float 2s ease-in-out infinite',
        }}>
          <span>Scroll Down</span>
          <span style={{ fontSize: '1.25rem' }}>↓</span>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
