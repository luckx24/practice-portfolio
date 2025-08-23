import React from "react";

export default function Skills({ list }) {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div className="chips">
        {list.map((s, i) => <span className="chip" key={i}>{s}</span>)}
      </div>
    </section>
  );
}
