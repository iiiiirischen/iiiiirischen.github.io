// ─── Intro landing page ───────────────────────────────────────────────────────

// ══ EDIT YOUR BUBBLES HERE ══════════════════════════════════════════════════
const BUBBLES = [
  { label: "Resume+",       href: "main.html"     },
  { label: "Projects",      href: "projects.html" },
  { label: "Placeholder 1", href: null            },
  { label: "Placeholder 2", href: null            },
  { label: "Placeholder 3", href: null            },
  { label: "Placeholder 4", href: null            },
  { label: "Placeholder 5", href: null            },
];

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

const BUBBLE_SIZES = [210, 196, 174, 160, 185, 165, 152];

function IntroPage() {
  const accent  = "#7a3fb8";
  const accent2 = "#e85a9b";
  const ink     = "#241638";
  const cream   = "#fbf2f7";

  const [phase,   setPhase]   = React.useState('hello');
  const [popping, setPopping] = React.useState(null);

  // ── Physics (bypasses React re-renders for 60 fps) ──────────────────────
  const phys    = React.useRef(null);   // bubble state array
  const elRefs  = React.useRef([]);     // DOM refs per bubble
  const rafRef  = React.useRef(null);
  const cursor  = React.useRef({ x: -9999, y: -9999 });

  // Initialise once (lazily so window dimensions are available)
  if (!phys.current) {
    const W = window.innerWidth;
    const H = window.innerHeight;
    phys.current = BUBBLES.map((b, i) => {
      const size = BUBBLE_SIZES[i % BUBBLE_SIZES.length];
      const r    = size / 2;
      return {
        x:     r + Math.random() * (W - size),
        y:     r + Math.random() * (H - size),
        vx:    (Math.random() - .5) * 1.6,
        vy:    (Math.random() - .5) * 1.6,
        size, r,
        color:      BUBBLE_COLORS[i % BUBBLE_COLORS.length],
        href:       b.href,
        label:      b.label,
        ph:         !b.href,
        conicStart: i * 52,
        sDur:       10 + i * 1.7,
        sDel:       i * 0.9,
      };
    });
  }

  // Physics loop — starts when bubbles phase begins
  React.useEffect(() => {
    if (phase !== 'bubbles') return;

    const tick = () => {
      const W  = window.innerWidth;
      const H  = window.innerHeight;
      const mx = cursor.current.x;
      const my = cursor.current.y;

      phys.current.forEach((b, i) => {
        // Cursor repulsion
        const dx = b.x - mx;
        const dy = b.y - my;
        const d2 = dx * dx + dy * dy;
        const pr = b.r * 1.7;
        if (d2 < pr * pr && d2 > 1) {
          const d = Math.sqrt(d2);
          const f = ((pr - d) / pr) * 11;
          b.vx += (dx / d) * f;
          b.vy += (dy / d) * f;
        }

        // Gentle random drift
        b.vx += (Math.random() - .5) * .055;
        b.vy += (Math.random() - .5) * .055;

        // Soft-boundary nudge (keeps bubbles away from edges)
        const mg = b.r + 30;
        if (b.x < mg)     b.vx += .14;
        if (b.x > W - mg) b.vx -= .14;
        if (b.y < mg)     b.vy += .14;
        if (b.y > H - mg) b.vy -= .14;

        // Damping
        b.vx *= .965;
        b.vy *= .965;

        // Speed cap
        const spd = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        if (spd > 8) { b.vx = b.vx / spd * 8; b.vy = b.vy / spd * 8; }

        b.x += b.vx;
        b.y += b.vy;

        // Hard-boundary bounce
        if (b.x - b.r < 0)   { b.x = b.r;     b.vx =  Math.abs(b.vx) * .62; }
        if (b.x + b.r > W)   { b.x = W - b.r; b.vx = -Math.abs(b.vx) * .62; }
        if (b.y - b.r < 0)   { b.y = b.r;     b.vy =  Math.abs(b.vy) * .62; }
        if (b.y + b.r > H)   { b.y = H - b.r; b.vy = -Math.abs(b.vy) * .62; }

        // Direct DOM update — no React re-render
        const el = elRefs.current[i];
        if (el) el.style.transform = `translate(${b.x - b.r}px,${b.y - b.r}px)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [phase]);

  const onMouseMove = React.useCallback(e => {
    cursor.current = { x: e.clientX, y: e.clientY };
  }, []);

  const onTouchMove = React.useCallback(e => {
    const t = e.touches[0];
    if (t) cursor.current = { x: t.clientX, y: t.clientY };
  }, []);

  const onTouchEnd = React.useCallback(() => {
    cursor.current = { x: -9999, y: -9999 };
  }, []);

  const handleHelloClick = () => {
    if (phase !== 'hello') return;
    setPhase('leaving');
    setTimeout(() => {
      setPhase('prompt');
      setTimeout(() => setPhase('bubbles'), 1100);
    }, 460);
  };

  const handleBubbleClick = (href, i) => {
    if (popping !== null) return;
    setPopping(i);
    if (href) {
      setTimeout(() => { window.location.href = href; }, 420);
    } else {
      setTimeout(() => setPopping(null), 520);
    }
  };

  return (
    <div
      style={{
        width: '100vw', height: '100vh',
        background: cream, color: ink,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: '"Inter", -apple-system, system-ui, sans-serif',
        overflow: 'hidden', position: 'relative',
      }}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <style>{`
        .id-disp   { font-family:"DM Serif Display","Fraunces",Georgia,serif; font-weight:400; letter-spacing:-.02em }
        .id-grad   { background:linear-gradient(120deg,${accent} 0%,${accent2} 100%);-webkit-background-clip:text;background-clip:text;color:transparent;display:inline-block }
        .id-bubtxt { font-family:'Playfair Display',Georgia,serif; font-weight:700; letter-spacing:.015em; line-height:1.18 }

        /* Hello */
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

        /* Prompt */
        .id-prompt { animation:id-prompt-in .6s cubic-bezier(.2,.8,.3,1) both }
        @keyframes id-prompt-in { from{opacity:0;transform:scale(.86)} to{opacity:1;transform:scale(1)} }

        /* Bubble entry & pop (on inner sphere — scale/opacity only) */
        @keyframes id-bentry { from{opacity:0;transform:scale(0)} to{opacity:1;transform:scale(1)} }
        @keyframes id-bpop {
          0%   { opacity:1;   transform:scale(1)    }
          22%  { opacity:.9;  transform:scale(1.24) }
          55%  { opacity:.16; transform:scale(.58)  }
          100% { opacity:0;   transform:scale(0)    }
        }

        /* Iridescent shimmer */
        @keyframes id-shimmer { 0%{filter:hue-rotate(0deg)} 100%{filter:hue-rotate(360deg)} }

        /* Hover — brighter rim glow (physics handles the movement) */
        .id-bub:hover .id-bshell {
          box-shadow:
            0 0 0 2px rgba(255,255,255,.82),
            inset 0 0 0 2px rgba(255,255,255,.72),
            inset 0 6px 22px rgba(255,255,255,.54),
            inset 0 -8px 18px rgba(122,63,184,.24),
            0 0 44px rgba(122,63,184,.24) !important;
          backdrop-filter: blur(8px) saturate(2) brightness(1.1) !important;
        }

        /* Background blobs */
        .id-blob { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; opacity:.22 }

        @media(max-width:620px) {
          .id-btitle { top:12% !important }
          .id-btitle h2 { font-size:19px !important }
        }
      `}</style>

      {/* Decorative blobs */}
      <div className="id-blob" style={{ width:440, height:440, background:accent,  top:'-12%', right:'-8%' }} />
      <div className="id-blob" style={{ width:340, height:340, background:accent2, bottom:'-8%', left:'-6%' }} />

      {/* ── HELLO phase ── */}
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

      {/* ── PROMPT + BUBBLES phase ── */}
      {(phase === 'prompt' || phase === 'bubbles') && (
        <div style={{ position:'absolute', inset:0 }}>

          {/* Title — frosted pill so it stays readable when bubbles drift under */}
          <div className="id-btitle" style={{
            position:'absolute', top:'28%', left:0, right:0,
            textAlign:'center', padding:'0 24px',
            zIndex:10, pointerEvents:'none',
          }}>
            <div style={{
              display:'inline-block',
              background:'rgba(251,242,247,.62)',
              backdropFilter:'blur(12px)',
              borderRadius:24,
              padding:'14px 40px',
            }}>
              <h2 className="id-disp id-prompt" style={{
                fontSize:'clamp(24px,4.5vw,52px)', fontWeight:400, fontStyle:'italic',
                color:ink, margin:0, lineHeight:1.25,
              }}>
                Want to know more about <span className="id-grad">Iris</span>?
              </h2>
            </div>
          </div>

          {/* Physics-driven bubbles */}
          {phase === 'bubbles' && phys.current.map((b, i) => {
            const isPop = popping === i;
            return (
              /* Outer wrapper — position only, updated directly by RAF */
              <div
                key={i}
                ref={el => elRefs.current[i] = el}
                style={{
                  position:      'absolute',
                  left:          0,
                  top:           0,
                  transform:     `translate(${b.x - b.r}px,${b.y - b.r}px)`,
                  width:         b.size,
                  height:        b.size,
                  willChange:    'transform',
                  pointerEvents: 'none',
                  /* Natural elliptical shadow below each bubble */
                  filter: [
                    `drop-shadow(0 ${Math.round(b.r*.13)}px ${Math.round(b.r*.18)}px ${b.color}3e)`,
                    `drop-shadow(0 ${Math.round(b.r*.04)}px ${Math.round(b.r*.08)}px rgba(0,0,0,.1))`,
                  ].join(' '),
                }}
              >
                {/* Inner sphere — entry/pop animation */}
                <div
                  className={(!b.ph && !isPop) ? 'id-bub' : ''}
                  style={{
                    width:  '100%',
                    height: '100%',
                    borderRadius:  '50%',
                    cursor:        b.ph ? 'default' : 'pointer',
                    pointerEvents: 'auto',
                    position:      'relative',
                    opacity:       b.ph ? .38 : 1,
                    animation:     isPop
                      ? 'id-bpop .44s ease forwards'
                      : `id-bentry .55s cubic-bezier(.34,1.56,.64,1) ${i * .1}s both`,
                  }}
                  onClick={() => !b.ph && handleBubbleClick(b.href, i)}
                  title={b.ph ? 'Coming soon' : ''}
                >
                  {/* Iridescent soap-film shell */}
                  <div
                    className="id-bshell"
                    style={{
                      position: 'absolute', inset: 0,
                      borderRadius: '50%',
                      /*
                       * 1. Primary specular arc     — bright crescent top-left
                       * 2. Secondary rim highlight  — top-right edge glow
                       * 3. Bottom reflection pool   — subtle gathered light
                       * 4. Conic rainbow bands      — thin-film iridescence,
                       *    offset per bubble (conicStart) so each looks distinct
                       */
                      background: `
                        radial-gradient(ellipse 62% 33% at 30% 21%,
                          rgba(255,255,255,.99) 0%,
                          rgba(255,255,255,.74) 15%,
                          transparent 44%),
                        radial-gradient(ellipse 27% 23% at 76% 10%,
                          rgba(255,255,255,.66) 0%,
                          transparent 52%),
                        radial-gradient(ellipse 40% 21% at 55% 90%,
                          rgba(255,255,255,.36) 0%,
                          transparent 50%),
                        conic-gradient(from ${b.conicStart}deg at 50% 50%,
                          ${b.color}46          0deg,
                          rgba(232,90,155,.26)  54deg,
                          rgba(91,143,212,.28)  108deg,
                          rgba(76,181,165,.24)  162deg,
                          rgba(230,120,80,.21)  216deg,
                          rgba(180,90,184,.24)  270deg,
                          rgba(91,143,212,.24)  324deg,
                          ${b.color}46          360deg)
                      `,
                      /* Outer bright ring + inner glow = bubble rim */
                      boxShadow: `
                        0 0 0 1.5px rgba(255,255,255,.68),
                        inset 0 0 0 1.5px rgba(255,255,255,.58),
                        inset 0 6px 22px rgba(255,255,255,.48),
                        inset 0 -7px 16px ${b.color}34,
                        inset ${Math.round(b.r*.2)}px ${Math.round(b.r*.13)}px ${Math.round(b.r*.3)}px rgba(255,255,255,.08)
                      `,
                      backdropFilter: 'blur(7px) saturate(1.8) brightness(1.05)',
                      transition: 'box-shadow .2s, backdrop-filter .2s',
                      animation:  `id-shimmer ${b.sDur}s linear ${b.sDel}s infinite`,
                    }}
                  />

                  {/* Label */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center',
                    padding: `0 ${Math.round(b.r * .18)}px`,
                  }}>
                    <span
                      className="id-bubtxt"
                      style={{
                        fontSize:   Math.round(b.size * .155),
                        color:      b.ph ? 'rgba(21,20,15,.3)' : b.color,
                        textShadow: b.ph ? 'none' : `0 1px 12px ${b.color}55`,
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
