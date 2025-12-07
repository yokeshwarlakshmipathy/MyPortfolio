export const personalInfo = {
  name: "YOKESHWAR L",
  tagline: "Full Stack Engineer & AI Enthusiast",
  email: "yokeshwarlakshmipathy@gmail.com",
  phone: "+91 94442 16431",
  github: "https://github.com/yokeshwarlakshmipathy",
  linkedin: "https://www.linkedin.com/in/yokeshwar-l-209376196/",
  location: "Bengaluru, India",
};

export const about = {
  title: "About Me",
  content: "I'm a passionate software developer with expertise in full-stack development and AI integration. Currently working as a Software Developer Intern at ChipWave, I'm building innovative solutions that combine cutting-edge technology with practical business needs. My experience spans across web development, machine learning, and cloud technologies, with a strong focus on creating scalable and user-friendly applications.",
  photo: "/photo.jpg", // Place your photo in the public folder as photo.jpg (or update the path)
};

export const skills = {
  languages: [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "📜" },
    { name: "SQL", icon: "🗄️" },
  ],
  frameworks: [
    { name: "Django", icon: "🎸" },
    { name: "Bootstrap", icon: "🎨" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Oracle SQL", icon: "💾" },
    { name: "JDBC", icon: "🔌" },
  ],
  ai: [
    { name: "OpenAI API", icon: "🤖" },
    { name: "RAG", icon: "🔍" },
    { name: "PDFPlumber", icon: "📄" },
    { name: "Chatbot Development", icon: "💬" },
    { name: "LangChain", icon: "⛓️" },
  ],
  tools: [
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "💻" },
    { name: "IntelliJ", icon: "💡" },
    { name: "Eclipse", icon: "🌙" },
    { name: "Cursor AI", icon: "✨" },
    { name: "Copilot", icon: "🤖" },
  ],
};

export const experience = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "ChipWave",
    location: "Bengaluru, Karnataka, India",
    type: "On-site",
    period: "Aug 2025 - Present",
    description: [
      "Independently designing and developing a full-stack AI-powered web application from scratch.",
      "Managing end-to-end project lifecycle: architecture design, backend API development, frontend interface creation, database management, and AI model integration.",
      "Implementing RAG (Retrieval-Augmented Generation), LLM integration, and chatbot modules to enable intelligent data extraction and automation.",
      "Utilizing Python, Django, Langchain, PostgreSQL, and DRF to build a scalable, high-performance, and user-friendly solution.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Animal Detection for Railway Safety Using Computer Vision",
    featured: true,
    date: "Aug 2024",
    description: "Developed a real-time animal detection system to prevent railway collisions. Implemented YOLOv8 in MATLAB for accurate object detection on railway tracks. Integrated IoT with NodeMCU for real-time alerts to train personnel and authorities. Automated train speed adjustment upon detection to enhance safety. Tested system reliability across various environmental conditions.",
    technologies: ["MATLAB", "YOLOv8", "NodeMCU", "IoT", "Computer Vision"],
    github: "#",
    live: "#",
    image: "/api/placeholder/600/400",
  },
  {
    id: 2,
    title: "HTML Email Design for Business Gurukula (Freelance Project)",
    date: "Jan 2025",
    description: "Developed a responsive HTML email template for Business Gurukula's client, HotLunch.com. Ensured compatibility across major email clients and improved mobile responsiveness. Integrated interactive buttons and CTAs, enhancing user engagement and click-through rates. Aligned design with branding guidelines, improving overall marketing effectiveness.",
    technologies: ["HTML5", "CSS3", "Email Development", "Responsive Design"],
    github: "#",
    live: "#",
    image: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "Ludo Game Development Using Java (Mini Project)",
    date: "Apr 2022",
    description: "Developed a Java-based Ludo game using Swing, implementing a fully interactive UI. Designed a turn-based system with dice rolling and player movements using event listeners. Implemented object-oriented design patterns to manage players, pawns, and game logic efficiently. Handled pawn movement and collisions using a pre-defined path stored in 2D arrays. Added winning condition logic to detect when a player moves all pawns to the home area.",
    technologies: ["Java", "Swing", "OOP", "Event Handling"],
    github: "#",
    live: "#",
    image: "/api/placeholder/600/400",
  },
];

export const education = [
  {
    degree: "MCA - Computer Applications",
    institution: "Meenakshi College of Engineering",
    location: "Chennai",
    cgpa: "7.92",
    period: "2022 - 2024",
  },
  {
    degree: "BCA - Computer Applications",
    institution: "Guru Nanak College",
    location: "Chennai",
    cgpa: "7.80",
    period: "2019 - 2022",
  },
];

export const certifications = [
  {
    name: "Java Full Stack Development",
    issuer: "JSpiders, Bangalore",
    date: "August 2025",
  },
  {
    name: "Software Engineer Intern Certification",
    issuer: "HackerRank",
    date: "May 2025",
  },
  {
    name: "SQL and Relational Databases 101",
    issuer: "CognitiveClass.ai (IBM Developer Skills Network)",
    date: "October 2024",
  },
];
