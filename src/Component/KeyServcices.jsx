"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Ornamental Fish Breeding",
    desc: "Breeding vibrant and healthy ornamental fish varieties such as Goldfish, Angel Fish, Guppies, and Fighter Fish.",
    tags: ["Goldfish", "Angel Fish", "Guppies", "Fighter Fish"],
    accent: "#0A84D6",
    light: "#E6F6FF",
    num: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 17c2-4 5-6 9-6s7 2 9 6" stroke="#0A84D6" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 17c1-2 3-3 6-3s5 1 6 3" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="8" r="3" stroke="#0A84D6" strokeWidth="1.8"/>
        <path d="M17 8c0-1.5-.7-2.8-2-3.5" stroke="#4FD1E8" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Aquarium Fish Supply",
    desc: "Supplying quality ornamental fish to aquarium hobbyists, retailers, and pet stores.",
    tags: ["Hobbyists", "Pet Stores", "Bulk Orders"],
    accent: "#0871B9",
    light: "#DCF0FF",
    num: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="13" width="18" height="8" rx="2" stroke="#0A84D6" strokeWidth="1.8"/>
        <path d="M7 13V9a5 5 0 0110 0v4" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 17h2M12 17h4" stroke="#0A84D6" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Fish Nutrition & Care",
    desc: "Providing proper fish feeding guidance and care support to maintain healthy aquarium environments.",
    tags: ["Feeding Plans", "Water Quality", "Health Support"],
    accent: "#0A9FBF",
    light: "#DFF8FF",
    num: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C8 3 5 6.5 5 10c0 2.5 1.3 4.7 3.3 6H12h3.7C17.7 14.7 19 12.5 19 10c0-3.5-3-7-7-7z" stroke="#0A84D6" strokeWidth="1.8"/>
        <path d="M9 16v3h6v-3" stroke="#4FD1E8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 10c0-1.1.9-2 2-2s2 .9 2 2" stroke="#4FD1E8" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Aquaculture Support",
    desc: "Promoting responsible fish farming practices and sustainable aquaculture methods.",
    tags: ["Sustainable Farming", "Best Practices", "Consultation"],
    accent: "#0A84D6",
    light: "#E6F6FF",
    num: "04",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.8 5.5H20l-4.6 3.4 1.8 5.5L12 13l-5.2 3.4 1.8-5.5L4 7.5h6.2z" stroke="#0A84D6" strokeWidth="1.7"/>
        <circle cx="12" cy="13" r="2.2" stroke="#4FD1E8" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

