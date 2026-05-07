// ─── Intro landing page — Hello state machine ────────────────────────────────

// ══ EDIT YOUR BUBBLES HERE ══════════════════════════════════════════════════
// label : text shown on the bubble
// icon  : emoji or symbol before the label
// href  : path to page — use null for placeholders (shows ghost bubble)
const BUBBLES = [
  { label: "Resume+",       icon: "✦", href: "main.html"     },
  { label: "Projects",      icon: "◈", href: "projects.html" },
  { label: "Placeholder 1", icon: "○", href: null            },
  { label: "Placeholder 2", icon: "○", href: null            },
  { label: "Placeholder 3", icon: "○", href: null            },
  { label: "Placeholder 4", icon: "○", href: null            },
  { label: "Placeholder 5", icon: "○", href: null            },
];

// Each color gives the corresponding bubble its iridescent tint
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

// Scatter positions — cx/cy are viewport-%, size is diameter in px
const BUBBLE_LAYOUT = [
  { cx: '78%', cy: '46%', size: 158, floatN: 1, dur: 4.2, del: 0    },
  { cx: '18%', cy: '50%', size: 148, floatN: 2, dur: 3.8, del: 0.4  },
  { cx: '72%', cy: '76%', size: 126, floatN: 3, dur: 4.6, del: 0.2  },
  { cx: '22%', cy: '74%', size: 116, floatN: 4, dur: 3.5, del: 0.7  },
  { cx: '50%', cy: '83%', size: 134, floatN: 5, dur: 4.0, del: 0.15 },
  { cx: '13%', cy: '18%', size: 120, floatN: 6, dur: 4.3, del: 0.55 },
  { cx: '83%', cy: '15%', size: 110, floatN: 7, dur: 3.9, del: 0.35 },
];

