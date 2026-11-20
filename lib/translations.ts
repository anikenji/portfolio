export type Language = "en" | "vi";

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      projects: "Projects",
      process: "Work Process",
      experience: "Experience",
      contact: "Contact",
      hireMe: "Hire Me",
      startProject: "Start a Project",
    },
    hero: {
      badge: "Available for Freelance & Remote Projects",
      titleLine1: "Building",
      titleHighlight: "Modern",
      titleLine2: "Experiences",
      subHeadline:
        "Freelance Web Designer & Full-Stack Developer — Crafting high-converting, fast, and modern websites for businesses & creators worldwide.",
      viewProjects: "View Projects",
      startProject: "Start a Project",
      scroll: "Scroll",
    },
    about: {
      tag: "About Me",
      title: "Crafting digital",
      highlight: "excellence",
      description:
        "Freelance developer committed to delivering modern, high-speed, and client-centric digital experiences.",
      whoIAm: "Who I am",
      bioTitle: "Developer, founder & creator",
      bio1:
        "I'm Bui Cao Phuong, working under the personal brand AniKenji. With 3+ years of hands-on experience, I help businesses and creators build bespoke, modern web solutions.",
      bio2:
        "Specializing in Next.js, React, Node.js, and DevOps cloud deployment. I focus on turning complex business ideas into polished, fast-loading, and high-converting websites.",
      locationTag: "Location",
      locationCity: "Ha Noi",
      locationCountry: "Vietnam",
      remoteNotice: "UTC+7 · Open to worldwide remote",
      availableNow: "Available for projects",
      currentlyBuildingTag: "Currently active",
      funFactsTag: "Core values",
      funFact1: "Pixel-perfect visual craftsmanship",
      funFact2: "Laser-focused on loading speed & Core Web Vitals",
      funFact3: "Clean, maintainable, scalable architecture",
      funFact4: "Brand: AniKenji (Bui Cao Phuong)",
      ctaCardLine1: "Let's build",
      ctaCardHighlight: "something",
      ctaCardLine2: "great.",
      ctaCardButton: "Start a project →",
    },
    services: {
      tag: "Services",
      title: "What I can",
      highlight: "deliver",
      description:
        "End-to-end web design and development packages tailored for high performance, modern aesthetic, and measurable business growth.",
      items: [
        {
          id: "custom-website",
          number: "01",
          title: "Custom Website & Landing Page",
          description:
            "Exclusive bespoke design, conversion-rate optimized, SEO-ready, and fully responsive across all screen sizes.",
          color: "#6366f1",
          tags: ["Tailwind CSS", "Next.js", "SEO", "Responsive UI"],
        },
        {
          id: "fullstack-app",
          number: "02",
          title: "Full-Stack Web Applications",
          description:
            "Scalable web platforms, seamless third-party API integration, secure payment gateways, and comprehensive admin dashboards.",
          color: "#a855f7",
          tags: ["React / Next.js", "Node.js", "REST / GraphQL", "PostgreSQL"],
        },
        {
          id: "redesign-perf",
          number: "03",
          title: "UI/UX Redesign & Speed Optimization",
          description:
            "Transform outdated sites with modern UI/UX design and turbocharge loading speeds to ace Google Core Web Vitals.",
          color: "#818cf8",
          tags: ["Core Web Vitals", "Framer Motion", "UI/UX", "Code Splitting"],
        },
        {
          id: "deployment-maintenance",
          number: "04",
          title: "Deployment & Maintenance",
          description:
            "Domain setup, SSL certificates, reliable cloud server deployment, continuous monitoring, and ongoing maintenance.",
          color: "#c084fc",
          tags: ["Docker", "CI/CD", "Linux / VPS", "Cloudflare"],
        },
        {
          id: "mobile-app",
          number: "05",
          title: "Mobile Application Development",
          description:
            "Cross-platform mobile apps for iOS and Android with smooth animations, native performance, and real-time syncing.",
          color: "#ec4899",
          tags: ["React Native", "Cross-Platform", "iOS & Android", "API Sync"],
        },
      ],
      techStackTitle: "Core Tech Stack",
    },
    projects: {
      tag: "Featured Work",
      title: "Real-world",
      highlight: "solutions",
      description:
        "Selected projects delivered with passion, performance, and attention to detail.",
      liveDemo: "Live Demo",
      source: "Source",
      viewAll: "View All Projects",
      items: [
        {
          id: 1,
          title: "AniKenji — Media & Video Streaming Platform",
          category: "Media & Video Streaming Web App",
          description:
            "A high-performance media streaming platform engineered with rapid video buffering, smart search, episode progression tracking, and an intuitive UI.",
          tags: ["Next.js", "Node.js", "Streaming Media", "REST API"],
          link: "https://anikenji.tech",
          image: "/projects/anikenji.jpg",
          featured: true,
        },
        {
          id: 2,
          title: "Cao Bang Geopark — Tourism Portal",
          category: "Tourism Portal & Interactive Map",
          description:
            "Official tourism web portal for Cao Bang UNESCO Global Geopark with interactive heritage maps, destination guides, and multilingual showcases.",
          tags: ["React", "Python", "PostgreSQL", "Maps API"],
          link: "https://geoparktravel.site",
          image: "/projects/geopark.jpg",
          featured: true,
        },
        {
          id: 3,
          title: "YokoGoods — Digital Marketplace",
          category: "E-Commerce & Digital Marketplace",
          description:
            "A digital products marketplace and exchange platform for digital goods, software licenses, and online assets with frictionless checkout.",
          tags: ["Next.js", "Node.js", "Marketplace", "E-commerce"],
          link: "https://yokogoods.anikenji.tech",
          image: "/projects/yokogoods.jpg",
          featured: true,
        },
        {
          id: 4,
          title: "AniKenji Portfolio — 3D Web Experience",
          category: "Design & Development Portfolio",
          description:
            "Modern portfolio website with interactive Three.js 3D scenes, scroll-linked Framer Motion physics, and internationalization.",
          tags: ["Next.js 16", "Three.js", "Tailwind CSS", "i18n"],
          link: "https://github.com/anikenji/portfolio",
          image: "/projects/portfolio.jpg",
          featured: false,
        },
      ],
    },
    process: {
      tag: "Work Process",
      title: "How we work",
      highlight: "together",
      description:
        "A structured, transparent 4-step workflow to turn your vision into a production-ready website on time and on budget.",
      steps: [
        {
          step: "01",
          title: "Discovery & Quote",
          description:
            "Discuss project goals, requirements, recommend optimal technical solutions, and provide a clear, transparent quote.",
          color: "#6366f1",
        },
        {
          step: "02",
          title: "UI/UX Wireframe",
          description:
            "Design clean wireframes and high-fidelity prototypes for client review and refinement before writing any code.",
          color: "#a855f7",
        },
        {
          step: "03",
          title: "Development",
          description:
            "Build with clean, SEO-optimized code, blazing-fast speed, responsive layout, and constant milestone updates.",
          color: "#818cf8",
        },
        {
          step: "04",
          title: "Launch & Support",
          description:
            "Deploy to production server, configure custom domains & SSL, hand over source code with ongoing technical warranty.",
          color: "#c084fc",
        },
      ],
    },
    experience: {
      tag: "Experience",
      title: "My professional",
      highlight: "journey",
      description:
        "A proven track record of creating independent digital products and delivering end-to-end web solutions.",
      items: [
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
            "Building high-performance web applications, including AniKenji streaming platform and Cao Bang Geopark tourism portal. Focused on Next.js, React, Node.js, and modern UI/UX.",
          color: "#a855f7",
        },
        {
          role: "Software Engineering",
          company: "Computer Science",
          period: "Ongoing",
          description:
            "Pursuing deep knowledge in distributed systems, modern web architecture, and cloud infrastructure.",
          color: "#818cf8",
        },
      ],
    },
    cta: {
      title: "Ready to build",
      highlight: "something",
      title2: "extraordinary?",
      description:
        "Whether it's a high-converting landing page, an e-commerce platform, or a custom web app — let's turn your vision into reality.",
      startConversation: "Start a Conversation",
      sendEmail: "Send Direct Email",
    },
    contact: {
      tag: "Contact",
      title: "Let's build your",
      highlight: "project",
      description:
        "Have a project in mind or need technical advice? Reach out via direct channels or send a message below.",
      quickChannelsTitle: "Direct Channels",
      vietnamHeader: "For Vietnam Clients (Hỗ trợ nhanh)",
      globalHeader: "For International Clients",
      availableCardTitle: "Available for Freelance & Remote",
      availableCardDesc:
        "Currently accepting new client projects, website redesigns, and technical consultations. Fast turnaround and flexible timezone support.",
      form: {
        nameLabel: "Your Name",
        namePlaceholder: "e.g. John Doe / Alex Smith",
        emailLabel: "Email Address",
        emailPlaceholder: "you@example.com",
        serviceLabel: "Project Type / Budget",
        servicePlaceholder: "Select project scope & estimated budget",
        serviceOptions: [
          { value: "landing", label: "Custom Website / Landing Page (< $500)" },
          { value: "webapp", label: "Full-Stack Web App / E-Commerce ($500 - $1,500)" },
          { value: "enterprise", label: "Complex System & API Integration (> $1,500)" },
          { value: "redesign", label: "UI/UX Redesign & Speed Optimization" },
          { value: "mobile", label: "Mobile Application Development" },
          { value: "other", label: "Other / Consultation" },
        ],
        messageLabel: "Project Scope & Details",
        messagePlaceholder:
          "Tell me about your goals, timeline, and any specific requirements...",
        sendButton: "Send Inquiry",
        sendingButton: "Opening mail client...",
      },
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Crafting modern, high-converting web experiences.",
    },
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      services: "Dịch vụ",
      projects: "Dự án",
      process: "Quy trình",
      experience: "Kinh nghiệm",
      contact: "Liên hệ",
      hireMe: "Thuê tôi ngay",
      startProject: "Khởi động dự án",
    },
    hero: {
      badge: "Available for Freelance & Remote Projects",
      titleLine1: "Xây dựng",
      titleHighlight: "Giải pháp",
      titleLine2: "Web Hiện Đại",
      subHeadline:
        "Thiết kế & Phát triển Website trọn gói — Xây dựng giải pháp web tốc độ cao, chuẩn UI/UX cho doanh nghiệp và cá nhân.",
      viewProjects: "Xem dự án",
      startProject: "Bắt đầu dự án",
      scroll: "Cuộn xuống",
    },
    about: {
      tag: "Về tôi",
      title: "Tạo nên sản phẩm",
      highlight: "chất lượng",
      description:
        "Lập trình viên độc lập hướng tới việc tạo ra các giải pháp web hiện đại, tải nhanh và mang lại giá trị thật cho khách hàng.",
      whoIAm: "Tôi là ai",
      bioTitle: "Lập trình viên & Nhà sáng lập",
      bio1:
        "Tôi là Bùi Cao Phương, hoạt động dưới thương hiệu cá nhân AniKenji. Với hơn 3 năm kinh nghiệm thực chiến, tôi chuyên giúp doanh nghiệp và cá nhân phát triển các giải pháp web độc quyền, hiện đại.",
      bio2:
        "Chuyên sâu về Next.js, React, Node.js và triển khai đám mây DevOps. Tôi tập trung biến ý tưởng của bạn thành website tốc độ cao, chỉn chu và tối ưu chuyển đổi.",
      locationTag: "Địa điểm",
      locationCity: "Hà Nội",
      locationCountry: "Việt Nam",
      remoteNotice: "UTC+7 · Nhận dự án Remote toàn cầu",
      availableNow: "Sẵn sàng nhận dự án",
      currentlyBuildingTag: "Dự án đang vận hành",
      funFactsTag: "Giá trị cốt lõi",
      funFact1: "Giao diện chỉn chu, tỉ mỉ từng điểm ảnh (Pixel-perfect)",
      funFact2: "Tối ưu tốc độ tải trang & điểm Google Core Web Vitals",
      funFact3: "Kiến trúc mã nguồn sạch, dễ mở rộng và bảo trì",
      funFact4: "Thương hiệu: AniKenji (Bùi Cao Phương)",
      ctaCardLine1: "Cùng nhau",
      ctaCardHighlight: "tạo nên",
      ctaCardLine2: "điều đặc biệt.",
      ctaCardButton: "Bắt đầu dự án →",
    },
    services: {
      tag: "Dịch vụ cung cấp",
      title: "Giải pháp &",
      highlight: "Dịch vụ",
      description:
        "Dịch vụ thiết kế và phát triển website trọn gói, tối ưu hiệu suất, thẩm mỹ hiện đại và nâng cao tỷ lệ chuyển đổi cho khách hàng.",
      items: [
        {
          id: "custom-website",
          number: "01",
          title: "Custom Website & Landing Page",
          description:
            "Thiết kế giao diện độc quyền, tối ưu tỷ lệ chuyển đổi, chuẩn SEO và tương thích hoàn hảo mọi thiết bị.",
          color: "#6366f1",
          tags: ["Tailwind CSS", "Next.js", "Chuẩn SEO", "Responsive UI"],
        },
        {
          id: "fullstack-app",
          number: "02",
          title: "Full-Stack Web Applications",
          description:
            "Phát triển hệ thống web phức tạp, tích hợp API, cổng thanh toán trực tuyến, quản trị dữ liệu và bảo mật cao.",
          color: "#a855f7",
          tags: ["React / Next.js", "Node.js", "REST / GraphQL", "PostgreSQL"],
        },
        {
          id: "redesign-perf",
          number: "03",
          title: "UI/UX Redesign & Tối ưu tốc độ",
          description:
            "Làm mới giao diện website cũ, hiện đại hóa trải nghiệm người dùng và tối ưu tốc độ tải trang đạt chuẩn Core Web Vitals.",
          color: "#818cf8",
          tags: ["Core Web Vitals", "Framer Motion", "UI/UX", "Tối ưu hóa"],
        },
        {
          id: "deployment-maintenance",
          number: "04",
          title: "Triển khai & Bảo trì hệ thống",
          description:
            "Triển khai máy chủ đám mây, cấu hình tên miền, chứng chỉ SSL và bảo trì, nâng cấp hệ thống kỹ thuật trọn gói.",
          color: "#c084fc",
          tags: ["Docker", "CI/CD", "Linux / VPS", "Cloudflare"],
        },
        {
          id: "mobile-app",
          number: "05",
          title: "Application Development (Mobile)",
          description:
            "Triển khai ứng dụng trên điện thoại di động (iOS & Android) với giao diện mượt mà, hiệu năng cao và đồng bộ dữ liệu tức thì.",
          color: "#ec4899",
          tags: ["React Native", "Đa nền tảng", "iOS & Android", "Đồng bộ API"],
        },
      ],
      techStackTitle: "Công nghệ chuyên sâu",
    },
    projects: {
      tag: "Dự án tiêu biểu",
      title: "Sản phẩm",
      highlight: "thực tế",
      description:
        "Các sản phẩm thực tế đã triển khai với tiêu chuẩn cao về thẩm mỹ, tính năng và trải nghiệm người dùng.",
      liveDemo: "Xem trực tiếp",
      source: "Mã nguồn",
      viewAll: "Xem tất cả dự án",
      items: [
        {
          id: 1,
          title: "AniKenji — Media & Video Streaming Platform",
          category: "Media & Video Streaming Web App",
          description:
            "Nền tảng xem phim & streaming video trực tuyến với tốc độ tải siêu nhanh, tìm kiếm thông minh, ghi nhớ tập phim và giao diện tối ưu cho người dùng.",
          tags: ["Next.js", "Node.js", "Video Streaming", "REST API"],
          link: "https://anikenji.tech",
          image: "/projects/anikenji.jpg",
          featured: true,
        },
        {
          id: 2,
          title: "Cao Bang Geopark — Tourism Portal",
          category: "Cổng thông tin Du lịch & Bản đồ tương tác",
          description:
            "Cổng thông tin du lịch chính thức cho Công viên địa chất toàn cầu UNESCO Non nước Cao Bằng, tích hợp bản đồ di sản tương tác và cẩm nang điểm đến.",
          tags: ["React", "Python", "PostgreSQL", "Maps API"],
          link: "https://geoparktravel.site",
          image: "/projects/geopark.jpg",
          featured: true,
        },
        {
          id: 3,
          title: "YokoGoods — Digital Marketplace",
          category: "Sàn giao dịch sản phẩm số & E-Commerce",
          description:
            "Sàn thương mại điện tử chuyên giao dịch sản phẩm kỹ thuật số, bản quyền phần mềm và tài sản số với quy trình thanh toán mượt mà.",
          tags: ["Next.js", "Node.js", "Marketplace", "E-commerce"],
          link: "https://yokogoods.anikenji.tech",
          image: "/projects/yokogoods.jpg",
          featured: true,
        },
        {
          id: 4,
          title: "AniKenji Portfolio — Trải nghiệm Web 3D",
          category: "Portfolio Thiết kế & Lập trình",
          description:
            "Website portfolio cá nhân tích hợp cảnh 3D Three.js tương tác, hiệu ứng cuộn mượt mà Framer Motion và hỗ trợ đa ngôn ngữ.",
          tags: ["Next.js 16", "Three.js", "Tailwind CSS", "i18n"],
          link: "https://github.com/anikenji/portfolio",
          image: "/projects/portfolio.jpg",
          featured: false,
        },
      ],
    },
    process: {
      tag: "Quy trình làm việc",
      title: "Quy trình triển khai",
      highlight: "Remote chuẩn chỉ",
      description:
        "Quy trình 4 bước tinh gọn, minh bạch từ ý tưởng đến khi bàn giao sản phẩm hoàn thiện, đúng tiến độ và ngân sách.",
      steps: [
        {
          step: "01",
          title: "Discovery & Quote",
          description:
            "Trao đổi chi tiết yêu cầu, tư vấn giải pháp tối ưu và gửi báo giá minh bạch, rõ ràng.",
          color: "#6366f1",
        },
        {
          step: "02",
          title: "UI/UX Wireframe",
          description:
            "Lên bố cục khung xương (wireframe), thiết kế giao diện mẫu trực quan để khách hàng duyệt trước khi code.",
          color: "#a855f7",
        },
        {
          step: "03",
          title: "Development",
          description:
            "Lập trình chuẩn SEO, tối ưu tốc độ tải trang, kiểm thử kỹ càng và cập nhật tiến độ liên tục.",
          color: "#818cf8",
        },
        {
          step: "04",
          title: "Launch & Support",
          description:
            "Triển khai website lên server chính thức, bàn giao mã nguồn, hướng dẫn quản trị và bảo hành kỹ thuật chu đáo.",
          color: "#c084fc",
        },
      ],
    },
    experience: {
      tag: "Kinh nghiệm",
      title: "Hành trình",
      highlight: "thực chiến",
      description:
        "Quá trình xây dựng sản phẩm số độc lập và triển khai giải pháp web cho khách hàng.",
      items: [
        {
          role: "CEO & Founder",
          company: "Kensobanto, Inc.",
          period: "2022 — Hiện tại",
          description:
            "Founder & Lead Developer — Xây dựng các sản phẩm số độc lập và cung cấp giải pháp phát triển web toàn diện cho khách hàng.",
          color: "#6366f1",
        },
        {
          role: "Freelance Web Developer",
          company: "AniKenji Studio",
          period: "2022 — Hiện tại",
          description:
            "Xây dựng ứng dụng web hiệu năng cao, bao gồm AniKenji streaming platform và cổng thông tin Cao Bang Geopark. Trọng tâm là Next.js, React, Node.js và trải nghiệm người dùng.",
          color: "#a855f7",
        },
        {
          role: "Sinh viên Công nghệ Thông tin",
          company: "Computer Science",
          period: "Đang theo học",
          description:
            "Nghiên cứu chuyên sâu về kiến trúc hệ thống phân tán, giải pháp web hiện đại và hạ tầng đám mây DevOps.",
          color: "#818cf8",
        },
      ],
    },
    cta: {
      title: "Sẵn sàng xây dựng",
      highlight: "website",
      title2: "vượt trội?",
      description:
        "Dù là landing page tối ưu chuyển đổi, sàn thương mại điện tử hay ứng dụng web tùy chỉnh — hãy cùng nhau biến ý tưởng thành hiện thực.",
      startConversation: "Bắt đầu trao đổi",
      sendEmail: "Gửi email trực tiếp",
    },
    contact: {
      tag: "Liên hệ",
      title: "Cùng phát triển",
      highlight: "dự án của bạn",
      description:
        "Bạn đã sẵn sàng khởi động? Hãy điền thông tin vào form hoặc nhắn tin qua các kênh chat nhanh bên dưới.",
      quickChannelsTitle: "Kênh liên hệ trực tiếp",
      vietnamHeader: "Dành cho khách hàng Việt Nam",
      globalHeader: "Dành cho khách hàng Quốc tế",
      availableCardTitle: "Available for Freelance & Remote Projects",
      availableCardDesc:
        "Đang nhận dự án mới, làm mới giao diện và tư vấn kỹ thuật. Phản hồi nhanh và hỗ trợ linh hoạt múi giờ cho mọi khách hàng.",
      form: {
        nameLabel: "Họ và tên",
        namePlaceholder: "Ví dụ: Nguyễn Văn A / Bùi Cao Phương",
        emailLabel: "Địa chỉ Email",
        emailPlaceholder: "email@example.com",
        serviceLabel: "Loại dịch vụ & Ngân sách dự kiến",
        servicePlaceholder: "Chọn gói dịch vụ & ngân sách mong muốn",
        serviceOptions: [
          { value: "landing", label: "Custom Website / Landing Page (Dưới 15 triệu)" },
          { value: "webapp", label: "Full-Stack Web App / E-Commerce (15 - 35 triệu)" },
          { value: "enterprise", label: "Hệ thống phức tạp & Tích hợp API (Trên 35 triệu)" },
          { value: "redesign", label: "UI/UX Redesign & Tối ưu tốc độ trang" },
          { value: "mobile", label: "Phát triển ứng dụng di động (Mobile App)" },
          { value: "other", label: "Tư vấn giải pháp / Dịch vụ khác" },
        ],
        messageLabel: "Mô tả yêu cầu dự án",
        messagePlaceholder:
          "Chia sẻ về mục tiêu, thời hạn hoàn thành và các tính năng mong muốn...",
        sendButton: "Gửi yêu cầu dự án",
        sendingButton: "Đang mở hòm thư...",
      },
    },
    footer: {
      rights: "Bản quyền thuộc về AniKenji (Bùi Cao Phương).",
      tagline: "Xây dựng trải nghiệm web hiện đại, tốc độ cao và chuyển đổi tốt.",
    },
  },
};
