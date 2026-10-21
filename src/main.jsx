import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Facebook,
  Phone,
  MapPin,
  Menu,
  X,
  Terminal,
  Cpu,
  Code2,
  Layers,
  Mail,
  Check,
  Copy,
  Play,
} from "lucide-react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import "./styles.css";

// Replace these values with your verified details. Empty links are intentionally hidden.
const profile = {
  name: "Lee Tejones",
  title: "Computer Engineer | Developer",
  email: "mrleetejones@gmail.com",
  phone: "09639660531",
  phoneHref: "+639639660531",
  facebook: "https://www.facebook.com/tej.lee.31",
  location: "Cabadbaran City, Agusan del Norte, Philippines",
  github: "https://github.com/mrleejino-ho",
  linkedin: "",
  resume: "",
  portrait: "/portrait.png",
};
const projects = [
  {
    id: "01",
    name: "BuzzTap Business",
    category: "BUZZTAP · BUSINESS",
    description:
      "BuzzTap Business is a web platform that helps businesses manage customer accounts, product sales, inventory, and timed workstation sessions. It supports cash, shared BuzzPoints, and business-specific rewards, with customer approval for points payments. Role-based staff access, financial reports, transaction receipts, and activity logs help business owners oversee daily operations.",
    stack: ["React", "Vite", "Tailwind CSS", "Vercel", "Supabase"],
    icon: Layers,
    label: "Business application",
    initials: "BT",
    repo: "",
    live: "https://buzztap-business.vercel.app/",
    screenshot: "/projects/buzztap-business.png",
  },
  {
    id: "02",
    name: "BuzzTap Admin — Platform Management Dashboard",
    category: "BUZZTAP · ADMIN",
    description:
      "A centralized dashboard for managing the BuzzTap NFC and rewards platform. It enables administrators to manage businesses and customers, register NFC cards, oversee BuzzPoints funding and transactions, investigate payment approvals, and resolve customer disputes. Features include notification alerts, card expiration controls, payment activity monitoring, and business payment pause controls—all within a responsive black-and-yellow interface.",
    stack: ["React", "Vite", "Tailwind CSS", "Vercel", "Supabase"],
    icon: Terminal,
    label: "Admin application",
    initials: "BT",
    repo: "",
    live: "https://buzztap-admin.vercel.app/",
    screenshot: "/projects/buzztap-admin.png",
  },
  {
    id: "03",
    name: "PEIS-AI — Photovoltaic Monitoring and Analysis System",
    category: "MONITORING SYSTEM",
    description:
      "A web-based solar monitoring system that collects and visualizes real sensor data, including panel temperature, ambient temperature, humidity, light intensity, voltage, current, and power output. It integrates Arduino-based sensor acquisition with a Python Flask backend and Supabase database to display live measurements and historical records. The system is designed to support Phase Change Material (PCM) thermal performance evaluation and Linear Regression analysis for predicting photovoltaic power output.",
    stack: [
      "Python",
      "Flask",
      "Supabase",
      "SQL",
      "Arduino Uno",
      "ESP32",
      "Linear Regression",
    ],
    icon: Cpu,
    label: "PV monitoring",
    initials: "PV",
    repo: "",
    live: "https://pvmonitoringsystem.vercel.app/",
    screenshot: "/projects/pv.png",
  },
  {
    id: "04",
    name: "ARMS — Application Real-Time Monitoring System",
    category: "WEB APPLICATION",
    description:
      "A centralized classroom monitoring platform designed to help teachers manage student accounts, class schedules, application permissions, and student application usage. It enables administrators and teachers to register students, configure application restrictions during scheduled classes, monitor recorded activity, and review violations and reports. Features include real-time database synchronization, automated restriction management, student enrollment, and a responsive dashboard for Grade 11 STEM at Santiago National High School.",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase", "Vercel"],
    icon: Code2,
    label: "AR-MS application",
    initials: "AR",
    repo: "",
    live: "https://ar-ms-nu.vercel.app/",
    screenshot: "/projects/arms.png",
  },
  {
    id: "05",
    name: "AI-Driven Smart Pet Care System with Behavioral and Anomaly Detection Using Computer Vision and IoT",
    category: "ACADEMIC RESEARCH · THESIS",
    description:
      "Designed and developed an intelligent pet care system integrating computer vision, artificial intelligence, and Internet of Things technologies to monitor pet behavior, automate feeding, and detect abnormal activities in real time.",
    stack: ["Computer Vision", "Artificial Intelligence", "IoT"],
    icon: Cpu,
    label: "Thesis project",
    initials: "AI",
    repo: "",
    live: "",
    status: "Thesis project",
  },
];
const skills = [
  {
    icon: Code2,
    title: "Software development",
    text: "Interfaces, application logic, and practical tools.",
    tags: ["React", "JavaScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    icon: Cpu,
    title: "Computer engineering",
    text: "Where physical systems meet digital experiences.",
    tags: ["Embedded systems", "Microcontrollers", "IoT", "Digital logic"],
  },
  {
    icon: Terminal,
    title: "Developer workflow",
    text: "A foundation for building and shipping thoughtfully.",
    tags: ["Git & GitHub", "Linux", "REST APIs", "Vite"],
  },
];
function ProjectArt({ project }) {
  const [imageFailed, setImageFailed] = useState(false);
  if (project.screenshot && !imageFailed) {
    return (
      <a
        className="project-screenshot"
        href={project.live}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${project.name}`}
      >
        <img
          src={project.screenshot}
          alt={`${project.name} application screenshot`}
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      </a>
    );
  }
  return (
    <div className="project-art project-cover" aria-hidden="true">
      <div className="art-top">
        <span className="tiny-dot" />
        {project.label}
        <span className="art-dots">•••</span>
      </div>
      <div className="cover-mark">
        <span>{project.initials}</span>
        <project.icon size={32} strokeWidth={1.25} />
      </div>
      <div className="cover-domain">
        {project.live ? new URL(project.live).hostname : "Academic thesis"}
        <ArrowUpRight size={13} />
      </div>
    </div>
  );
}
function App() {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  useEffect(() => {
    const name =
      {
        "/": "Home",
        "/about": "About",
        "/projects": "Projects",
        "/skills": "Skills",
        "/contact": "Contact",
      }[pathname] || "Page not found";
    document.title = `${name} | Lee Tejones — Computer Engineer & Developer`;
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "instant" });
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname]);
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="header">
        <Link className="logo" to="/" aria-label="Lee Tejones home">
          lt<span>.</span>
          <span className="logo-slash">/</span>
        </Link>
        <nav className={menu ? "nav open" : "nav"} aria-label="Main navigation">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              end
              onClick={() => setMenu(false)}
            >
              {item}
            </NavLink>
          ))}
        </nav>
        <Link className="header-cta" to="/contact">
          Let’s talk <ArrowUpRight size={15} />
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-label={menu ? "Close navigation" : "Open navigation"}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main-content" ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route
            path="/"
            element={
              <section id="home" className="hero shell">
                <div className="hero-main">
                  <h1>
                    Hello, <em>I Am</em>
                    <br />
                    <span>Lee Tejones</span>
                  </h1>
                  <p className="hero-title">{profile.title}</p>
                  <p className="hero-description">
                    This is my space to share what I build, explore ideas, and
                    connect with people who care about useful technology. My
                    focus sits at the intersection of software, hardware, and
                    human experience.
                  </p>
                  <div className="hero-actions">
                    <Link to="/projects" className="button primary">
                      View Work <ArrowUpRight size={18} />
                    </Link>
                    <Link
                      to="/about"
                      className="about-play"
                      aria-label="A little about me"
                    >
                      <Play size={18} fill="currentColor" />
                    </Link>
                  </div>
                </div>
                <div className="portrait-column">
                  <div className="portrait-arch">
                    {profile.portrait ? (
                      <img
                        src={profile.portrait}
                        alt="Lee Tejones"
                        width={1086}
                        height={1448}
                        fetchPriority="high"
                      />
                    ) : (
                      <div className="portrait-placeholder">
                        <span>LT</span>
                        <p>
                          Computer Engineer
                          <br />& Developer
                        </p>
                      </div>
                    )}
                  </div>
                  <span className="portrait-caption">
                    LEE TEJONES / ENGINEER & DEVELOPER
                  </span>
                </div>
                <div className="hero-footer">
                  <span>ENGINEERING MEETS CREATIVITY</span>
                  <Link to="/about">
                    GET TO KNOW ME <ArrowUpRight size={13} />
                  </Link>
                </div>
              </section>
            }
          />
          <Route
            path="/about"
            element={
              <section
                id="about"
                className="section shell about about-expanded"
              >
                <div>
                  <p className="eyebrow section-label">
                    01 — THE PERSON BEHIND THE CODE
                  </p>
                  <h1 className="page-title">
                    Curiosity is the
                    <br />
                    starting point<span>.</span>
                  </h1>
                </div>
                <div className="about-copy">
                  <p>
                    I’m Lee Tejones, a Computer Engineering graduate with
                    experience in web development, embedded systems, and
                    technical support.
                  </p>
                  <p>
                    Adaptable and eager to apply technical, organizational, and
                    problem-solving skills in a professional environment. I’m
                    interested in opportunities in technology and administrative
                    support.
                  </p>
                  <Link className="text-link" to="/contact">
                    Let’s build something together <ArrowUpRight size={17} />
                  </Link>
                </div>
                <div className="background-grid">
                  <section
                    className="background-card"
                    aria-labelledby="education-title"
                  >
                    <p className="eyebrow section-label">ACADEMIC FOUNDATION</p>
                    <h2 id="education-title">Education</h2>
                    <p className="record-date">2022–2026</p>
                    <h3>Bachelor of Science in Computer Engineering</h3>
                    <p>Caraga State University – Cabadbaran Campus</p>
                    <span className="record-badge">Cum Laude</span>
                    <h3 className="coursework-title">Relevant coursework</h3>
                    <ul>
                      <li>Website and Application Development</li>
                      <li>Programming and Software Development</li>
                      <li>Microprocessors and Embedded Systems</li>
                      <li>Database Management</li>
                    </ul>
                  </section>
                  <section
                    className="background-card"
                    aria-labelledby="experience-title"
                  >
                    <p className="eyebrow section-label">HANDS-ON EXPERIENCE</p>
                    <h2 id="experience-title">Technical internship</h2>
                    <p className="record-date">July–August 2025</p>
                    <h3>Technical On-the-Job Trainee</h3>
                    <p>RabScor Electronics Engineering Services</p>
                    <ul>
                      <li>
                        Assisted engineers and technical staff with daily
                        operations and project implementation.
                      </li>
                      <li>
                        Participated in technical documentation, testing, and
                        equipment maintenance.
                      </li>
                      <li>
                        Applied engineering principles to troubleshooting and
                        system development tasks.
                      </li>
                    </ul>
                  </section>
                  <section
                    className="background-card"
                    aria-labelledby="leadership-title"
                  >
                    <p className="eyebrow section-label">WORKING WITH PEOPLE</p>
                    <h2 id="leadership-title">Leadership experience</h2>
                    <ol className="leadership-list">
                      <li>
                        <span className="record-date">2025</span>
                        <div>
                          <h3>President</h3>
                          <p>
                            Institute of Computer Engineers of the Philippines –
                            Student Edition (ICpEP-SE)
                          </p>
                        </div>
                      </li>
                      <li>
                        <span className="record-date">2024</span>
                        <div>
                          <h3>Vice President</h3>
                          <p>
                            Institute of Computer Engineers of the Philippines –
                            Student Edition (ICpEP-SE)
                          </p>
                        </div>
                      </li>
                      <li>
                        <span className="record-date">2023</span>
                        <div>
                          <h3>Auditor</h3>
                          <p>College Local Student Government</p>
                        </div>
                      </li>
                    </ol>
                  </section>
                  <section
                    className="background-card"
                    aria-labelledby="eligibility-title"
                  >
                    <p className="eyebrow section-label">PUBLIC SERVICE</p>
                    <h2 id="eligibility-title">Civil Service Eligibility</h2>
                    <p className="record-date">Passed August 2026</p>
                    <h3>Career Service Examination — Professional Level</h3>
                    <p>Civil Service Commission</p>
                    <p>
                      <em>Certificate of Eligibility pending issuance.</em>
                    </p>
                    <div className="honor-eligibility">
                      <h3>Honor Graduate Eligibility (HGE) — P.D. 907</h3>
                      <p>
                        Qualified as a Cum Laude graduate of the Bachelor of
                        Science in Computer Engineering program at Caraga State
                        University – Cabadbaran Campus.
                      </p>
                      <p>Civil Service Commission</p>
                    </div>
                  </section>
                  <section
                    className="background-card"
                    aria-labelledby="certificates-title"
                  >
                    <p className="eyebrow section-label">CONTINUOUS LEARNING</p>
                    <h2 id="certificates-title">Certificates & training</h2>
                    <div className="ongoing-training">
                      <span className="record-badge">Training in progress</span>
                      <h3>
                        TESDA Electrical Installation and Maintenance (EIM) NC
                        II
                      </h3>
                      <p>PTC–ADN · 25-day training program</p>
                      <p>Started: October 5, 2026</p>
                      <p>Expected completion: November 6, 2026</p>
                      <p>
                        <em>
                          Currently undertaking training; NC II certification
                          has not yet been awarded.
                        </em>
                      </p>
                    </div>
                    <ul className="certificate-list">
                      <li>
                        Closed-Circuit Television (CCTV) — currently covered in
                        class
                      </li>
                      <li>
                        Fire Detection and Alarm Systems (FDAS) — currently
                        covered in class
                      </li>
                      <li>Introduction to Computer System Servicing</li>
                      <li>Installing and Configuring Computer Systems</li>
                      <li>Hazard Identification</li>
                      <li>Risk Assessment and Control</li>
                      <li>Fire Safety</li>
                    </ul>
                  </section>
                </div>
                <div className="research-callout">
                  <div>
                    <p className="eyebrow section-label">ACADEMIC RESEARCH</p>
                    <h2>Engineering with a purpose.</h2>
                    <p>
                      My thesis explores computer vision, AI, and IoT through an
                      intelligent pet care system.
                    </p>
                  </div>
                  <Link className="button primary" to="/projects">
                    Explore my projects <ArrowUpRight size={18} />
                  </Link>
                </div>
              </section>
            }
          />
          <Route
            path="/projects"
            element={
              <section id="projects" className="section shell">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow section-label">
                      02 — IDEAS INTO IMPLEMENTATION
                    </p>
                    <h1 className="page-title">
                      Selected projects<span>.</span>
                    </h1>
                  </div>
                  <p>
                    A place for experiments,
                    <br />
                    systems, and things worth building.
                  </p>
                </div>
                <p className="content-note">
                  Web applications, hardware-integrated systems, and academic
                  research from my development work.
                </p>
                <div className="project-grid">
                  {projects.map((p) => (
                    <article className="project-card" key={p.id}>
                      <ProjectArt project={p} />
                      <div className="project-info">
                        <div className="project-category">
                          <span>{p.category}</span>
                          <span>/{p.id}</span>
                        </div>
                        <h3>
                          {p.name}
                          <p.icon size={21} />
                        </h3>
                        <span className="project-status">
                          {p.status || "Deployed project"}
                        </span>
                        <p>{p.description}</p>
                        <div className="tags">
                          {p.stack.map((s) => (
                            <span key={s}>{s}</span>
                          ))}
                        </div>
                        {(p.repo || p.live) && (
                          <div className="project-links">
                            {p.repo && (
                              <a href={p.repo} target="_blank" rel="noreferrer">
                                <Github size={15} /> Source code{" "}
                                <ArrowUpRight size={14} />
                              </a>
                            )}
                            {p.live && (
                              <a href={p.live} target="_blank" rel="noreferrer">
                                Live site <ArrowUpRight size={14} />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            }
          />
          <Route
            path="/skills"
            element={
              <section id="skills" className="section shell">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow section-label">03 — THE TOOLBOX</p>
                    <h1 className="page-title">
                      Built on good foundations<span>.</span>
                    </h1>
                  </div>
                  <p>
                    Tools to explore.
                    <br />
                    Skills to keep sharpening.
                  </p>
                </div>
                <p className="content-note">
                  Suggested skill areas — customize these to reflect your
                  experience.
                </p>
                <div className="skills-grid">
                  {skills.map((s) => (
                    <div className="skill-card" key={s.title}>
                      <s.icon className="skill-icon" size={25} />
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                      <div className="tags">
                        {s.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            }
          />
          <Route
            path="/contact"
            element={
              <section id="contact" className="shell contact-section">
                <div className="contact-panel">
                  <p className="eyebrow section-label">04 — WHAT’S NEXT?</p>
                  <h1 className="page-title">
                    Good things start
                    <br />
                    with a conversation<span>.</span>
                  </h1>
                  <p>
                    Have an idea, a question, or an interesting challenge?
                    <br />
                    Let’s see what we can build together.
                  </p>
                  <div className="contact-actions">
                    {profile.email ? (
                      <>
                        <a
                          className="button primary"
                          href={`mailto:${profile.email}`}
                        >
                          Say hello <Mail size={18} />
                        </a>
                        <button className="copy-button" onClick={copyEmail}>
                          {copied ? <Check size={17} /> : <Copy size={17} />}{" "}
                          {copied ? "Copied!" : profile.email}
                        </button>
                      </>
                    ) : (
                      <a
                        className="button primary"
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Find me on GitHub <ArrowUpRight size={18} />
                      </a>
                    )}
                    {profile.resume && (
                      <a className="text-link" href={profile.resume}>
                        View résumé <ArrowUpRight size={17} />
                      </a>
                    )}
                  </div>
                  <div className="contact-details">
                    <a href={`tel:${profile.phoneHref}`}>
                      <Phone size={17} />
                      <span>{profile.phone}</span>
                    </a>
                    <a href={profile.facebook} target="_blank" rel="noreferrer">
                      <Facebook size={17} />
                      <span>Facebook — Lee Tejones</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <p>
                      <MapPin size={17} />
                      <span>{profile.location}</span>
                    </p>
                  </div>
                  {copyError && (
                    <p role="status">
                      Couldn’t copy automatically. You can select the email
                      above.
                    </p>
                  )}
                  <div className="contact-decoration" aria-hidden="true">
                    {"{ }"}
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="*"
            element={
              <section className="section shell not-found">
                <p className="eyebrow">404 — PAGE NOT FOUND</p>
                <h1 className="page-title">This page took a wrong turn.</h1>
                <p>Head home to explore the portfolio.</p>
                <Link className="button primary" to="/">
                  Back to home <ArrowUpRight size={18} />
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="shell footer">
        <Link to="/" className="logo">
          lt<span>.</span>
        </Link>
        <p>
          © {new Date().getFullYear()} Lee Tejones <span>·</span> Built with
          curiosity & React.
        </p>
        <div className="socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub — mrleejino-ho"
            title="GitHub — mrleejino-ho"
          >
            <Github size={19} />
          </a>
          <a
            href={profile.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook — Lee Tejones"
            title="Facebook — Lee Tejones"
          >
            <Facebook size={19} />
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
          )}
          <Link to="/" aria-label="Back to home">
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