function IntroPage() {
  const accent  = "#7a3fb8";
  const accent2 = "#e85a9b";
  const ink     = "#241638";
  const cream   = "#fbf2f7";

  const [phase,   setPhase]   = React.useState('hello');
  const [popping, setPopping] = React.useState(null);

  const handleHelloClick = () => {
    if (phase !== 'hello') return;
    setPhase('leaving');
    setTimeout(() => {
      setPhase('prompt');
      setTimeout(() => setPhase('bubbles'), 1100);
    }, 460);
  };

  const handleBubbleClick = (b, i) => {
    if (popping !== null) return;
    setPopping(i);
    if (b.href) {
      setTimeout(() => { window.location.href = b.href; }, 380);
    } else {
      setTimeout(() => setPopping(null), 480);
    }
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

        /* Hello phase */
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

        /* Prompt title */
        .id-prompt { animation:id-prompt-in .6s cubic-bezier(.2,.8,.3,1) both }
        @keyframes id-prompt-in { from{opacity:0;transform:scale(.86)} to{opacity:1;transform:scale(1)} }

        /* Bubble float paths (on outer wrapper — translate only) */
        @keyframes id-f1 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(8px,-20px)} }
        @keyframes id-f2 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-11px,-17px)} }
        @keyframes id-f3 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(13px,-13px)} }
        @keyframes id-f4 { 0%,100%{transform:translate(0,0)}  33%{transform:translate(-9px,-19px)} 66%{transform:translate(7px,-8px)} }
        @keyframes id-f5 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-6px,-23px)} }
        @keyframes id-f6 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(11px,-15px)} }
        @keyframes id-f7 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-8px,-18px)} }

        /* Bubble entry + pop (on inner sphere — scale + opacity only) */
        @keyframes id-bentry { from{opacity:0;transform:scale(0)} to{opacity:1;transform:scale(1)} }
        @keyframes id-bpop   {
          0%   { opacity:1;   transform:scale(1)    }
          28%  { opacity:.85; transform:scale(1.18) }
          62%  { opacity:.28; transform:scale(.7)   }
          100% { opacity:0;   transform:scale(0)    }
        }

        /* Iridescent shimmer — slowly cycles hue on the shell layer */
        @keyframes id-shimmer { 0%{filter:hue-rotate(0deg)} 100%{filter:hue-rotate(360deg)} }

        /* Hover glow on clickable bubbles */
        .id-bub { transition:filter .22s }
        .id-bub:hover { filter:brightness(1.1) drop-shadow(0 0 16px rgba(122,63,184,.28)) }

        /* Background blobs */
        .id-blob { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; opacity:.22 }

        @media(max-width:620px) {
          .id-btitle { top:15% !important }
          .id-btitle h2 { font-size:22px !important }
        }
      `}</style>

      {/* Decorative blobs */}
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
        <div style={{ position:'absolute', inset:0 }}>

          {/* Title — sits above bubbles */}
          <div className="id-btitle" style={{
            position:'absolute', top:'27%', left:0, right:0,
            textAlign:'center', padding:'0 24px',
            zIndex:2, pointerEvents:'none',
          }}>
            <h2 className="id-disp id-prompt" style={{
              fontSize:'clamp(24px,4.5vw,52px)', fontWeight:400, fontStyle:'italic',
              color:ink, margin:0, lineHeight:1.25,
            }}>
              Want to know more about <span className="id-grad">Iris</span>?
            </h2>
          </div>

          {/* Floating soap bubbles */}
          {phase === 'bubbles' && BUBBLES.map((b, i) => {
            const pos   = BUBBLE_LAYOUT[i % BUBBLE_LAYOUT.length];
            const color = BUBBLE_COLORS[i % BUBBLE_COLORS.length];
            const isPop = popping === i;
            const ph    = !b.href;
            return (
              /* Float wrapper — translates only, no click events */
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: pos.cx,
                  top:  pos.cy,
                  marginLeft: -pos.size / 2,
                  marginTop:  -pos.size / 2,
                  width:  pos.size,
                  height: pos.size,
                  animation: `id-f${pos.floatN} ${pos.dur}s ease-in-out ${pos.del}s infinite`,
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                {/* Sphere — entry/pop animation, hover, click */}
                <div
                  className={ph ? '' : 'id-bub'}
                  style={{
                    width: '100%', height: '100%',
                    borderRadius: '50%',
                    cursor: ph ? 'default' : 'pointer',
                    pointerEvents: 'auto',
                    position: 'relative',
                    opacity: ph ? 0.46 : 1,
                    animation: isPop
                      ? 'id-bpop .42s ease forwards'
                      : `id-bentry .52s cubic-bezier(.34,1.56,.64,1) ${i * 0.1}s both`,
                  }}
                  onClick={() => !ph && handleBubbleClick(b, i)}
                  title={ph ? 'Coming soon' : ''}
                >
                  {/* Iridescent shell layer */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    borderRadius: '50%',
                    background: `
                      radial-gradient(circle at 33% 26%, rgba(255,255,255,.96) 0%, rgba(255,255,255,.54) 12%, transparent 33%),
                      radial-gradient(circle at 67% 73%, rgba(255,255,255,.26) 0%, transparent 24%),
                      radial-gradient(circle at 50% 50%,
                        ${color}32 0%,
                        rgba(232,90,155,.14) 34%,
                        rgba(91,143,212,.16) 64%,
                        transparent 100%)
                    `,
                    border: '1.5px solid rgba(255,255,255,.7)',
                    boxShadow: `
                      inset 0 3px 14px rgba(255,255,255,.42),
                      inset 0 -4px 10px ${color}2c,
                      0 8px 34px ${color}26
                    `,
                    backdropFilter: 'blur(5px) saturate(1.5)',
                    animation: `id-shimmer ${9 + i * 1.4}s linear ${i * 0.7}s infinite`,
                  }} />

                  {/* Label */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 5,
                  }}>
                    <span style={{ fontSize: Math.round(pos.size * 0.14), lineHeight: 1 }}>
                      {b.icon}
                    </span>
                    <span style={{
                      fontSize:      Math.round(pos.size * 0.093),
                      fontWeight:    600,
                      color:         ph ? 'rgba(21,20,15,.38)' : color,
                      letterSpacing: '.01em',
                      textAlign:     'center',
                      padding:       '0 14px',
                      lineHeight:    1.2,
                    }}>
                      {b.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

window.IntroPage = IntroPage;
