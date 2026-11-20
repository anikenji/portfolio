export const SITE = {
  name: "AniKenji",
  fullName: "Bui Cao Phuong",
  brandName: "AniKenji",
  alias: "Kobayashi Kenji",
  role: "Freelance Web Designer & Full-Stack Developer",
  tagline: "Crafting High-Converting, Fast & Modern Websites",
  email: "kobayashikenji126@gmail.com",
  github: "https://github.com/anikenji",
  zalo: "https://zalo.me/0376408980",
  zaloNumber: "0376408980",
  telegram: "https://t.me/kobayashikenji126",
  telegramHandle: "@kobayashikenji126",
  location: "Ha Noi, Vietnam",
  timezone: "UTC+7",
};

export const NAV_LINKS = [
  { label: "About", href: "#about", labelVi: "Giới thiệu" },
  { label: "Services", href: "#services", labelVi: "Dịch vụ" },
  { label: "Projects", href: "#projects", labelVi: "Dự án" },
  { label: "Process", href: "#process", labelVi: "Quy trình" },
  { label: "Experience", href: "#experience", labelVi: "Kinh nghiệm" },
  { label: "Contact", href: "#contact", labelVi: "Liên hệ" },
];

export const TECH_STACK = [
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
    title: "AniKenji — Media & Video Streaming Platform",
    category: "Media & Video Streaming",
    description:
      "A high-performance media & video streaming web application with adaptive buffering, instant search, and sleek responsive UI.",
    tags: ["Next.js", "Node.js", "Video Streaming", "REST API"],
    color: "#6366f1",
    gradient: "from-indigo-600/20 to-purple-600/20",
    link: "https://anikenji.tech",
    image: "/projects/anikenji.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Cao Bang Geopark — Tourism Portal",
    category: "Tourism Portal & Maps",
    description:
      "An official tourism information portal for Cao Bang UNESCO Global Geopark, featuring interactive maps, destination guides, and cultural heritage showcases.",
    tags: ["React", "Python", "PostgreSQL", "Maps API"],
    color: "#a855f7",
    gradient: "from-purple-600/20 to-pink-600/20",
    link: "https://geoparktravel.site",
    image: "/projects/geopark.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "YokoGoods — Digital Marketplace",
    category: "E-Commerce & Marketplace",
    description:
      "A digital products marketplace and exchange platform for digital goods, software licenses, and online assets with frictionless checkout.",
    tags: ["Next.js", "Node.js", "Marketplace", "E-commerce"],
    color: "#818cf8",
    gradient: "from-blue-600/20 to-indigo-600/20",
    link: "https://yokogoods.anikenji.tech",
    image: "/projects/yokogoods.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "AniKenji Portfolio — 3D Web Experience",
    category: "Creative Web Design",
    description:
      "A modern freelance portfolio with interactive Three.js 3D scenes, scroll-linked animations, and full bilingual support (EN / VI).",
    tags: ["Next.js 16", "Three.js", "Framer Motion", "Tailwind 4"],
    color: "#c084fc",
    gradient: "from-violet-600/20 to-purple-600/20",
    link: "https://github.com/anikenji/portfolio",
    image: "/projects/portfolio.jpg",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    role: "CEO & Founder",
    company: "Kensobanto, Inc.",
    period: "2022 — Present",
    description:
      "Founder & Lead Developer — Building independent digital products and delivering end-to-end web solutions for clients.",
    color: "#6366f1",
  },
  {
    role: "Freelance Web Developer",
    company: "AniKenji Studio",
    period: "2022 — Present",
    description:
      "Building web applications and platforms including AniKenji streaming site and Cao Bang Geopark tourism portal. Focused on Next.js, React, Node.js, and modern UI/UX.",
    color: "#a855f7",
  },
  {
    role: "Computer Science Student",
    company: "University Studies",
    period: "Ongoing",
    description:
      "Deepening knowledge in distributed systems, modern web architecture, and cloud infrastructure.",
    color: "#818cf8",
  },
];

export const STATS = [
  { value: "3+", label: "Years Experience", labelVi: "Năm kinh nghiệm" },
  { value: "5+", label: "Projects Shipped", labelVi: "Dự án hoàn thành" },
  { value: "100%", label: "Client Satisfaction", labelVi: "Hài lòng tuyệt đối" },
  { value: "24/7", label: "Remote Support", labelVi: "Hỗ trợ linh hoạt" },
];
