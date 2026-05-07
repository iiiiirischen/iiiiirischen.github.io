// Direction 3 - KINETIC MINIMAL
// Same restraint as Editorial, but with subtle motion: a "dancing" accent
// bar in the hero, hover micro-interactions on cards, and a soft scroll
// reveal. Color: cream + ink + a single warm accent. Type: Instrument
// Serif (display) + Inter (body).

const D3 = window.IRIS;

// ── Dance photos ──────────────────────────────────────────────────────────────
// To add or replace photos:
//   1. Drop the image file into the root Webpage folder (same level as index.html).
//   2. Add an entry below: { src: "filename.jpg", alt: "short description" }
//   3. Remove or comment out entries you don't want shown.
const DANCE_IMAGES = [
  { src: "dance/img_2486.jpg", alt: "Iris performing Chinese-style choreography on stage" },
  { src: "dance/img_4385.jpg", alt: "The History - A Chinese-style lyrical dance piece lead by Iris" },
  { src: "dance/img_4386.jpg", alt: "Group dance piece at the 2025 Dancas Showcase led by Iris and other board members" },
  { src: "dance/img_4392.jpg", alt: "Iris dancing on stage at the 2023 Dancas Showcase" },
  { src: "dance/img_4394.jpg", alt: "Iris dancing on stage at the 2023 Dancas Showcase" },
];

function CopyButton({ text, accent }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button onClick={copy} style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 10px', borderRadius: 6,
      border: `1px solid ${copied ? accent : 'rgba(21,20,15,.2)'}`,
      background: copied ? 'rgba(122,63,184,.08)' : 'transparent',
      color: copied ? accent : 'rgba(21,20,15,.5)',
      fontSize: 11, fontWeight: 500, cursor: 'pointer',
      transition: 'all .2s', letterSpacing: '.02em',
    }}>
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}

