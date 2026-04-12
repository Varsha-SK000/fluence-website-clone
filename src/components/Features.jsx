import { useEffect, useRef } from "react";
const rows = [
  {
    heading: 'Seamless Data Integration Process',
    desc: 'Effortlessly connect with diverse data sources, ensuring smooth data flow for real-time insights and accurate analysis.',
    points: [
      { icon: '🗄', label: 'Unified Data Connections' },
      { icon: '🔄', label: 'Real-Time Data Syncing' },
      { icon: '🔌', label: 'Flexible API Integrations' },
    ],
    img: 'https://framerusercontent.com/images/ZHxn4x0VKrIK8kMprl2U0prVPrs.png',
    imgRight: true,
    showTag: true,
  },
  {
    heading: 'Advanced AI-Powered Analytics Tools',
    desc: 'Leverage intelligent analytics to uncover hidden patterns, predict future trends, and make data-driven decisions with confidence.',
    points: [
      { icon: '📈', label: 'Accurate Trend Forecasting' },
      { icon: '📊', label: 'Dynamic Insightful Dashboards' },
      { icon: '🤖', label: 'AI-Driven Data Metrics' },
    ],
    img: 'https://framerusercontent.com/images/yudPladgzJSykTseWh34MLSt0.png',
    imgRight: false,
    showTag: false,
  },
  {
    heading: 'Intelligent Automation Workflow Engine',
    desc: 'Automate repetitive tasks, optimize workflows, and boost productivity with smart, AI-powered automation capabilities.',
    points: [
      { icon: '⚙️', label: 'Streamlined Workflow Automation' },
      { icon: '✅', label: 'Efficient Task Optimization' },
      { icon: '⚡', label: 'Smart Trigger Functions' },
    ],
    img: 'https://framerusercontent.com/images/N4vCtjk9YHrPSVPINwtdHZjU.png',
    imgRight: true,
    showTag: false,
  },
];

// function FeatureRow({ row }) {
//   const imgRef = useRef(null);
//   const wrapRef = useRef(null);

//   useEffect(() => {
//     let frame;

//     const animate = () => {
//       const img = imgRef.current;
//       const wrap = wrapRef.current;

//       if (!img || !wrap) return;

//       const rect = wrap.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // progress based on viewport center
//       const progress = (rect.top - windowHeight / 2) / windowHeight;

//       // Fluence-like smooth movement
//       const move = progress * 80;

//       img.style.transform = `translate3d(0, ${move}px, 0) scale(1.08)`;

//       frame = requestAnimationFrame(animate);
//     };

//     frame = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(frame);
//   }, []);

//   return (
//     <div className="feature-row">
//       <div className={`feature-grid ${row.imgRight ? "reverse" : ""}`}>

//         {/* TEXT */}
//         <div className="text">
//           {row.showTag && <span className="tag">Product Overview</span>}

//           <h3>{row.heading}</h3>
//           <p>{row.desc}</p>

//           <div className="points">
//             {row.points.map((p) => (
//               <div className="point" key={p.label}>
//                 <div className="icon">{p.icon}</div>
//                 <span>{p.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* IMAGE */}
//         <div className="image" ref={wrapRef}>
//           <img
//             ref={imgRef}
//             src={row.img}
//             alt={row.heading}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               willChange: "transform",
//             }}
//           />
//         </div>

//       </div>
//     </div>
//   );
// }

function FeatureRow({ row }) {
  const imgRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    let current = 0;
    let target = 0;
    let raf;

    const update = () => {
      const img = imgRef.current;
      const wrap = wrapRef.current;

      if (!img || !wrap) return;

      const rect = wrap.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // scroll-based progress (-1 to 1)
      target = (rect.top - windowHeight * 0.5) / windowHeight;

      // smooth interpolation (Fluence feel)
      current += (target - current) * 0.08;

      const moveY = current * 120; // intensity

      img.style.transform = `translate3d(0, ${moveY}px, 0) scale(1.1)`;

      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="feature-row">
      <div className={`feature-grid ${row.imgRight ? "reverse" : ""}`}>

        {/* TEXT */}
        <div className="text">
          {row.showTag && <span className="tag">Product Overview</span>}

          <h3>{row.heading}</h3>
          <p>{row.desc}</p>

          <div className="points">
            {row.points.map((p) => (
              <div className="point" key={p.label}>
                <div className="icon">{p.icon}</div>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="image" ref={wrapRef}>
          <img
            ref={imgRef}
            src={row.img}
            alt={row.heading}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              willChange: "transform",
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default function ProductOverview() {
  return (
    <section className="section">
      <div className="container">

        {/* HEADER */}
        <div className="header">
          <span className="tag">Product Overview</span>

          <h2>Explore the Power of Fluence AI</h2>

          <p>
            Discover how Fluence AI transforms raw data into actionable insights.
            Our advanced features are designed to optimize workflows
          </p>
        </div>

        {/* CARD */}
        <div className="card">
          {rows.map((row, i) => (
            <FeatureRow key={i} row={row} />
          ))}
        </div>

      </div>

      {/* STYLES */}
      <style>{`
        .section{
          padding: 90px 20px;
          background: #fff;
        }

        .container{
          max-width: 1100px;
          margin: 0 auto;
        }

        .header{
          text-align: center;
          margin-bottom: 60px;
        }

        .header h2{
          font-size: 52px;
          line-height: 1.1;
          margin: 18px 0;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .header p{
          max-width: 520px;
          margin: 0 auto;
          color: #666;
        }

        .tag{
          display: inline-block;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid #e5e5e5;
          font-size: 13px;
          background: #fff;
        }

        .card{
          border: 1px solid #eee;
          border-radius: 24px;
          overflow: hidden;
          background: #fafafa;
        }

        .feature-row{
          border-top: 1px solid #eee;
        }

        .feature-grid{
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 420px;
        }

        .feature-grid.reverse{
          direction: rtl;
        }

        .feature-grid.reverse .text,
        .feature-grid.reverse .image{
          direction: ltr;
        }

        .text{
          padding: 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .text h3{
          font-size: 32px;
          margin: 14px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .text p{
          color: #666;
          line-height: 1.7;
          margin-bottom: 26px;
        }

        .points{
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .point{
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .icon{
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #f3f3f3;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image{
          height: 100%;
          min-height: 420px;
        }

        .image img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media(max-width: 768px){
          .feature-grid{
            grid-template-columns: 1fr;
          }

          .text{
            padding: 40px 24px;
          }

          .header h2{
            font-size: 34px;
          }

          .image{
            min-height: 280px;
          }
        }
      `}</style>
    </section>
  );
}