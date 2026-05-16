import { useState, useEffect, useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import dicodingDbs from '../assets/sert-dicoding-dbs.png';
import dicodingWeb from '../assets/dicoding-web-basic.png';
import dicodingFinance from '../assets/dicoding-finance.png';
import dicodingJs from '../assets/dicoding-javascript.png';
import myskillBackend from '../assets/myskill-backend.png';
import myskillWordpress from '../assets/myskill-wordpress.png';
import komdigi from '../assets/sert-komdigi.png';
import igdx from '../assets/sert-igdx.png';

/* ─────────────────────────────────────────────────  
   DATA SERTIFIKAT
   Ganti `image` dengan: import namaGambar from '../assets/nama-file.png'
   lalu isi: image: namaGambar
   ───────────────────────────────────────────────── */
const certificates = [
  {
    id: 1,
    title: 'Coding Camp powered by DBS Foundation - Full Stack',
    issuer: 'Dicoding Indonesia & DBS Foundation',
    year: '2026',
    color: '#3b82f6',
    image: dicodingDbs,
    url: null,
  },
  {
    id: 2,
    title: 'Financial Literacy',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    color: '#3b82f6',
    image: dicodingFinance,
    url: null,
  },
  {
    id: 3,
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    year: '2025',
    color: '#3b82f6',
    image: dicodingJs,
    url: null,
  },
  {
    id: 4,
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    year: '2024',
    color: '#3b82f6',
    image: dicodingWeb,
    url: null,
  },
  {
    id: 5,
    title: 'Web Development: Back End',
    issuer: 'MySkill',
    year: '2025',
    color: '#3b82f6',
    image: myskillBackend,
    url: null,
  },
  {
    id: 6,
    title: 'Wordpress Introduction',
    issuer: 'MySkill',
    year: '2025',
    color: '#3b82f6',
    image: myskillWordpress,
    url: null,
  },
  {
    id: 7,
    title: 'Konsep Pemrograman Micro Skill',
    issuer: 'Komdigi',
    year: '2025',
    color: '#3b82f6',
    image: komdigi,
    url: null,
  },
  {
    id: 8,
    title: 'IGDX Career powered by REDY',
    issuer: 'Kominfo',
    year: '2024',
    color: '#3b82f6',
    image: igdx,
    url: null,
  },
];

/* ─────────────────────────────────────────────────
   HELPER — lebar window saat ini
   ───────────────────────────────────────────────── */
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  useEffect(() => {
    const fn = () => setWidth(window.innerWidth);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return width;
}

/* ─────────────────────────────────────────────────
   HELPER — berapa card yang tampil sekaligus
   ───────────────────────────────────────────────── */
function useVisible() {
  const w = useWindowWidth();
  if (w < 640)  return 1;
  if (w < 1024) return 2;
  return 3;
}

/* ─────────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────────── */
export default function Achievement() {
  const titleRef = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const [modal, setModal]     = useState(null); // sertifikat yang sedang dibuka
  const [animating, setAnimating] = useState(false);
  const visibleCount = useVisible();
  const windowWidth  = useWindowWidth();
  const isMobile     = windowWidth < 640;

  const maxIndex = Math.max(0, certificates.length - visibleCount);

  const goPrev = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setCurrent((c) => Math.max(0, c - 1));
    setTimeout(() => setAnimating(false), 400);
  }, [animating]);

  const goNext = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setCurrent((c) => Math.min(maxIndex, c + 1));
    setTimeout(() => setAnimating(false), 400);
  }, [animating, maxIndex]);

  // tutup modal dengan Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setModal(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // kunci scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  const cardW   = 100 / visibleCount; // % per card
  const gap     = 24;                 // px

  // margin kiri-kanan track agar tombol nav tidak overlap konten
  const trackMargin = isMobile ? '0 40px' : '0 52px';
  // ukuran tombol nav
  const navBtnSize  = isMobile ? 36 : 44;

  return (
    <section
      id="achievement"
      style={{
        padding: isMobile ? '4rem 1rem' : '6rem 1.5rem',
        background: 'linear-gradient(180deg, #080d14 0%, #0c111a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '15%', right: '-120px',
        width: '340px', height: '340px', borderRadius: '50%',
        background: 'rgba(59,130,246,0.05)', filter: 'blur(70px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-100px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(129,140,248,0.05)', filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Judul */}
        <div ref={titleRef} className="fade-in">
          <h2 className="section-title">Sertifikat &amp; Pencapaian</h2>
          <div className="section-line" />
        </div>

        {/* Carousel Wrapper */}
        <div style={{ position: 'relative' }}>

          {/* Tombol Prev */}
          <NavBtn
            dir="left"
            onClick={goPrev}
            disabled={current === 0}
            size={navBtnSize}
          />

          {/* Track */}
          <div style={{ overflow: 'hidden', margin: trackMargin }}>
            <div
              style={{
                display: 'flex',
                gap: `${gap}px`,
                transform: `translateX(calc(-${current * (cardW + (gap / visibleCount))}% - ${current * (gap / visibleCount)}px))`,
                transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              {certificates.map((cert) => (
                <CertCard
                  key={cert.id}
                  cert={cert}
                  cardW={cardW}
                  gap={gap}
                  visibleCount={visibleCount}
                  isMobile={isMobile}
                  onOpen={() => setModal(cert)}
                />
              ))}
            </div>
          </div>

          {/* Tombol Next */}
          <NavBtn
            dir="right"
            onClick={goNext}
            disabled={current === maxIndex}
            size={navBtnSize}
          />
        </div>

        {/* Dot Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '2rem',
        }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '28px' : '8px',
                height: '8px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                background: i === current
                  ? 'linear-gradient(90deg,#3b82f6,#818cf8)'
                  : 'rgba(255,255,255,0.15)',
                transition: 'width 0.35s, background 0.35s',
                padding: 0,
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p style={{
          textAlign: 'center',
          marginTop: '0.75rem',
          color: '#475569',
          fontSize: '0.8rem',
          fontWeight: 500,
        }}>
          {current + 1} / {maxIndex + 1}
        </p>
      </div>

      {/* ─── MODAL ─── */}
      {modal && (
        <Modal cert={modal} onClose={() => setModal(null)} />
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────────
   CERTIFICATE CARD
   ───────────────────────────────────────────────── */
function CertCard({ cert, cardW, gap, visibleCount, isMobile, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        width: `calc(${cardW}% - ${gap * (visibleCount - 1) / visibleCount}px)`,
        background: hovered
          ? `linear-gradient(135deg, ${cert.color}18, rgba(255,255,255,0.04))`
          : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? cert.color + '55' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s, background 0.3s',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 24px 60px ${cert.color}25, 0 0 0 1px ${cert.color}20`
          : '0 4px 20px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        userSelect: 'none',
      }}
    >
      {/* Preview area */}
      <div style={{
        height: isMobile ? '150px' : '180px',
        background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}08)`,
        borderBottom: `1px solid ${cert.color}25`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
        }} />
        {/* Glow orb */}
        <div style={{
          position: 'absolute',
          width: '120px', height: '120px', borderRadius: '50%',
          background: `radial-gradient(circle, ${cert.color}30, transparent 70%)`,
          pointerEvents: 'none',
          transition: 'transform 0.4s',
          transform: hovered ? 'scale(1.3)' : 'scale(1)',
        }} />

        {cert.image ? (
          <img
            src={cert.image}
            alt={cert.title}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              position: 'absolute', inset: 0,
              transition: 'transform 0.4s',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        ) : (
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{ fontSize: '3.5rem', filter: `drop-shadow(0 0 12px ${cert.color}80)` }}>🏆</span>
            <span style={{
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em',
              color: cert.color, textTransform: 'uppercase', opacity: 0.8,
            }}>Klik untuk lihat</span>
          </div>
        )}

        {/* Click hint overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(135deg, ${cert.color}15, transparent)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
          backdropFilter: hovered ? 'blur(1px)' : 'none',
        }}>
          <div style={{
            background: 'rgba(0,0,0,0.6)',
            border: `1px solid ${cert.color}60`,
            borderRadius: '999px',
            padding: '0.4rem 1.1rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '0.05em',
            backdropFilter: 'blur(8px)',
          }}>
            🔍 Lihat Sertifikat
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: isMobile ? '1rem 1.1rem' : '1.25rem 1.5rem' }}>
        {/* Badge issuer */}
        <span style={{
          display: 'inline-block',
          background: `${cert.color}18`,
          border: `1px solid ${cert.color}35`,
          borderRadius: '6px',
          padding: '0.2rem 0.65rem',
          fontSize: '0.72rem',
          fontWeight: 700,
          color: cert.color,
          marginBottom: '0.6rem',
          letterSpacing: '0.03em',
        }}>
          {cert.issuer}
        </span>

        <h3 style={{
          fontWeight: 700,
          fontSize: '0.95rem',
          color: '#f1f5f9',
          marginBottom: '0.5rem',
          lineHeight: 1.4,
        }}>
          {cert.title}
        </h3>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{ color: '#475569', fontSize: '0.8rem', fontWeight: 500 }}>
            📅 {cert.year}
          </span>
          <span style={{
            color: cert.color,
            fontSize: '0.78rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            opacity: hovered ? 1 : 0.5,
            transition: 'opacity 0.3s',
          }}>
            Lihat ›
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   NAV BUTTON (prev / next)
   ───────────────────────────────────────────────── */
function NavBtn({ dir, onClick, disabled, size = 44 }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [dir === 'left' ? 'left' : 'right']: 0,
        zIndex: 10,
        width: `${size}px`, height: `${size}px`,
        borderRadius: '50%',
        border: `1px solid ${hov && !disabled ? 'rgba(59,130,246,0.6)' : 'rgba(255,255,255,0.1)'}`,
        background: hov && !disabled
          ? 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(129,140,248,0.15))'
          : 'rgba(255,255,255,0.04)',
        color: disabled ? '#334155' : (hov ? '#93c5fd' : '#94a3b8'),
        fontSize: size < 40 ? '1rem' : '1.2rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.25s',
        backdropFilter: 'blur(8px)',
        boxShadow: hov && !disabled ? '0 0 20px rgba(59,130,246,0.2)' : 'none',
        flexShrink: 0,
      }}
      aria-label={dir === 'left' ? 'Previous' : 'Next'}
    >
      {dir === 'left' ? '‹' : '›'}
    </button>
  );
}

/* ─────────────────────────────────────────────────
   MODAL POPUP
   ───────────────────────────────────────────────── */
function Modal({ cert, onClose }) {
  const [entered, setEntered] = useState(false);
  const windowWidth = useWindowWidth();
  const isMobile    = windowWidth < 640;
  const isSmall     = windowWidth < 400;

  useEffect(() => {
    requestAnimationFrame(() => setEntered(true));
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: `rgba(0,0,0,${entered ? 0.88 : 0})`,
        backdropFilter: `blur(${entered ? 12 : 0}px)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: isMobile ? '0.75rem' : '1.5rem',
        transition: 'background 0.35s, backdrop-filter 0.35s',
        overflowY: 'auto',
      }}
    >
      {/* Modal box */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(160deg, #0f1824, #0c111a)',
          border: `1px solid ${cert.color}40`,
          borderRadius: isMobile ? '16px' : '24px',
          maxWidth: '680px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 60px ${cert.color}20`,
          transform: entered ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(24px)',
          opacity: entered ? 1 : 0,
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease',
          position: 'relative',
          margin: 'auto',
        }}
      >
        {/* Close button */}
        <CloseBtn onClose={onClose} />

        {/* Image area */}
        <div style={{
          background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}08)`,
          borderBottom: `1px solid ${cert.color}25`,
          minHeight: isSmall ? '180px' : isMobile ? '220px' : '320px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Dot grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            pointerEvents: 'none',
          }} />
          {/* Glow */}
          <div style={{
            position: 'absolute',
            width: '250px', height: '250px', borderRadius: '50%',
            background: `radial-gradient(circle, ${cert.color}25, transparent 70%)`,
            pointerEvents: 'none',
          }} />

          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                maxWidth: '100%',
                maxHeight: isSmall ? '160px' : isMobile ? '200px' : '360px',
                objectFit: 'contain',
                position: 'relative',
                borderRadius: '4px',
                boxShadow: `0 8px 40px rgba(0,0,0,0.5)`,
                padding: isMobile ? '0.5rem' : '0',
              }}
            />
          ) : (
            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '1rem',
              position: 'relative',
            }}>
              <span style={{
                fontSize: '5rem',
                filter: `drop-shadow(0 0 24px ${cert.color}90)`,
              }}>🏆</span>
              <div style={{
                background: `${cert.color}18`,
                border: `1px dashed ${cert.color}50`,
                borderRadius: '12px',
                padding: '0.75rem 2rem',
                color: cert.color,
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textAlign: 'center',
              }}>
                📂 Gambar sertifikat belum ditambahkan<br />
                <span style={{ opacity: 0.6, fontSize: '0.75rem' }}>
                  Ganti `image: null` dengan import file gambar
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: isMobile ? '1.1rem 1.25rem 1.5rem' : '1.75rem 2rem 2rem' }}>
          {/* Issuer badge */}
          <span style={{
            display: 'inline-block',
            background: `${cert.color}18`,
            border: `1px solid ${cert.color}40`,
            borderRadius: '999px',
            padding: '0.3rem 1rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: cert.color,
            marginBottom: '0.85rem',
            letterSpacing: '0.04em',
          }}>
            {cert.issuer}
          </span>

          <h3 style={{
            fontSize: isMobile ? '1rem' : '1.25rem',
            fontWeight: 800,
            color: '#f1f5f9',
            marginBottom: '0.5rem',
            lineHeight: 1.3,
          }}>
            {cert.title}
          </h3>

          <p style={{
            color: '#475569',
            fontSize: '0.85rem',
            marginBottom: cert.url ? '1.25rem' : 0,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            📅 Diperoleh tahun {cert.year}
          </p>

          {cert.url && (
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.6rem 1.5rem',
                borderRadius: '12px',
                background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)`,
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s, transform 0.2s',
                boxShadow: `0 4px 20px ${cert.color}50`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              🔗 Lihat Sertifikat Asli ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   CLOSE BUTTON
   ───────────────────────────────────────────────── */
function CloseBtn({ onClose }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClose}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'absolute', top: '1rem', right: '1rem',
        zIndex: 10,
        width: '36px', height: '36px',
        borderRadius: '50%',
        border: `1px solid ${hov ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.12)'}`,
        background: hov ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.06)',
        color: hov ? '#fca5a5' : '#94a3b8',
        fontSize: '1rem',
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.2s',
        backdropFilter: 'blur(8px)',
      }}
      aria-label="Tutup"
    >
      ✕
    </button>
  );
}
