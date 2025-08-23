import React, { useEffect, useState } from "react";

const sections = ["hero","skills","projects","experience","education","extras","contact"];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const opts = { threshold: 0.6 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, opts);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="nav">
      <a href="#hero" className="brand">Lokesh</a>
      <div className="nav-links">
        {sections.slice(1).map((id) => (
          <a key={id} href={`#${id}`} className={active===id ? "active" : ""}>
            {id[0].toUpperCase()+id.slice(1)}
          </a>
        ))}
        <a href="#contact" className="btn">Hire Me</a>
      </div>
    </nav>
  );
}
