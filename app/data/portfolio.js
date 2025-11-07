// src/data/portfolio.js

export const personalInfo = {
  name: "Vipin Chandra Sao",
  title: "Full Stack Developer | AI/GenAI Integration Specialist",
  bio: "Full Stack Developer skilled in building AI-enabled, production-grade web applications. I combine strong engineering fundamentals with practical GenAI integration to deliver real value—not just wrappers. My current focus is creating fast, reliable, user-centric AI features in full-stack products. Open to remote opportunities with AI SaaS startups, YC-style builder teams, and innovative product companies.",
  location: "Raipur, India",
  email: "vipinc.sao@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/vipinsao",
    linkedin: "https://www.linkedin.com/in/vipinsao",
    twitter: "https://twitter.com/vipinSao1",
    leetcode: "https://leetcode.com/u/vipinsao/",
    portfolio: "https://portfolio-latest-y5jf.vercel.app/",
  },
};

export const about = {
  philosophy:
    "I believe good software solves real problems with clarity, speed, and scalability. AI should enhance workflows—not overcomplicate them.",
  approach: [
    "Focus on real user problems and measurable product value",
    "Ship fast using modern stacks (Next.js, React, TypeScript, Node.js)",
    "Integrate GenAI where it actually improves user outcomes",
    "Deploy, collect feedback, iterate, and optimize",
    "Write clean, maintainable, production-ready code",
  ],
  currentFocus: [
    "Full-stack AI product building",
    "GenAI integrations into real workflows",
    "Open-source contributions",
    "Developer productivity tooling",
  ],
  funFact:
    "Solved 300+ LeetCode problems with a 365-day streak—consistent iteration is my philosophy for growth.",
};

export const experience = [
  {
    id: 1,
    title: "Independent Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2023 - Present",
    achievements: [
      "Built 6+ production-grade full-stack applications with stable deployments",
      "Integrated GenAI APIs across multiple real-world use cases",
      "Created automation workflows (n8n) reducing 7+ weekly manual hours",
      "Contributed PRs to Kestra & EXXETA Trufos",
      "Experience across React, Next.js, TypeScript, Node.js",
    ],
  },
  {
    id: 2,
    title: "Research Intern",
    company: "Humming Minds Tech",
    location: "Remote",
    period: "Sep 2024 - Oct 2024",
    achievements: [
      "Explored AI/ML integration patterns for full-stack applications",
      "Built prototype demos using GenAI APIs",
      "Contributed to documentation & research deliverables",
      "Presented insights on practical AI usage & feasibility",
    ],
  },
];

export const achievements = [
  {
    title: "Open Source Contributions",
    metric: "2 PRs",
    description:
      "Merged PRs in Kestra and EXXETA improving real production tooling.",
    link: "https://github.com/vipinsao",
  },
  {
    title: "Production-Grade Full Stack Apps",
    metric: "6+",
    description:
      "Shipped multiple deployed full-stack applications with reliability.",
  },
  {
    title: "GenAI Integration",
    metric: "3+",
    description:
      "Integrated real-world AI workflows using Groq, Gemini and OpenAI APIs.",
  },
  {
    title: "LeetCode Consistency",
    metric: "300+",
    description: "300+ problems solved with a 365-day streak.",
  },
  {
    title: "GitHub Activity",
    metric: "288+",
    description: "Active consistent engineering contribution history.",
  },
];

