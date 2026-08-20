// src/data/portfolio.js

export const personalInfo = {
  name: "Vipin Chandra Sao",
  title: "Full Stack Developer (Web & GenAI Systems)",
  bio: "Full-Stack Developer building production-ready web applications with practical GenAI integrations. I focus on clean engineering, reliable systems, and solving real user problems—not AI wrappers. Currently building and deploying full-stack AI-powered products and automation workflows.",
  location: "Raipur, India",
  email: "vipinc.sao@gmail.com",
  social: {
    github: "https://github.com/vipinsao",
    linkedin: "https://www.linkedin.com/in/vipinsao",
    twitter: "https://twitter.com/vipinSao1",
    leetcode: "https://leetcode.com/u/vipinsao/",
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
    "I enjoy building small automation tools that remove repetitive manual work from daily workflows.",
};

export const experience = [
  {
    id: 1,
    title: "Independent Full Stack Developer",
    company: "Self-Driven Projects & Open Source",
    location: "Remote",
    period: "2023 - Present",
    achievements: [
      "Designed, built, and deployed 4+ production-grade full-stack applications using Next.js, Node.js, and cloud hosting (Vercel), owning features end-to-end",
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
      "Merged PRs into Kestra and EXXETA Trufos, improving real production tooling. See GitHub profile for details.",
    link: "https://github.com/vipinsao",
  },
  {
    title: "Production-Grade Full Stack Apps",
    metric: "3+",
    description:
      "Shipped multiple deployed full-stack applications with reliable, stable deployments.",
  },
  {
    title: "GenAI Integration",
    metric: "2+",
    description:
      "Integrated real-world AI workflows using Groq, Gemini, and OpenAI APIs into full-stack products.",
  },
  {
    title: "AI-Driven Workflow Automation",
    metric: "2",
    description: "Built two AI-powered automation workflows using n8n.",
  },
  {
    title: "GitHub Activity",
    metric: "288+",
    description:
      "288+ GitHub contributions (commits, PRs, issues) in a year, showing consistent engineering practice.",
  },
];

export const projectsDetail = [
  {
    id: 1,
    title: "Smart Ingredient Analyzer",
    category: "fullstack",
    description:
      "Photograph a food label: OCR reads it, hybrid retrieval looks each ingredient up in a committed Open Food Facts corpus, and every verdict has to cite the passage it came from — or the ingredient is reported as uncovered.",
    problem:
      "The first version asked a language model \u201cis this ingredient harmful?\u201d and rendered the reply. For a food-safety tool that is the wrong shape of output: unattributable, different between identical requests, and confidently wrong about ingredients it knows nothing about.",
    solution:
      "Rebuilt the answer path around retrieval from a public dataset with a hard citation requirement. A verdict citing a passage id that was never in the prompt is rejected and the model is asked again; an ingredient the corpus does not describe comes back in an `uncovered` list with the reason attached. Reporting the gap is the feature.",
    myApproach:
      "Two retrievers fused with weighted Reciprocal Rank Fusion, both hand-rolled: BM25 over passage text plus aliases (labels write INS211 / E211 / E 211 for the same additive, so a lexical index matters), and dense cosine over Xenova/all-MiniLM-L6-v2 embeddings. No vector database \u2014 839 chunks \u00d7 384 dimensions is ~322k multiply-adds per query, smaller than the JSON parsing around it. Allergen flags and the health score are computed in code, never asked of the model.",
    challenges: [
      "The rate limiter was fully bypassable: `trust proxy` was set with no proxy in front of it, so 300 requests against a 20-request budget all went through",
      "The pixel cap bounded width only, so a 2000\u00d720000 upload from a 5MB file cost 126 seconds of CPU",
      "The diagnosis on record \u2014 that Tesseract worker startup was most of a slow OCR call \u2014 was wrong: measurement put it at 14%",
    ],
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Tesseract.js",
      "Transformers.js",
      "Groq API",
      "Zod",
    ],
    impact: [
      "recall@5 of 95% over 58 hand-labelled questions \u2014 `cd back-end && npm run eval`, six seconds, no API key and no network",
      "Abstention precision 100% (never refused a question the corpus can answer, 0 of 40); recall 72% (refused 13 of 18 out-of-corpus questions)",
      "The ablation is in the README including the result it did not want: hybrid does not beat BM25 alone on this corpus",
      "86 unit tests, and CI fails the build if hybrid recall@5 drops below 85%",
    ],
    liveLink: "https://smart-ingredient-analyzer.vercel.app/",
    githubLink: "https://github.com/vipinsao/Smart-Ingredient-Analyzer",
    image: "/images/smart-ingredient.png",
    tags: ["Retrieval", "OCR", "Evaluation"],
  },
  {
    id: 2,
    title: "AI Interview Platform",
    category: "fullstack",
    description:
      "A recruiter generates a role-specific interview with a language model and shares a link; the candidate answers out loud in the browser, each answer is scored server-side as it is given, and the scores are collected into a report.",
    problem:
      "The first build let the candidate decide their own result. The report was assembled from what the browser posted at the end rather than from anything the server had recorded, so a candidate could set their own score \u2014 and a recruiter could grant themselves credits, because row level security decides whose row you may write, not which columns.",
    solution:
      "Each answer is posted as a question index plus a transcript; the route reads the question from the stored list, scores it 0\u201310 against explicit criteria and writes that score to `answer_scores` as it issues it. The final report takes scores from those rows, computes the rating breakdown arithmetically, and asks the model only for the prose summary. Nothing the browser holds at the end decides what the report says.",
    myApproach:
      "Replaced the hosted voice-agent SDK with the browser-native Web Speech API \u2014 `speechSynthesis` reads the question, `SpeechRecognition` captures the answer. Every branch of a live session (no recognition in this browser, microphone blocked, recognition error, candidate silent, scoring endpoint down) is a transition in a pure reducer, which is why there is no state where the page shows a spinner with no way forward.",
    challenges: [
      "Speech recognition does not exist in Firefox, so support is feature-detected at runtime and a browser without it drops to typed answers",
      "Credits were granted before PayPal was asked whether the money had arrived",
      "The rate limiter read, decided in JavaScript, then wrote \u2014 which let both of two simultaneous requests through",
    ],
    techStack: [
      "Next.js",
      "Supabase (Postgres + RLS)",
      "Web Speech API",
      "Groq",
      "Zod",
      "PayPal",
      "Tailwind",
    ],
    impact: [
      "Replaced a paid voice SDK with the browser-native Web Speech API: the interview route\u2019s first-load JavaScript fell from 76.8 kB to 13.5 kB, and no vendor key ships to the client (measured from `next build` before and after \u2014 DECISIONS.md)",
      "85 tests run with no keys, no card and no network; 109 when given a real PostgreSQL",
      "A read-only report link is a UUIDv4 looked up by equality on a unique index, never listed, expiring after fourteen days and revocable before then",
    ],
    liveLink: "https://ai-interview-agent-gules.vercel.app/",
    githubLink: "https://github.com/vipinsao/ai-interview-platform",
    image: "/images/ai-interview.png",
    tags: ["Voice", "Next.js", "Postgres"],
  },
  {
    id: 3,
    title: "TypingWeb - Speed Test Trainer",
    category: "fullstack",
    description:
      "Typing trainer with three difficulty levels, an on-screen keyboard, and WPM + accuracy scoring.",
    problem:
      "Typing tools are boring and don’t motivate consistent improvement.",
    solution:
      "Built an interactive typing trainer that renders a live keyboard, highlights each key as you type, and reports WPM and accuracy at the end of every run.",
    approach:
      "Used Firebase Authentication for accounts plus a guest path that skips sign-up entirely, and kept the prompt set in a static JSON file so a practice run needs no database round-trip.",
    challenges: [
      "Tracking keydown/keyup state to drive the on-screen keyboard",
      "Computing WPM and accuracy consistently across difficulty levels",
      "Keeping the app fully usable without an account",
    ],
    techStack: ["Next.js", "TypeScript", "Firebase Auth", "Tailwind", "Vercel"],
    impact: [
      "Deployed and publicly usable at typingweb-two.vercel.app",
      "Three difficulty levels driven by a static prompt set",
      "Email/password auth with a no-signup guest mode",
    ],
    liveLink: "https://typingweb-two.vercel.app/",
    githubLink: "https://github.com/vipinsao/typingweb",
    image: "/images/typing.png",
    tags: ["Productivity", "Frontend", "Firebase"],
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
    approach:
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
    liveLink: "https://ai-saas-webapp.vercel.app/",
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
    link: "https://github.com/vipinsao/workflows/blob/master/JobOpportunityMultiModelAutomation.md",
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
    link: "https://github.com/vipinsao/workflows/blob/master/LinkedJobAutomation.md",
    tags: ["Automation", "n8n", "Jobs", "Telegram", "Scraping"],
  },
];

export const blogs = [
  {
    id: 1,
    title:
      "JavaScript vs TypeScript: Why Everyone's Shifting to TypeScript in 2025",
    platform: "Dev.to",
    date: "October 2024",
    readTime: "8 min read",
    description:
      "Exploring the practical differences between JavaScript and TypeScript, when to use each, and migration strategies for existing projects.",
    summary:
      "The blog explains when TypeScript reduces complexity vs when JavaScript is faster to iterate with.",
    link: "https://dev.to/vipin_sao/javascript-vs-typescript-why-everyones-shifting-to-typescript-in-2025-3f50",
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

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "SSIPMT Raipur",
    location: "Raipur, India",
    period: "2019 - 2023",
    grade: "79%",
  },
];
