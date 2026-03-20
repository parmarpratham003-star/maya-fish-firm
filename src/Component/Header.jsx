"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact",  href: "/contact" },
];

const PhoneCircleIcon = ({ scrolled }) => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
    <circle cx="19" cy="19" r="18"
      stroke={scrolled ? "#0A84D6" : "rgba(255,255,255,0.45)"}
      strokeWidth="1.2"/>
    <path d="M14 13.5c.3.8.8 1.6 1.4 2.2l-1.3 1.4c.9 1.8 2.4 3.3 4.2 4.2l1.4-1.3c.6.6 1.4 1.1 2.2 1.4v2.1a.5.5 0 01-.5.5C15.4 24 12 20.6 12 16.4a.5.5 0 01.5-.5l1.5-.4z"
      fill={scrolled ? "#0A84D6" : "#fff"}/>
  </svg>
);

const WhatsAppIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
      stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MenuIcon = ({ scrolled }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M3 12h18M3 6h18M3 18h18" stroke={scrolled ? "#083B66" : "#fff"} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = ({ scrolled }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke={scrolled ? "#083B66" : "#fff"} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const S = scrolled;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Nunito+Sans:wght@300;400;600;700&display=swap');

        .hr { position:fixed; top:0; left:0; right:0; z-index:100; font-family:'Josefin Sans',sans-serif; }

        /* Bar states */
        .hr .bar { transition: background 0.4s, box-shadow 0.4s, border-color 0.4s; border-bottom:1px solid transparent; }
        .hr.tp .bar { background:transparent; border-color:rgba(255,255,255,0.08); }
        .hr.sd .bar { background:rgba(255,255,255,0.97); border-color:rgba(8,59,102,0.09); box-shadow:0 4px 28px rgba(8,59,102,0.10); backdrop-filter:blur(18px); }

        /* 3-column grid: nav | logo | actions */
        .inner {
          max-width:1280px; margin:0 auto; padding:0 2.4rem;
          height:72px;
          display:grid;
          grid-template-columns:1fr auto 1fr;
          align-items:center;
          gap:1rem;
        }

        /* ── Nav (left) ── */
        .hnav { display:flex; align-items:center; gap:1.8rem; justify-content:flex-start; }
        .hnav a {
          font-size:13px; font-weight:600; letter-spacing:0.4px;
          text-decoration:none; position:relative; padding-bottom:3px;
          transition:color 0.25s; white-space:nowrap;
        }
        .tp .hnav a        { color:rgba(255,255,255,0.74); }
        .tp .hnav a.on,
        .tp .hnav a:hover  { color:#fff; }
        .sd .hnav a        { color:#4a6a82; }
        .sd .hnav a.on,
        .sd .hnav a:hover  { color:#083B66; }
        .hnav a::after {
          content:''; position:absolute; bottom:0; left:0;
          width:0; height:2px; border-radius:2px;
          transition:width 0.25s, background 0.4s;
        }
        .tp .hnav a::after { background:rgba(255,255,255,0.7); }
        .sd .hnav a::after { background:#0A84D6; }
        .hnav a.on::after, .hnav a:hover::after { width:100%; }

        /* ── Logo (center) ── */
        .hlogo {
          display:flex; align-items:center; gap:9px;
          text-decoration:none; justify-self:center; flex-shrink:0;
        }
        .hlogo-t { display:flex; flex-direction:column; line-height:1.25; }
        .hlogo-m { font-weight:700; font-size:13.5px; letter-spacing:3px; text-transform:uppercase; transition:color 0.4s; }
        .tp .hlogo-m { color:#fff; }
        .sd .hlogo-m { color:#083B66; }
        .hlogo-s { font-size:8.5px; font-weight:400; letter-spacing:2.5px; text-transform:uppercase; transition:color 0.4s; }
        .tp .hlogo-s { color:rgba(255,255,255,0.50); }
        .sd .hlogo-s { color:#0A84D6; }

        /* ── Actions (right) ── */
        .hact { display:flex; align-items:center; gap:1rem; justify-content:flex-end; }
        .hphone { display:flex; align-items:center; gap:9px; }
        .hphone-i { display:flex; flex-direction:column; line-height:1.3; }
        .hphone-lbl { font-size:10px; letter-spacing:0.4px; transition:color 0.4s; }
        .tp .hphone-lbl { color:rgba(255,255,255,0.46); }
        .sd .hphone-lbl { color:#7a9ab0; }
        .hphone-num { font-size:13px; font-weight:700; letter-spacing:0.3px; text-decoration:none; transition:color 0.4s; }
        .tp .hphone-num { color:#fff; }
        .sd .hphone-num { color:#083B66; }

        .hdiv { width:1px; height:30px; flex-shrink:0; transition:background 0.4s; }
        .tp .hdiv { background:rgba(255,255,255,0.15); }
        .sd .hdiv { background:rgba(8,59,102,0.12); }

        /* WhatsApp pill — always green, text left + circle icon right like reference */
        .hwa {
          display:inline-flex; align-items:center; gap:0;
          padding:7px 7px 7px 18px;
          background:#25D366; border-radius:50px;
          font-size:12px; font-weight:700; letter-spacing:0.8px; text-transform:uppercase;
          color:#fff; text-decoration:none; white-space:nowrap; flex-shrink:0;
          box-shadow:0 4px 16px rgba(37,211,102,0.38);
          transition:background 0.22s, transform 0.18s, box-shadow 0.22s;
        }
        .hwa:hover { background:#1ebe5d; transform:translateY(-1px); box-shadow:0 6px 22px rgba(37,211,102,0.48); }
        .hwa-lbl { margin-right:12px; }
        .hwa-circle {
          width:28px; height:28px; border-radius:50%;
          background:rgba(255,255,255,0.20);
          display:flex; align-items:center; justify-content:center; flex-shrink:0;
        }

        /* ── Hamburger ── */
        .hburg { display:none; background:none; border:none; cursor:pointer; padding:4px; }

        /* ── Mobile menu ── */
        .hmob { display:none; padding:1rem 1.5rem 1.5rem; transition:background 0.4s; }
        .hmob.open { display:block; }
        .tp .hmob { background:rgba(2,12,26,0.94); backdrop-filter:blur(20px); border-top:1px solid rgba(255,255,255,0.07); }
        .sd .hmob { background:#fff; border-top:1px solid rgba(8,59,102,0.08); }

        .hmob-phone { display:flex; align-items:center; gap:10px; padding:12px 16px; margin-bottom:8px; border-radius:10px; }
        .tp .hmob-phone { border:1px solid rgba(255,255,255,0.10); background:rgba(255,255,255,0.05); }
        .sd .hmob-phone { border:1px solid rgba(10,132,214,0.14); background:#f5fafd; }
        .hmob-lbl { font-size:10px; }
        .tp .hmob-lbl { color:rgba(255,255,255,0.44); }
        .sd .hmob-lbl { color:#7a9ab0; }
        .hmob-num { font-size:13px; font-weight:700; text-decoration:none; }
        .tp .hmob-num { color:#fff; }
        .sd .hmob-num { color:#083B66; }

        .hmob-link {
          display:flex; align-items:center; justify-content:space-between;
          padding:12px 16px; margin-bottom:6px; border-radius:10px;
          font-size:13px; font-weight:600; text-decoration:none;
          transition:background 0.2s, color 0.2s;
        }
        .tp .hmob-link        { color:rgba(255,255,255,0.76); border:1px solid rgba(255,255,255,0.07); }
        .tp .hmob-link:hover,
        .tp .hmob-link.on     { background:rgba(255,255,255,0.09); color:#fff; }
        .sd .hmob-link        { color:#3a6680; border:1px solid rgba(8,59,102,0.07); }
        .sd .hmob-link:hover,
        .sd .hmob-link.on     { background:#f0f9ff; color:#083B66; border-color:rgba(10,132,214,0.12); }

        .hmob-wa {
          display:flex; align-items:center; justify-content:center; gap:8px;
          width:100%; margin-top:10px; padding:13px;
          background:#25D366; color:#fff;
          font-size:13px; font-weight:700; letter-spacing:0.5px;
          border-radius:10px; text-decoration:none;
          box-shadow:0 4px 14px rgba(37,211,102,0.28);
          transition:background 0.2s;
        }
        .hmob-wa:hover { background:#1ebe5d; }

        @media (max-width:960px) {
          .hnav, .hact { display:none; }
          .hburg { display:flex; }
          /* on mobile, logo stays center, burger goes right */
          .inner { grid-template-columns:40px 1fr 40px; }
        }
        @media (max-width:500px) {
          .inner { padding:0 1.2rem; }
        }
      `}</style>

      <header className={`hr ${S ? 'sd' : 'tp'}`}>
        <div className="bar">
          <div className="inner">

            {/* ── LEFT: Nav links ── */}
            <nav className="hnav">
              {navLinks.map(({ label, href }) => (
                <Link key={label} href={href}
                  className={isActive(href) ? 'on' : ''}>
                  {label}
                </Link>
              ))}
            </nav>

            {/* ── CENTER: Logo ── */}
            <Link href="/" className="hlogo">
              <Image
                src="/logo1.png" alt="MAYA Fish Farm"
                width={48} height={48}
                style={{
                  objectFit:'contain',
                  filter: S ? 'none' : 'brightness(0) invert(1)',
                  mixBlendMode: S ? 'multiply' : 'normal',
                  opacity: S ? 1 : 0.9,
                  transition:'filter 0.4s, opacity 0.4s',
                }}
              />
              <div className="hlogo-t">
                <span className="hlogo-m">Maya Fish Farm</span>
                <span className="hlogo-s">Ornamental · Aquarium</span>
              </div>
            </Link>

            {/* ── RIGHT: Phone + WhatsApp ── */}
            <div className="hact">
              <div className="hphone">
                <PhoneCircleIcon scrolled={S} />
                <div className="hphone-i">
                  <span className="hphone-lbl">Call us anytime</span>
                  <a href="tel:+91XXXXXXXXXX" className="hphone-num">+91 XXXXX XXXXX</a>
                </div>
              </div>
              <div className="hdiv" />
              <a href="https://wa.me/91XXXXXXXXXX"
                target="_blank" rel="noopener noreferrer"
                className="hwa">
                <span className="hwa-lbl">WhatsApp</span>
                <span className="hwa-circle"><WhatsAppIcon size={14} /></span>
              </a>
            </div>

            {/* ── Mobile burger (right cell on small screens) ── */}
            <button className="hburg"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ justifySelf:'end' }}>
              {menuOpen ? <CloseIcon scrolled={S} /> : <MenuIcon scrolled={S} />}
            </button>

          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        <div className={`hmob ${menuOpen ? 'open' : ''}`}>
          <div className="hmob-phone">
            <PhoneCircleIcon scrolled={S} />
            <div>
              <div className="hmob-lbl">Call us anytime</div>
              <a href="tel:+91XXXXXXXXXX" className="hmob-num">+91 XXXXX XXXXX</a>
            </div>
          </div>
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href}
              className={`hmob-link${isActive(href) ? ' on' : ''}`}
              onClick={() => setMenuOpen(false)}>
              {label}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4 2l4 4-4 4"
                  stroke={S ? "#0A84D6" : "rgba(255,255,255,0.35)"}
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
          <a href="https://wa.me/91XXXXXXXXXX"
            target="_blank" rel="noopener noreferrer"
            className="hmob-wa">
            <WhatsAppIcon size={15} />
            Chat on WhatsApp
          </a>
        </div>
      </header>
    </>
  );
}