import { motion } from "framer-motion";

const blogPosts = [
  {
    img: "https://framerusercontent.com/images/tyw3zK8EGKr3laKc5scgwDmBag.png",
    cat: "STARTUP",
    date: "OCT 10, 2024",
    title: "Why Data Security is Vital for Every SaaS Platform",
    link: "https://fluence.framer.website/blog/why-data-security-is-vital-for-every-saas-platform",
    grad:
      "linear-gradient(to top, rgba(244,63,94,.85) 0%, rgba(244,63,94,.3) 40%, transparent 70%)",
  },
  {
    img: "https://framerusercontent.com/images/ZR1Iqs0oD39u4eGjMDsbMZWhMY.png",
    cat: "SAAS",
    date: "MAR 13, 2025",
    title: "Efficient Strategies for Scaling Your SaaS Business",
    link: "https://fluence.framer.website/blog/integrating-payment-gateways-for-seamless-transactions",
    grad:
      "linear-gradient(to top, rgba(59,130,246,.85) 0%, rgba(59,130,246,.3) 40%, transparent 70%)",
  },
  {
    img: "https://framerusercontent.com/images/ARTVA54SjmGxUnXYrIR3eezEy0.png",
    cat: "AI",
    date: "FEB 16, 2025",
    title: "The Ultimate SaaS Template for Startups",
    link: "https://fluence.framer.website/blog/the-ultimate-saas-template-for-startups",
    grad:
      "linear-gradient(to top, rgba(168,85,247,.85) 0%, rgba(168,85,247,.3) 40%, transparent 70%)",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      style={{ padding: "100px 0", background: "#fff" }}
      className="scroll-mt-24"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 48,
          }}
        >
          <div>
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
              Blog
            </span>

            <h2
              style={{
                fontFamily: "Bricolage Grotesque",
                fontWeight: 800,
                fontSize: "clamp(28px,4vw,50px)",
                color: "#0a0a0a",
                lineHeight: 1.1,
                marginTop: 16,
              }}
            >
              Explore Our Blog And
              <br />
              Stay Updated
            </h2>
          </div>

          <a
            href="#"
            style={{
              padding: "10px 18px",
              border: "1.5px solid #ccc",
              borderRadius: 10,
              textDecoration: "none",
              color: "#000",
              fontWeight: 500,
              fontFamily: "Bricolage Grotesque",
            }}
          >
            Explore All
          </a>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
          }}
          className="blog-grid"
        >
          {blogPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              style={{
                border: "1px solid #e8e8e8",
                borderRadius: 20,
                overflow: "hidden",
                textDecoration: "none",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                transition: "transform .3s, box-shadow .3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: 240 }}>
                <img
                  src={post.img}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                    transition: "transform .4s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: post.grad,
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "20px 22px 26px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      background: "#f2f2f2",
                      padding: "4px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {post.cat}
                  </span>
                  <span style={{ fontSize: 13, color: "#888" }}>
                    {post.date}
                  </span>
                </div>

                <h4
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#0a0a0a",
                    lineHeight: 1.4,
                    fontFamily: "Bricolage Grotesque",
                  }}
                >
                  {post.title}
                </h4>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Responsive */}
        <style>{`
          @media (max-width: 768px) {
            .blog-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}