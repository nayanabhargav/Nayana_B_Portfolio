import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, ExternalLink,
  Menu, X, MapPin, Code2, BrainCircuit, Database, Cloud,
  ChevronDown, CheckCircle2
} from "lucide-react";
import "./styles.css";

const PROFILE = {
  name: "Nayana B",
  role: "Software Developer | Python • Java • AI/ML",
  location: "Bengaluru, India",
  email: "nayanab949@gmail.com",
  linkedin: "PASTE_LINKEDIN_URL_HERE",
  github: "PASTE_GITHUB_URL_HERE",
  resume: "/Nayana_B_Resume.pdf"
};

const skills = {
  "Programming": ["Python", "Java", "SQL", "C", "JavaScript", "HTML", "CSS"],
  "AI / ML": ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "TensorFlow", "Keras", "PyTorch", "OpenCV", "Scikit-learn"],
  "Data": ["Pandas", "NumPy", "EDA", "Feature Engineering", "Statistics", "Excel", "Power BI", "Tableau"],
  "Engineering": ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "SDLC", "REST APIs", "JSON"],
  "Cloud & Tools": ["AWS", "Azure", "Docker", "Git", "GitHub", "Jupyter", "VS Code", "Firebase"],
  "Databases": ["MySQL", "Firebase"]
};

const experience = [
  {
    date: "Feb 2026 — May 2026",
    company: "Scontinent Technologies Pvt. Ltd.",
    role: "AI/ML Intern",
    bullets: [
      "Built 5+ machine learning and deep learning models in Python and TensorFlow for classification tasks across two client projects.",
      "Engineered end-to-end preprocessing, training and evaluation pipelines, reducing manual data-preparation time by approximately 30%.",
      "Tuned hyperparameters on CNN-based computer-vision models, improving validation accuracy by 6%."
    ]
  },
  {
    date: "Mar 2024 — May 2024",
    company: "SpatialHawk Geoinformatics Pvt. Ltd.",
    role: "Data Analytics Intern",
    bullets: [
      "Cleaned and processed 10+ geospatial datasets using Python, Pandas and NumPy.",
      "Performed exploratory analysis and surfaced 3 key trends that informed senior analysts' recommendations.",
      "Delivered weekly visual reports and dashboards using Matplotlib to a 5-person analyst team."
    ]
  }
];

const projects = [
  {
    number: "01",
    title: "Sakhi Suraksha",
    category: "Android • Safety",
    description: "Women-safety Android application with rapid SOS alerts, shake/voice triggers and live GPS location sharing.",
    metrics: ["SOS alerts", "Live GPS", "3 emergency contacts"],
    tech: ["Java", "Android Studio", "Firebase", "GPS API"],
    details: ["Designed and developed a women-safety Android application focused on rapid emergency response.", "Implemented shake and voice-triggered SOS actions so an alert can be initiated quickly.", "Integrated GPS functionality to capture and share live location with up to 3 emergency contacts.", "Used Firebase for application data and backend-connected functionality."],
    github: "PASTE_PROJECT_GITHUB_URL_HERE",
    demo: ""
  },
  {
    number: "02",
    title: "Driver Drowsiness Detection",
    category: "Computer Vision • Real-time AI",
    description: "Real-time driver alerting system using facial landmarks and Eye Aspect Ratio analysis.",
    metrics: ["94% accuracy", "0.5s response"],
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    details: ["Built a real-time computer-vision system for detecting driver drowsiness.", "Used facial landmarks and Eye Aspect Ratio (EAR) analysis to identify signs of fatigue.", "Implemented a real-time alert workflow with approximately 0.5-second response time.", "Achieved 94% accuracy based on the project evaluation described in the CV."],
    github: "PASTE_PROJECT_GITHUB_URL_HERE",
    demo: ""
  },
  {
    number: "03",
    title: "Plant Disease Detection",
    category: "Deep Learning",
    description: "CNN-based image classifier trained on 5,000 leaf images to identify 10 plant diseases using transfer learning.",
    metrics: ["5,000 images", "10 diseases", "91% accuracy"],
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    details: ["Trained a convolutional neural network to classify plant leaf images into 10 disease categories.", "Worked with a dataset of 5,000 leaf images and applied transfer learning.", "Used TensorFlow and Keras for model development with OpenCV in the image-processing workflow.", "Reached 91% classification accuracy through transfer-learning-based training."],
    github: "PASTE_PROJECT_GITHUB_URL_HERE",
    demo: ""
  },
  {
    number: "04",
    title: "Heart Disease Prediction",
    category: "Machine Learning",
    description: "Comparative ML study across Logistic Regression, Decision Tree, Random Forest and SVM with feature selection and cross-validation.",
    metrics: ["89% accuracy", "4 models"],
    tech: ["Python", "Scikit-learn", "Random Forest"],
    details: ["Benchmarked Logistic Regression, Decision Tree, Random Forest and SVM models.", "Applied feature selection and cross-validation to compare model performance.", "Selected Random Forest as the strongest-performing model in the project evaluation.", "Achieved 89% accuracy with the Random Forest approach."],
    github: "PASTE_PROJECT_GITHUB_URL_HERE",
    demo: ""
  }
];

