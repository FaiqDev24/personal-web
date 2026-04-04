import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation';

// Devicons CDN URLs
const deviconUrls = {
  HTML:       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS:        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  PHP:        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  Laravel:    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  React:      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Tailwind:   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
};

const skills = [
  { name: 'HTML',       color: '#e34f26', bg: 'rgba(227,79,38,0.1)' },
  { name: 'CSS',        color: '#264de4', bg: 'rgba(38,77,228,0.1)' },
  { name: 'JavaScript', color: '#f7df1e', bg: 'rgba(247,223,30,0.1)' },
  { name: 'PHP',        color: '#8993be', bg: 'rgba(137,147,190,0.1)' },
  { name: 'Laravel',    color: '#ff2d20', bg: 'rgba(255,45,32,0.1)' },
  { name: 'React',      color: '#61dafb', bg: 'rgba(97,218,251,0.1)' },
  { name: 'Tailwind',   color: '#06b6d4', bg: 'rgba(6,182,212,0.1)' },
];

export default function Skills() {
  const titleRef = useScrollAnimation();
  const gridRef = useScrollAnimationGroup();

  return (
    <section id="skills" style={{
      padding: '6rem 1.5rem',
      background: '#080d14',
      position: 'relative',
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '20%', right: '-100px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(59,130,246,0.05)', filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-120px',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'rgba(99,102,241,0.04)', filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={titleRef} className="fade-in">
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <div className="section-line" />
        </div>

        <div ref={gridRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }) {
  const iconUrl = deviconUrls[skill.name];

  return (
    <div
      className={`fade-in fade-in-delay-${Math.min(index + 1, 6)}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
        padding: '1.2rem 1.75rem',
        transition: 'border-color 0.35s, box-shadow 0.35s, transform 0.35s, background 0.35s',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${skill.color}55`;
        e.currentTarget.style.boxShadow = `0 0 40px ${skill.color}22, 0 8px 32px rgba(0,0,0,0.3)`;
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.background = skill.bg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
      }}
    >
      {/* Corner glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '80px', height: '80px',
        background: `radial-gradient(circle at top right, ${skill.color}18, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>

        {/* Icon dari Devicons CDN */}
        <div style={{
          width: 56, height: 56,
          borderRadius: '16px',
          background: skill.bg,
          border: `1.5px solid ${skill.color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: `0 4px 20px ${skill.color}20`,
          padding: '10px',
        }}>
          {iconUrl && (
            <img
              src={iconUrl}
              alt={skill.label}
              width={34}
              height={34}
              style={{
                objectFit: 'contain',
                display: 'block',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))',
              }}
            />
          )}
        </div>

        <div>
          <div style={{
            fontWeight: 700,
            fontSize: '1.05rem',
            color: '#f1f5f9',
            letterSpacing: '0.01em',
          }}>
            {skill.name}
          </div>
        </div>
      </div>
    </div>
  );
}
