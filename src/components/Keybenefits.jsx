import React from 'react'

const leftBenefits = [
  { title: 'Increased Efficiency', desc: 'Automate tasks and reduce manual workloads' },
  { title: 'Scalable Solutions', desc: 'Easily grow with the demands of your data' },
  { title: 'Faster Decision-Making', desc: 'Leverage real-time insights for quicker choices' },
]

const rightBenefits = [
  { title: 'Enhanced Collaboration', desc: 'Streamline workflows with team-friendly features' },
  { title: 'Data Security', desc: 'Safeguard your data with top-tier encryption' },
  { title: 'Continuous Improvement', desc: 'Let AI adapt and improve with evolving data' },
]

/* ================= ICON ================= */
function BlackCheck() {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  )
}

/* ================= SECURITY CARD ================= */
function SecurityCard() {
  const points = ['SOC 2', 'GDPR', 'HIPAA']

  return (
    <div
      style={{
        border: '1px solid #eaeaea',
        borderRadius: 24,
        padding: '36px',
        background: '#fafafa',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* glow */}
      <div
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 220,
          height: 220,
          background: 'radial-gradient(circle, rgba(168,85,247,.10) 0%, transparent 70%)',
        }}
      />

      <div style={{ position: 'relative' }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            color: '#aaa',
            marginBottom: 14,
          }}
        >
          Enterprise Security
        </div>

        <h4
          style={{
            fontFamily: 'Bricolage Grotesque',
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 10,
            color: '#0a0a0a',
          }}
        >
          Enterprise-Grade Security
        </h4>

        <p style={{ fontSize: 14, color: '#777', lineHeight: 1.6, marginBottom: 22 }}>
          We maintain the highest standards of security and compliance for enterprise automation deployments.
        </p>

        {/* ✅ FRAMER STYLE CIRCLES */}
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {points.map((item) => (
            <div
              key={item}
              style={{
                width: 66,
                height: 66,
                borderRadius: '50%',
                background: '#FFEBFB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(168,85,247,0.15)',
                boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#111',
                  textAlign: 'center',
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ================= MAIN ================= */
export default function KeyBenefits() {
  return (
    <section
      style={{
        padding: '120px 0',
        background: '#fff',
      }}
    >
      {/* ✅ FLUENCE-LIKE CONTAINER */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
        }}
      >

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
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
          >
            Key Benefits
          </span>

          <h2
            style={{
              fontFamily: 'Bricolage Grotesque',
              fontSize: 'clamp(34px,4vw,54px)',
              fontWeight: 800,
              marginTop: 14,
              color: '#0a0a0a',
            }}
          >
            Why Choose Fluence AI
          </h2>

          <p
            style={{
              maxWidth: 560,
              margin: '14px auto 0',
              color: '#666',
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Fluence AI offers powerful benefits that help you save time, improve decision-making, and scale your data
            operations effortlessly.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr 1fr',
            border: '1px solid #eee',
            borderRadius: 28,
            overflow: 'hidden',
            background: '#fafafa',
          }}
        >

          {/* LEFT */}
          <div style={{ padding: 44, display: 'flex', flexDirection: 'column', gap: 34 }}>
            {leftBenefits.map((b) => (
              <div key={b.title}>
                <BlackCheck />
                <div style={{ fontWeight: 700, marginTop: 10, color: '#111' }}>{b.title}</div>
                <p style={{ fontSize: 14, color: '#777', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* CENTER */}
          <div
            style={{
              background: 'linear-gradient(160deg,#fda4af,#c084fc,#a855f7)',
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 14,
            }}
          >
            <div style={{ color: '#fff', fontWeight: 600 }}>AI Assistant</div>

            <div style={{ background: 'rgba(255,255,255,.9)', padding: 16, borderRadius: 14 }}>
              <div style={{ fontSize: 13 }}>Check subscription status</div>
              <div style={{ fontSize: 12, color: '#666', marginTop: 6 }}>
                Processing request...
              </div>
              <strong style={{ fontSize: 13, color: '#7c3aed' }}>
                Done instantly
              </strong>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ padding: 44, display: 'flex', flexDirection: 'column', gap: 34 }}>
            {rightBenefits.map((b) => (
              <div key={b.title}>
                <BlackCheck />
                <div style={{ fontWeight: 700, marginTop: 10, color: '#111' }}>{b.title}</div>
                <p style={{ fontSize: 14, color: '#777', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECURITY */}
        <div style={{ marginTop: 20 }}>
          <SecurityCard />
        </div>

      </div>
    </section>
  )
}