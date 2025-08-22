import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiJira,
  SiJsonwebtokens,
  SiGithub,
} from "react-icons/si";
import "./Portfolio.css";
import dp from "./assets/pro.jpg";
import { useState } from "react";

const techStack = [
  { icon: <SiReact />, name: "React.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiJira />, name: "Jira" },
  { icon: <SiJsonwebtokens />, name: "JWT" },
  { icon: <SiGithub />, name: "GitHub" },
];

const projects = [
  {
    title: "Big-Basket E-commerce App",
    description:
      "Full-featured MERN stack e-commerce site with JWT authentication, Razorpay payment integration, admin product panel, and a modern responsive UI. Built with React, Node, MongoDB, Razorpay, and Redux Toolkit.",
    github: "https://github.com/shubhamlowanshi/big-basket",
  },
  {
    title: "ReadReuse App",
    description:
      "Notes and question paper sharing app for RGPV students, built with React Native, Node.js, and MongoDB.",
    github: "https://github.com/shubhamlowanshi/readreuse",
  },
  {
    title: "More project.....",
    description:
      "long with this, I have uploaded several other projects on my GitHub profile, demonstrating my experience with modern web technologies.cd",
    github: "https://github.com/shubhamlowanshi?tab=repositories",
  },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.title = "Shubham Lowanshi | Portfolio";
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <h1 className="brand-name">Shubham Lowanshi</h1>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
        <nav className={`nav-links ${menuOpen ? "show" : ""}`} ref={menuRef}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#profile" onClick={handleLinkClick}>Profile</a>
          <a href="#experience" onClick={handleLinkClick}>Experience</a>
          <a href="#about" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#education" onClick={handleLinkClick}>Education</a>
          <a href="#certifications" onClick={handleLinkClick}>Certifications</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="home">
        <h2>Hi, I'm <span className="typing-container">Shubham Lowanshi</span></h2>
        <p>Full Stack Developer | MERN | Razorpay | Responsive UI |REACT |Express.js | jwt</p>
        <div className="socials">
          <a href="https://github.com/shubhamlowanshi" target="_blank" rel="noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shubham-lowanshi-438478338/" target="_blank" rel="noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Profile */}
      <section id="profile" className="profile">
        <h2 className="section-title">Profile</h2>
        <div className="profile-content">
          <div className="profile-image">
            <img src={dp} alt="Shubham" />
          </div>
          <div className="profile-text">
            <p>
              I'm <strong>Shubham Lowanshi</strong>, a <strong>Full Stack Developer</strong> from Indore, India, skilled in the <strong>MERN stack</strong>: MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p>
              I build responsive UIs using <strong>React</strong>, <strong>Tailwind</strong>, <strong>Bootstrap</strong>, and manage state using <strong>Redux Toolkit</strong> and <strong>Context API</strong>.
            </p>
            <p>
              Experienced in RESTful API development, <strong>JWT</strong>/<strong>bcrypt</strong> authentication, <strong>Razorpay</strong> integration, and working with <strong>Agile teams</strong> using <strong>Git</strong>, <strong>Postman</strong>, and <strong>Jira</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="about">
        <h2 className="section-title">Experience (Total 1 year)</h2>
        <div className="experience-card">
          <h3>Full Stack Developer (Training)</h3>
          <p><em>Vected technology, Indore</em> <span className="duration">(Oct 2024 – Mar 2025)</span></p>
          <ul>
            <li>Built UIs using React with Hooks, Context API, Redux Toolkit.</li>
            <li>Developed RESTful APIs using Node.js & Express.js.</li>
            <li>Used MongoDB with Mongoose for data modeling.</li>
            <li>Implemented JWT and bcrypt for secure authentication.</li>
            <li>Collaborated in Agile teams using Git, GitHub & Jira.</li>
          </ul>
          <h3>Full Stack Developer (traine)</h3>
          <p><em>Intellihood Technology</em> <span className="duration">(Apr 2025 – present)</span></p>
          <ul>
            <li>Worked on multiple real-world tickets including bug fixes, new feature implementation, and performance improvements.</li>
            <li>Integrated third-party libraries and APIs to enhance application functionality.</li>
            <li>Gained hands-on experience with tools like Axios for API calls and Mongoose for database operations.</li>
            <li>Implemented reusable React components and optimized rendering using React hooks.</li>
            <li>Collaborated with team members through GitHub, managed tasks on Jira, and followed Agile workflow.</li>
          </ul>
        </div>

      </section>

      {/* Skills */}
      <section id="about" className="about">
        <h2 className="section-title">Technical Skills</h2>
        <div className="tech-stack">
          {techStack.map((tech, i) => (
            <div key={i} className="tech-icon" data-name={tech.name}>
              {tech.icon}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>
        <div className="project-list">
          {projects.map((proj, i) => (
            <div key={i} className="project-card">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.github} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="education">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          <div className="edu-card">
            <h3>MCA</h3>
            <p>RGPV University, Bhopal <b>7.3 cgpa</b> <span>(2024)</span></p>
          </div>
          <div className="edu-card">
            <h3>BCA</h3>
            <p>Barkatullah University, Bhopal <b>72%</b> <span>(2022)</span></p>
          </div>
          <div className="edu-card">
            <h3>12th</h3>
            <p>Bethel higher secondary school seoni-malwa <b>73%</b> <span>(2019)</span></p>
          </div>
          <div className="edu-card">
            <h3>10th</h3>
            <p>Bethel higher secondary school seoni-malwa <b>83%</b> <span>(2017)</span></p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-gray-100 py-10 px-5 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 section-title"> Certifications
        </h2>
        <p className="text-lg text-gray-600">
          <span className="font-semibold">Frontend Development Certification</span> – Vector Skill Academy
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-12 px-5 text-center shadow-inner">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 section-title"> Contact Me</h2>
        <p className="text-lg text-gray-600 mb-6 ">Feel free to reach out via email!</p>
        <a href="mailto:shubhamlowanshi02@gmail.com" className="glow-button">
          ✉️ Send Email
        </a>
        <br />
        <br />
        <a href="/Shubham_Lowanshi_m(1).pdf" download="Shubham_Lowanshi_Resume.pdf" className="glow-button">
          📄 Download Resume
        </a>
      </section>

      {/* Footer */}
      <footer className="footer bg-gray-900 text-white text-center py-6 mt-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Shubham Lowanshi</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
