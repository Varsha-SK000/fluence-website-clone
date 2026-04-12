const steps = [
  {
    title: 'Connect Your Data',
    desc: 'Effortlessly integrate data from various sources into a unified system.',
    bg: 'linear-gradient(150deg,#fde8d8 0%,#fcd4e0 50%,#e9d5ff 100%)',
    visual: (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div
          style={{
            background: 'rgba(255,255,255,.7)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,.9)',
            borderRadius: 14,
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(255,255,255,.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#a855f7" />
            </svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#1a1a1a' }}>
            Learning your workflow
          </span>
        </div>
      </div>
    ),
  },
  {
    title: 'Analyze and Optimize',
    desc: 'Use AI to uncover valuable insights and improve performance.',
    bg: 'linear-gradient(150deg,#bfdbfe 0%,#93c5fd 40%,#c4b5fd 100%)',
    visual: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: 12,
        }}
      >
        <div style={{ fontFamily: 'Bricolage Grotesque', fontWeight: 800, fontSize: 24, color: '#1e1e1e' }}>
          Pass Rate
        </div>
        <div style={{ fontSize: 14, color: '#555' }}>100% completed</div>
        <div
          style={{
            width: 180,
            height: 8,
            background: 'rgba(255,255,255,.4)',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg,#7c3aed,#a855f7)',
              borderRadius: 4,
            }}
          />
        </div>
      </div>
    ),
  },
  {
    title: 'Let AI Work',
    desc: 'Streamline tasks and enhance productivity with AI.',
    bg: 'linear-gradient(150deg,#f5d0fe 0%,#c084fc 50%,#818cf8 100%)',
    visual: (
      <div style={{ padding: '16px 18px', height: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.7)', fontWeight: 600 }}>Inbox</div>

        <div style={{ background: 'rgba(255,255,255,.88)', borderRadius: 12, padding: '10px 13px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 5,
                background: '#0a0a0a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                <path d="M6 6L18 18M18 6L6 18" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#0a0a0a' }}>Co-Pilot</span>
          </div>

          <div style={{ fontSize: 12, color: '#555' }}>I've processed the order for you</div>

          <div
            style={{
              marginTop: 7,
              background: 'linear-gradient(135deg,#c084fc,#7c3aed)',
              borderRadius: 7,
              padding: '5px 10px',
              fontSize: 11,
              fontWeight: 600,
              color: '#fff',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="#fff">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
            Review order
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <img
            src="https://framerusercontent.com/images/yIREXkwAthEgTDhWj0Imj3yZ9JA.png"
            alt="u"
            style={{ width: 22, height: 22, borderRadius: '50%', objectFit: 'cover' }}
          />
          <div style={{ background: 'rgba(255,255,255,.85)', borderRadius: 8, padding: '6px 10px', fontSize: 12, color: '#333' }}>
            Thanks for handling that!
          </div>
        </div>
      </div>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section style={{ padding: '100px 0', background: '#f6f6f6' }}>
      <div className="container">
        {/* Top hero card */}
        <div
          style={{
            background: '#fff',
            border: '1px solid #e8e8e8',
            borderRadius: 24,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            overflow: 'hidden',
            marginBottom: 16,
          }}
          className="hiw-top"
        >
          <div style={{ padding: '56px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ marginBottom: 20 }}>
              <span
            className="inline-flex items-center px-4 py-1 rounded-full border shadow-sm"
            style={{
              color: "rgb(27, 12, 37)",
              borderColor: "rgb(213, 136, 251)", // matches framer purple-ish border
              backgroundColor: "white",
              lineHeight: "1",
              fontWeight: 500,
              fontSize: "13px",
            }}
          >how it works</span>
            </div>

            <h2
              style={{
                fontFamily: 'Bricolage Grotesque',
                fontWeight: 800,
                fontSize: 'clamp(28px,3.5vw,46px)',
                color: '#0a0a0a',
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                marginBottom: 16,
              }}
            >
              A Simple 3-Step Process
            </h2>

            <p style={{ fontSize: 15, color: '#666', lineHeight: 1.7, marginBottom: 32 }}>
              Get started quickly and effortlessly with Fluence AI's streamlined 3-step process designed to optimize your data workflow.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-dark">
                Get Started
              </a>
              <a href="mailto:someone@yoursite.com" className="btn-outline">
                Book a Demo
              </a>
            </div>
          </div>

          <div style={{ position: 'relative', minHeight: 400, overflow: 'hidden' }}>
            <img
              src="https://framerusercontent.com/images/eetEvxW02PAzDQTNZEJNez0XPc.png"
              alt="Team"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(25%)' }}
            />

            <div
              style={{
                position: 'absolute',
                bottom: 24,
                left: 20,
                right: 20,
                background: 'rgba(255,255,255,.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,.95)',
                borderRadius: 14,
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                boxShadow: '0 4px 20px rgba(0,0,0,.08)',
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg,#c084fc,#7c3aed)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>

              <span style={{ fontFamily: 'Bricolage Grotesque', fontWeight: 600, fontSize: 15, color: '#0a0a0a' }}>
                AI Analysis Complete
              </span>
            </div>
          </div>
        </div>

        {/* 3 step cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="hiw-steps">
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: '1px solid #e8e8e8',
                borderRadius: 20,
                overflow: 'hidden',
                transition: 'transform .2s, box-shadow .2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ height: 200, background: step.bg }}>{step.visual}</div>
              <div style={{ padding: '22px 24px 28px' }}>
                <h4
                  style={{
                    fontFamily: 'Bricolage Grotesque',
                    fontWeight: 700,
                    fontSize: 20,
                    color: '#0a0a0a',
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </h4>
                <p style={{ fontSize: 14, color: '#777', lineHeight: 1.62 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .hiw-top,.hiw-steps{
            grid-template-columns:1fr!important;
          }
        }
      `}</style>
    </section>
  )
}