// Direction 1 — EDITORIAL MINIMAL
// Quiet serif-led layout. Restraint, whitespace, NYT-magazine confidence.
// Color: warm off-white + ink black + a single muted accent.
// Type: Fraunces (display serif) + Inter (UI). Single page, scrolls.

const D1 = window.IRIS;

function Editorial() {
  const accent = "#7a3c2e"; // muted oxblood / brick

  return (
    <div style={{
      fontFamily: '"Inter", -apple-system, system-ui, sans-serif',
      background: '#faf8f3',
      color: '#1a1816',
      minHeight: '100%',
      width: '100%',
      overflow: 'hidden',
    }}>
      <style>{`
        .ed-serif{font-family:"Fraunces",Georgia,serif;font-optical-sizing:auto}
        .ed-rule{border:0;border-top:1px solid rgba(26,24,22,.15);margin:0}
        .ed-link{color:inherit;text-decoration:none;border-bottom:1px solid rgba(26,24,22,.25);transition:border-color .2s}
        .ed-link:hover{border-color:${accent}}
        .ed-pill{display:inline-block;padding:4px 10px;border-radius:999px;border:1px solid rgba(26,24,22,.18);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:rgba(26,24,22,.7)}
        .ed-btn{display:inline-flex;align-items:center;gap:8px;padding:11px 20px;border-radius:999px;background:#1a1816;color:#faf8f3;text-decoration:none;font-size:13px;font-weight:500;letter-spacing:.01em;transition:transform .15s,background .2s}
        .ed-btn:hover{background:${accent};transform:translateY(-1px)}
        .ed-btn--ghost{background:transparent;color:#1a1816;border:1px solid rgba(26,24,22,.25)}
        .ed-btn--ghost:hover{background:#1a1816;color:#faf8f3;border-color:#1a1816}
        .ed-dot{width:6px;height:6px;border-radius:50%;background:${accent};display:inline-block}
        .ed-h-mark::first-letter{color:${accent}}
        .ed-arrow{transition:transform .2s}
        .ed-link-inline:hover .ed-arrow{transform:translateX(3px)}
      `}</style>

      {/* nav — minimal, sticky */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '24px 56px', borderBottom: '1px solid rgba(26,24,22,.08)',
        position: 'sticky', top: 0, background: 'rgba(250,248,243,0.92)', backdropFilter: 'blur(8px)', zIndex: 10,
      }}>
        <div className="ed-serif" style={{ fontSize: 18, fontWeight: 500, letterSpacing: -0.2 }}>
          Iris <span style={{ color: accent }}>·</span> Chen
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 13, color: 'rgba(26,24,22,.65)' }}>
          <a href="#about" className="ed-link" style={{ borderBottom: 'none' }}>About</a>
          <a href="#work" className="ed-link" style={{ borderBottom: 'none' }}>Work</a>
          <a href="#projects" className="ed-link" style={{ borderBottom: 'none' }}>Projects</a>
          <a href="#contact" className="ed-link" style={{ borderBottom: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* hero */}
      <section style={{ padding: '120px 56px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <span className="ed-dot" />
          <span style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(26,24,22,.6)' }}>
            {D1.seeking.label} — Summer 2026
          </span>
        </div>
        <h1 className="ed-serif ed-h-mark" style={{
          fontSize: 'clamp(48px, 7vw, 92px)', lineHeight: 1.02, fontWeight: 400,
          letterSpacing: -1.5, margin: '0 0 28px', maxWidth: 950,
        }}>
          {D1.name}.
        </h1>
        <p className="ed-serif" style={{
          fontSize: 26, lineHeight: 1.4, fontWeight: 300, fontStyle: 'italic',
          color: 'rgba(26,24,22,.78)', maxWidth: 780, margin: '0 0 40px',
        }}>
          {D1.headlines.editorial}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a className="ed-btn" href={D1.resumeUrl} download>
            Download résumé
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 1v8m0 0L2.5 5.5M6 9l3.5-3.5M1 11h10"/></svg>
          </a>
          <a className="ed-btn ed-btn--ghost" href={`mailto:${D1.email}`}>Get in touch</a>
        </div>
      </section>

      <hr className="ed-rule" />

      {/* about */}
      <section id="about" style={{ padding: '80px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64 }}>
          <div className="ed-pill" style={{ alignSelf: 'start' }}>I · About</div>
          <div>
            {D1.pitch.map((p, i) => (
              <p key={i} className="ed-serif" style={{
                fontSize: 22, lineHeight: 1.55, color: i === 0 ? '#1a1816' : 'rgba(26,24,22,.8)',
                margin: i === 0 ? '0 0 20px' : '0 0 20px', fontWeight: i === 0 ? 400 : 300,
              }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <hr className="ed-rule" />

      {/* education */}
      <section style={{ padding: '64px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64 }}>
          <div className="ed-pill" style={{ alignSelf: 'start' }}>II · Education</div>
          <div>
            {D1.education.map((ed, i) => (
              <div key={i} style={{ paddingBottom: 32, marginBottom: 32, borderBottom: i < D1.education.length-1 ? '1px solid rgba(26,24,22,.1)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12, marginBottom: 6 }}>
                  <h3 className="ed-serif" style={{ fontSize: 26, fontWeight: 400, margin: 0, letterSpacing: -0.3 }}>{ed.school}</h3>
                  <span style={{ fontSize: 13, color: 'rgba(26,24,22,.55)', fontVariantNumeric: 'tabular-nums' }}>{ed.dates}</span>
                </div>
                <div style={{ fontSize: 15, color: 'rgba(26,24,22,.7)', marginBottom: 4 }}>{ed.degree}</div>
                <div style={{ fontSize: 13, color: accent, marginBottom: 14, fontWeight: 500 }}>{ed.gpa} · {ed.city}</div>
                <div style={{ fontSize: 14, color: 'rgba(26,24,22,.65)', lineHeight: 1.7 }}>
                  <span style={{ fontStyle: 'italic' }}>Coursework:</span> {ed.coursework.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ed-rule" />

      {/* experience */}
      <section id="work" style={{ padding: '64px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64 }}>
          <div className="ed-pill" style={{ alignSelf: 'start' }}>III · Research</div>
          <div>
            {D1.experience.map((x, i) => (
              <article key={i} style={{ paddingBottom: 36, marginBottom: 36, borderBottom: i < D1.experience.length-1 ? '1px solid rgba(26,24,22,.1)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 10, flexWrap: 'wrap' }}>
                  <div>
                    <h3 className="ed-serif" style={{ fontSize: 24, fontWeight: 400, margin: 0, letterSpacing: -0.3 }}>{x.group}</h3>
                    <div style={{ fontSize: 14, color: 'rgba(26,24,22,.65)', marginTop: 4 }}>
                      {x.title} · <span style={{ fontStyle: 'italic' }}>{x.org}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: 13, color: 'rgba(26,24,22,.55)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{x.dates}</span>
                </div>
                <ul style={{ margin: '14px 0 0', padding: 0, listStyle: 'none' }}>
                  {x.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: 14, fontSize: 15, lineHeight: 1.6, color: 'rgba(26,24,22,.78)', marginBottom: 8 }}>
                      <span style={{ color: accent, marginTop: 9, flexShrink: 0 }}>—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="ed-rule" />

      {/* projects */}
      <section id="projects" style={{ padding: '64px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64 }}>
          <div className="ed-pill" style={{ alignSelf: 'start' }}>IV · Projects</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
            {D1.projects.map((p, i) => {
              const isPlaceholder = p.tags.includes('Placeholder');
              return (
                <article key={i} style={{
                  padding: 28, background: '#fff', borderRadius: 4,
                  border: isPlaceholder ? `1px dashed rgba(26,24,22,.25)` : '1px solid rgba(26,24,22,.08)',
                  opacity: isPlaceholder ? 0.65 : 1,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 8 }}>
                    <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: accent, fontWeight: 500 }}>
                      {p.kicker}
                      {p.kickerSub && <><br />{p.kickerSub}</>}
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(26,24,22,.5)', fontVariantNumeric: 'tabular-nums' }}>{p.dates}</div>
                  </div>
                  <h3 className="ed-serif" style={{ fontSize: 28, fontWeight: 400, margin: '0 0 14px', letterSpacing: -0.4 }}>{p.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(26,24,22,.75)', margin: '0 0 16px', display: p.summary ? 'block' : 'none' }}>{p.summary}</p>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', borderTop: '1px solid rgba(26,24,22,.08)', paddingTop: 14 }}>
                    {p.highlights.map((h, j) => (
                      <li key={j} style={{ fontSize: 14, lineHeight: 1.55, color: 'rgba(26,24,22,.7)', padding: '6px 0', display: 'flex', gap: 12 }}>
                        <span style={{ color: accent, fontVariantNumeric: 'tabular-nums', fontSize: 12, fontWeight: 500, paddingTop: 2 }}>{String(j+1).padStart(2,'0')}</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: 11, padding: '3px 9px', borderRadius: 3, background: 'rgba(26,24,22,.06)', color: 'rgba(26,24,22,.65)' }}>{t}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="ed-rule" />

      {/* skills */}
      <section style={{ padding: '64px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64 }}>
          <div className="ed-pill" style={{ alignSelf: 'start' }}>V · Methods</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 28 }}>
            {Object.entries(D1.skills).map(([k, vs]) => (
              <div key={k}>
                <h4 className="ed-serif" style={{ fontSize: 17, fontWeight: 500, margin: '0 0 10px', fontStyle: 'italic', color: accent }}>{k}</h4>
                <div style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(26,24,22,.78)' }}>{vs.join(' · ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ed-rule" />

      {/* off the clock — dance */}
      <section style={{ padding: '64px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64 }}>
          <div className="ed-pill" style={{ alignSelf: 'start' }}>VI · Off the clock</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, alignItems: 'start' }}>
            <div>
              <h3 className="ed-serif" style={{ fontSize: 32, fontWeight: 400, margin: '0 0 20px', letterSpacing: -0.4, fontStyle: 'italic' }}>
                I dance.
              </h3>
              <p className="ed-serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'rgba(26,24,22,.8)', fontWeight: 300, margin: '0 0 18px' }}>
                {D1.offTheClock.body}
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
                {D1.offTheClock.badges.map(b => (
                  <span key={b} style={{ fontSize: 12, padding: '5px 12px', borderRadius: 999, border: `1px solid ${accent}`, color: accent, fontStyle: 'italic' }}>{b}</span>
                ))}
              </div>
            </div>
            <div style={{
              aspectRatio: '3/4', background: `repeating-linear-gradient(135deg, #efe7d8 0 8px, #f5ede0 8px 16px)`,
              borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'monospace', fontSize: 11, color: 'rgba(26,24,22,.5)', textAlign: 'center', padding: 16,
            }}>
              [ photo · drop a stage shot here ]
            </div>
          </div>
        </div>
      </section>

      <hr className="ed-rule" />

      {/* contact */}
      <section id="contact" style={{ padding: '96px 56px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64 }}>
          <div className="ed-pill" style={{ alignSelf: 'start' }}>VII · Contact</div>
          <div>
            <h2 className="ed-serif" style={{ fontSize: 52, fontWeight: 400, margin: '0 0 24px', letterSpacing: -1, lineHeight: 1.05 }}>
              Let's <span style={{ fontStyle: 'italic', color: accent }}>talk.</span>
            </h2>
            <p className="ed-serif" style={{ fontSize: 19, lineHeight: 1.6, color: 'rgba(26,24,22,.75)', maxWidth: 600, margin: '0 0 36px', fontWeight: 300 }}>
              I'm actively looking for a 2026 summer internship in HEOR / RWE, biotech research, life-sciences consulting, or healthcare investing. Always happy to chat about evidence and methods.ce.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid rgba(26,24,22,.15)' }}>
              {[
                ['Email', D1.email, `mailto:${D1.email}`],
                ['LinkedIn', 'in/yirong-c', D1.linkedin],
                ['Location', D1.location, null],
                ['Résumé', 'Iris Chen — 2026.pdf', D1.resumeUrl],
              ].map(([k, v, href]) => (
                <a key={k} href={href || '#'} className="ed-link-inline" style={{
                  padding: '20px 0', borderBottom: '1px solid rgba(26,24,22,.15)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  textDecoration: 'none', color: 'inherit',
                }}>
                  <div>
                    <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(26,24,22,.5)', marginBottom: 4 }}>{k}</div>
                    <div className="ed-serif" style={{ fontSize: 20, fontWeight: 400 }}>{v}</div>
                  </div>
                  {href && <span className="ed-arrow" style={{ color: accent, fontSize: 22 }}>→</span>}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '32px 56px', borderTop: '1px solid rgba(26,24,22,.1)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(26,24,22,.5)' }}>
        <span>© {D1.name} · 2026</span>
        <span className="ed-serif" style={{ fontStyle: 'italic' }}>Made with care in Boston.</span>
      </footer>
    </div>
  );
}

window.Editorial = Editorial;
