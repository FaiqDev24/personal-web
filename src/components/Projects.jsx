import { useState } from 'react';
import { useScrollAnimation, useScrollAnimationGroup } from '../hooks/useScrollAnimation';
import articleProject from '../assets/article-project.png';
import terraQuakeProject from '../assets/terraquake-project.png';
import fakeStoreProject from '../assets/fake-store-project.png';

const projects = [
  {
    title: 'TerraQuake',
    description: 'Sebuah web yang menyediakan data terkait gempa di seluruh dunia.',
    image: terraQuakeProject,
    color: '#3b82f6',
    tags: ['React', 'Tailwind', 'Flowbite', 'API'],
    github: 'https://github.com/FaiqDev24/terraquake-app.git',
    demo: 'https://terraquake-app.vercel.app/',
  },
  {
    title: 'Character Article',
    description: 'Sebuah web yang menjelaskan tentang karakter dari manhwa Solo Leveling, terutama Sung Jin Woo',
    image: articleProject,
    color: '#818cf8',
    tags: ['HTML', 'CSS',],
    github: 'https://github.com/FaiqDev24/sung-jin-woo.git',
    demo: 'https://faiqdev24.github.io/sung-jin-woo/',
  },
  {
    title: 'Fake Store APP',
    description: 'Sebuah web untuk menjual produk dengan fitur checkout dan keranjang.',
    image: fakeStoreProject,
    color: '#22d3ee',
    tags: ['React', 'Tailwind', 'Flowbite', 'API'],
    github: 'https://github.com/FaiqDev24/fake-store-app.git',
    demo: 'https://fake-store-app-ten.vercel.app/',
  },
];

export default function Projects() {
  const titleRef = useScrollAnimation();
  const gridRef = useScrollAnimationGroup();

  return (
    <section id="projects" style={{
      padding: '6rem 1.5rem',
      background: '#080d14',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={titleRef} className="fade-in">
          <h2 className="section-title">Proyek &amp; Karya</h2>
          <div className="section-line" />
        </div>

        <div ref={gridRef} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`fade-in fade-in-delay-${Math.min(index + 1, 6)}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? `${project.color}60` : 'rgba(59,130,246,0.15)'}`,
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 50px ${project.color}25` : '0 0 0 transparent',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height: '160px',
        background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)`,
        borderBottom: `1px solid ${project.color}20`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }} />
        <span style={{ 
          position: 'relative', 
          filter: hovered ? (project.image && (project.image.includes('/') || String(project.image).includes('.')) ? 'none' : 'drop-shadow(0 0 12px rgba(255,255,255,0.3))') : 'none', 
          transition: 'filter 0.3s',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {project.image && (project.image.includes('/') || String(project.image).includes('.')) ? (
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
          ) : (
            project.image
          )}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.6rem' }}>{project.title}</h3>
        <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7, flex: 1, marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: `${project.color}18`,
                border: `1px solid ${project.color}35`,
                borderRadius: '6px',
                padding: '0.2rem 0.6rem',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: project.color,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href={project.github}
            style={{
              flex: 1, textAlign: 'center', textDecoration: 'none',
              padding: '0.6rem', borderRadius: '10px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600,
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#94a3b8'; }}
          >
            🔗 GitHub
          </a>
          <a
            href={project.demo}
            style={{
              flex: 1, textAlign: 'center', textDecoration: 'none',
              padding: '0.6rem', borderRadius: '10px',
              background: `linear-gradient(135deg, #2563eb, ${project.color})`,
              color: '#fff', fontSize: '0.8rem', fontWeight: 600,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            🚀 Demo
          </a>
        </div>
      </div>
    </div>
  );
}