export const projectsDetail = [
  {
    id: 1,
    title: "Smart Ingredient Analyzer",
    category: "fullstack",
    description:
      "AI-powered ingredient scanner that analyzes food labels and provides instant health insights.",
    problem:
      "Food labels are confusing. Users struggle to understand complex ingredients & allergens.",
    solution:
      "Built an OCR + AI pipeline to analyze ingredient lists and return clear health guidance within seconds.",
    approach:
      "Optimized OCR preprocessing and used Groq for <1s inference to maximize clarity + speed.",
    challenges: [
      "OCR accuracy tuning for different lighting conditions",
      "Rate limit handling via caching and batching",
      "Mobile camera input validation",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Groq API",
      "OCR",
      "Tailwind",
      "Vercel",
    ],
    impact: [
      "85% user satisfaction with health accuracy feedback",
      "10+ real beta testers using it while grocery shopping",
      "Built mobile-first frictionless UX",
    ],
    liveLink: "https://smart-ingredient-analyzer.vercel.app/",
    githubLink: "https://github.com/vipinsao/Smart-Ingredient-Analyzer",
    image: "/images/smart-ingredient.jpg",
    tags: ["AI", "Health Tech", "OCR"],
  },
  {
    id: 2,
    title: "AI Interview Agent",
    category: "fullstack",
    description:
      "Voice-based AI interviewer that simulates real technical interviews and gives instant feedback.",
    problem:
      "Mock interviews are expensive & inaccessible for students preparing for tech jobs.",
    solution:
      "Built a voice-driven interview simulation using OpenAI + WebRTC with real-time scoring.",
    approach:
      "Added conversational prompt tuning + streaming feedback to reduce robotic responses.",
    challenges: [
      "Audio latency + codec balancing",
      "Reducing robotic AI response patterns",
      "Real-time evaluation without lag",
    ],
    techStack: [
      "React",
      "Node.js",
      "WebRTC",
      "Socket.io",
      "OpenAI API",
      "Tailwind",
      "Vercel",
    ],
    impact: [
      "90% testers reported confidence improvement",
      "Helped one user land a real job offer",
      "Reliable real-time voice evaluation pipeline",
    ],
    liveLink: "https://ai-interview-agent-gules.vercel.app/",
    githubLink: "https://github.com/vipinsao/ai-interview-agent",
    image: "/images/ai-interview.jpg",
    tags: ["AI", "Voice", "WebRTC"],
  },
  {
    id: 3,
    title: "TypingWeb - Speed Test Trainer",
    category: "fullstack",
    description:
      "Gamified typing trainer with real-time WPM tracking, leaderboard & progress analytics.",
    problem:
      "Typing tools are boring and don’t motivate consistent improvement.",
    solution:
      "Built modern interactive typing trainer with instant feedback + streak based gamification.",
    approach:
      "Optimized rendering with memoization & debouncing and used Firebase for realtime sync.",
    challenges: [
      "Optimizing mobile typing responsiveness",
      "Preventing leaderboard spam",
      "Improving retention with streak gamification",
    ],
    techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind", "Vercel"],
    impact: [
      "40WPM → 75WPM personal improvement",
      "15+ active weekly testers",
      "High engagement using streak features",
    ],
    liveLink: "https://typingweb-two.vercel.app/",
    githubLink: "https://github.com/vipinsao/typingweb",
    image: "/images/typing.jpg",
    tags: ["Productivity", "Gamification", "Firebase"],
  },
  {
    id: 4,
    title: "Social Share Optimizer",
    category: "fullstack",
    description:
      "A utility web app that prepares media assets (videos + images) into platform-ready formats for faster social media publishing.",
    problem:
      "Every social platform uses different dimension standards and compression rules. Manually converting media every time is slow and inconsistent.",
    solution:
      "Upload once → select platform preset → download optimized output. Helps creators get platform-specific media export faster without manually resizing in editors.",
    myApproach:
      "Used Cloudinary’s transformation pipeline for resizing and compression presets, and built a simple guided export UI where user selects platform target before sharing.",
    challenges: [
      "Balancing quality vs file size",
      "Mapping standard aspect ratios of platforms",
      "Handling both video + image formats consistently",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudinary"],
    features: [
      "Platform preset selection",
      "Video compression export",
      "Image ratio auto adjustment",
    ],
    results:
      "Improved my understanding of media pipelines and cross-platform formatting standards.",
    lessonsLearned:
      "A simplified preset-driven UX reduces friction more than trying to automate publishing completely.",
    liveLink: "https://github.com/vipinsao/AI-Saas-Webapp",
    githubLink: "https://github.com/vipinsao/AI-Saas-Webapp",
    image: "/images/social-share.jpg",
    stars: 0,
    forks: 0,
    tags: ["Media", "Optimization", "Cloud"],
  },
  {
    id: 5,
    title: "Auth Web",
    category: "fullstack",
    description:
      "A reusable authentication boilerplate to quickly bootstrap full-stack applications with secure auth.",
    problem:
      "Auth is usually the hardest part to standardize across new projects and consumes unnecessary setup time.",
    solution:
      "This repo provides a modular production-ready auth base with role-based logic that can be reused in projects.",
    myApproach:
      "Implemented NextAuth with MongoDB, structured access layers cleanly, and focused on SSR safe session handling.",
    challenges: [
      "Session management across page reloads",
      "Refresh token lifecycle handling",
      "Role based route gating",
    ],
    techStack: ["Next.js", "NextAuth", "MongoDB", "Tailwind CSS"],
    features: [
      "Protected routes",
      "Role-based access control",
      "Reusable auth architecture",
    ],
    results:
      "This starter now reduces my setup time significantly when creating new prototypes.",
    lessonsLearned:
      "Good base auth architecture compounds long-term productivity.",
    liveLink: "https://github.com/vipinsao/Full-Stack-Auth-Web-NextJs",
    githubLink: "https://github.com/vipinsao/Full-Stack-Auth-Web-NextJs",
    image: "/images/auth-web.jpg",
    stars: 0,
    forks: 0,
    tags: ["Auth", "RBAC", "Full Stack"],
  },
];

export const workflows = [
  {
    id: 1,
    title: "Twitter AI Post Generator",
    category: "workflow",
    description:
      "An n8n-based workflow that generates tweet content ideas using AI and formats them before publishing.",
    problem:
      "Writing tweet variations manually every day reduces consistency and wastes context switching time.",
    solution:
      "Automated content drafting using AI + topic feeds with optional manual review before sharing.",
    myApproach:
      "Used RSS feeds to track trending developer content, generated multiple variations using AI, and prepared drafts for faster publishing.",
    techStack: ["n8n", "OpenAI API", "RSS", "Cron Jobs"],
    features: [
      "AI-based tweet draft generation",
      "Topic based RSS inspiration feed",
      "Draft queue preparation for manual posting",
    ],
    results:
      "Helped me experiment with repeatable idea generation without constantly context-switching.",
    lessonsLearned: "AI works best as a draft co-writer — not an auto poster.",
    image: "/images/twitter-workflow.jpg",
    link: "https://github.com/vipinsao",
    tags: ["Automation", "n8n", "AI", "Social"],
  },
  {
    id: 2,
    title: "LinkedIn Job Search Automation",
    category: "workflow",
    description:
      "Automated system deployed on VPS that monitors LinkedIn job listings and alerts me when new matching opportunities appear.",
    problem:
      "Checking LinkedIn multiple times daily is inefficient and leads to missing fresh postings.",
    solution:
      "This workflow continuously fetches job listings, filters by my conditions (remote + AI + fullstack), and notifies me instantly.",
    myApproach:
      "Used n8n HTTP job listing extract + custom JS filters + dual channel notifications via email and Telegram.",
    techStack: [
      "n8n",
      "LinkedIn API",
      "JavaScript",
      "Email",
      "Telegram Bot",
      "Cron Jobs",
    ],
    features: [
      "Scheduled periodic job checks",
      "Custom filtering by tech + remote",
      "Instant alerts through Telegram & Email",
    ],
    results:
      "This workflow runs on my Hostinger VPS and continuously monitors for relevant roles, saving daily manual browsing time.",
    lessonsLearned:
      "Automating job discovery gives more time to focus on skill development instead of repeating search loops.",
    image: "/images/linkedin-workflow.jpg",
    link: "https://github.com/vipinsao",
    tags: ["Automation", "n8n", "Jobs", "Productivity"],
  },
];

export const blogs = [
  {
    id: 1,
    title: "JavaScript vs TypeScript: When Should You Make the Switch?",
    platform: "Dev.to",
    date: "October 2024",
    readTime: "8 min read",
    description:
      "Exploring the practical differences between JavaScript and TypeScript, when to use each, and migration strategies for existing projects.",
    summary:
      "The blog explains when TypeScript reduces complexity vs when JavaScript is faster to iterate with.",
    link: "https://dev.to/vipin_sao",
    tags: ["JavaScript", "TypeScript", "Web Development"],
    views: "500+",
  },
  {
    id: 2,
    title: "Building Production-Ready Full Stack Apps: Best Practices",
    platform: "Medium",
    date: "September 2024",
    readTime: "12 min read",
    description:
      "A comprehensive guide covering architecture, security, deployment, and monitoring for professional full-stack applications.",
    summary:
      "The blog explains when TypeScript reduces complexity vs when JavaScript is faster to iterate with.",
    link: "https://medium.com/@vipinsao3",
    tags: ["Full Stack", "Best Practices", "Production"],
    views: "300+",
  },
  {
    id: 3,
    title: "Integrating GenAI into Web Apps: Beyond the Wrapper",
    platform: "Medium",
    date: "August 2024",
    readTime: "10 min read",
    description:
      "How to thoughtfully integrate GenAI into applications—focusing on real value, not just API wrappers. Includes practical examples.",
    summary:
      "The blog explains when TypeScript reduces complexity vs when JavaScript is faster to iterate with.",
    link: "https://medium.com/@vipinsao3",
    tags: ["GenAI", "AI Integration", "Web Development"],
    views: "400+",
  },
];
