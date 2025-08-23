import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Extras from "./components/Extras";
import Contact from "./components/Contact";

const data = {
name: "Lokesh Kachhi",
email: "luckykachhi81@gmail.com",
phone: "+91 8390176637",
location: "Nagpur, Maharashtra",
linkedin: "https://www.linkedin.com/in/lokesh-kachhi-434799264/",
github: "https://github.com/luckx24",
summary:
"Enthusiastic Software Developer with a solid foundation in programming, web development, and DevOps practices. Passionate about problem-solving and delivering scalable, high-quality solutions.",
skills: ["C/C++","Python","JavaScript","HTML","CSS","React.js","Node.js","VS Code","Git/GitHub","Linux","AWS","AI Tools","MongoDB","Data Structures & Algorithms","Internet of Things"],
projects: [
{ title: "Automated CI/CD on AWS", description: "GitHub Actions → EC2; Docker; shell provisioning.", tags:["GitHub Actions","EC2","Docker"] },
{ title: "IoT Soldiers Health & Tracking", description: "ESP32 + sensors → live dashboard.", tags:["ESP32","Sensors","Dashboard"] },
{ title: "Personal Portfolio", description: "React + responsive UI.", tags:["React","CSS"] },
{ title: "College Job/Intern Portal (MERN)", description: "Auth, resume upload, admin panel.", tags:["React","Node","MongoDB","Auth"] },
],
internships: [
{ role: "DevOps & Cloud Engineering — Skillected, Nagpur", period: "Apr 2025 – Present", details: "EC2/S3, shell automation, Git CI/CD, cloud deployments." },
{ role: "MERN Full Stack — Complete Coding By Prashant (Remote)", period: "Jun 2024 – Nov 2024", details: "Full‑stack ToDo; responsive UI; Node/Express APIs." },
{ role: "Virtual C/C++ — Internshala (Remote)", period: "2023", details: "DSA practice; arrays, pointers, file I/O." },
],
education: [
{ degree: "B.Tech, Information Technology", institute: "Govindrao Wanjari College of Engineering & Technology, Nagpur", year: "2021–2025", cgpa: "7.6/10" },
{ degree: "Intermediate", institute: "Bhadant Dharmakirti Jr College, Nagpur", year: "2021" },
{ degree: "Matric", institute: "St. MB High School, Nagpur", year: "2019" },
],
extras: ["Secretary, IT Student Forum","Captain, University Cricket Team","NSS — Active Member","Class Representative, B.Tech"],
};

export default function App() {
return (
<div className="App">
{/* Animated background orbs */}
<div className="bg">
<div className="orb o1" />
<div className="orb o2" />
<div className="orb o3" />
</div>
<Navbar />
  <Hero data={data} />
  <Skills list={data.skills} />
  <Projects items={data.projects} />
  <Experience items={data.internships} />
  <Education items={data.education} />
  <Extras list={data.extras} />
  <Contact email={data.email} />
  <footer><p>© {new Date().getFullYear()} {data.name}</p></footer>
</div>
);
}
