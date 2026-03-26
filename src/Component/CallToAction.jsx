"use client";

export default function CallToAction() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

        .cta-root {
          font-family: 'Montserrat', sans-serif;
        }

        /* 🔥 CTA STRIP (MATCH FOOTER) */
        .cta-strip {
          background: linear-gradient(90deg, #060e1f);
          padding: 2rem 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
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
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
        }

        .cta-sub {
          font-size: 12.5px;
          color: rgba(255,255,255,0.55);
        }

        /* RIGHT BUTTONS */
        .cta-actions {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        /* PRIMARY BUTTON */
        .cta-btn-primary {
          padding: 12px 24px;
          background: #4FD1E8; /* cyan accent */
          color: #060e1f;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: 0.3s;
          box-shadow: 0 0 20px rgba(79,209,232,0.3);
        }

        .cta-btn-primary:hover {
          background: #6ce0f0;
          transform: translateY(-2px);
        }

        /* LINK BUTTON */
        .cta-btn-link {
          font-size: 12.5px;
          font-weight: 600;
          color: #4FD1E8;
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