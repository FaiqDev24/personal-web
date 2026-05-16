export default function Footer() {
  const socials = [
    { 
      label: 'GitHub',    
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" style={{ width: '22px', height: '22px', filter: 'brightness(0) invert(1)' }} />, 
      href: 'https://github.com/FaiqDev24' 
    },
    { 
      label: 'Instagram', 
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" style={{ width: '22px', height: '22px' }} />, 
      href: 'https://www.instagram.com/padlullll/' 
    },
    { 
      label: 'LinkedIn', 
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{ width: '22px', height: '22px' }} />, 
      href: 'https://www.linkedin.com/in/faiq-fadhlul' 
    },
  ];

  const navLinks = [
    { label: 'Home',      href: '#hero' },
    { label: 'Profile',   href: '#profile' },
    { label: 'Skills',    href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects',  href: '#projects' },
    { label: 'Contact',   href: '#contact' },
  ];

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#060b11',
      borderTop: '1px solid rgba(59,130,246,0.12)',
      padding: '3rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Faiq Fadhlul Aziz
            </div>
            <p style={{ color: '#475569', fontSize: '0.875rem', maxWidth: '240px', lineHeight: 1.7 }}>
              Full-Stack Web Developer yang bersemangat membangun pengalaman digital yang indah.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: '#64748b', fontSize: '0.875rem', fontWeight: 500,
                      fontFamily: 'Inter, sans-serif', padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#60a5fa'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 44, height: 44, borderRadius: '12px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem', textDecoration: 'none',
                    transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(59,130,246,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1.5rem' }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '0.75rem',
        }}>
          <p style={{ color: '#334155', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Faiq Fadhlul Aziz. All rights reserved.
          </p>
          <p style={{ color: '#334155', fontSize: '0.8rem' }}>
            Built with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
