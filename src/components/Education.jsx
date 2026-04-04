import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation';

const educationData = [
  {
    year: '2024 – Sekarang',
    degree: 'SMK Wikrama Bogor',
    institution: 'Teknik Informatika - PPLG',
    description: 'Mempelajari dasar-dasar ilmu komputer, pemrograman web, basis data, dan rekayasa perangkat lunak.',
    icon: '📚',
  },
  {
    year: '2021 – 2024',
    degree: 'SMP Negeri 1 Ciawi',
    description: 'Menyelesaikan pendidikan SMP dan mulai tertarik dengan dunia teknologi dan komputer.',
    icon: '📚',
  },
  {
    year: '2016 – 2021',
    degree: 'MI Fathan Mubina',
    description: 'Menyelesaikan pendidikan SD/MI',
    icon: '📚',
  },
];

export default function Education() {
  const titleRef = useScrollAnimation();
  const listRef  = useScrollAnimationGroup();

  return (
    <section id="education" style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(180deg, #0c111a 0%, #080d14 100%)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div ref={titleRef} className="fade-in">
          <h2 className="section-title">Riwayat Pendidikan</h2>
          <div className="section-line" />
        </div>

        <div ref={listRef} style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '1px', top: '0', bottom: '0',
            width: '2px',
            background: 'linear-gradient(180deg, #3b82f6, #818cf8, rgba(59,130,246,0))',
            borderRadius: '999px',
          }} />

          {educationData.map((edu, i) => (
            <div
              key={i}
              className={`fade-in fade-in-delay-${i + 1}`}
              style={{
                position: 'relative',
                marginBottom: i < educationData.length - 1 ? '2.5rem' : 0,
                paddingLeft: '2rem',
              }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '-2.85rem', top: '1rem',
                width: '14px', height: '14px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #3b82f6, #818cf8)',
                boxShadow: '0 0 12px rgba(59,130,246,0.6)',
                border: '2px solid #080d14',
              }} />

              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(59,130,246,0.15)',
                  borderRadius: '18px',
                  padding: '1.5rem 1.75rem',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(59,130,246,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.15)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.75rem' }}>{edu.icon}</span>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.2rem' }}>{edu.degree}</h3>
                      <p style={{ color: '#60a5fa', fontWeight: 600, fontSize: '0.875rem' }}>{edu.institution}</p>
                    </div>
                  </div>
                  <span style={{
                    background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)',
                    borderRadius: '999px', padding: '0.25rem 0.875rem',
                    fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', whiteSpace: 'nowrap',
                  }}>{edu.year}</span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
