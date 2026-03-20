"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Ornamental Fish Breeding",
    desc: "Vibrant, healthy fish varieties bred with expert care.",
    num: "01",
    color: "#0A84D6",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 17c2-4 5-6 9-6s7 2 9 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 17c1-2 3-3 6-3s5 1 6 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity=".6"/>
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    title: "Aquarium Fish Supply",
    desc: "Reliable supply to hobbyists, retailers & pet stores.",
    num: "02",
    color: "#0871B9",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="13" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 13V9a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".7"/>
        <path d="M8 17h2M12 17h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Fish Nutrition & Care",
    desc: "Expert feeding plans & water quality guidance.",
    num: "03",
    color: "#0A9FBF",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C8 3 5 6.5 5 10c0 2.5 1.3 4.7 3.3 6H15.7C17.7 14.7 19 12.5 19 10c0-3.5-3-7-7-7z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 16v3h6v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".7"/>
      </svg>
    ),
  },
  {
    title: "Aquaculture Support",
    desc: "Sustainable farming practices & expert consultation.",
    num: "04",
    color: "#055FA3",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l1.8 5.5H20l-4.6 3.4 1.8 5.5L12 13l-5.2 3.4 1.8-5.5L4 7.5h6.2z" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="12" cy="13" r="2.2" stroke="currentColor" strokeWidth="1.4" opacity=".7"/>
      </svg>
    ),
  },
];

