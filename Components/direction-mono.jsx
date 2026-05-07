// Direction 2 — MONO / TECHNICAL
// Monospace + grid. Research-notebook / terminal feel.
// Color: near-white bg, ink black, single technical accent (electric blue).
// Type: JetBrains Mono throughout, with occasional sans for body.

const D2 = window.IRIS;

function MonoTech() {
  const accent = "#1f5fd9"; // technical blue
  const ink = "#0e0e0e";
  const bg = "#fbfbf9";
  const muted = "rgba(14,14,14,.55)";

  const Row = ({ k, v, href }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 16, padding: '8px 0', borderBottom: '1px dashed rgba(14,14,14,.1)', fontSize: 13 }}>
      <span style={{ color: muted }}>{k}</span>
      {href ? <a href={href} style={{ color: accent, textDecoration: 'none' }}>{v} ↗</a> : <span>{v}</span>}
    </div>
  );

  return (
    <div style={{
      fontFamily: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace',
      background: bg, color: ink, minHeight: '100%', width: '100%', overflow: 'hidden',
    }}>
      <style>{`
        .mt-sans{font-family:"Inter",-apple-system,system-ui,sans-serif}
        .mt-link{color:${accent};text-decoration:none;border-bottom:1px solid ${accent}33;transition:border-color .15s}
        .mt-link:hover{border-color:${accent}}
        .mt-tag{display:inline-block;padding:2px 8px;border:1px solid rgba(14,14,14,.2);border-radius:2px;font-size:11px;color:${muted};background:#fff}
        .mt-blink::after{content:"_";animation:mtblink 1s step-end infinite;color:${accent}}
        @keyframes mtblink{50%{opacity:0}}
        .mt-btn{display:inline-flex;align-items:center;gap:8px;padding:9px 16px;background:${ink};color:${bg};text-decoration:none;font-size:12px;border-radius:2px;transition:background .2s;font-family:inherit}
        .mt-btn:hover{background:${accent}}
        .mt-btn--g{background:transparent;color:${ink};border:1px solid rgba(14,14,14,.25)}
        .mt-btn--g:hover{background:${ink};color:${bg};border-color:${ink}}
      `}</style>

      {/* top bar — looks like a terminal title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 32px', borderBottom: `1px solid rgba(14,14,14,.1)`, fontSize: 12, color: muted, background: '#f4f3ef', position: 'sticky', top: 0, zIndex: 10 }}>
        <span style={{ display: 'inline-flex', gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: 5, background: '#e35b4b' }} />
          <span style={{ width: 10, height: 10, borderRadius: 5, background: '#e8b441' }} />
          <span style={{ width: 10, height: 10, borderRadius: 5, background: '#5ab268' }} />
        </span>
        <span style={{ marginLeft: 16 }}>~/iris-chen — zsh — 100×40</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 18 }}>
          <a href="#about" style={{ color: muted, textDecoration: 'none' }}>about</a>
          <a href="#research" style={{ color: muted, textDecoration: 'none' }}>research</a>
          <a href="#projects" style={{ color: muted, textDecoration: 'none' }}>projects</a>
          <a href="#contact" style={{ color: muted, textDecoration: 'none' }}>contact</a>
        </span>
      </div>

      {/* hero */}
      <section style={{ padding: '64px 56px 48px', maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ fontSize: 12, color: accent, marginBottom: 18 }}>
          <span style={{ color: muted }}>$</span> whoami<span className="mt-blink"></span>
        </div>
        <h1 style={{ fontSize: 'clamp(40px, 6.4vw, 76px)', fontWeight: 600, letterSpacing: -2, lineHeight: 1.05, margin: '0 0 18px' }}>
          {D2.name}
        </h1>
        <div style={{ fontSize: 14, color: muted, marginBottom: 28, display: 'flex', gap: 18, flexWrap: 'wrap' }}>
          <span>// MS Epi · Harvard Chan</span>
          <span>// {D2.location}</span>
          <span>// status: <span style={{ color: '#5ab268' }}>● open to roles</span></span>
        </div>
        <p className="mt-sans" style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(14,14,14,.8)', maxWidth: 720, margin: '0 0 32px', fontWeight: 400 }}>
          {D2.headlines.mono}
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a className="mt-btn" href={D2.resumeUrl} download>
            ./download_resume.pdf
          </a>
          <a className="mt-btn mt-btn--g" href={`mailto:${D2.email}`}>
            ./say_hi.sh
          </a>
        </div>

        {/* terminal-ish status block */}
        <div style={{ marginTop: 40, padding: 20, background: '#f4f3ef', border: '1px solid rgba(14,14,14,.08)', borderRadius: 4, fontSize: 13, lineHeight: 1.7 }}>
          <div style={{ color: muted, marginBottom: 6 }}>// {D2.seeking.label} —</div>
          <div>{D2.seeking.text}</div>
        </div>
      </section>

      {/* about */}
      <section id="about" style={{ padding: '40px 56px', maxWidth: 1080, margin: '0 auto' }}>
        <SectionHead n="00" name="about.md" accent={accent} muted={muted} />
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48, marginTop: 24 }}>
          <div className="mt-sans" style={{ fontSize: 16, lineHeight: 1.7 }}>
            {D2.pitch.map((p, i) => <p key={i} style={{ margin: '0 0 14px', color: i === 0 ? ink : 'rgba(14,14,14,.78)' }}>{p}</p>)}
          </div>
          <div style={{ background: '#fff', border: '1px solid rgba(14,14,14,.1)', borderRadius: 4, padding: 18, fontSize: 12, alignSelf: 'start' }}>
            <div style={{ color: muted, marginBottom: 10, fontSize: 11, letterSpacing: '.08em' }}># META</div>
            <Row k="name" v={D2.name} />
            <Row k="based" v={D2.location} />
            <Row k="email" v={D2.email} href={`mailto:${D2.email}`} />
            <Row k="linkedin" v="in/yirong-c" href={D2.linkedin} />
            <Row k="gpa" v="4.0 / 4.0" />
          </div>
        </div>
      </section>

      {/* education */}
      <section style={{ padding: '40px 56px', maxWidth: 1080, margin: '0 auto' }}>
        <SectionHead n="01" name="education.log" accent={accent} muted={muted} />
        <div style={{ marginTop: 20 }}>
          {D2.education.map((ed, i) => (
            <div key={i} style={{ padding: '20px 0', borderBottom: '1px dashed rgba(14,14,14,.12)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'baseline' }}>
                <div style={{ fontSize: 17, fontWeight: 600 }}>{ed.school}</div>
                <div style={{ fontSize: 12, color: muted, fontVariantNumeric: 'tabular-nums' }}>{ed.dates}</div>
              </div>
              <div className="mt-sans" style={{ fontSize: 14, color: 'rgba(14,14,14,.75)', marginTop: 6 }}>{ed.degree}</div>
              <div style={{ fontSize: 12, color: accent, marginTop: 6 }}>[{ed.gpa}] · {ed.city}</div>
              <div style={{ marginTop: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {ed.coursework.map(c => <span key={c} className="mt-tag">{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* research / experience */}
      <section id="research" style={{ padding: '40px 56px', maxWidth: 1080, margin: '0 auto' }}>
        <SectionHead n="02" name="research/" accent={accent} muted={muted} />
        <div style={{ marginTop: 20 }}>
          {D2.experience.map((x, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px dashed rgba(14,14,14,.12)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 600 }}>{x.group}</div>
                  <div className="mt-sans" style={{ fontSize: 13, color: muted, marginTop: 4 }}>{x.title} · {x.org}</div>
                </div>
                <div style={{ fontSize: 12, color: muted, fontVariantNumeric: 'tabular-nums' }}>{x.dates}</div>
              </div>
              <ul className="mt-sans" style={{ margin: '14px 0 0', padding: 0, listStyle: 'none' }}>
                {x.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', gap: 12, fontSize: 14, lineHeight: 1.6, color: 'rgba(14,14,14,.78)', marginBottom: 8 }}>
                    <span style={{ color: accent, fontFamily: 'inherit', flexShrink: 0, fontSize: 13, paddingTop: 2 }}>{`>`}</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* projects */}
      <section id="projects" style={{ padding: '40px 56px', maxWidth: 1080, margin: '0 auto' }}>
        <SectionHead n="03" name="projects/" accent={accent} muted={muted} />
        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
          {D2.projects.map((p, i) => {
            const placeholder = p.tags.includes('Placeholder');
            return (
              <article key={i} style={{
                background: placeholder ? 'transparent' : '#fff',
                border: placeholder ? '1px dashed rgba(14,14,14,.25)' : '1px solid rgba(14,14,14,.1)',
                borderRadius: 4, padding: 22, opacity: placeholder ? 0.7 : 1,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 11, color: accent, letterSpacing: '.06em' }}>// {p.kicker}{p.kickerSub ? ` · ${p.kickerSub}` : ''}</span>
                  <span style={{ fontSize: 11, color: muted, fontVariantNumeric: 'tabular-nums' }}>{p.dates}</span>
                </div>
                <h3 style={{ fontSize: 21, fontWeight: 600, margin: '0 0 10px', letterSpacing: -0.4 }}>
                  <span style={{ color: accent }}>$</span> {p.title}
                </h3>
                <p className="mt-sans" style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(14,14,14,.75)', margin: '0 0 14px', display: p.summary ? 'block' : 'none' }}>{p.summary}</p>
                <div style={{ background: '#f4f3ef', borderLeft: `2px solid ${accent}`, padding: '10px 14px', fontSize: 13, lineHeight: 1.7 }}>
                  {p.highlights.map((h, j) => (
                    <div key={j} style={{ display: 'flex', gap: 10, color: 'rgba(14,14,14,.78)' }}>
                      <span style={{ color: muted }}>{String(j+1).padStart(2,'0')}</span>
                      <span className="mt-sans">{h}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.tags.map(t => <span key={t} className="mt-tag">{t}</span>)}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* skills */}
      <section style={{ padding: '40px 56px', maxWidth: 1080, margin: '0 auto' }}>
        <SectionHead n="04" name="skills.json" accent={accent} muted={muted} />
        <div style={{ marginTop: 20, background: '#f4f3ef', border: '1px solid rgba(14,14,14,.1)', borderRadius: 4, padding: 22, fontSize: 13, lineHeight: 1.8 }}>
          <div style={{ color: muted }}>{`{`}</div>
          {Object.entries(D2.skills).map(([k, vs], i, arr) => (
            <div key={k} style={{ paddingLeft: 18 }}>
              <span style={{ color: accent }}>"{k}"</span>
              <span style={{ color: muted }}>: [</span>
              <div style={{ paddingLeft: 18 }}>
                {vs.map((v, j) => (
                  <span key={v}>
                    <span style={{ color: '#5ab268' }}>"{v}"</span>
                    {j < vs.length-1 && <span style={{ color: muted }}>, </span>}
                  </span>
                ))}
              </div>
              <span style={{ color: muted }}>]{i < arr.length-1 ? ',' : ''}</span>
            </div>
          ))}
          <div style={{ color: muted }}>{`}`}</div>
        </div>
      </section>

      {/* off the clock */}
      <section style={{ padding: '40px 56px', maxWidth: 1080, margin: '0 auto' }}>
        <SectionHead n="05" name="off-the-clock.md" accent={accent} muted={muted} />
        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 240px', gap: 32, alignItems: 'start' }}>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 600, margin: '0 0 14px', letterSpacing: -0.4 }}>
              <span style={{ color: accent }}>#</span> dance
            </h3>
            <p className="mt-sans" style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(14,14,14,.78)', margin: 0 }}>
              {D2.offTheClock.body}
            </p>
            <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {D2.offTheClock.badges.map(b => <span key={b} className="mt-tag">#{b.toLowerCase().replace(/\s+/g,'-')}</span>)}
            </div>
          </div>
          <div style={{
            aspectRatio: '3/4', background: `repeating-linear-gradient(45deg, #f4f3ef 0 6px, #fbfbf9 6px 12px)`,
            border: '1px dashed rgba(14,14,14,.2)', borderRadius: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, color: muted, textAlign: 'center', padding: 12,
          }}>
            [photo.jpg]<br/>// drop here
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" style={{ padding: '60px 56px 80px', maxWidth: 1080, margin: '0 auto' }}>
        <SectionHead n="06" name="contact.sh" accent={accent} muted={muted} />
        <div style={{ marginTop: 20, padding: 28, background: ink, color: bg, borderRadius: 4, fontSize: 14, lineHeight: 1.9 }}>
          <div style={{ color: '#5ab268' }}>$ cat ./contact.sh</div>
          <div style={{ color: 'rgba(255,255,255,.6)', marginTop: 6 }}>{`#!/bin/sh`}</div>
          <div style={{ color: 'rgba(255,255,255,.6)' }}>{`# the easiest way to reach me`}</div>
          <div style={{ marginTop: 14 }}>
            <span style={{ color: '#7aafff' }}>email</span>=<span style={{ color: '#f7c073' }}>"<a href={`mailto:${D2.email}`} style={{ color: '#f7c073' }}>{D2.email}</a>"</span>
          </div>
          <div>
            <span style={{ color: '#7aafff' }}>linkedin</span>=<span style={{ color: '#f7c073' }}>"<a href={D2.linkedin} style={{ color: '#f7c073' }}>linkedin.com/in/yirong-c</a>"</span>
          </div>
          <div>
            <span style={{ color: '#7aafff' }}>resume</span>=<span style={{ color: '#f7c073' }}>"<a href={D2.resumeUrl} download style={{ color: '#f7c073' }}>./Iris-Chen-2026.pdf</a>"</span>
          </div>
          <div style={{ marginTop: 14, color: 'rgba(255,255,255,.5)' }}>echo <span style={{ color: '#f7c073' }}>"thanks for reading — let's chat."</span></div>
          <div style={{ marginTop: 4 }}><span style={{ color: '#5ab268' }}>$</span> <span className="mt-blink" style={{ color: '#fff' }}></span></div>
        </div>
      </section>

      <footer style={{ padding: '20px 56px', borderTop: `1px solid rgba(14,14,14,.1)`, fontSize: 11, color: muted, display: 'flex', justifyContent: 'space-between' }}>
        <span>// © {D2.name} 2026</span>
        <span>// built with HTML, taste, and too much coffee</span>
      </footer>
    </div>
  );
}

function SectionHead({ n, name, accent, muted }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 8, borderBottom: `1px solid rgba(14,14,14,.15)` }}>
      <span style={{ fontSize: 12, color: muted, fontVariantNumeric: 'tabular-nums' }}>[{n}]</span>
      <span style={{ fontSize: 15, fontWeight: 600, color: accent }}>{name}</span>
      <span style={{ flex: 1, borderTop: `1px dashed rgba(14,14,14,.15)` }} />
    </div>
  );
}

window.MonoTech = MonoTech;
