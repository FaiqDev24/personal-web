import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const titleRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  return (
    <section id="contact" style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(180deg, #0c111a 0%, #080d14 100%)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div ref={titleRef} className="fade-in" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="section-title">Hubungi Saya</h2>
          <div className="section-line" style={{ margin: '0 auto' }} />
          <p style={{ color: '#94a3b8', marginTop: '1.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Punya pertanyaan, tawaran pekerjaan, atau sekadar ingin menyapa? <br/>
            Jangan ragu untuk mengirimkan pesan melalui form di bawah ini!
          </p>
        </div>

        <div ref={formRef} className="fade-in fade-in-delay-1" style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(59,130,246,0.15)',
          borderRadius: '20px',
          padding: '2.5rem',
          backdropFilter: 'blur(10px)',
        }}>
          {/* Menggunakan Web3Forms sebagai backend. Jangan lupa masukkan Access Key-nya! */}
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Wajib: Access Key Web3Forms */}
            <input type="hidden" name="access_key" value="27561831-91f7-4ae0-a927-0970456e68b7" />
            <input type="hidden" name="subject" value="Pesan Baru dari Website Portofolio Faiq" />
            <input type="hidden" name="from_name" value="Notifikasi Website" />
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label htmlFor="name" style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600 }}>Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Masukkan nama Anda"
                  style={{
                    padding: '0.9rem 1.2rem',
                    borderRadius: '12px',
                    background: 'rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.3s',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = 'rgba(0,0,0,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.15)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(0,0,0,0.25)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label htmlFor="email" style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600 }}>Alamat Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="example@gmail.com"
                  style={{
                    padding: '0.9rem 1.2rem',
                    borderRadius: '12px',
                    background: 'rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.3s',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = 'rgba(0,0,0,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.15)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(0,0,0,0.25)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <label htmlFor="message" style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600 }}>Pesan Anda</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                placeholder="Tuliskan pesan Anda di sini..."
                style={{
                  padding: '1.2rem',
                  borderRadius: '12px',
                  background: 'rgba(0,0,0,0.25)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#fff',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'all 0.3s',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#3b82f6'; e.target.style.background = 'rgba(0,0,0,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.15)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.background = 'rgba(0,0,0,0.25)'; e.target.style.boxShadow = 'none'; }}
              ></textarea>
            </div>

            <button 
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                borderRadius: '12px',
                padding: '1rem 2.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                marginTop: '1rem',
                alignSelf: 'center',
                boxShadow: '0 4px 15px rgba(59,130,246,0.2)',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(59,130,246,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(59,130,246,0.2)';
              }}
            >
              Kirim Pesan Sekarang 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
