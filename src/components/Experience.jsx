import React from "react";

export default function Experience({ items }) {
  return (
    <section id="experience">
      <h2>Experience & Internships</h2>
      {items.map((it, i) => (
        <div key={i} className="item">
          <h3>{it.role}</h3>
          <small>{it.period}</small>
          <p>{it.details}</p>
        </div>
      ))}
    </section>
  );
}
