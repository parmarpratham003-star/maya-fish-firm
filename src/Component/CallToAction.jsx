"use client";

export default function CallToAction() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

        .cta-root {
          font-family: 'Montserrat', sans-serif;
        }

        /* 🔥 CTA STRIP */
        .cta-strip {
          background: #4FD1E8; /* cyan */
          padding: 1.8rem 2rem;
        }

        .cta-inner {
          max-width: 1100px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        /* LEFT TEXT */
        .cta-text {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cta-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #060e1f;
        }

        .cta-sub {
          font-size: 12px;
          color: rgba(6,14,31,0.7);
          letter-spacing: 0.5px;
        }

        /* RIGHT BUTTONS */
        .cta-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-btn-primary {
          padding: 12px 22px;
          background: #060e1f;
          color: #fff;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-decoration: none;
          transition: 0.3s;
        }

        .cta-btn-primary:hover {
          background: #0d1b36;
        }

        .cta-btn-link {
          font-size: 12px;
          font-weight: 600;
          color: #060e1f;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .cta-btn-link::after {
          content: "→";
          transition: transform 0.3s;
        }

        .cta-btn-link:hover::after {
          transform: translateX(4px);
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .cta-actions {
            width: 100%;
            justify-content: flex-start;
          }
        }
      `}</style>

      <div className="cta-root">
        <section className="cta-strip">

          <div className="cta-inner">

            {/* LEFT */}
            <div className="cta-text">
              <h3 className="cta-title">
                Ready to get started?
              </h3>
              <p className="cta-sub">
                Call us or drop a WhatsApp — we respond within minutes
              </p>
            </div>

            {/* RIGHT */}
            <div className="cta-actions">
              <a href="/contact" className="cta-btn-primary">
                Get Quote
              </a>

             
            </div>

          </div>

        </section>
      </div>
    </>
  );
}