const certifications = [
  "Deloitte — Data Analytics Job Simulation",
  "TATA — GenAI-Powered Data Analytics Job Simulation",
  "IBM — Python for Data Science",
  "Udemy — The Web Developer Bootcamp"
];

function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      const y = window.scrollY + 180;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = ["home", "about", "experience", "projects", "skills", "contact"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-mark">N</span>
          <span>NAYANA<span className="muted">.DEV</span></span>
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {nav.map((item) => (
            <button key={item} className={active === item ? "active" : ""} onClick={() => scrollTo(item)}>
              {item}
            </button>
          ))}
          <a className="nav-cta" href={`mailto:${PROFILE.email}`}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="dot"/> OPEN TO OPPORTUNITIES</div>
              <h1>Building software<br/><em>that solves real problems.</em></h1>
              <p className="hero-text">
                MCA graduate focused on Python, Java, AI/ML and software development.
                I turn ideas into practical, measurable products through clean engineering and data-driven problem solving.
              </p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => scrollTo("projects")}>Explore my work <ArrowUpRight size={18}/></button>
                <a className="secondary-btn" href={PROFILE.resume} download>Download resume <Download size={17}/></a>
              </div>
              <div className="quick-links">
                <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
                <a href={`mailto:${PROFILE.email}`}><Mail size={18}/> Email</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="code-window">
                <div className="window-bar"><span/><span/><span/><b>developer.py</b></div>
                <pre><code>{`class Developer:
    name = "Nayana B"
    location = "Bengaluru"

    stack = [
        "Python", "Java",
        "AI/ML", "SQL"
    ]

    mission = (
        "Build useful software "
        "with measurable impact."
    )

    def solve(self, problem):
        return analyze(problem)\\n            .build()\\n            .ship()`}</code></pre>
              </div>
              <div className="floating-stat stat-one"><strong>84.17%</strong><span>MCA</span></div>
              <div className="floating-stat stat-two"><strong>5+</strong><span>ML models built</span></div>
            </div>
          </div>
          <button className="scroll-hint" onClick={() => scrollTo("about")}><span>SCROLL TO EXPLORE</span><ChevronDown/></button>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 / PROFILE</div>
          <div className="two-col">
            <div>
              <h2>Engineer with a<br/><em>builder's mindset.</em></h2>
            </div>
            <div className="about-copy">
              <p className="lead">I enjoy working where software engineering, data and AI meet.</p>
              <p>My experience spans machine learning, computer vision, data analytics and application development. I care about understanding the problem first, then building solutions that are reliable, useful and measurable.</p>
              <div className="stats-row">
                <div><strong>2</strong><span>Internships</span></div>
                <div><strong>4</strong><span>Featured projects</span></div>
                <div><strong>84.17%</strong><span>MCA score</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section dark-section">
          <div className="section-label">02 / EXPERIENCE</div>
          <div className="section-head">
            <h2>Experience that<br/><em>ships outcomes.</em></h2>
            <p>Hands-on work across AI/ML and data analytics.</p>
          </div>
          <div className="timeline">
            {experience.map((item, i) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-index">0{i + 1}</div>
                <div className="timeline-main">
                  <div className="timeline-top"><span>{item.date}</span><span className="role-tag">{item.role}</span></div>
                  <h3>{item.company}</h3>
                  <ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="section-head">
            <h2>Projects built to<br/><em>make an impact.</em></h2>
            <p>From real-time computer vision to predictive analytics and mobile safety.</p>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.title}>
                <div className="project-top"><span>{p.number}</span><span>{p.category}</span></div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="metric-list">{p.metrics.map(m => <span key={m}><CheckCircle2 size={14}/>{m}</span>)}</div>
                <div className="tech-list">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                <div className="project-links">
                  <button className="details-btn" onClick={() => setSelectedProject(p)}>View case study <ArrowUpRight size={15}/></button>
                  {p.github && p.github.includes("http") && <a href={p.github} target="_blank" rel="noreferrer">GitHub <Github size={15}/></a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15}/></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-label">04 / TOOLKIT</div>
          <div className="section-head">
            <h2>Technical<br/><em>toolkit.</em></h2>
            <p>Core technologies and concepts from my projects and internships.</p>
          </div>
          <div className="skill-layout">
            <div className="skill-intro">
              <div className="skill-icon"><Code2/></div>
              <h3>Engineering<br/>meets AI.</h3>
              <p>Strong fundamentals in programming, OOP, DSA, databases and software development, with hands-on AI/ML and data experience.</p>
            </div>
            <div className="skill-groups">
              {Object.entries(skills).map(([group, items], i) => (
                <div className="skill-group" key={group}>
                  <div className="skill-title">
                    {i === 0 ? <Code2/> : i === 1 ? <BrainCircuit/> : i === 2 ? <Database/> : <Cloud/>}
                    <span>{group}</span>
                  </div>
                  <div className="pills">{items.map(s => <span key={s}>{s}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section education">
          <div className="section-label">05 / EDUCATION & CREDENTIALS</div>
          <div className="edu-grid">
            <div>
              <h2>Education &<br/><em>certifications.</em></h2>
              <div className="education-card">
                <span>2024 — 2026</span>
                <h3>Master of Computer Applications</h3>
                <p>AMC Engineering College, Bengaluru</p>
                <strong>84.17%</strong>
              </div>
              <div className="education-card">
                <span>2021 — 2024</span>
                <h3>Bachelor of Computer Applications</h3>
                <p>BGS First Grade College, Mysuru</p>
                <strong>8.80 CGPA</strong>
              </div>
            </div>
            <div className="certs">
              <h3>Certifications</h3>
              {certifications.map((c, i) => <div className="cert" key={c}><span>0{i+1}</span><p>{c}</p></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-inner">
            <div className="section-label">06 / CONTACT</div>
            <h2>Let's build something<br/><em>worth talking about.</em></h2>
            <p>Looking for an entry-level opportunity where I can contribute, learn fast and build production-minded software.</p>
            <a className="primary-btn large" href={`mailto:${PROFILE.email}`}>Start a conversation <ArrowUpRight/></a>
            <div className="contact-meta">
              <span><MapPin size={16}/> {PROFILE.location}</span>
              <a href={`mailto:${PROFILE.email}`}><Mail size={16}/> {PROFILE.email}</a>
            </div>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close">×</button>
            <span className="modal-category">{selectedProject.category}</span>
            <h2>{selectedProject.title}</h2>
            <p className="modal-description">{selectedProject.description}</p>
            <div className="modal-metrics">{selectedProject.metrics.map(m => <span key={m}><CheckCircle2 size={15}/>{m}</span>)}</div>
            <h3>What I built</h3>
            <ul className="modal-details">{selectedProject.details.map(d => <li key={d}>{d}</li>)}</ul>
            <h3>Technology</h3>
            <div className="tech-list modal-tech">{selectedProject.tech.map(t => <span key={t}>{t}</span>)}</div>
            <div className="modal-actions">
              {selectedProject.github && selectedProject.github.includes("http") && <a className="primary-btn" href={selectedProject.github} target="_blank" rel="noreferrer">View GitHub <Github size={16}/></a>}
              {selectedProject.demo && <a className="secondary-btn" href={selectedProject.demo} target="_blank" rel="noreferrer">Open live demo <ExternalLink size={16}/></a>}
            </div>
          </div>
        </div>
      )}

      <footer>
        <span>© 2026 Nayana B</span>
        <span>Designed & built with React</span>
        <div><a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17}/></a><a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/></a></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
