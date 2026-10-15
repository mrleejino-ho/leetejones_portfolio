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
};
const projects = [
  {
    id: "01",
    name: "BuzzTap Business",
    category: "BUZZTAP · BUSINESS",
    description:
      "The business-facing application in my BuzzTap project collection. Explore the deployed site below.",
    stack: [],
    icon: Layers,
    label: "Business application",
    initials: "BT",
    repo: "",
    live: "https://buzztap-business.vercel.app/",
  },
  {
    id: "02",
    name: "BuzzTap Admin",
    category: "BUZZTAP · ADMIN",
    description:
      "The administration application in my BuzzTap project collection. Visit the deployed site to take a closer look.",
    stack: [],
    icon: Terminal,
    label: "Admin application",
    initials: "BT",
    repo: "",
    live: "https://buzztap-admin.vercel.app/",
  },
  {
    id: "03",
    name: "PV Monitoring System",
    category: "MONITORING SYSTEM",
    description:
      "My PV Monitoring System project. Open the deployed application to explore the interface.",
    stack: [],
    icon: Cpu,
    label: "PV monitoring",
    initials: "PV",
    repo: "",
    live: "https://pvmonitoringsystem.vercel.app/",
  },
  {
    id: "04",
    name: "AR-MS",
    category: "WEB APPLICATION",
    description:
      "Another project from my development work. Explore AR-MS through its deployed application.",
    stack: [],
    icon: Code2,
    label: "AR-MS application",
    initials: "AR",
    repo: "",
    live: "https://ar-ms-nu.vercel.app/",
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
        {new URL(project.live).hostname}
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
                  <div className="eyebrow">
                    <span className="status-dot" /> A MIND FOR SYSTEMS. A
                    PASSION FOR BUILDING.
                  </div>
                  <h1>
                    Hi, I’m Lee.
                    <br />I turn ideas into
                    <br />
                    <span>working things.</span>
                  </h1>
                  <p className="hero-title">{profile.title}</p>
                  <p className="hero-description">
                    Exploring the space between hardware and software.
                    <br className="desktop-break" /> Building useful
                    experiences, one thoughtful detail at a time.
                  </p>
                  <div className="hero-actions">
                    <Link to="/projects" className="button primary">
                      Explore my work <ArrowUpRight size={18} />
                    </Link>
                    <Link to="/about" className="text-link">
                      A little about me <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
                <div className="terminal-wrap">
                  <div className="terminal">
                    <div className="terminal-bar">
                      <div className="window-dots">
                        <i />
                        <i />
                        <i />
                      </div>
                      <span>lee@workspace: ~</span>
                      <Terminal size={14} />
                    </div>
                    <div className="terminal-body">
                      <p>
                        <span className="green">❯</span> cat about-me.json
                      </p>
                      <pre>
                        {
                          '{\n  "name": "Lee Tejones",\n  "role": [\n    "Computer Engineer",\n    "Developer"\n  ],\n  "approach": "Stay curious",\n  "next": "Keep building"\n}'
                        }
                      </pre>
                      <p>
                        <span className="green">❯</span>{" "}
                        <span className="cursor" />
                      </p>
                    </div>
                  </div>
                  <div className="terminal-caption">
                    <span>01 / ALWAYS A WORK IN PROGRESS</span>
                    <span>↳ THAT’S THE POINT.</span>
                  </div>
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
              <section id="about" className="section shell about">
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
                    I’m Lee Tejones, a Computer Engineer and Developer
                    interested in how things work — and how to make them work
                    better.
                  </p>
                  <p>
                    This is my space to share what I build, explore ideas, and
                    connect with people who care about useful technology. My
                    focus sits at the intersection of software, hardware, and
                    human experience.
                  </p>
                  <Link className="text-link" to="/contact">
                    Let’s build something together <ArrowUpRight size={17} />
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
                  Four projects from my development work. Explore each
                  application below.
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
                        <span className="project-status">Deployed project</span>
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
