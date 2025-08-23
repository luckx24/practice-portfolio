import React from "react";

export default function Extras({ list }) {
  return (
    <section id="extras">
      <h2>Achievements & Activities</h2>
      <ul>
        {list.map((x, i) => <li key={i}>{x}</li>)}
      </ul>
    </section>
  );
}