function DanceCarousel({ images, accent }) {
  const [idx, setIdx] = React.useState(0);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);
  const single = images.length === 1;

  // Preload every image immediately so switching is instant
  React.useEffect(() => {
    images.forEach(({ src }) => { const p = new Image(); p.src = src; });
  }, []);

  return (
    <div style={{ userSelect: 'none' }}>
      <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
        <img
          src={images[idx].src}
          alt={images[idx].alt}
          style={{
            width: '100%', aspectRatio: '3/4',
            objectFit: 'cover', objectPosition: 'center top',
            display: 'block',
          }}
        />
        {!single && (
          <>
            <button onClick={prev} className="kn-arrow" style={{ left: 12 }} aria-label="Previous photo">&#8592;</button>
            <button onClick={next} className="kn-arrow" style={{ right: 12 }} aria-label="Next photo">&#8594;</button>
          </>
        )}
      </div>
      {!single && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 14 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="kn-dot"
              style={{ background: i === idx ? accent : 'rgba(255,255,255,0.3)', transform: i === idx ? 'scale(1.25)' : 'scale(1)' }}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Kinetic() {
  const accent = "#7a3fb8";   // rich purple, primary
  const accent2 = "#e85a9b";  // hot pink, secondary
  const ink = "#241638";       // deep aubergine
  const cream = "#fbf2f7";     // soft pink-tinted cream

  // Subtle parallax / reveal on scroll without external libs.
  React.useEffect(() => {
    const els = document.querySelectorAll('[data-kn-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('kn-in'); });
    }, { threshold: 0.15 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div style={{
      fontFamily: '"Inter", -apple-system, system-ui, sans-serif',
      background: cream, color: ink, minHeight: '100%', width: '100%', overflow: 'hidden',
    }}>
      <style>{`
        .kn-display{font-family:"DM Serif Display","Fraunces",Georgia,serif;font-weight:400;letter-spacing:-.01em}
        .kn-italic{font-style:italic}
        [data-kn-reveal]{opacity:0;transform:translateY(20px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.3,1)}
        [data-kn-reveal].kn-in{opacity:1;transform:translateY(0)}
        .kn-bars{display:flex;gap:6px;align-items:flex-end;height:48px}
        .kn-bar{width:6px;background:${accent};border-radius:3px;transform-origin:bottom}
        .kn-bar:nth-child(1){animation:knb 1.4s ease-in-out infinite;animation-delay:0s}
        .kn-bar:nth-child(2){animation:knb 1.4s ease-in-out infinite;animation-delay:.15s}
        .kn-bar:nth-child(3){animation:knb 1.4s ease-in-out infinite;animation-delay:.3s}
        .kn-bar:nth-child(4){animation:knb 1.4s ease-in-out infinite;animation-delay:.45s}
        .kn-bar:nth-child(5){animation:knb 1.4s ease-in-out infinite;animation-delay:.6s}
        @keyframes knb{0%,100%{height:18%}50%{height:100%}}
        .kn-card{transition:transform .35s cubic-bezier(.2,.7,.3,1),box-shadow .35s}
        .kn-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(21,20,15,.08)}
        .kn-pill{display:inline-flex;align-items:center;gap:6px;padding:5px 11px;border-radius:999px;border:1px solid rgba(21,20,15,.15);font-size:12px;color:rgba(21,20,15,.65);background:rgba(255,255,255,.5);backdrop-filter:blur(6px)}
        .kn-btn{display:inline-flex;align-items:center;gap:8px;padding:13px 22px;border-radius:999px;background:linear-gradient(135deg,${accent} 0%,${accent2} 100%);color:#fff;text-decoration:none;font-size:13px;font-weight:500;transition:transform .2s,filter .2s;border:none}
        .kn-btn:hover{filter:brightness(1.08);transform:translateY(-2px)}
        .kn-grad{background:linear-gradient(120deg,${accent} 0%,${accent2} 100%);-webkit-background-clip:text;background-clip:text;color:transparent;padding:0 .04em;display:inline-block;line-height:1.15}
        .kn-btn--g{background:transparent;color:${ink};border:1px solid rgba(21,20,15,.25)}
        .kn-btn--g:hover{background:${ink};color:${cream};border-color:${ink}}
        .kn-marquee{overflow:hidden;white-space:nowrap;padding:14px 0;border-top:1px solid rgba(21,20,15,.15);border-bottom:1px solid rgba(21,20,15,.15);background:${cream}}
        .kn-marquee-track{display:inline-block;animation:knmarq 30s linear infinite}
        @keyframes knmarq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .kn-blob{position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none;opacity:.4}
        .kn-pulse{animation:knpulse 2.6s ease-in-out infinite}
        @keyframes knpulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.4);opacity:.4}}
        .kn-link-arrow{display:inline-flex;align-items:center;gap:6px;color:${accent};text-decoration:none;font-size:14px;font-weight:500}
        .kn-link-arrow svg{transition:transform .25s}
        .kn-link-arrow:hover svg{transform:translateX(4px)}
        .kn-arrow{position:absolute;top:50%;transform:translateY(-50%);background:rgba(20,10,35,.55);border:1px solid rgba(255,255,255,.2);color:#fff;border-radius:50%;width:42px;height:42px;display:flex;align-items:center;justify-content:center;cursor:pointer;backdrop-filter:blur(6px);font-size:18px;z-index:2;transition:background .2s,border-color .2s;line-height:1}
        .kn-arrow:hover{background:${accent};border-color:${accent}}
        .kn-dot{width:8px;height:8px;border-radius:50%;border:none;cursor:pointer;padding:0;transition:background .3s,transform .3s}
      `}</style>

      {/* nav */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 56px', position: 'sticky', top: 0,
        background: 'rgba(251,242,247,.85)', backdropFilter: 'blur(10px)', zIndex: 10,
        borderBottom: '1px solid rgba(122,63,184,.1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 8, height: 8, borderRadius: 4, background: accent }} className="kn-pulse" />
          <a href="index.html" className="kn-display" style={{ fontSize: 19, color: 'inherit', textDecoration: 'none' }}>Iris Chen</a>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 13, color: 'rgba(21,20,15,.7)' }}>
          <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
          <a href="#education" style={{ color: 'inherit', textDecoration: 'none' }}>Education</a>
          <a href="#work" style={{ color: 'inherit', textDecoration: 'none' }}>Research</a>
          <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
          <a href="#dance" style={{ color: 'inherit', textDecoration: 'none' }}>Off-stage</a>
          <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* hero */}
      <section style={{ padding: '90px 56px 60px', maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div className="kn-blob" style={{ width: 380, height: 380, background: accent, top: -80, right: -60 }} />
        <div className="kn-blob" style={{ width: 260, height: 260, background: accent2, top: 40, left: -80 }} />

        <div style={{ position: 'relative' }}>
          <h1 className="kn-display" style={{
            fontSize: 'clamp(56px, 8.5vw, 120px)', lineHeight: .95, letterSpacing: -2.5,
            margin: '0 0 24px', maxWidth: 1000,
          }} data-kn-reveal>
            Iris (Yirong) Chen
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 36 }} data-kn-reveal>
            <div className="kn-bars" aria-hidden>
              <div className="kn-bar" /><div className="kn-bar" /><div className="kn-bar" /><div className="kn-bar" /><div className="kn-bar" />
            </div>
            <p className="kn-display" style={{
              fontSize: 26, lineHeight: 1.4, fontStyle: 'italic',
              color: 'rgba(21,20,15,.78)', maxWidth: 720, margin: 0, fontWeight: 400,
            }}>
              {D3.headlines.kinetic}
            </p>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }} data-kn-reveal>
            <a className="kn-btn" href={D3.resumeUrl} download>
              Download résumé
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6.5 1v8m0 0L3 5.5M6.5 9L10 5.5M1.5 12h10"/></svg>
            </a>
            <a className="kn-btn kn-btn--g" href="#contact">Get in touch →</a>
          </div>
        </div>
      </section>

      {/* marquee: keywords as a horizon-line of who you are */}
      <div className="kn-marquee">
        <div style={{ fontSize: 28 }}>
          {Array(2).fill(0).map((_, k) => (
            <span key={k} className="kn-display kn-marquee-track" style={{ fontSize: 28 }}>
              {["Genetic Epi", "Multi-Omics", "GWAS", "Mendelian Randomization", "RWE", "HEOR", "Risk Prediction", "Causal Inference"].map((w, i) => (
                <span key={i} style={{ margin: '0 28px', color: ink }}>{w} ✦</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* about */}
      <section id="about" style={{ padding: '90px 56px', maxWidth: 1100, margin: '0 auto' }} data-kn-reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'start' }}>
          <h2 className="kn-display" style={{ fontSize: 56, fontWeight: 400, margin: 0, lineHeight: 1, letterSpacing: -1 }}>
            About<span className="kn-italic" style={{ color: accent }}>.</span>
          </h2>
          <div className="kn-display" style={{ fontSize: 24, lineHeight: 1.5, color: 'rgba(21,20,15,.85)', fontWeight: 400 }}>
            {D3.pitch.map((p, i) => (
              <p key={i} style={{ margin: '0 0 18px' }}>
                {i === 0 ? <span style={{ color: accent }}>I'm Iris.</span> : ''} {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* education */}
      <section id="education" style={{ padding: '60px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 36 }} data-kn-reveal>
          <h2 className="kn-display" style={{ fontSize: 56, fontWeight: 400, margin: 0, letterSpacing: -1 }}>
            Education
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {D3.education.map((e, i) => (
            <div key={i} className="kn-card" data-kn-reveal style={{
              padding: 32, background: '#fff', borderRadius: 12, border: '1px solid rgba(21,20,15,.08)',
            }}>
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: accent, fontWeight: 600 }}>
                  {e.dates}
                </div>
                <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(21,20,15,.45)', fontWeight: 500, marginTop: 2 }}>
                  {e.city}
                </div>
              </div>
              <h3 className="kn-display" style={{ fontSize: 24, fontWeight: 400, margin: '0 0 6px', letterSpacing: -0.3, lineHeight: 1.2 }}>
                {e.school}
              </h3>
              <div className="kn-display kn-italic" style={{ fontSize: 17, color: 'rgba(21,20,15,.7)', marginBottom: 10 }}>
                {e.degree}
              </div>
              <div style={{ fontSize: 13, color: accent, fontWeight: 600, marginBottom: e.credential ? 12 : 18 }}>
                GPA {e.gpa}
              </div>
              {e.credential && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(21,20,15,.4)', fontWeight: 600 }}>Credential</span>
                  <span style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(21,20,15,.7)', letterSpacing: '.05em' }}>{e.credential.id}</span>
                  <CopyButton text={e.credential.id} accent={accent} />
                  <a href={e.credential.url} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    padding: '3px 10px', borderRadius: 6,
                    border: `1px solid ${accent}`,
                    background: 'rgba(122,63,184,.07)',
                    color: accent, fontSize: 11, fontWeight: 600,
                    textDecoration: 'none', letterSpacing: '.02em',
                    transition: 'background .2s',
                  }}>View ↗</a>
                </div>
              )}
              <div style={{ borderTop: '1px solid rgba(21,20,15,.08)', paddingTop: 14 }}>
                <div style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(21,20,15,.4)', marginBottom: 10, fontWeight: 600 }}>
                  Coursework
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {e.coursework.map(c => (
                    <li key={c} style={{ display: 'flex', alignItems: 'baseline', gap: 8, fontSize: 13, color: 'rgba(21,20,15,.72)', padding: '5px 0', borderBottom: '1px solid rgba(21,20,15,.05)' }}>
                      <span style={{ color: accent, fontSize: 10, flexShrink: 0 }}>—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* timeline: research */}
      <section id="work" style={{ padding: '60px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 40 }} data-kn-reveal>
          <h2 className="kn-display" style={{ fontSize: 56, fontWeight: 400, margin: 0, letterSpacing: -1 }}>Research</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 14, top: 6, bottom: 6, width: 1, background: 'rgba(21,20,15,.15)' }} />
          {D3.experience.map((x, i) => (
            <div key={i} data-kn-reveal style={{ position: 'relative', paddingLeft: 48, marginBottom: 36 }}>
              <span style={{ position: 'absolute', left: 8, top: 8, width: 14, height: 14, borderRadius: 7, background: cream, border: `2px solid ${accent}` }} />
              <div style={{ fontSize: 12, color: accent, marginBottom: 4, letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 500 }}>{x.dates}</div>
              <h3 className="kn-display" style={{ fontSize: 28, fontWeight: 400, margin: 0, letterSpacing: -0.4 }}>{x.group}</h3>
              <div style={{ fontSize: 14, color: 'rgba(21,20,15,.6)', marginTop: 4, marginBottom: 14 }}>{x.title} · <span className="kn-italic">{x.org}</span></div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {x.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: 14, fontSize: 15, lineHeight: 1.6, color: 'rgba(21,20,15,.78)', marginBottom: 8 }}>
                    <span style={{ color: accent, paddingTop: 9, fontSize: 8 }}>●</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* projects */}
      <section id="projects" style={{ padding: '60px 56px 30px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 36 }} data-kn-reveal>
          <h2 className="kn-display" style={{ fontSize: 56, fontWeight: 400, margin: 0, letterSpacing: -1 }}>Projects</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 18 }}>
          {D3.projects.filter(p => p.featured).map((p, i) => {
            const placeholder = p.tags.includes('Placeholder');
            return (
              <article key={i} className="kn-card" data-kn-reveal style={{
                padding: 32, background: '#fff',
                borderRadius: 12,
                border: placeholder ? '1px dashed rgba(21,20,15,.25)' : '1px solid rgba(21,20,15,.08)',
                opacity: placeholder ? 0.7 : 1,
                display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 32, alignItems: 'start',
              }}>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: accent, fontWeight: 600, marginBottom: 8 }}>
                    {p.kicker}
                    {p.kickerSub && <><br />{p.kickerSub}</>}
                  </div>
                  <h3 className="kn-display" style={{ fontSize: 32, fontWeight: 400, margin: '0 0 8px', letterSpacing: -0.5, lineHeight: 1.1 }}>{p.title}</h3>
                  <div style={{ fontSize: 12, color: 'rgba(21,20,15,.5)', marginBottom: 16 }}>{p.dates}</div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: placeholder ? 'rgba(21,20,15,.05)' : 'rgba(196,99,58,.1)', color: placeholder ? 'rgba(21,20,15,.5)' : accent, fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(21,20,15,.78)', margin: '0 0 16px', display: p.summary ? 'block' : 'none' }}>{p.summary}</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {p.highlights.map((h, j) => (
                      <li key={j} style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(21,20,15,.7)', padding: '10px 0', borderBottom: '1px solid rgba(21,20,15,.06)', display: 'flex', gap: 14 }}>
                        <span style={{ color: accent, fontVariantNumeric: 'tabular-nums', fontSize: 11, fontWeight: 600, paddingTop: 3, fontFamily: 'monospace' }}>{String(j+1).padStart(2,'0')}</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  {p.link && (
                    <a className="kn-link-arrow" href={p.link} style={{ marginTop: 14 }}>
                      View deck
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 7h8m0 0L8 4m3 3L8 10"/></svg>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* and more teaser */}
        <div style={{ textAlign: 'center', marginTop: 28 }} data-kn-reveal>
          <a href="projects.html" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 32px', borderRadius: 999,
            border: '1px solid rgba(21,20,15,.18)',
            color: 'rgba(21,20,15,.6)', textDecoration: 'none',
            fontSize: 14, fontWeight: 500,
            transition: 'border-color .2s, color .2s',
          }} className="kn-card">
            <span>Want to view more projects?</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 7h8m0 0L8 4m3 3L8 10"/></svg>
          </a>
        </div>
      </section>

      {/* skills: soft pills */}
      <section style={{ padding: '60px 56px', maxWidth: 1100, margin: '0 auto' }} data-kn-reveal>
        <h2 className="kn-display" style={{ fontSize: 56, fontWeight: 400, margin: '0 0 28px', letterSpacing: -1 }}>
          Methods & Tools
        </h2>
        <div style={{ display: 'grid', gap: 22 }}>
          {Object.entries(D3.skills).map(([k, vs]) => (
            <div key={k} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, alignItems: 'baseline', paddingBottom: 18, borderBottom: '1px solid rgba(21,20,15,.08)' }}>
              <h4 className="kn-display kn-italic" style={{ fontSize: 22, fontWeight: 400, margin: 0, color: accent }}>{k}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {vs.map(v => (
                  <span key={v} style={{ fontSize: 13, padding: '6px 12px', borderRadius: 999, background: '#fff', border: '1px solid rgba(21,20,15,.1)' }}>{v}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* dance: full-bleed feature */}
      <section id="dance" style={{ padding: '80px 56px', background: ink, color: cream, position: 'relative', overflow: 'hidden' }}>
        <div className="kn-blob" style={{ width: 320, height: 320, background: accent, top: -80, right: -60, opacity: 0.5 }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'center', position: 'relative' }} data-kn-reveal>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <span style={{ width: 28, height: 1, background: accent, display: 'inline-block' }} />
              <span className="kn-italic" style={{ fontSize: 14, letterSpacing: '.2em', textTransform: 'uppercase', color: accent, fontWeight: 500 }}>
                Off-stage
              </span>
            </div>
            <h2 className="kn-display" style={{ fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 400, margin: '0 0 24px', letterSpacing: -1.5, lineHeight: 1 }}>
              I <span className="kn-italic kn-grad">dance</span>.
            </h2>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: 'rgba(245,239,228,.78)', maxWidth: 580, margin: '0 0 24px' }}>
              {D3.offTheClock.body}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {D3.offTheClock.badges.map(b => (
                <span key={b} style={{ fontSize: 12, padding: '6px 14px', borderRadius: 999, border: `1px solid ${accent}`, color: accent }}>{b}</span>
              ))}
            </div>
          </div>
          <DanceCarousel images={DANCE_IMAGES} accent={accent} />
        </div>
      </section>

      {/* contact */}
      <section id="contact" style={{ padding: '100px 56px 70px', maxWidth: 1100, margin: '0 auto' }}>
        <div data-kn-reveal>
          <h2 className="kn-display" style={{ fontSize: 'clamp(56px, 9vw, 120px)', fontWeight: 400, letterSpacing: -2.5, lineHeight: 1, margin: '0 0 32px' }}>
            Let's <span className="kn-italic kn-grad">move</span> something forward.
          </h2>
          <p className="kn-display" style={{ fontSize: 22, lineHeight: 1.5, color: 'rgba(21,20,15,.7)', maxWidth: 680, margin: '0 0 40px', fontWeight: 400 }}>
            Looking for a Summer 2026 internship in HEOR/RWE, biotech, life-sciences consulting, or healthcare investing.
            <br />
            Always up for a coffee chat.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {[
              ['Email', D3.email, `mailto:${D3.email}`, '✉'],
              ['LinkedIn', 'in/yirong-c', D3.linkedin, '↗'],
              ['Résumé', 'PDF, 1 page', D3.resumeUrl, '↓'],
              ['Location', D3.location, null, '◉'],
            ].map(([k, v, href, icon]) => (
              <a key={k} href={href || '#'} className="kn-card" style={{
                padding: '22px 26px', background: '#fff', borderRadius: 12, border: '1px solid rgba(21,20,15,.08)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                textDecoration: 'none', color: 'inherit',
              }}>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(21,20,15,.5)', marginBottom: 4 }}>{k}</div>
                  <div className="kn-display" style={{ fontSize: 22, fontWeight: 400 }}>{v}</div>
                </div>
                <span style={{ fontSize: 22, color: accent }}>{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: '28px 56px', borderTop: '1px solid rgba(21,20,15,.1)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(21,20,15,.55)' }}>
        <span>© Iris Chen · 2026</span>
        <span className="kn-display">Boston, in motion.</span>
      </footer>
    </div>
  );
}

window.Kinetic = Kinetic;
