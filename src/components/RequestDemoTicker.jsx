export default function RequestDemoTicker() {
  const items = Array(8).fill("Request a demo")

  return (
    <section className="ticker-wrapper">
      <ul className="ticker-track">

        {items.map((text, i) => (
          <li key={`a-${i}`} className="ticker-item">
            <span>{text}</span>

            <img
              src="/icons/artificial-intelligence.png"
              alt="icon"
              className="ticker-icon"
            />
          </li>
        ))}

        {items.map((text, i) => (
          <li key={`b-${i}`} className="ticker-item">
            <span>{text}</span>

            <img
              src="/icons/artificial-intelligence.png"
              alt="icon"
              className="ticker-icon"
            />
          </li>
        ))}

      </ul>

      <style>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          background: #fff;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }

        .ticker-track {
          display: flex;
          width: max-content;
          list-style: none;
          margin: 0;
          padding: 0;
          animation: move 50s linear infinite; /* 👈 slower flow */
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 20px 40px;
          white-space: nowrap;
          flex-shrink: 0;
          font-size: 60px;
          font-weight: 500;
          color: #1b0c26;
        }

        .ticker-icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
          flex-shrink: 0;
        }

        @keyframes move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}