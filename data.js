/* ==========================================================
   EDIT YOUR DETAILS HERE  ✏️
   Intha ondru file mattum maathina pothum - website full ah
   automatic ah update aagum. HTML / CSS touch panna thevai illa.
   ========================================================== */

const PORTFOLIO = {
  /* ---------- Basic info ---------- */
  name: "Imran Nasir",
  logoText: "𝝙𝝥",                       // navbar logo letters
  role: "Full Stack Developer",
  tagline: "Turning Ideas Into Digital Reality",
  heroIntro:
    "I'm an aspiring Full Stack Developer passionate about building clean, responsive, and user-friendly web applications using JavaScript, React, Node.js, Express.js, MongoDB and SQL.",
  photo: "assets/hero.png",             // replace this image to change your hero photo (transparent PNG looks best)

  /* ---------- How many items to show before "View All" ---------- */
  visibleSkills: 4,
  visibleProjects: 4,
  cv: "assets/cv.pdf",                  // put your CV here (assets/cv.pdf)

  /* ---------- Contact ---------- */
  email: "alphanazeer@gmail.com",
  phone: "+91 63854 86383",
  location: "Tambaram, Chennai-45",

  /* ---------- Social links (leave "" to hide) ---------- */
  social: {
    github: "https://github.com/alpha-nazir",
    linkedin: "https://linkedin.com/in/imran-nazir-n",
    twitter: "",
    instagram: ""
  },

  /* ---------- About ---------- */
  about: [
    "I'm an aspiring Full Stack Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas into functional websites while continuously learning new technologies and improving my development skills.",
    "My focus is on writing clean code, creating responsive interfaces, developing backend functionality, and integrating AI-powered features into web applications. I'm currently strengthening my skills in JavaScript, React, Node.js, and Express.js while building practical projects.", 
    "I'm looking for an entry-level developer opportunity where I can apply my skills, contribute to real-world projects, and grow as a developer."
  ],
  aboutStats: {
    experience: "Fresher",
    projects: "6+ Projects",
    status: "Open to work"
  },
  aboutImage: "",                       // optional: path of an image for About section

  /* ---------- Skills (level = 0 to 100) ----------
     ADD A NEW SKILL in 2 steps:
       1. Put its icon (svg/png) in  assets/icons/  e.g. assets/icons/python.svg
       2. Add one line here:  { name: "Python", level: 60, icon: "python" }
     (icon = file name without .svg.  Or use  img: "assets/icons/my-logo.png"  for any path.)
     If the icon file is missing, a letter badge is shown automatically.
     First "visibleSkills" skills show by default, the rest open with "View All".
  */
  skills: [
    { name: "HTML",        level: 90, icon: "html5" },
    { name: "CSS",         level: 85, icon: "css" },
    { name: "JavaScript",  level: 75, icon: "javascript" },
    { name: "TypeScript",  level: 55, icon: "typescript" },
    { name: "React.js",    level: 60, icon: "react" },
    { name: "Node.js",     level: 55, icon: "nodedotjs" },
    { name: "Express.js",  level: 50, icon: "express" },
    { name: "Git & GitHub", level: 70, icon: "git" },
    { name: "Bootstrap",   level: 80, icon: "bootstrap" },
    { name: "Tailwind CSS", level: 75, icon: "tailwindcss" }
  ],

  /* ---------- Projects ----------
     category : "Websites" | "JS Apps" | "UI Design"  (any text works, tabs are created automatically)
     featured : true  -> shows in "Featured Projects" section (keep 3)
     image    : THUMBNAIL - put your screenshot in assets/projects/ and write the path,
                e.g. "assets/projects/todo.jpg"  (if empty, a styled preview is shown)
     First "visibleProjects" projects show by default, the rest open with "View All".
     live     : live demo link      code : GitHub link
  */
  projects: [
    {
      title: "AI Sentence Corrector",
      desc: "A smart writing companion that helps transform rough text into clear, natural, and well-organized content.",
      category: "Websites",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "AI Integration", "REST API"],
      icon: "◧", colors: ["#1d4ed8", "#0ea5e9"],
      featured: false, image: "assets/projects/project-01.png", live: "https://ai-sentence-corrector-2b12.onrender.com/", code: "https://github.com/alpha-nazir/AI-Sentence-Corrector.git"
    },


    {
      title: "Personal Portfolio",
      desc: "A modern responsive portfolio website with a dark theme and smooth animations.",
      category: "Websites",
      tags: ["HTML", "CSS", "JavaScript"],
      icon: "◧", colors: ["#1d4ed8", "#0ea5e9"],
      featured: true, image: "", live: "#", code: "#"
    },
    {
      title: "To-Do List App",
      desc: "Add, complete and delete tasks. Data is saved in the browser using localStorage.",
      category: "JS Apps",
      tags: ["HTML", "CSS", "JavaScript"],
      icon: "✔", colors: ["#6d28d9", "#3b82f6"],
      featured: true, image: "", live: "#", code: "#"
    },
    {
      title: "Weather App",
      desc: "Search any city and see live temperature and conditions using a public weather API.",
      category: "JS Apps",
      tags: ["JavaScript", "API", "CSS"],
      icon: "☀", colors: ["#0369a1", "#22d3ee"],
      featured: true, image: "", live: "#", code: "#"
    },
    {
      title: "Restaurant Landing Page",
      desc: "A tasty, fully responsive landing page with menu, gallery and contact sections.",
      category: "Websites",
      tags: ["HTML", "CSS"],
      icon: "✦", colors: ["#9a3412", "#f59e0b"],
      featured: false, image: "", live: "#", code: "#"
    },
    {
      title: "Calculator",
      desc: "A clean calculator with keyboard support and a neat glass-style interface.",
      category: "JS Apps",
      tags: ["HTML", "CSS", "JavaScript"],
      icon: "＋", colors: ["#1e3a8a", "#6366f1"],
      featured: false, image: "", live: "#", code: "#"
    },
    {
      title: "Mobile App UI",
      desc: "A mobile-first UI concept with cards, bottom navigation and smooth transitions.",
      category: "UI Design",
      tags: ["HTML", "CSS", "Flexbox"],
      icon: "▣", colors: ["#0f766e", "#38bdf8"],
      featured: false, image: "", live: "#", code: "#"
    }
  ]
};
