export const personalInfo = {
  name: "Omar El Terras",
  headline: "Final-year software engineering student at Western with experience in full-stack development and QA automation.",
  intro:
    "I enjoy building clean software, solving real problems, and learning fast in environments where quality matters.",
  email: "omarelterras@gmail.com",
  phone: "5196949493",
  github: "https://github.com/OmarElTerras",
  linkedin: "https://www.linkedin.com/in/omar-el-terras-b20776235/",
  location: "Ontario, Canada",
  roles: [
    "Software Engineer",
    "QA Automation Engineer",
    "Full-Stack Developer",
    "Builder of AI-Driven Tools",
  ],
  resumePath: "/assets/omar-el-terras-resume.pdf",
  profileImagePath: "/assets/pfp.png",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const aboutStats = [
  { value: "2+", label: "Years Experience" },
  { value: "6+", label: "Projects Completed" },
  { value: "40+", label: "Technologies" },
];

export const experiences = [
  {
    title: "Medical Imaging Software Developer",
    company: "Robarts Research Institute",
    period: "October 2025 - Present",
    summary:
      "Building a Python-based medical imaging application that applies a patented coronary blood-flow algorithm to 4DCT studies, helping streamline clinical analysis and reduce manual review time.",
    points: [
      "Developed backend modules for curve fitting, ROI extraction, DICOM loading, and FFR computation with scanner-aware, vectorized processing.",
      "Improved performance across Siemens, Canon, and GE datasets while supporting more consistent clinical review workflows.",
      "Designed a dark-mode, multi-view interface for CTA visualization, time-enhancement curves, fitted models, and instantaneous FFR plots.",
      "Created reproducible validation pipelines, structured JSON outputs, automated reporting, and optimized cardiovascular flow modeling workflows.",
    ],
    metrics: ["40% less manual analysis time", "30% performance improvement"],
  },
  {
    title: "Software Developer (QA Automation) Intern",
    company: "J.D. Power",
    period: "May 2024 - August 2025",
    summary:
      "Worked across a large microservices ecosystem to improve release confidence, expand automated test coverage, and make regression testing faster and more dependable.",
    points: [
      "Developed and maintained more than 2,500 automated test cases across 50+ microservices using Serenity BDD, Cucumber, JUnit, REST APIs, and Spring Boot services.",
      "Expanded automation coverage by 30% and cut more than 20 hours of manual regression effort from each release cycle.",
      "Built automation frameworks, validated API and SQL data integrity, and debugged issues through Git-based workflows, Postman, and CLI tooling.",
      "Integrated automated suites into Jenkins and GitLab CI pipelines and supported QA process improvements, including mentoring a new intern.",
    ],
    metrics: ["2,500+ automated tests", "50+ microservices", "20+ hours saved per release"],
  },
];

export const featuredProject = {
  title: "Medical Imaging Software / DAI Vera",
  eyebrow: "Featured Project",
  overview:
    "A medical imaging application built to make coronary CT analysis more usable, visual, and repeatable.",
  problem:
    "Coronary CT analysis can be difficult to move through efficiently, especially when teams need a clear workflow from CT prep and ROI selection to vessel analysis and FFR review.",
  built:
    "I built backend modules for DICOM loading, ROI extraction, curve fitting, and FFR computation, and designed a dark multi-view UI for image review, curve analysis, and results.",
  technologies: [
    "Python",
    "NumPy",
    "Medical Imaging",
    "DICOM",
    "Scientific Computing",
    "Data Visualization",
    "JSON Pipelines",
  ],
  impact: [
    "Reduced manual analysis time by 40%",
    "Improved performance by 30% across major scanner datasets",
    "Made outputs more reproducible for validation and reporting",
  ],
  imagePath: "/assets/dai.png",
  imageCaption: "DAI interface showing CT prep, ROI curves, vessel analysis flow, and FFR review.",
};

export const projects = [
  {
    title: "LevelUp",
    summary:
      "A web app that helps users tailor resumes, generate cover letters, and practice interviews with LLM-powered workflows.",
    technologies: ["React", "Node.js", "PostgreSQL", "LLMs", "Firebase Auth"],
    impact:
      "Designed the system architecture, led a 4-person Agile team, and shipped core features like resume parsing, AI suggestions, autosave, and rubric-based mock interviews.",
  },
  {
    title: "Cheer OLLI Website",
    summary:
      "A full-stack nonprofit website built for scheduling, admin management, and community engagement.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Google Cloud", "Docker"],
    impact:
      "Led a 4-person team, launched the official site, and helped the project finish first out of 50 teams while improving deployment scalability with containerization.",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C#", "C++", "C"],
  },
  {
    title: "Frontend",
    items: ["React", "Vue.js", "HTML/CSS", "AG Grid", "Angular"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "ASP.NET (MVC)", "RESTful APIs", "Authentication (JWT)"],
  },
  {
    title: "Databases",
    items: ["SQL", "Microsoft SQL Server", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Google Cloud Platform (GCP)", "Docker", "CI/CD (GitHub Actions/GitLab CI)"],
  },
  {
    title: "Tools & Version Control",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "VS Code",
      "Visual Studio",
      "SQL Server Management Studio (SSMS)",
    ],
  },
  {
    title: "Core Competencies",
    items: [
      "OOP",
      "Data Structures & Algorithms",
      "System Design",
      "Web Application Development",
      "Software Development",
      "Debugging",
      "Unit Testing (JUnit)",
    ],
  },
  {
    title: "Data Science",
    items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "scikit-learn",
      "TensorFlow",
      "Model evaluation",
    ],
  },
];

export const contactCopy = {
  title: "Let’s build something useful",
  description:
    "If you’re hiring for software engineering, QA automation, or full-stack roles, I’d be glad to connect.",
};
