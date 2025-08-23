import React from "react";

export default function Education({ items }) {
  return (
    <section id="education">
      <h2>Education</h2>
      {items.map((e, i) => (
        <div key={i} className="item">
          <h3>{e.degree}</h3>
          <p>{e.institute}</p>
          <p>{e.year} {e.cgpa ? `• CGPA: ${e.cgpa}` : ""}</p>
        </div>
      ))}
    </section>
  );
}
