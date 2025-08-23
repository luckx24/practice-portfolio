import React from "react";

export default function Hero({ data }) {
  return (
    <header id="hero" className="hero">
      <h1>{data.name}</h1>
      <p className="tag">Software Developer • Web • DevOps</p>
      <p className="sub">
        {data.location} • <a href={`mailto:${data.email}`}>{data.email}</a> • {data.phone}
      </p>
      <p className="links">
        <a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> |{" "}
        <a href={data.github} target="_blank" rel="noreferrer">GitHub</a>
      </p>
      <p className="summary">{data.summary}</p>
    </header>
  );
}
