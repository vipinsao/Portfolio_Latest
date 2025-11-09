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
    company: "Self-Driven Projects & Open Source",
    location: "Remote",
    period: "2023 - Present",
    achievements: [
      "Built 4+ production-grade full-stack applications with stable deployments",
      "Integrated GenAI APIs across multiple real-world use cases",
      "Created automation workflows (n8n) reducing 7+ weekly manual hours",
      "Contributed PRs to Kestra & EXXETA Trufos",
      "Experience across React, Next.js, TypeScript, Node.js",
    ],
  },
  {
    id: 2,
    title: "Research Intern",
    company: "Humming Minds Tech Pvt Ltd",
    location: "Raipur, India",
    period: "Sep 2024 - Oct 2024",
    achievements: [
      "Analyzed and compared 5+ modern web frameworks and recommended an optimized tech stack for scalability & cost-efficiency (20% projected cost reduction)",
      "Documented 8+ UI/UX improvement recommendations after reviewing existing product flows",
      "Prepared research reports evaluating performance, developer experience, and long-term maintainability of selected tech stack",
      "Actively participated in technical discussions and contributed insights in cross-functional team meetings",
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
    metric: "4+",
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
    image: "/images/smart-ingredient.png",
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
    image: "/images/ai-interview.png",
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
    image: "/images/typing.png",
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
    image: "/images/social-share.png",
    stars: 0,
    forks: 0,
    tags: ["Media", "Optimization", "Cloud"],
  },
];

export const workflows = [
  {
    id: 1,
    title: "Job Opportunity Multi-Channel AI Monitor",
    category: "workflow",
    description:
      "An n8n-based automated workflow that collects the last 5 Gmail job-related mails, last 5 GitHub repo issues, and last 5 Twitter notifications and sends one summarized digest mail every evening at 7 PM.",
    problem:
      "Manually checking different platforms daily for job related updates is time-consuming, inconsistent, and easy to miss important opportunities.",
    solution:
      "Automated daily aggregation of multiple channel notifications (Gmail, GitHub, Twitter) combined with AI summarization and priority ranking before sending a single digest email.",
    myApproach:
      "Connected Gmail + GitHub APIs inside n8n, retrieved the latest notifications, processed them using Gemini AI for summarization and priority classification, and scheduled the workflow to deliver structured digest email at 7 PM daily.",
    techStack: [
      "n8n",
      "Google Gemini",
      "Gmail API",
      "GitHub API",
      "Cron Schedule",
    ],
    features: [
      "Daily scheduled automated execution (7 PM)",
      "Aggregates latest notifications from multiple sources",
      "AI summarization + prioritization for fast actionable insights",
      "One single email digest instead of checking platforms manually",
    ],
    results:
      "Reduced daily checking overhead and increased ability to notice relevant opportunities faster with zero manual effort.",
    lessonsLearned:
      "Automation + AI summarization removes noise and keeps focus only on high value updates.",
    image: "/images/workflow-1.png",
    link: "https://n8n.srv1017948.hstgr.cloud/workflow/JZku95JG5wkI8h3L",
    tags: ["Automation", "n8n", "AI", "Productivity", "Monitoring"],
  },
  {
    id: 2,
    title: "LinkedIn Job Search Automation",
    category: "workflow",
    description:
      "VPS-hosted n8n workflow that scrapes LinkedIn job pages, scores each posting against my resume keywords, and sends a Telegram alert with details when the relevance score exceeds 50.",
    problem:
      "Manually scanning LinkedIn leads to noise and missed roles that actually match my resume.",
    solution:
      "Automated scraping + keyword scoring to detect high-fit roles and push instant Telegram notifications with the job link, id, and description.",
    myApproach:
      "Extracted keywords from my resume, fetched new LinkedIn job results, parsed HTML, computed a weighted relevance score, and if score > 50, sent a structured Telegram message. Added deduping and simple rate limits.",
    techStack: [
      "n8n",
      "JavaScript",
      "Cheerio (HTML parsing) / Puppeteer (optional for dynamic pages)",
      "Telegram Bot API",
      "Cron Jobs",
      "Hostinger VPS",
    ],
    features: [
      "Resume keyword matcher with weighted scoring",
      "Score thresholding (notify only if score > 50)",
      "Telegram alerts including job link, job id, and short description",
      "Deduping, basic rate limiting, and error retries",
    ],
    results:
      "Delivers only high-fit roles directly to Telegram, cutting manual browsing time and reducing low-relevance openings.",
    lessonsLearned:
      "A simple weighted keyword score filters noise effectively; add headless browsing only when pages render dynamically.",
    image: "/images/workflow-2.png",
    link: "https://github.com/vipinsao",
    tags: ["Automation", "n8n", "Jobs", "Telegram", "Scraping"],
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
    title:
      "My First AI Workflow: Building My Personal Automation Assistant with n8n",
    platform: "Medium",
    date: "September 2025",
    readTime: "10 min read",
    description:
      "This article explains how I built my very first AI workflow using n8n to automate repetitive personal tasks and turn them into a self-running assistant.",
    summary:
      "The blog walks through how simple triggers + smart automation + AI powered logic can replace daily manual actions and start acting like a personal productivity agent.",
    link: "https://medium.com/@vipinsao3/my-first-ai-workflow-building-my-personal-automation-assistant-with-n8n-1d59e160ed65",
    tags: ["Automation", "AI", "n8n", "Personal Productivity"],
    views: "300+",
  },

  {
    id: 3,
    title:
      "The Ultimate Job Application Automation: From Zero to Hero with AI-Powered Resume Matching",
    platform: "Medium",
    date: "October 2025",
    readTime: "12 min read",
    description:
      "A deep breakdown of how I automated the job search pipeline using AI, automation workflows, and scoring logic that matches roles against resume keywords.",
    summary:
      "This blog explains how to use AI-based scoring + workflow automation to automatically identify high-fit job postings and reduce time wasted on irrelevant applications.",
    link: "https://medium.com/@vipinsao3/the-ultimate-job-application-automation-from-zero-to-hero-with-ai-powered-resume-matching-3d7c999b7f49",
    tags: ["Automation", "AI Agents", "Job Search", "Resume Intelligence"],
    views: "300+",
  },
];
