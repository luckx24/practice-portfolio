import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Projects({ items }) {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el) => {
      if (el) VanillaTilt.init(el, { max: 8, speed: 400, glare: true, "max-glare": 0.2 });
    });
    return () => refs.current.forEach((el) => el?.vanillaTilt?.destroy());
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="cards">
        {items.map((p, i) => (
          <article key={i} className="card tilt" ref={(el)=>refs.current[i]=el}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.tags && (
              <div className="chips" style={{marginTop:8}}>
                {p.tags.map((t, j) => <span className="chip" key={j}>{t}</span>)}
              </div>
            )}
            {p.link && <p style={{marginTop:8}}><a href={p.link} target="_blank" rel="noreferrer">View</a></p>}
          </article>
        ))}
      </div>
    </section>
  );
}