export default function KeyServices() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg,#f5fbff 0%,#eaf5fd 60%,#ddf0fb 100%)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');

        .svc-slant {
          position: relative;
          clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
          transition: clip-path 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
          cursor: default;
        }
        .svc-slant:hover {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          transform: translateY(-5px);
        }
        .svc-slant .inner-accent {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          opacity: 0; transition: opacity 0.3s;
        }
        .svc-slant:hover .inner-accent { opacity: 1; }

        .svc-slant .num-bg {
          transition: transform 0.35s ease, opacity 0.35s ease;
        }
        .svc-slant:hover .num-bg {
          transform: scale(1.08) translateX(4px);
          opacity: 0.12;
        }

        .svc-slant .icon-wrap {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), color 0.3s;
        }
        .svc-slant:hover .icon-wrap {
          transform: scale(1.15) rotate(-6deg);
        }
      `}</style>

      {/* Soft decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"300px", height:"300px", borderRadius:"50%", background:"rgba(10,132,214,0.05)" }}/>
        <div style={{ position:"absolute", bottom:"-40px", left:"-40px", width:"240px", height:"240px", borderRadius:"50%", background:"rgba(79,209,232,0.06)" }}/>
        {/* Diagonal accent stripe in bg */}
        <div style={{
          position:"absolute", top:"30%", left:"-5%", right:"-5%",
          height:"1px",
          background:"linear-gradient(90deg, transparent, rgba(10,132,214,0.08), transparent)",
          transform:"rotate(-3deg)",
        }}/>
        <div style={{
          position:"absolute", top:"60%", left:"-5%", right:"-5%",
          height:"1px",
          background:"linear-gradient(90deg, transparent, rgba(79,209,232,0.1), transparent)",
          transform:"rotate(-3deg)",
        }}/>
      </div>

      {/* Header */}
      <motion.div
        className="relative text-center max-w-xl mx-auto mb-16"
        initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.6 }}
      >
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"12px", marginBottom:"1rem" }}>
          <span style={{ width:"24px", height:"1px", background:"rgba(10,132,214,0.45)", display:"block" }}/>
          <p style={{ color:"#0A84D6", fontSize:"11px", fontWeight:600, letterSpacing:"5px", textTransform:"uppercase", fontFamily:"'Outfit',sans-serif" }}>Our Services</p>
          <span style={{ width:"24px", height:"1px", background:"rgba(10,132,214,0.45)", display:"block" }}/>
        </div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", lineHeight:1.15, marginBottom:"0.8rem" }}>
          <span style={{ display:"block", color:"#083B66", fontSize:"clamp(1.9rem,4vw,2.8rem)", fontWeight:300 }}>What We Offer</span>
          <span style={{ display:"block", color:"#0A84D6", fontSize:"clamp(1.9rem,4vw,2.8rem)", fontWeight:700, fontStyle:"italic" }}>Core Services</span>
        </h2>
        <p style={{ color:"#3a6680", fontSize:"0.87rem", lineHeight:1.8, fontWeight:300, fontFamily:"'Outfit',sans-serif" }}>
          From responsible breeding to full aquaculture support — everything your aquarium needs.
        </p>
      </motion.div>

      {/* Slanted cards row */}
      <div
        className="relative max-w-5xl mx-auto"
        style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0px" }}
      >
        {services.map((svc, i) => (
          <motion.div
            key={svc.num}
            className="svc-slant"
            initial={{ opacity:0, y:32 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.55, delay: i * 0.1 }}
            style={{
              background: "#fff",
              padding: "2.4rem 2rem 2rem",
              boxShadow:"0 4px 28px rgba(10,132,214,0.07)",
              marginLeft: i > 0 ? "-18px" : "0",
              zIndex: services.length - i,
            }}
          >
            {/* Top accent line */}
            <div
              className="inner-accent"
              style={{ background:`linear-gradient(90deg,${svc.color},${svc.color}80)` }}
            />

            {/* Watermark number */}
            <div
              className="num-bg"
              style={{
                position:"absolute", bottom:"-10px", right:"8px",
                fontSize:"6rem", fontWeight:800, lineHeight:1,
                color:svc.color, opacity:0.06,
                fontFamily:"'Playfair Display',serif",
                userSelect:"none", pointerEvents:"none",
              }}
            >
              {svc.num}
            </div>

            {/* Step number — top left small */}
            <div style={{
              fontSize:"10px", fontWeight:700, color:`${svc.color}80`,
              letterSpacing:"2px", fontFamily:"'Outfit',sans-serif",
              marginBottom:"1.2rem",
            }}>
              {svc.num}
            </div>

            {/* Icon */}
            <div
              className="icon-wrap"
              style={{
                color: svc.color,
                marginBottom:"1rem",
                display:"inline-block",
              }}
            >
              {svc.icon}
            </div>

            {/* Slim accent line under icon */}
            <div style={{
              width:"28px", height:"2px",
              background:`linear-gradient(90deg,${svc.color},${svc.color}40)`,
              borderRadius:"2px", marginBottom:"1rem",
            }}/>

            {/* Title */}
            <h3 style={{
              color:"#083B66", fontSize:"0.95rem", fontWeight:600,
              fontFamily:"'Playfair Display',serif",
              lineHeight:1.35, marginBottom:"0.7rem",
            }}>
              {svc.title}
            </h3>

            {/* Short desc */}
            <p style={{
              color:"#5a8099", fontSize:"0.8rem", lineHeight:1.75,
              fontWeight:300, fontFamily:"'Outfit',sans-serif",
            }}>
              {svc.desc}
            </p>

          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        style={{ display:"flex", justifyContent:"center", marginTop:"3.5rem" }}
        initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.5, delay:0.42 }}
      >
        <a
          href="/services"
          style={{
            display:"inline-flex", alignItems:"center", gap:"10px",
            background:"linear-gradient(135deg,#0A84D6,#0AAFCF)",
            color:"#fff", fontSize:"0.88rem", fontWeight:600,
            padding:"13px 34px", borderRadius:"999px",
            fontFamily:"'Outfit',sans-serif", letterSpacing:"0.5px",
            boxShadow:"0 8px 24px rgba(10,132,214,0.28)",
            textDecoration:"none",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(10,132,214,0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow="0 8px 24px rgba(10,132,214,0.28)"; }}
        >
          View All Services
          <span style={{ width:"20px", height:"20px", borderRadius:"50%", background:"rgba(255,255,255,0.22)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H4M8 2V6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </motion.div>

    </section>
  );
}