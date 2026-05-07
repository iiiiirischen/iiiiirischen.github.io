// ─── Intro landing page — Hello state machine ────────────────────────────────

// ══ EDIT YOUR BUBBLES HERE ══════════════════════════════════════════════════
// label : text shown on the bubble
// icon  : emoji or symbol before the label
// href  : path to page — use null for placeholders (shows "Coming soon")
//
// To add a new bubble: copy any line and fill in label, icon, href.
// Bubbles appear in the order listed.
const BUBBLES = [
  { label: "Resume+",       icon: "✦", href: "main.html"     },
  { label: "Projects",      icon: "◈", href: "projects.html" },
  { label: "Placeholder 1", icon: "○", href: null            }, // TODO: add link
  { label: "Placeholder 2", icon: "○", href: null            }, // TODO: add link
  { label: "Placeholder 3", icon: "○", href: null            }, // TODO: add link
  { label: "Placeholder 4", icon: "○", href: null            }, // TODO: add link
  { label: "Placeholder 5", icon: "○", href: null            }, // TODO: add link
];

// Colors cycle through this list in order (one per bubble).
// Add more colors if you add more bubbles.
const BUBBLE_COLORS = [
  "#7a3fb8", // purple  — Resume+
  "#e85a9b", // pink    — Projects
  "#5b8fd4", // blue
  "#4cb5a5", // teal
  "#e07850", // orange
  "#b55ab8", // magenta
  "#8fa830", // olive
];
// ════════════════════════════════════════════════════════════════════════════

function IntroPage() {
  const accent  = "#7a3fb8";
  const accent2 = "#e85a9b";
  const ink     = "#241638";
  const cream   = "#fbf2f7";

  // Four phases: 'hello' → 'leaving' → 'prompt' → 'bubbles'
  const [phase, setPhase] = React.useState('hello');

  const handleHelloClick = () => {
    if (phase !== 'hello') return;
    setPhase('leaving');
    setTimeout(() => {
      setPhase('prompt');
      setTimeout(() => setPhase('bubbles'), 1100);
    }, 460);
  };

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: cream, color: ink,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: '"Inter", -apple-system, system-ui, sans-serif',
      overflow: 'hidden', position: 'relative',
    }}>
      <style>{`
        .id-disp { font-family:"DM Serif Display","Fraunces",Georgia,serif; font-weight:400; letter-spacing:-.02em }
        .id-grad  { background:linear-gradient(120deg,${accent} 0%,${accent2} 100%);-webkit-background-clip:text;background-clip:text;color:transparent;display:inline-block }

        /* Hello */
        .id-hello-wrap { animation:id-in .9s cubic-bezier(.2,.8,.3,1) both }
        .id-hello       { cursor:pointer; user-select:none; display:inline-block; transition:text-shadow .25s }
        .id-hello:hover { text-shadow:0 0 60px rgba(122,63,184,.28) }
        .id-float       { animation:id-float 3.4s ease-in-out infinite }
        .id-leaving     { animation:id-leave .44s ease forwards }
        @keyframes id-in    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes id-float { 0%,100%{margin-top:0} 50%{margin-top:-14px} }
        @keyframes id-leave { to{opacity:0;transform:translateY(-32px) scale(.9)} }

        /* Blinking cursor */
        .id-cursor { display:inline-block;width:3px;height:.82em;background:${accent};margin-left:6px;vertical-align:middle;border-radius:2px;animation:id-blink 1.1s step-end infinite }
        @keyframes id-blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* Hint */
        .id-hint { animation:id-in .8s ease .7s both }

        /* Prompt */
        .id-prompt { animation:id-prompt-in .6s cubic-bezier(.2,.8,.3,1) both }
        @keyframes id-prompt-in { from{opacity:0;transform:scale(.86)} to{opacity:1;transform:scale(1)} }

        /* Bubbles */
        .id-bubble {
          display:inline-flex; align-items:center; gap:7px;
          padding:13px 26px; border-radius:999px; border:1.5px solid;
          font-size:15px; font-weight:600; letter-spacing:.01em;
          text-decoration:none; white-space:nowrap;
          animation:id-pop .5s cubic-bezier(.34,1.56,.64,1) both;
          transition:transform .25s cubic-bezier(.2,.7,.3,1), box-shadow .25s;
        }
        .id-bubble:hover       { transform:translateY(-7px) scale(1.07) }
        .id-bubble--ph         { opacity:.45; cursor:default; pointer-events:none }
        .id-bubble--ph:hover   { transform:none }
        @keyframes id-pop { from{opacity:0;transform:scale(0)} to{opacity:1;transform:scale(1)} }

        /* Background blobs */
        .id-blob { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; opacity:.22 }

        /* Mobile */
        @media(max-width:620px) {
          .id-bubble      { padding:11px 20px; font-size:13px }
          .id-bubble-grid { gap:10px !important; padding:0 18px !important }
        }
      `}</style>

      {/* Decorative blobs — same feel as main site */}
      <div className="id-blob" style={{ width:440, height:440, background:accent,  top:'-12%', right:'-8%' }} />
      <div className="id-blob" style={{ width:340, height:340, background:accent2, bottom:'-8%', left:'-6%' }} />

      {/* ── PHASE: hello / leaving ── */}
      {(phase === 'hello' || phase === 'leaving') && (
        <div className="id-hello-wrap" style={{ textAlign:'center' }}>
          <div
            className={`id-float${phase === 'leaving' ? ' id-leaving' : ''}`}
            onClick={handleHelloClick}
          >
            <span
              className="id-disp id-hello"
              style={{ fontSize:'clamp(88px,15vw,180px)', lineHeight:1, color:ink }}
            >
              Hello<span className="id-cursor" />
            </span>
          </div>
          <p className="id-hint" style={{
            margin:'22px 0 0', fontSize:12, letterSpacing:'.15em',
            textTransform:'uppercase', color:'rgba(21,20,15,.36)', fontWeight:500,
          }}>
            click to continue
          </p>
        </div>
      )}

      {/* ── PHASE: prompt + bubbles ── */}
      {(phase === 'prompt' || phase === 'bubbles') && (
        <div style={{ textAlign:'center', padding:'0 24px', maxWidth:960, width:'100%' }}>

          <h2 className="id-disp id-prompt" style={{
            fontSize:'clamp(26px,5vw,54px)', fontWeight:400, fontStyle:'italic',
            color:ink, margin:'0 0 52px', lineHeight:1.25,
          }}>
            Want to know more about <span className="id-grad">Iris</span>?
          </h2>

          {phase === 'bubbles' && (
            <div className="id-bubble-grid" style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:14 }}>
              {BUBBLES.map((b, i) => {
                const color = BUBBLE_COLORS[i % BUBBLE_COLORS.length];
                const ph    = !b.href;
                return (
                  <a
                    key={i}
                    href={ph ? undefined : b.href}
                    className={`id-bubble${ph ? ' id-bubble--ph' : ''}`}
                    title={ph ? 'Coming soon' : ''}
                    style={{
                      animationDelay: `${i * 0.09}s`,
                      borderColor: color,
                      color:       ph ? 'rgba(21,20,15,.4)' : color,
                      background:  '#fff',
                      boxShadow:   ph ? 'none' : `0 4px 24px ${color}2a`,
                    }}
                  >
                    <span style={{ fontSize:15 }}>{b.icon}</span>
                    {b.label}
                  </a>
                );
              })}
            </div>
          )}

        </div>
      )}
    </div>
  );
}

window.IntroPage = IntroPage;