export default function KeyServices() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0f9ff 0%, #e4f4fd 50%, #d8eef9 100%)" }}
    >

      {/* Background blob shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div style={{
          position:"absolute", top:"-80px", right:"-120px",
          width:"480px", height:"480px", borderRadius:"60% 40% 55% 45% / 45% 55% 40% 60%",
          background:"rgba(10,132,214,0.05)", transform:"rotate(20deg)"
        }}/>
        <div style={{
          position:"absolute", bottom:"-60px", left:"-80px",
          width:"360px", height:"360px", borderRadius:"40% 60% 45% 55% / 55% 45% 60% 40%",
          background:"rgba(79,209,232,0.06)", transform:"rotate(-15deg)"
        }}/>
        <div style={{
          position:"absolute", top:"40%", left:"30%",
          width:"200px", height:"200px", borderRadius:"50%",
          background:"rgba(10,132,214,0.03)"
        }}/>
      </div>

      {/* Section header */}
      <div className="relative text-center max-w-xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-8 h-px" style={{background:"rgba(79,209,232,0.6)"}}/>
          <p style={{color:"#4FD1E8", fontSize:"11px", fontWeight:600, letterSpacing:"4px", textTransform:"uppercase", fontFamily:"'Outfit',sans-serif"}}>
            Our Services
          </p>
          <span className="block w-8 h-px" style={{background:"rgba(79,209,232,0.6)"}}/>
        </div>

        <h2 style={{fontFamily:"'Playfair Display',serif", lineHeight:1.15, marginBottom:"1rem"}}>
          <span style={{display:"block", color:"#083B66", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:300}}>
            What We Offer
          </span>
          <span style={{display:"block", color:"#0A84D6", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:700, fontStyle:"italic"}}>
            Core Services
          </span>
        </h2>

        <p style={{color:"#3a6680", fontSize:"0.88rem", lineHeight:1.8, fontWeight:300, fontFamily:"'Outfit',sans-serif"}}>
          From responsible breeding to full aquaculture support — everything your aquarium
          needs, from our farm to your tank.
        </p>
      </div>

      {/* Cards — organic pill/blob layout */}
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-7">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            style={{
              position: "relative",
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(12px)",
              borderRadius: i % 2 === 0
                ? "40px 12px 40px 12px"   /* alternating organic corners */
                : "12px 40px 12px 40px",
              border: "1px solid rgba(10,132,214,0.1)",
              padding: "2.2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.1rem",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(10,132,214,0.06)",
              cursor: "default",
              transition: "box-shadow 0.3s, border-color 0.3s",
            }}
            className="group"
          >
            {/* Top accent wave line */}
            <div style={{
              position:"absolute", top:0, left:"10%", right:"10%", height:"3px",
              background:`linear-gradient(90deg, transparent, ${svc.accent}, #4FD1E8, transparent)`,
              borderRadius:"0 0 4px 4px", opacity:0.7
            }}/>

            {/* Number watermark */}
            <div style={{
              position:"absolute", top:"1rem", right:"1.4rem",
              fontSize:"3.5rem", fontWeight:800, color:"rgba(10,132,214,0.06)",
              fontFamily:"'Playfair Display',serif", lineHeight:1,
              userSelect:"none", pointerEvents:"none"
            }}>
              {svc.num}
            </div>

            {/* Icon + title row */}
            <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
              <div style={{
                width:"52px", height:"52px", flexShrink:0,
                background:`linear-gradient(135deg, ${svc.light}, rgba(255,255,255,0.6))`,
                border:`1px solid rgba(10,132,214,0.14)`,
                borderRadius: i % 2 === 0 ? "50% 30% 50% 30%" : "30% 50% 30% 50%",
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                {svc.icon}
              </div>
              <h3 style={{
                color:"#083B66", fontSize:"1rem", fontWeight:600,
                fontFamily:"'Outfit',sans-serif", lineHeight:1.3
              }}>
                {svc.title}
              </h3>
            </div>

            {/* Divider — wavy SVG line */}
            <svg viewBox="0 0 260 8" style={{width:"100%", height:"8px", opacity:0.35}}>
              <path d="M0 4 Q32 0 65 4 Q98 8 130 4 Q162 0 195 4 Q228 8 260 4"
                stroke="#4FD1E8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>

            {/* Description */}
            <p style={{
              color:"#4a7a96", fontSize:"0.85rem", lineHeight:1.85,
              fontWeight:300, fontFamily:"'Outfit',sans-serif", flexGrow:1
            }}>
              {svc.desc}
            </p>

            {/* Tags — pill shaped */}
            <div style={{display:"flex", flexWrap:"wrap", gap:"6px"}}>
              {svc.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize:"11px", color:svc.accent,
                  background:svc.light,
                  border:`1px solid rgba(10,132,214,0.15)`,
                  borderRadius:"999px",
                  padding:"3px 12px",
                  fontWeight:500,
                  fontFamily:"'Outfit',sans-serif",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Learn more */}
            <a href="#" style={{
              display:"inline-flex", alignItems:"center", gap:"6px",
              color:svc.accent, fontSize:"12px", fontWeight:600,
              fontFamily:"'Outfit',sans-serif", letterSpacing:"0.5px",
              textDecoration:"none", marginTop:"auto",
            }}>
              Learn more
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H6M11 3V8"
                  stroke={svc.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

          </motion.div>
        ))}
      </div>

      {/* CTA button */}
      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <a
          href="/services"
          style={{
            display:"inline-flex", alignItems:"center", gap:"10px",
            background:"linear-gradient(135deg, #0A84D6, #0AAFCF)",
            color:"#fff", fontSize:"0.88rem", fontWeight:600,
            padding:"14px 36px",
            borderRadius:"999px",
            fontFamily:"'Outfit',sans-serif",
            letterSpacing:"0.5px",
            boxShadow:"0 8px 28px rgba(10,132,214,0.28)",
            textDecoration:"none",
            transition:"transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 12px 36px rgba(10,132,214,0.38)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(10,132,214,0.28)"; }}
        >
          View All Services
          <span style={{
            width:"22px", height:"22px", borderRadius:"50%",
            background:"rgba(255,255,255,0.22)",
            display:"flex", alignItems:"center", justifyContent:"center"
          }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H4M8 2V6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </motion.div>

    </section>
  );
}