// ─── Intro landing page — Hello state machine ────────────────────────────────

// ══ EDIT YOUR BUBBLES HERE ══════════════════════════════════════════════════
// label : text shown on the bubble
// href  : path to page — use null for placeholders (ghost bubble)
const BUBBLES = [
  { label: "Resume+",       href: "main.html"     },
  { label: "Projects",      href: "projects.html" },
  { label: "Placeholder 1", href: null            },
  { label: "Placeholder 2", href: null            },
  { label: "Placeholder 3", href: null            },
  { label: "Placeholder 4", href: null            },
  { label: "Placeholder 5", href: null            },
];

// Each color gives the corresponding bubble its iridescent tint
const BUBBLE_COLORS = [
  "#7a3fb8", // purple
  "#e85a9b", // pink
  "#5b8fd4", // blue
  "#4cb5a5", // teal
  "#e07850", // orange
  "#b55ab8", // magenta
  "#8fa830", // olive
];
// ════════════════════════════════════════════════════════════════════════════

// Scatter layout — cx/cy are viewport-%, size is diameter in px
const BUBBLE_LAYOUT = [
  { cx: '81%', cy: '51%', size: 210, floatN: 1, dur: 4.2, del: 0    },
  { cx: '16%', cy: '52%', size: 198, floatN: 2, dur: 3.8, del: 0.4  },
  { cx: '71%', cy: '78%', size: 174, floatN: 3, dur: 4.6, del: 0.2  },
  { cx: '24%', cy: '76%', size: 162, floatN: 4, dur: 3.5, del: 0.7  },
  { cx: '50%', cy: '85%', size: 186, floatN: 5, dur: 4.0, del: 0.15 },
  { cx: '12%', cy: '17%', size: 166, floatN: 6, dur: 4.3, del: 0.55 },
  { cx: '84%', cy: '15%', size: 154, floatN: 7, dur: 3.9, del: 0.35 },
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
      setTimeout(() => { window.location.href = b.href; }, 400);
    } else {
      setTimeout(() => setPopping(null), 500);
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
        .id-bubtxt{ font-family:'Nunito','Arial Rounded MT Bold',sans-serif; font-weight:900; letter-spacing:.01em; line-height:1.15 }

        /* ── Hello phase ── */
        .id-hello-wrap { animation:id-in .9s cubic-bezier(.2,.8,.3,1) both }
        .id-hello       { cursor:pointer; user-select:none; display:inline-block; transition:text-shadow .25s }
        .id-hello:hover { text-shadow:0 0 60px rgba(122,63,184,.28) }
        .id-float       { animation:id-float 3.4s ease-in-out infinite }
        .id-leaving     { animation:id-leave .44s ease forwards }
        @keyframes id-in    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes id-float { 0%,100%{margin-top:0} 50%{margin-top:-14px} }
        @keyframes id-leave { to{opacity:0;transform:translateY(-32px) scale(.9)} }
        .id-cursor { display:inline-block;width:3px;height:.82em;background:${accent};margin-left:6px;vertical-align:middle;border-radius:2px;animation:id-blink 1.1s step-end infinite }
        @keyframes id-blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .id-hint { animation:id-in .8s ease .7s both }

        /* ── Prompt ── */
        .id-prompt { animation:id-prompt-in .6s cubic-bezier(.2,.8,.3,1) both }
        @keyframes id-prompt-in { from{opacity:0;transform:scale(.86)} to{opacity:1;transform:scale(1)} }

        /* ── Bubble float paths (outer wrapper — translate only) ── */
        @keyframes id-f1 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(10px,-22px)} }
        @keyframes id-f2 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-13px,-18px)} }
        @keyframes id-f3 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(15px,-16px)} }
        @keyframes id-f4 { 0%,100%{transform:translate(0,0)}  33%{transform:translate(-11px,-20px)} 66%{transform:translate(9px,-10px)} }
        @keyframes id-f5 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-8px,-25px)} }
        @keyframes id-f6 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(13px,-17px)} }
        @keyframes id-f7 { 0%,100%{transform:translate(0,0)}  50%{transform:translate(-10px,-20px)} }

        /* ── Bubble entry + pop (inner sphere) ── */
        @keyframes id-bentry { from{opacity:0;transform:scale(0)} to{opacity:1;transform:scale(1)} }
        @keyframes id-bpop {
          0%   { opacity:1;   transform:scale(1)    }
          25%  { opacity:.9;  transform:scale(1.22) }
          55%  { opacity:.2;  transform:scale(.62)  }
          100% { opacity:0;   transform:scale(0)    }
        }

        /* ── Iridescent shimmer ── */
        @keyframes id-shimmer { 0%{filter:hue-rotate(0deg)} 100%{filter:hue-rotate(360deg)} }

        /* ── Hover: bump and wiggle ── */
        @keyframes id-wiggle {
          0%   { transform:translate(0,0)       rotate(0deg)    scale(1)    }
          11%  { transform:translate(-6px,-9px)  rotate(-3deg)   scale(1.05) }
          22%  { transform:translate(8px,-12px)  rotate(2.4deg)  scale(1.08) }
          33%  { transform:translate(-7px,-8px)  rotate(-3.5deg) scale(1.06) }
          44%  { transform:translate(9px,-11px)  rotate(2.8deg)  scale(1.08) }
          55%  { transform:translate(-5px,-10px) rotate(-2.2deg) scale(1.06) }
          66%  { transform:translate(7px,-9px)   rotate(3deg)    scale(1.07) }
          77%  { transform:translate(-4px,-6px)  rotate(-1.8deg) scale(1.04) }
          88%  { transform:translate(3px,-4px)   rotate(1.2deg)  scale(1.02) }
          100% { transform:translate(0,0)       rotate(0deg)    scale(1)    }
        }
        .id-bub { cursor:pointer; transition:filter .2s }
        .id-bub:hover {
          filter: brightness(1.12) drop-shadow(0 0 20px rgba(122,63,184,.3)) !important;
          animation: id-wiggle .7s cubic-bezier(.36,.07,.19,.97) infinite !important;
        }

        /* ── Background blobs ── */
        .id-blob { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; opacity:.22 }

        @media(max-width:620px) {
          .id-btitle { top:13% !important }
          .id-btitle h2 { font-size:20px !important }
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

          {/* Title — sits above all bubbles */}
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
            const r     = pos.size;

            return (
              /* Float wrapper — translates only, no pointer events here */
              <div
                key={i}
                style={{
                  position:   'absolute',
                  left:       pos.cx,
                  top:        pos.cy,
                  marginLeft: -r / 2,
                  marginTop:  -r / 2,
                  width:      r,
                  height:     r,
                  animation:  `id-f${pos.floatN} ${pos.dur}s ease-in-out ${pos.del}s infinite`,
                  pointerEvents: 'none',
                  zIndex: 1,
                  /* Natural elliptical shadow cast beneath each bubble */
                  filter: `drop-shadow(0 ${Math.round(r * .12)}px ${Math.round(r * .16)}px ${color}38)
                           drop-shadow(0 ${Math.round(r * .04)}px ${Math.round(r * .07)}px rgba(0,0,0,.09))`,
                }}
              >
                {/* Clickable sphere — entry / pop / hover handled here */}
                <div
                  className={(!ph && !isPop) ? 'id-bub' : ''}
                  style={{
                    width: '100%', height: '100%',
                    borderRadius: '50%',
                    cursor:       ph ? 'default' : 'pointer',
                    pointerEvents:'auto',
                    position:     'relative',
                    opacity:      ph ? 0.4 : 1,
                    animation:    isPop
                      ? 'id-bpop .44s ease forwards'
                      : `id-bentry .54s cubic-bezier(.34,1.56,.64,1) ${i * 0.1}s both`,
                  }}
                  onClick={() => !ph && handleBubbleClick(b, i)}
                  title={ph ? 'Coming soon' : ''}
                >
                  {/* ── Iridescent soap-film shell ── */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    borderRadius: '50%',
                    /*
                     * Layer 1 – primary specular arc (bright crescent top-left)
                     * Layer 2 – secondary rim glow (top-right edge)
                     * Layer 3 – bottom pool of reflected light
                     * Layer 4 – conic rainbow bands (the thin-film iridescence)
                     *           offset per bubble so each one looks different
                     */
                    background: `
                      radial-gradient(ellipse 60% 32% at 31% 22%,
                        rgba(255,255,255,.98) 0%,
                        rgba(255,255,255,.72) 16%,
                        transparent 46%),
                      radial-gradient(ellipse 26% 22% at 75% 10%,
                        rgba(255,255,255,.65) 0%,
                        transparent 54%),
                      radial-gradient(ellipse 38% 20% at 56% 89%,
                        rgba(255,255,255,.34) 0%,
                        transparent 52%),
                      conic-gradient(from ${i * 51}deg at 50% 50%,
                        ${color}44          0deg,
                        rgba(232,90,155,.24) 55deg,
                        rgba(91,143,212,.26) 110deg,
                        rgba(76,181,165,.22) 165deg,
                        rgba(230,120,80,.2)  220deg,
                        rgba(180,90,184,.22) 275deg,
                        rgba(91,143,212,.22) 330deg,
                        ${color}44          360deg)
                    `,
                    /* Outer ring + inner glow (simulates the bright bubble rim) */
                    boxShadow: `
                      0 0 0 1.5px rgba(255,255,255,.65),
                      inset 0 0 0 1.5px rgba(255,255,255,.55),
                      inset 0 5px 20px rgba(255,255,255,.46),
                      inset 0 -7px 16px ${color}32,
                      inset ${Math.round(r*.2)}px ${Math.round(r*.14)}px ${Math.round(r*.3)}px rgba(255,255,255,.07)
                    `,
                    backdropFilter: 'blur(7px) saturate(1.7) brightness(1.05)',
                    /* Slowly cycle the hue so each bubble shimmers independently */
                    animation: `id-shimmer ${10 + i * 1.6}s linear ${i * 0.9}s infinite`,
                  }} />

                  {/* ── Label ── */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center',
                    padding: `0 ${Math.round(r * .17)}px`,
                  }}>
                    <span
                      className="id-bubtxt"
                      style={{
                        fontSize:   Math.round(r * .165),
                        color:      ph ? 'rgba(21,20,15,.34)' : color,
                        textShadow: ph ? 'none' : `0 1px 10px ${color}50`,
                      }}
                    >
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
