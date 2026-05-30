// ── Portfolio Data ─────────────────────────────────────────────
// Edit this file to customize all content on the portfolio.

export const personalInfo = {
  name: "Vanshika Porwal",
  firstName: "Vanshika",
  lastName: "Porwal",
  role: "Frontend Developer & CSE (IT) Student",
  tagline: "Passionate about building responsive, user-friendly and interactive web applications using modern technologies.",
  email: "vanshikagorwal10@gmail.com",
  phone: "+91 1234567890",
  linkedin: "https://linkedin.com/in/vanshika-porwal-461ab736a",
  github: "https://github.com/vanshika10082006/vani_9520",
  resumeUrl: "#",
  profileImage: "portfolio.jpeg", // Replace with your image path e.g. "/profile.jpg"
};

export const aboutInfo = {
  summary: [
    "I'm a Computer Science & Information Technology student at Ajay Kumar Garg Engineering College, Ghaziabad, graduating in 2027. I have a strong interest in Frontend Development and love creating responsive and interactive web applications.",
    "I'm continuously learning and exploring new technologies to enhance my skills and build impactful projects.",
  ],
  details: [
    { label: "College", value: "Ajay Kumar Garg Engineering College, Ghaziabad", icon: "graduation" },
    { label: "Branch", value: "Computer Science & Information Technology", icon: "code" },
    { label: "Graduation Year", value: "2027", icon: "calendar" },
    { label: "Interests", value: "Web Development, ML, Problem Solving", icon: "star" },
  ],
};

export const skills = {
  frontend: [
    { name: "HTML5", icon: "html5", color: "#E34F26" },
    { name: "CSS3", icon: "css3", color: "#1572B6" },
    { name: "JavaScript", icon: "js", color: "#F7DF1E" },
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
    { name: "Responsive\nWeb Design", icon: "responsive", color: "#8B5CF6" },
  ],
  tools: [
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "GitHub", icon: "github", color: "#ffffff" },
    { name: "VS Code", icon: "vscode", color: "#007ACC" },
    { name: "Figma", icon: "figma", color: "#F24E1E" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered Placement & Career Guidance Portal",
    description: "AI-based platform that provides career recommendations, resume analysis and job suggestions to students.",
    tech: ["React", "Python", "AI/ML", "Node.js"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio website built using React.js, HTML5, CSS3 & JavaScript. Responsive design for all devices.",
    tech: ["React", "HTML5", "CSS3", "JavaScript"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Chat Application",
    description: "Real-time chat application with user authentication, modern UI and smooth messaging experience.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "To-Do List App",
    description: "A simple and efficient To-Do List application to add, update and manage daily tasks.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: null,
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const achievements = [
  { title: "Hackathon Finalist", desc: "Top 10 teams at State-level Hackathon 2024" },
  { title: "5-Star Coder", desc: "Achieved 5 stars in C++ on HackerRank" },
  { title: "Open Source Contributor", desc: "Contributed to 3+ open source repositories" },
  { title: "Academic Excellence", desc: "Maintained CGPA above 8.5 throughout college" },
];
