import { useState } from "react"

const plans = [
  {
    iconColor: "#60a5fa",
    name: "Starter",
    desc: "Get started with Fluence AI at no cost",
    monthly: "Free",
    yearly: "Free",
    note: null,
    features: [
      "400 AI credits at signup",
      "20,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    iconColor: "#f97316",
    name: "Plus",
    desc: "Unlock more powerful features",
    monthly: "$22",
    yearly: "$18",
    note: "/month, per user",
    features: [
      "Unlimited AI credits",
      "50,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
    cta: "Get Started",
    highlight: true,
    popular: true,
  },
  {
    iconColor: "#ec4899",
    name: "Pro",
    desc: "Take your business to the next level",
    monthly: "$69",
    yearly: "$55",
    note: "/month, per user",
    features: [
      "Unlimited AI creation",
      "100,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
    cta: "Get Started",
    highlight: false,
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState("monthly")

  return (
    <>
      {/* SECTION */}
      <section
        id="pricing"
        style={{
          padding: "120px 0",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
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
              Pricing
            </span>

            <h2
              style={{
                marginTop: 18,
                fontSize: "54px",
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#0a0a0a",
              }}
            >
              Simple, Flexible Pricing
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 17,
                color: "#666",
                maxWidth: 460,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.6,
              }}
            >
              Pricing plans for businesses at every stage of growth.
            </p>

            {/* TOGGLE */}
            <div
              style={{
                marginTop: 28,
                display: "inline-flex",
                padding: 6,
                borderRadius: 999,
                background: "#f5f5f5",
                border: "1px solid #e6e6e6",
                gap: 6,
              }}
            >
              {["monthly", "yearly"].map((b) => (
                <button
                  key={b}
                  onClick={() => setBilling(b)}
                  style={{
                    padding: "10px 22px",
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 600,
                    background: billing === b ? "#111" : "transparent",
                    color: billing === b ? "#fff" : "#666",
                  }}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
          >
            {plans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  borderRadius: 22,
                  padding: "32px 28px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "#fff",
                  position: "relative",
                  transition: "all 0.25s ease",
                  boxShadow: plan.popular
                    ? "0 12px 40px rgba(168,85,247,0.12)"
                    : "none",
                }}
                onMouseEnter={(e) => {
                  if (!plan.popular)
                    e.currentTarget.style.transform = "translateY(-4px)"
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular)
                    e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                {/* POPULAR */}
                {plan.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      fontSize: 11,
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "#f3e8ff",
                      color: "#7c3aed",
                      fontWeight: 600,
                    }}
                  >
                    Popular
                  </div>
                )}

                {/* TITLE */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: plan.iconColor, fontSize: 20 }}>✦</span>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>
                    {plan.name}
                  </h3>
                </div>

                <p style={{ marginTop: 10, fontSize: 14, color: "#777" }}>
                  {plan.desc}
                </p>

                {/* PRICE */}
                <div style={{ marginTop: 22 }}>
                  <span style={{ fontSize: 44, fontWeight: 800 }}>
                    {billing === "monthly" ? plan.monthly : plan.yearly}
                  </span>
                  {plan.note && (
                    <span style={{ fontSize: 13, color: "#aaa", marginLeft: 6 }}>
                      {plan.note}
                    </span>
                  )}
                </div>

                {/* CTA → CONTACT SCROLL */}
                <a
                  href="#contact"
                  style={{
                    display: "block",
                    marginTop: 22,
                    textAlign: "center",
                    padding: "14px",
                    borderRadius: 14,
                    fontWeight: 600,
                    fontSize: 15,
                    textDecoration: "none",
                    border: plan.highlight
                      ? "none"
                      : "1px solid rgba(0,0,0,0.15)",
                    background: plan.highlight ? "#111" : "transparent",
                    color: plan.highlight ? "#fff" : "#111",
                  }}
                >
                  {plan.cta}
                </a>

                {/* FEATURES */}
                <div style={{ marginTop: 26 }}>
                  <p
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      color: "#aaa",
                      textTransform: "uppercase",
                      marginBottom: 14,
                    }}
                  >
                    What's included
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {plan.features.map((f) => (
                      <div
                        key={f}
                        style={{
                          fontSize: 14,
                          color: "#555",
                          display: "flex",
                          gap: 8,
                        }}
                      >
                        <span style={{ color: "#a855f7" }}>✦</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (IMPORTANT) */}
      <section
        id="contact"
        style={{
          padding: "120px 24px",
          background: "#f9f9f9",
          textAlign: "center",
        }}
      >
      </section>

      {/* SMOOTH SCROLL */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @media (max-width: 900px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}