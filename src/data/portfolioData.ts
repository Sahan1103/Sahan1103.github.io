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
  { name: "JavaScript", category: "Frontend", icon: "Code2", isCurrent: true },
  { name: "HTML5", category: "Frontend", icon: "FileCode", isCurrent: true },
  { name: "CSS3", category: "Frontend", icon: "Palette", isCurrent: true },
  { name: "PHP", category: "Backend", icon: "Server", isCurrent: true },
  { name: "Java", category: "Programming", icon: "Cpu", isCurrent: true },
  { name: "C Programming", category: "Programming", icon: "Terminal", isCurrent: true },
  { name: "SQL", category: "Backend", icon: "Database", isCurrent: true },
  { name: "Firebase", category: "Backend", icon: "Flame", isCurrent: true },
  { name: "Git", category: "Tools", icon: "GitBranch", isCurrent: true },
  { name: "GitHub", category: "Tools", icon: "Github", isCurrent: true },
  { name: "Photoshop", category: "Design", icon: "Image", isCurrent: true },
  { name: "Illustrator", category: "Design", icon: "PenTool", isCurrent: true },
  { name: "Microsoft Office", category: "Tools", icon: "FileSpreadsheet", isCurrent: true },
  
  { name: "React.js", category: "Frontend", icon: "Layers", isCurrent: true },
  { name: "Tailwind CSS", category: "Design", icon: "Wind", isCurrent: true },
  { name: "Node.js", category: "Backend", icon: "Box", isCurrent: true },
  { name: "Express.js", category: "Backend", icon: "Network", isCurrent: true },
  { name: "TypeScript", category: "Programming", icon: "FileText", isCurrent: true },
  { name: "MongoDB", category: "Backend", icon: "DatabaseZap", isCurrent: true },
  //if iscurrent=false show as "Learning" in the UI"

];

export const educationData: EducationItem[] = [
  {
    id: "uni-sjp",
    degree: "BICT (Hons) - Bachelor of Information & Communication Technology",
    institution: "University of Sri Jayewardenepura",
    period: "2024 - Present",
    description: "Enrolled in the premier honours degree program covering software architecture, full-stack systems engineering, data structures and algorithms, object-oriented design, databases, and network computing.",
    gradeOrType: "Undergraduate Degree",
    skillsAcquired: ["Software Engineering", "Algorithms", "Object-Oriented Design", "Databases", "Web Architecture", "Network Engineering"]
  },
  {
    id: "al-urapola",
    degree: "GCE Advanced Level (Engineering Technology Stream)",
    institution: "WP/GM/Urapola National College",
    period: "2021 - 2023",
    description: "Completed secondary education in the specialized Engineering Technology pathway, developing foundations in mathematical analysis, systems logic, science for technology, Information and Communication Technology and technical problem solving.",
    gradeOrType: "A/L Certification",
    skillsAcquired: ["Engineering Technology", "Science for Technology", "Mathematics", "Technical Drawing", "Information and Communication Technology"]
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
    degree: "Diploma in English (DiE)",
    institution: "ESOFT Metro Campus",
    period: "2020",
    description: "Intensive spoken and written professional communication training, technical documentation, presentation delivery, and professional correspondence.",
    gradeOrType: "Diploma",
    skillsAcquired: ["Technical Writing", "Professional Communication", "Public Speaking"]
  },
  {
    id: "ol-Sanghabodhi",
    degree: "GCE Ordinary Level Examination",
    institution: "WP/GM/Sanghabodhi National College",
    period: "2015 - 2020",
    description: "Completed secondary education through the G.C.E. Ordinary Level pathway, developing strong foundations in mathematics, science, information and communication technology, Business & Accounting Studies, languages, and problem-solving skills.",
    gradeOrType: "O/L Certification",
    skillsAcquired: ["Mathematics", "Science", "Information and Communication Technology", "Technical Drawing", "Business & Accounting Studies"]
  }
];

export const projectsData: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Website",
    shortDescription: "A responsive personal portfolio website showcasing my skills, services, education, and projects with a modern UI, interactive project gallery, and contact form.",
    description: "A modern and responsive personal portfolio website developed to showcase my skills, education, services, and projects. It features a clean dark-themed UI, smooth navigation, interactive project galleries, responsive design, and a contact form integrated with EmailJS. Built using HTML, CSS, and JavaScript.",
    category: "Frontend",
    technologies: ["React", "HTML5", "CSS3", "JavaScript", "EmailJS", "Git & GitHub"],
    images: [
      "/portfolio.png",
      "/portfolio1.png",
      "/portfolio2.png",
      "/portfolio3.png",
      "/portfolio4.png",
      "/portfolio5.png"
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
    title: "VegeHut",
    shortDescription: "VegeHut is a web platform that connects farmers with buyers, making vegetable trading faster, easier, and more transparent.",
    description: "VegeHut is a web-based platform designed to connect Sri Lankan farmers directly with bulk vegetable buyers. The system helps farmers list and manage their vegetables with details such as price, quantity, and images, while buyers can easily browse and search available products.\n\nThe platform includes secure user authentication, real-time product updates, search and filtering, seller management, and product editing. It was developed using HTML, CSS, JavaScript, PHP, Firebase, and SQL to create a simple and efficient digital marketplace for agricultural trading.",
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
    shortDescription: "Java-based tuition management system for handling students, courses, payments, and reports with an easy-to-use desktop interface.",
    description: "A Java-based desktop application designed to simplify and automate the management of tuition classes. The system provides a centralized platform for managing students, courses, multi-course enrollments, and payments.\n\nBuilt using Java, Java Swing, OOP, and MVC architecture, the application includes features such as student registration, course management, payment and balance tracking, fast search, report generation, and file-based data storage. It helps reduce manual work, improve data accuracy, and make tuition class management faster and more organized.",
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
