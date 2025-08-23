import React, { useState } from "react";

export default function Contact({ email }) {
  const [msg, setMsg] = useState("");
  const mailto = `mailto:${email}?subject=Opportunity%20for%20Lokesh&body=${encodeURIComponent(msg)}`;
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Looking for roles in Software, MERN, or DevOps/AWS.</p>
      <textarea
        value={msg}
        onChange={(e)=>setMsg(e.target.value)}
        placeholder="Write a quick message..."
        rows={4}
        style={{width:"100%", background:"#0f1830", color:"var(--text)", border:"1px solid #233156", borderRadius:8, padding:10}}
      />
      <p style={{marginTop:10}}><a className="btn" href={mailto}>Send Email</a></p>
    </section>
  );
}
