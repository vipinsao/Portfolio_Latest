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
    id: 4,
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
];
