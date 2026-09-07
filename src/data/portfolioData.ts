import { Project, SkillItem, EducationItem, ServiceItem, SocialLinks } from '../types';

export const personalInfo = {
  name: "Sahan Maduranga",
  role: "Junior Full Stack Developer",
  subRole: "ICT Undergraduate at University of Sri Jayewardenepura",
  avatar: "/my.jpeg",
  logo: "/logo2.png",
  headline: "Turning ideas into robust, user-centric web applications and digital experiences.",
  aboutShort: "I'm an Information and Communication Technology undergraduate at the University of Sri Jayewardenepura. I am passionate about technology, software development, full-stack web engineering, and creative digital design. I love building practical software solutions that solve real-world community challenges.",
  aboutLong: [
    "Hi, I'm Sahan Maduranga, currently pursuing a BICT (Hons) at the University of Sri Jayewardenepura. My fascination with computing began with curiosity about how software shapes daily interactions, evolving into hands-on development across web platforms, object-oriented software, and relational databases.",
    "I have experience building applications using HTML, CSS, JavaScript, PHP, Java, SQL, Firebase, and C. Alongside engineering principles, I cultivate strong creative design competencies with Adobe Photoshop and Illustrator, ensuring projects possess both rock-solid architecture and intuitive UI/UX aesthetic.",
    "In addition to my undergraduate coursework, I actively build personal software systems and explore modern full-stack frameworks like React, Node.js, Express, and Tailwind CSS. My long-term ambition is to grow as an impactful full-stack software engineer who creates resilient, accessible digital tools."
  ],
  stats: [
    { label: "Completed Projects", value: "3+" },
    { label: "Core Technologies", value: "11+" },
    { label: "Diplomas & Certs", value: "4" },
    { label: "Current University Year", value: "Year 2" },
  ],
  location: "Warakapola, Sri Lanka",
  email: "madurangasahan576@gmail.com",
  phone: "+94 74 229 1802",
  availableForHire: true,
  resumeLink: "#", // User can upload CV or link here
};

export const socialLinks: SocialLinks = {
  linkedin: "https://www.linkedin.com/in/sahan-maduranga-5a86182b9",
  github: "https://github.com/Sahan1103",
  email: "mailto:madurangasahan576@gmail.com",
  behance: "https://www.behance.net/sahanmaduranga2004",
  phone: "tel:+94742291802",
  location: "https://maps.google.com/?q=Warakapola,+Sri+Lanka",
};

export const emailJsConfig = {
  serviceId: "service_xq4ht4n",
  templateId: "template_ijh04u6",
  publicKey: "O3f1i0XVc2t9_X7cn",
};

export const skillsData: SkillItem[] = [
  // Existing Core Skills
  { name: "JavaScript", category: "Frontend", icon: "Code2", level: 85, isCurrent: true },
  { name: "HTML5", category: "Frontend", icon: "FileCode", level: 95, isCurrent: true },
  { name: "CSS3", category: "Frontend", icon: "Palette", level: 90, isCurrent: true },
  { name: "PHP", category: "Backend", icon: "Server", level: 80, isCurrent: true },
  { name: "Java", category: "Programming", icon: "Cpu", level: 82, isCurrent: true },
  { name: "C Programming", category: "Programming", icon: "Terminal", level: 75, isCurrent: true },
  { name: "SQL", category: "Backend", icon: "Database", level: 78, isCurrent: true },
  { name: "Firebase", category: "Backend", icon: "Flame", level: 75, isCurrent: true },
  { name: "Git", category: "Tools", icon: "GitBranch", level: 85, isCurrent: true },
  { name: "GitHub", category: "Tools", icon: "Github", level: 88, isCurrent: true },
  { name: "Photoshop", category: "Design", icon: "Image", level: 85, isCurrent: true },
  { name: "Illustrator", category: "Design", icon: "PenTool", level: 80, isCurrent: true },
  { name: "Microsoft Office", category: "Tools", icon: "FileSpreadsheet", level: 90, isCurrent: true },
  
  // Future / Expanding Tech Stack
  { name: "React.js", category: "Future Technologies", icon: "Layers", level: 70, isCurrent: false },
  { name: "Tailwind CSS", category: "Future Technologies", icon: "Wind", level: 75, isCurrent: false },
  { name: "Node.js", category: "Future Technologies", icon: "Box", level: 65, isCurrent: false },
  { name: "Express.js", category: "Future Technologies", icon: "Network", level: 60, isCurrent: false },
  { name: "TypeScript", category: "Future Technologies", icon: "FileText", level: 65, isCurrent: false },
  { name: "MongoDB", category: "Future Technologies", icon: "DatabaseZap", level: 60, isCurrent: false },
];

