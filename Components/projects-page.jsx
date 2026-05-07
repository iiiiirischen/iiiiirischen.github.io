// Projects hub — filterable gallery

const PD = window.IRIS;

function ProjectsPage() {
  const accent  = "#7a3fb8";
  const accent2 = "#e85a9b";
  const ink     = "#241638";
  const cream   = "#fbf2f7";

  const allTags  = ["All", ...Array.from(new Set(PD.projects.flatMap(p => p.tags)))];
  const [active, setActive] = React.useState("All");

  const filtered = active === "All"
    ? PD.projects
    : PD.projects.filter(p => p.tags.includes(active));

  return (
    <div style={{ fontFamily:'"Inter",-apple-system,system-ui,sans-serif', background:cream, color:ink, minHeight:'100vh' }}>
      <style>{`
        .pp-display{font-family:"DM Serif Display","Fraunces",Georgia,serif;font-weight:400;letter-spacing:-.01em}
        .pp-italic{font-style:italic}
        .pp-grad{background:linear-gradient(120deg,${accent} 0%,${accent2} 100%);-webkit-background-clip:text;background-clip:text;color:transparent;display:inline-block;line-height:1.15}
        .pp-filter{display:inline-flex;align-items:center;padding:7px 18px;border-radius:999px;border:1px solid rgba(21,20,15,.18);font-size:13px;font-weight:500;cursor:pointer;transition:all .2s;background:transparent;color:rgba(21,20,15,.65)}
        .pp-filter:hover{border-color:${accent};color:${accent}}
        .pp-filter--on{background:${accent};color:#fff;border-color:${accent}}
        .pp-card{background:#fff;border-radius:12px;border:1px solid rgba(21,20,15,.08);padding:32px;transition:transform .35s cubic-bezier(.2,.7,.3,1),box-shadow .35s;animation:pp-in .38s ease both}
        .pp-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(21,20,15,.08)}
        @keyframes pp-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        .pp-tag{font-size:11px;padding:4px 10px;border-radius:999px;background:rgba(122,63,184,.08);color:${accent};font-weight:500;cursor:pointer;transition:background .2s}
        .pp-tag:hover{background:rgba(122,63,184,.18)}
        .pp-tag--on{background:${accent};color:#fff}
        .pp-back:hover svg{transform:translateX(-3px)}
        .pp-back svg{transition:transform .2s}
      `}</style>

      {/* ── nav ── */}
      <nav style={{
        display:'flex',alignItems:'center',justifyContent:'space-between',
        padding:'22px 56px',position:'sticky',top:0,
        background:'rgba(251,242,247,.88)',backdropFilter:'blur(10px)',zIndex:10,
        borderBottom:'1px solid rgba(122,63,184,.1)',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:20 }}>
          <a href="index.html" className="pp-back" style={{ display:'flex',alignItems:'center',gap:6,color:'rgba(21,20,15,.55)',textDecoration:'none',fontSize:13,fontWeight:500 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M10 3L5 8l5 5"/></svg>
            Home
          </a>
          <span style={{ width:1,height:16,background:'rgba(21,20,15,.15)' }}/>
          <span className="pp-display" style={{ fontSize:19 }}>Iris Chen</span>
        </div>
        <div style={{ display:'flex',gap:28,fontSize:13,color:'rgba(21,20,15,.65)' }}>
          <a href="main.html#about"     style={{ color:'inherit',textDecoration:'none' }}>About</a>
          <a href="main.html#education" style={{ color:'inherit',textDecoration:'none' }}>Education</a>
          <a href="main.html#work"      style={{ color:'inherit',textDecoration:'none' }}>Research</a>
          <a href="main.html#contact"   style={{ color:'inherit',textDecoration:'none' }}>Contact</a>
        </div>
      </nav>

      {/* ── hero ── */}
      <section style={{ padding:'80px 56px 48px', maxWidth:1100, margin:'0 auto' }}>
        <h1 className="pp-display" style={{ fontSize:'clamp(56px,8vw,96px)',fontWeight:400,letterSpacing:-2,lineHeight:1,margin:'0 0 16px' }}>
          All Projects<span className="pp-italic pp-grad">.</span>
        </h1>
        <p style={{ fontSize:18, color:'rgba(21,20,15,.55)', margin:0, whiteSpace:'nowrap', lineHeight:1.6 }}>
          Research across genetic epidemiology, metabolomics, and clinical evidence synthesis.
        </p>
      </section>

      {/* ── filter bar ── */}
      <section style={{ padding:'0 56px 36px', maxWidth:1100, margin:'0 auto' }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:14 }}>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`pp-filter${active === tag ? ' pp-filter--on' : ''}`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div style={{ fontSize:12, color:'rgba(21,20,15,.38)', letterSpacing:'.04em' }}>
          {filtered.length} project{filtered.length !== 1 ? 's' : ''} shown
        </div>
      </section>

      {/* ── grid ── */}
      <section style={{ padding:'0 56px 100px', maxWidth:1100, margin:'0 auto' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign:'center', padding:'60px 0', color:'rgba(21,20,15,.35)', fontSize:15 }}>
            No projects match this filter yet.
          </div>
        ) : (
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:20 }}>
            {filtered.map((p, i) => (
              <article key={p.title} className="pp-card" style={{ animationDelay:`${i * 0.07}s` }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:32, alignItems:'start' }}>

                  {/* left: meta */}
                  <div>
                    <div style={{ fontSize:11,letterSpacing:'.1em',textTransform:'uppercase',color:accent,fontWeight:600,marginBottom:8 }}>
                      {p.kicker}
                      {p.kickerSub && <><br /><span style={{ color:'rgba(21,20,15,.45)' }}>{p.kickerSub}</span></>}
                    </div>
                    <h2 className="pp-display" style={{ fontSize:30,fontWeight:400,margin:'0 0 8px',letterSpacing:-0.5,lineHeight:1.1 }}>{p.title}</h2>
                    <div style={{ fontSize:12, color:'rgba(21,20,15,.4)', marginBottom:18 }}>{p.dates}</div>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                      {p.tags.map(t => (
                        <span
                          key={t}
                          className={`pp-tag${t === active ? ' pp-tag--on' : ''}`}
                          onClick={() => setActive(t === active ? 'All' : t)}
                        >{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* right: highlights */}
                  <ul style={{ margin:0, padding:0, listStyle:'none' }}>
                    {p.highlights.map((h, j) => (
                      <li key={j} style={{ fontSize:14,lineHeight:1.6,color:'rgba(21,20,15,.72)',padding:'10px 0',borderBottom:'1px solid rgba(21,20,15,.06)',display:'flex',gap:14 }}>
                        <span style={{ color:accent,fontSize:11,fontWeight:600,paddingTop:3,fontFamily:'monospace',flexShrink:0,fontVariantNumeric:'tabular-nums' }}>{String(j+1).padStart(2,'0')}</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ── footer ── */}
      <footer style={{ padding:'28px 56px',borderTop:'1px solid rgba(21,20,15,.1)',display:'flex',justifyContent:'space-between',fontSize:12,color:'rgba(21,20,15,.5)' }}>
        <span>© Iris Chen · 2026</span>
        <span className="pp-display">Boston, in motion.</span>
      </footer>
    </div>
  );
}

window.ProjectsPage = ProjectsPage;
