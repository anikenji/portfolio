export const SITE = {
  name: "Kobayashi Kenji",
  fullName: "Bui Cao Phuong",
  alias: "Kobayashi Kenji",
  role: "Frontend Engineer & DevOps Enthusiast",
  tagline: "University Student & CEO of Kensobanto, Inc.",
  email: "kobayashikenji126@gmail.com",
  github: "https://github.com/anikenji",
  location: "Ha Noi, Vietnam",
  timezone: "UTC+7",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  { name: "JavaScript / TypeScript", level: 90, color: "#6366f1" },
  { name: "React / Next.js", level: 85, color: "#818cf8" },
  { name: "Node.js / Express", level: 85, color: "#a855f7" },
  { name: "Python", level: 80, color: "#c084fc" },
  { name: "DevOps / Docker / CI-CD", level: 75, color: "#6366f1" },
  { name: "Linux / Server Admin", level: 70, color: "#818cf8" },
];

export const TECH_ICONS = [
  { name: "JavaScript", icon: "FileCode" },
  { name: "React", icon: "Atom" },
  { name: "Next.js", icon: "Triangle" },
  { name: "Node.js", icon: "Hexagon" },
  { name: "Python", icon: "Terminal" },
  { name: "Docker", icon: "Container" },
  { name: "Linux", icon: "Server" },
  { name: "Git", icon: "GitBranch" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "AniKenji \u2014 Anime Streaming Platform",
    description:
      "A full-featured anime streaming website with search, filtering, episode tracking, and a modern responsive UI built for anime enthusiasts.",
    tags: ["Next.js", "Node.js", "JavaScript", "REST API"],
    color: "#6366f1",
    gradient: "from-indigo-600/20 to-purple-600/20",
    link: "https://anikenji.live",
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: "Cao Bang Geopark \u2014 Tourism Portal",
    description:
      "An official tourism information portal for Cao Bang UNESCO Global Geopark, featuring interactive maps, destination guides, and cultural heritage showcases.",
    tags: ["React", "Python", "PostgreSQL", "Maps API"],
    color: "#a855f7",
    gradient: "from-purple-600/20 to-pink-600/20",
    link: "https://geoparktravel.site",
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: "Kensobanto Platform",
    description:
      "Internal platform powering Kensobanto Inc. operations with project management, team collaboration tools, and automated deployment pipelines.",
    tags: ["Node.js", "Docker", "CI/CD", "Linux"],
    color: "#818cf8",
    gradient: "from-blue-600/20 to-indigo-600/20",
    link: "#",
    image: null,
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio \u2014 This Website",
    description:
      "A modern portfolio with 3D elements, scroll-linked animations, and interactive Three.js scenes. Built with Next.js 16, Framer Motion, and React Three Fiber.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind"],
    color: "#c084fc",
    gradient: "from-violet-600/20 to-purple-600/20",
    link: "#",
    image: null,
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    role: "CEO & Founder",
    company: "Kensobanto, Inc.",
    period: "2023 \u2014 Present",
    description:
      "Founded and leading a tech company focused on web development and digital solutions. Managing a team of developers, overseeing product architecture, client relations, and business strategy.",
    color: "#6366f1",
  },
  {
    role: "Full Stack Developer",
    company: "Freelance & Personal Projects",
    period: "2022 \u2014 Present",
    description:
      "Building web applications and platforms including AniKenji streaming site and Cao Bang Geopark tourism portal. Focused on React, Next.js, Node.js, and Python.",
    color: "#a855f7",
  },
  {
    role: "University Student",
    company: "Computer Science",
    period: "Ongoing",
    description:
      "Pursuing studies in Computer Science while actively building real-world projects and running a tech company. Continuously learning DevOps, cloud infrastructure, and system design.",
    color: "#818cf8",
  },
];

export const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "5+", label: "Projects Shipped" },
  { value: "1", label: "Company Founded" },
  { value: "\u221e", label: "Passion for Code" },
];
