import { useScrollAnimation } from '../hooks/useScrollAnimation';
import fotoProfil from "../assets/foto-merah.png";

const info = [
  { icon: '👤', label: 'Nama', value: 'Faiq Fadhlul Aziz' },
  { icon: '📍', label: 'Lokasi', value: 'Indonesia' },
  { icon: '📧', label: 'Email', value: 'faiqfadhlulaziz24@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+62 856 9493 1571' },
];

export default function Profile() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="profile" style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(180deg, #080d14 0%, #0c111a 100%)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={sectionRef} className="fade-in">
          <h2 className="section-title">Profile</h2>
          <div className="section-line" />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}>
          {/* About Me */}
          <ProfileAbout />
          {/* Info Cards */}
          <ProfileInfo />
        </div>
      </div>
    </section>
  );
}

function ProfileAbout() {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="fade-in-left"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(59,130,246,0.15)',
        borderRadius: '20px',
        padding: '2rem',
        backdropFilter: 'blur(10px)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(59,130,246,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(59,130,246,0.15)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'linear-gradient(135deg, #1e3a5f, #1d4ed8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2rem', flexShrink: 0,
          boxShadow: '0 0 20px rgba(59,130,246,0.3)',
        }}>
          <img src={fotoProfil} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.25rem' }}>Faiq</h3>
          <span style={{
            background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)',
            borderRadius: '999px', padding: '0.2rem 0.75rem',
            fontSize: '0.75rem', fontWeight: 600, color: '#60a5fa',
          }}>
            Full-Stack Developer
          </span>
        </div>
      </div>

      <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
        Halo! Saya seorang web developer yang bersemangat dalam membangun aplikasi web modern. Saya memiliki pengalaman dalam pengembangan front-end maupun back-end
        menggunakan berbagai teknologi terkini.
      </p>
      <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.9rem' }}>
        Saya selalu berusaha untuk terus belajar dan berkembang mengikuti perkembangan teknologi,
        dan senang berkolaborasi dalam tim untuk menghasilkan produk digital terbaik.
      </p>
    </div>
  );
}

function ProfileInfo() {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="fade-in-right" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {info.map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex', alignItems: 'center', gap: '1rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(59,130,246,0.12)',
            borderRadius: '14px',
            padding: '1rem 1.25rem',
            transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
            cursor: 'default',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
            e.currentTarget.style.transform = 'translateX(6px)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(59,130,246,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.12)';
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span style={{ fontSize: '1.35rem', minWidth: '1.75rem', textAlign: 'center' }}>{item.icon}</span>
          <div>
            <div style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.15rem' }}>
              {item.label}
            </div>
            <div style={{ fontSize: '0.95rem', color: '#e2e8f0', fontWeight: 500 }}>{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