export const educationData: EducationItem[] = [
  {
    id: "uni-sjp",
    degree: "BICT (Hons) - Bachelor of Information & Communication Technology",
    institution: "University of Sri Jayewardenepura",
    period: "2024 - Present",
    description: "Enrolled in the premier honours degree program covering software architecture, full-stack systems engineering, data structures and algorithms, object-oriented design, databases, and network computing.",
    gradeOrType: "Undergraduate Degree",
    skillsAcquired: ["Software Engineering", "Algorithms", "Object-Oriented Design", "Databases", "Web Architecture"]
  },
  {
    id: "al-urapola",
    degree: "GCE Advanced Level (Engineering Technology Stream)",
    institution: "WP/GM/Urapola National College",
    period: "2021 - 2023",
    description: "Completed secondary education in the specialized Engineering Technology pathway, developing foundations in mathematical analysis, systems logic, science for technology, and technical problem solving.",
    gradeOrType: "A/L Certification",
    skillsAcquired: ["Engineering Technology", "Science for Technology", "Mathematics", "Technical Drawing"]
  },
  {
    id: "dit-imbs",
    degree: "Diploma in Information Technology",
    institution: "IMBS Green Campus",
    period: "2023",
    description: "Advanced diploma curriculum emphasizing modern practical computing, system administration, programming fundamentals, and database essentials.",
    gradeOrType: "Diploma",
    skillsAcquired: ["Computing Systems", "Database Implementation", "Application Logic"]
  },
  {
    id: "dit-esoft",
    degree: "Diploma in Information Technology (DiTEC)",
    institution: "ESOFT Metro Campus",
    period: "2020",
    description: "Comprehensive hands-on curriculum encompassing desktop applications, visual programming, web page construction, and information systems fundamentals.",
    gradeOrType: "Diploma",
    skillsAcquired: ["Web Foundations", "Visual Programming", "IT Essentials"]
  },
  {
    id: "die-esoft",
    degree: "Diploma in English",
    institution: "ESOFT Metro Campus",
    period: "2020",
    description: "Intensive spoken and written professional communication training, technical documentation, presentation delivery, and professional correspondence.",
    gradeOrType: "Diploma",
    skillsAcquired: ["Technical Writing", "Professional Communication", "Public Speaking"]
  },
  {
    id: "al-urapola",
    degree: "GCE Advanced Level (Engineering Technology Stream)",
    institution: "WP/GM/Urapola National College",
    period: "2021 - 2023",
    description: "Completed secondary education in the specialized Engineering Technology pathway, developing foundations in mathematical analysis, systems logic, science for technology, and technical problem solving.",
    gradeOrType: "A/L Certification",
    skillsAcquired: ["Engineering Technology", "Science for Technology", "Mathematics", "Technical Drawing"]
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Building fast, high-performance, and responsive web applications with clean semantic markup, modular architecture, and modern full-stack workflows.",
    icon: "Code",
    tools: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL", "React"],
    features: [
      "Custom responsive layouts for all viewports",
      "Dynamic backend integration with PHP & SQL",
      "Interactive client-side interfaces and forms",
      "SEO friendly and accessible architecture"
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Crafting intuitive, user-friendly digital interfaces focused on simplicity, visual balance, smooth user journeys, and micro-interactions.",
    icon: "Sparkles",
    tools: ["Photoshop", "Illustrator", "Figma", "Design Systems"],
    features: [
      "Wireframing & user flow diagrams",
      "Design systems & typography hierarchies",
      "Interactive prototypes & responsive layouts",
      "Accessible color contrast & visual clarity"
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Delivering distinctive creative identities, digital artwork, promotional graphics, vector illustrations, and brand assets.",
    icon: "Palette",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Vector Graphics"],
    features: [
      "Unique custom logo & brand identity design",
      "High-resolution promotional social media graphics",
      "Vector illustration & brand collateral",
      "Marketing posters, flyers, and banners"
    ]
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Producing engaging promotional videos, social clips, tutorials, and presentation media with smooth pacing, transitions, and audio balancing.",
    icon: "Video",
    tools: ["Adobe Premiere", "After Effects", "Motion Graphics"],
    features: [
      "Engaging social media reels & promotional videos",
      "Color grading, audio cleaning, and soundtrack pacing",
      "Intro / Outro motion graphics and typography",
      "Academic & technical project walkthroughs"
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    shortDescription: "Modern and responsive developer portfolio website showcasing technical skills, academic journey, interactive project showcases, and EmailJS messaging.",
    description: "A modern, high-performance personal portfolio website built to showcase my software engineering projects, academic education, services, and technical toolkit. Features smooth scrolling, dark glassmorphism styling, an interactive project modal with responsive screenshot gallery, and a direct contact form powered by EmailJS.",
    category: "Frontend",
    technologies: ["React", "HTML5", "CSS3", "JavaScript", "EmailJS", "Git & GitHub"],
    images: [
      "/portfolio.png",
      "/portfolio1.png",
      "/portfolio2.png",
      "/portfolio3.png",
      "/portfolio4.png"
    ],
    github: "https://github.com/Sahan1103/Sahan1103.github.io.git",
    liveDemo: "#home",
    featured: true,
    highlights: [
      "Smooth section transitions and interactive modal popup",
      "Direct client-side EmailJS integration with validation",
      "Responsive across mobile, tablet, laptop, and 4K displays",
      "Modular component architecture for effortless extensibility"
    ]
  },
  {
    id: "vegehut",
    title: "VegeHut Agriculture Marketplace",
    shortDescription: "A web platform connecting Sri Lankan farmers directly with bulk vegetable buyers, streamlining agricultural trading with transparency and real-time listings.",
    description: "VegeHut is a dedicated web platform developed to eliminate intermediaries and directly bridge the gap between local Sri Lankan farmers and bulk vegetable purchasers (markets, retailers, and restaurants). The application allows farmers to create verified profiles, post detailed vegetable listings with quantities, harvest dates, pricing, and photos, while registered wholesale buyers can search, filter by region, and place inquiries.\n\nThe system incorporates secure user authentication, database management with SQL, real-time product updates via Firebase, and a PHP backend pipeline.",
    category: "Full Stack",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Firebase", "Git & GitHub"],
    images: [
      "/vegehut.png",
      "/vegehut1.png",
      "/vegehut2.png",
      "/vegehut3.png",
      "/vegehut4.png"
    ],
    github: "https://github.com/Sahan1103/VegeHut.git",
    featured: true,
    highlights: [
      "Direct farmer-to-buyer agricultural marketplace architecture",
      "Farmer listing management with pricing, quantity & image uploads",
      "Secure user authentication & seller role management",
      "Hybrid database approach using SQL for transactions & Firebase for real-time updates"
    ]
  },
  {
    id: "tuition",
    title: "Tuition Management System",
    shortDescription: "A robust Java desktop application simplifying student enrollments, course catalogs, fee payments, and automated report generation.",
    description: "A desktop software application engineered in Java using Java Swing and Object-Oriented Programming (OOP) principles to simplify and automate tuition institute administrative overhead. The system features a multi-module architecture managing student registries, course scheduling, multi-class enrollment, fee payment collection, arrears tracking, and automated financial report generation.\n\nBuilt adhering to Model-View-Controller (MVC) design patterns with file-based persistent storage (CSV / text files), it provides high data integrity, quick search indexing, and offline standalone reliability.",
    category: "Desktop App",
    technologies: ["Java", "Java Swing", "OOP", "MVC Architecture", "CSV/Text Files", "Git & GitHub"],
    images: [
      "/tuision1.png",
      "/tuision2.png",
      "/tuision3.png",
      "/tuision4.png",
      "/tuision5.png",
      "/tuision6.png",
      "/tuision7.png"
    ],
    github: "https://github.com/Sahan1103/Tution_Management_System.git",
    featured: true,
    highlights: [
      "Comprehensive student profile, enrollment, and attendance records",
      "Automated fee calculation, payment receipts, and balance alerts",
      "CSV & text file data persistence with zero external database dependencies",
      "Intuitive desktop GUI designed with Java Swing"
    ]
  }
];

export const githubProfile = {
  username: "Sahan1103",
  url: "https://github.com/Sahan1103",
  bio: "ICT Undergraduate @ USJ | Junior Full Stack Developer | Java & Web Systems",
  repositories: [
    {
      name: "VegeHut",
      desc: "Agricultural bulk vegetable trading platform connecting Sri Lankan farmers with buyers.",
      lang: "PHP / JavaScript",
      stars: 3,
      forks: 1,
      url: "https://github.com/Sahan1103/VegeHut.git"
    },
    {
      name: "Tution_Management_System",
      desc: "Java Swing desktop application for managing tuition students, courses, payments, and reports.",
      lang: "Java",
      stars: 4,
      forks: 1,
      url: "https://github.com/Sahan1103/Tution_Management_System.git"
    },
    {
      name: "Sahan1103.github.io",
      desc: "Personal portfolio website codebase featuring modern developer showcase.",
      lang: "React / JavaScript",
      stars: 2,
      forks: 0,
      url: "https://github.com/Sahan1103/Sahan1103.github.io.git"
    }
  ]
};
