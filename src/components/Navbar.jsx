import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'Profile', href: '#profile' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.3s, box-shadow 0.3s',
        background: scrolled
          ? 'rgba(8, 13, 20, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        boxShadow: scrolled ? '0 1px 24px rgba(59,130,246,0.1)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(59,130,246,0.15)' : 'none',
      }}
    >
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <button
          onClick={() => handleNav('#hero')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.5px',
            background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Faiq Fadhlul Aziz
        </button>

        {/* Desktop Links */}
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }} className="nav-desktop">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#cbd5e1',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                  padding: '0.25rem 0',
                  borderBottom: '2px solid transparent',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#60a5fa';
                  e.currentTarget.style.borderBottomColor = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.borderBottomColor = 'transparent';
                }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: '1px solid rgba(59,130,246,0.4)',
            borderRadius: '8px',
            padding: '6px 10px',
            cursor: 'pointer',
            color: '#60a5fa',
            fontSize: '1.2rem',
            lineHeight: 1,
            display: 'none',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(8,13,20,0.97)',
          borderTop: '1px solid rgba(59,130,246,0.15)',
          padding: '1rem 1.5rem 1.5rem',
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map((l) => (
              <li key={l.href} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', }}>
                <button
                  onClick={() => handleNav(l.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#cbd5e1',
                    fontSize: '1rem',
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                    padding: '0.85rem 0',
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
