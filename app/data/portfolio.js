// Every string on this page lives here.
//
// Nothing in this file may say anything that cannot be clicked, run, or read
// out of a repository. Numbers are copied from the source they came from and
// are never re-rounded on the way in: "recall@5 95%" is 95% in the eval
// output, "13.5 kB" is what `next build` printed. If a claim has no source,
// it is not here.

export const personalInfo = {
  name: "Vipin Chandra Sao",
  // One canonical title, used everywhere on this site. "AI Software Developer"
  // survives only as the literal job-title field of the current employment row.
  title: "Full-Stack Developer (Backend-Leaning)",
  // One sentence. It was two, and the second one — good as it is — pushed the
  // proof strip off the first screen at 375px. It opens the work section now.
  lead:
    "I build APIs, data pipelines and LLM-backed features where the answer is " +
    "fenced to something that was actually retrieved — so the feature " +
    "reports a gap instead of inventing a figure.",
  email: "vipinc.sao@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1LoRU1KJxUrnphECCxJfo_2cnmJ9jniA2/view",
  availability: {
    short:
      "Open to remote roles worldwide, full-time, available now — based in India (UTC+5:30).",
    base: "I work 10:00–19:00 IST as standard.",
    overlap: [
      "~6.5h daily overlap with Central European hours",
      "~4.5h with Japan",
      "US East Coast mornings — 09:00–12:00 ET is 18:30–21:30 my time",
    ],
    caveat:
      "US Pacific hours I can’t cover honestly, so I won’t claim them.",
  },
  social: {
    github: "https://github.com/vipinsao",
    linkedin: "https://www.linkedin.com/in/vipinsao",
    twitter: "https://twitter.com/vipinSao1",
    leetcode: "https://leetcode.com/u/vipinsao/",
  },
};

/**
 * The two facts that go above the fold.
 *
 * A recruiter's first pass is measured in seconds, so the top of the page gets
 * the two things almost nobody else's portfolio has: a merged pull request
 * into a project I do not maintain, and a published evaluation whose result
 * contradicted my own design. Both are links, because a claim a reader has to
 * take on trust is worth nothing on a page like this.
 */
export const proof = [
  {
    label: "PR #12605",
    text: "Merged into kestra — 30k+★ workflow engine, November 2025.",
    href: "https://github.com/kestra-io/kestra/pull/12605",
  },
  {
    label: "recall@5 95%",
    text:
      "A retrieval evaluation I published whose result went against my own design: hybrid search does not beat BM25 alone on that corpus.",
    href: "https://github.com/vipinsao/Smart-Ingredient-Analyzer#readme",
  },
];

/**
 * Four case studies, in the same order as the résumé.
 *
 * `headline` is the single number a reader gets if they read nothing else.
 * `change` is the project's own documented limitation, quoted from its README
 * or DECISIONS.md rather than softened — in every case the repository says
 * this about itself already.
 */
export const caseStudies = [
  {
    id: "campaign-engine",
    index: "01",
    title: "Campaign Engine",
    summary:
      "A multi-channel email and SMS campaign engine that records why it sent a message — and why it didn’t. On the live demo you can place an order in a test shop and watch the engine enrol you, run its send-time checks and send the confirmation as a real email.",
    headline: { value: "610", unit: "tests in CI", note: "unit, integration and the invariant suite" },
    problem:
      "Messaging systems tend to fail quietly: a guard that exists on one of four send paths, a “delivered” status inferred from “sent”, a queued email that still goes out after the customer said stop. This is a personal project, written from scratch — the shape of it comes from debugging a production notification service at work, but it shares no code with it.",
    built:
      "A PostgreSQL queue where claiming a message is exactly-once (SELECT … FOR UPDATE SKIP LOCKED, with every final write fenced on the claim) and duplicate sends are blocked by a UNIQUE index rather than a check-then-insert. Consent, suppression, quiet hours in the recipient’s own timezone and frequency caps are all checked at send time, and every skip writes a decision row with a reason code. The AI reply triage is handed a narrowed capability object, so the model can only ever add a suppression, never remove one; prompts are versioned and a golden eval set blocks a merge on regression.",
    measured: [
      "610 tests in CI — 328 unit, 136 integration and 146 in the invariant suite. Until November 2026 CI could not actually fail: a test-database exit hook was turning every failed run green. That is fixed",
      "14 named delivery invariants and 10 AI invariants, each with its own tests",
      "A review where every finding had to be proven with a failing test confirmed six bugs, four of them inside the guards themselves — all fixed and written up",
      "On the live demo, an order’s confirmation is sent as a real email through Brevo; the operator console opens without a login and masks other visitors’ emails and phone numbers",
    ],
    change:
      "Delivery is at-least-once, not exactly-once: if a worker dies mid-send, the message can go out twice — an earlier README over-claimed this and was corrected. The AI eval replays recorded model outputs, so no live-model accuracy is claimed. SMS is not configured on the demo, so no text is sent (the shop says so), and the email comes from a free sending plan, so it can land in spam.",
    stack: [
      "TypeScript",
      "Node.js",
      "Hono",
      "PostgreSQL",
      "React",
      "Claude API",
      "Brevo",
      "Docker",
    ],
    repo: "https://github.com/vipinsao/Campaign_project",
    demo: "https://campaign-project-ke4v.onrender.com/shop",
    image: "/images/campaign-engine.png",
  },
  {
    id: "smart-ingredient-analyzer",
    index: "02",
    title: "Smart Ingredient Analyzer",
    summary:
      "Photograph a food label: OCR reads it, hybrid retrieval looks each ingredient up in a committed Open Food Facts corpus, and every verdict has to cite the passage it came from — or the ingredient is reported as uncovered.",
    headline: { value: "95%", unit: "recall@5", note: "over 58 hand-labelled questions" },
    problem:
      "The first version asked a language model “is this ingredient harmful?” and rendered the reply. For a food-safety tool that is the wrong shape of output: unattributable, different between identical requests, and confidently wrong about ingredients it knows nothing about.",
    built:
      "Two retrievers fused with weighted Reciprocal Rank Fusion, both hand-rolled: BM25 over passage text plus aliases (labels write INS211 / E211 / E 211 for the same additive, so a lexical index matters), and dense cosine over all-MiniLM-L6-v2 embeddings. No vector database — 839 chunks × 384 dimensions is ~322k multiply-adds per query, smaller than the JSON parsing around it. A verdict citing a passage id that was never in the prompt is rejected and re-asked; an ingredient the corpus does not describe comes back in an `uncovered` list with the reason attached. Allergen flags and the health score are arithmetic, never asked of the model.",
    measured: [
      "recall@5 of 95% over 58 hand-labelled questions — `npm run eval`, six seconds, no API key and no network",
      "Abstention precision 100% (0 of 40 answerable questions wrongly refused); recall 72% (13 of 18 out-of-corpus questions refused)",
      "The ablation is published including the result it did not want: hybrid matches BM25 alone at 83/95/95% for recall@1/@3/@5, and dense-only manages 48/73/78%",
      "OCR pre-processing raises Tesseract’s own confidence from 54 to 65 on the committed sample label — one image on one machine, not a benchmark",
      "113 unit tests, and CI fails the build if hybrid recall@5 drops below 85%",
    ],
    change:
      "Citation validity, groundedness and post-generation abstention are unit-tested against a stubbed model but have never been measured against a live one, because no API key was available. And retrieval precision on generic words is still wrong — `sugar` reaches the sweetener passage instead of abstaining. The README says both, and the second is unfixed.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Tesseract.js",
      "Transformers.js",
      "Groq",
      "Zod",
    ],
    repo: "https://github.com/vipinsao/Smart-Ingredient-Analyzer",
    // No demo link, on purpose: the deployment that used to be linked runs the
    // pre-retrieval build, which is the version this case study is about
    // replacing.
    demo: null,
    image: "/images/smart-ingredient.png",
  },
  {
    id: "auth-service",
    index: "03",
    title: "Auth Service",
    summary:
      "A standalone authentication service in TypeScript: RS256 access tokens, rotating refresh tokens with reuse detection, password reset, email verification and role-based access control, backed by PostgreSQL.",
    headline: { value: "93", unit: "tests", note: "against a PostgreSQL the repo starts itself" },
    problem:
      "Most portfolio auth is a login form over a users table. The parts that actually decide whether a session is safe — what happens when a refresh token is replayed, whether login answers faster for an address that does not exist, whether the rate limiter can be handed a fresh budget by setting a header — are the parts usually skipped.",
    built:
      "A refresh token carries the id of its own row, and rows issued from one login share a family id. Refreshing burns the presented row and issues its successor. If an already-rotated token is presented again the service cannot tell theft from replay, so it revokes the whole family and forces a fresh login — while leaving a different session of the same user untouched. The layering is deliberate: `app.ts` builds the Express application and nothing else, which is what lets the integration tests drive it with supertest without binding a port.",
    measured: [
      "93 tests, mostly integration through supertest — and the repository brings its own PostgreSQL via `embedded-postgres`, so there is no Docker, no system package and no account between a clone and a green suite",
      "The rate-limiter bypass was proven before it was fixed: 60 logins with unique forged `X-Forwarded-For` headers returned 40 × 429 unset, and 0 × 429 with trust-proxy misconfigured",
      "19 advisories (1 critical, 10 high, 6 moderate, 2 low) taken to `found 0 vulnerabilities`, at a cost of 52 transitive packages moved in one step",
      "Rotation, reuse detection revoking a family while a sibling session survives, the login timing oracle staying closed, the lockout schedule and RBAC are each covered by a test rather than asserted in a README",
    ],
    change:
      "Docker Compose and the CI workflow have not been executed as such — Docker was not available where this was built, so the image build and healthcheck ordering are unexercised. And the progressive lockout trades a hard-to-exploit credential attack for an easy-to-exploit availability one: an attacker willing to keep sending traffic can hold an account at the 15-minute cap. Both are at the bottom of the README rather than left to be discovered.",
    stack: [
      "TypeScript",
      "Express 5",
      "PostgreSQL",
      "TypeORM",
      "JWT (RS256)",
      "Jest",
      "Supertest",
      "Docker",
    ],
    repo: "https://github.com/vipinsao/mern-auth-service",
    demo: null,
    image: null,
  },
  {
    id: "social-share",
    index: "04",
    title: "Social Share",
    summary:
      "Upload an image once and get back the crop every social platform wants — processed locally with sharp, owner-scoped on disk, quota-capped.",
    headline: { value: "187", unit: "tests", note: "in ~5s, no keys, no database, no network" },
    problem:
      "Re-cropping by hand for every platform is slow and inconsistent. The first build had a worse problem than that: every account was handed every other account’s Cloudinary publicId, because the video query was unscoped and uploads used the public delivery type.",
    built:
      "Images are decoded, auto-rotated, EXIF-stripped and re-encoded to WebP by sharp, then stored under `storage/uploads/<userId>/<id>.webp`, so a later read is scoped to the caller by the path itself. Moving off a hosted media API is what made the output dimensions testable at all — the suite asserts them rather than trusting a URL parameter. Auth runs in middleware and again inside every route handler, so protection does not depend on the matcher alone, and every query is filtered by user id.",
    measured: [
      "187 assertions across 11 suites in about five seconds with no keys, no accounts, no database and no network",
      "A 119-byte SVG declaring `image/png` was decoded as an 8000×8000 image and cost 4,967ms of CPU; the format is now sniffed from the bytes",
      "A 250MB body was parsed in full at about 1GB RSS; metering the stream now returns 413 after 12MB and 28ms",
      "Upload is rate-limited per user, MIME-allowlisted, 10MB-capped and quota-checked, and writes the file before the row so a failed insert unlinks rather than orphans",
    ],
    change:
      "No live Cloudinary account was used at any point, so the video path is tested against a fake — that does not establish the real SDK behaves the way the fake does. And any video uploaded before the `authenticated` change is still public: those URLs still resolve, and no code change revokes them.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "sharp",
      "Clerk",
      "Cloudinary (video only)",
    ],
    repo: "https://github.com/vipinsao/ai-saas-webapp",
    demo: "https://ai-saas-webapp.vercel.app/",
    image: "/images/social-share.png",
  },
];

export const experience = [
  {
    id: "crfr",
    role: "AI Software Developer",
    company: "CR Fence & Rail",
    context:
      "In-house operations platform for a US e-commerce business selling on five marketplaces across the US and Canada",
    period: "Dec 2025 — Present",
    bullets: [
      "Sole author of five production subsystems, and of about 97% of the commits (171 of 176) to a fifteen-tab analytics dashboard. Between December 2025 and August 2026 that came to 2,000+ commits and 200+ SQL migrations of my own.",
      "Shipped Claude API features where the model is never the last line of defence: Claude Haiku ranks price-matched competitors, with a deterministic fallback when it is unavailable; a weekly Claude vision pass flags listings whose images show the wrong product; and review analysis drops any number that does not appear in the source text.",
      "Built pricing and Ads recommenders in which the model only proposes: hard floor, ceiling, margin and daily-change limits, a dry run, and a human approve-then-push step — 48 live pricing recommendations, 0 guardrail violations. After one automated listing write collapsed a product’s 9 images to 2, added a fail-closed gate on automated Amazon listing writes; it is unit-verified, but its revert path has not been rehearsed on a live listing.",
      "Own order tracking and shipments: find, root-cause and fix production bugs, working with parallel Claude Code agents and an independent QA pass on each fix — 16 tracked bugs closed, including shipping labels bought against stock that did not exist and an order sync timing out on 110,926 rows.",
      "Traced a dashboard that had been confidently wrong for months to a paginated query looping over ranged offsets with no ORDER BY. Pages overlapped, so after de-duplication the result was 11.4% short, revenue read 12.5% low, and the period-over-period trend read −8.2% where the truth was −14.9%. Fixed, then written up as a standing audit rule for every other ranged pagination loop in the codebase.",
      "Proved two separate causes behind an SMS pipeline that had been failing about 97% of sends for four weeks — non-production workers claiming production queue rows, and a sender number never attached to the messaging service — and fixed both. Built a Postgres-backed atomic budget governor for a 5,000-request monthly vendor plan that one uncapped job was burning in about two days, and routed all seven consumers through it.",
    ],
  },
  {
    id: "independent",
    role: "Independent Full-Stack Developer",
    company: "Self-directed projects and open source",
    context: null,
    period: "Jul 2023 — Dec 2025",
    bullets: [
      "Built and deployed full-stack applications end to end — Smart Ingredient Analyzer, Auth Service and Social Share among them — and went back to each in 2026 with an evaluation harness or a test suite that runs from a fresh clone.",
      "Two merged pull requests into open-source projects I do not maintain.",
      "Wrote three technical posts and published two documented n8n automation workflows.",
    ],
  },
];

export const openSource = [
  {
    project: "kestra",
    stars: "30k+★",
    pr: "PR #12605",
    merged: "Merged November 2025",
    text:
      "Picked up filed issue #12583: the Gantt view rendered “Invalid date” for executions that never started. Added defensive date parsing.",
    href: "https://github.com/kestra-io/kestra/pull/12605",
  },
  {
    project: "EXXETA Trufos",
    stars: null,
    pr: "PR #416",
    merged: "Merged June 2025",
    text:
      "HTTP header autocomplete for an open-source Electron REST client — +495/−74 across 8 files, over several rounds with the maintainer: a useMemo pass for re-render cost, then a rework from a portal-based dropdown to shadcn’s combobox.",
    href: "https://github.com/EXXETA/trufos/pull/416",
  },
];

export const writing = [
  {
    title:
      "JavaScript vs TypeScript: Why Everyone’s Shifting to TypeScript in 2025",
    where: "Dev.to",
    date: "July 2025",
    href: "https://dev.to/vipin_sao/javascript-vs-typescript-why-everyones-shifting-to-typescript-in-2025-3f50",
  },
  {
    title:
      "My First AI Workflow: Building My Personal Automation Assistant with n8n",
    where: "Medium",
    date: "September 2025",
    href: "https://medium.com/@vipinsao3/my-first-ai-workflow-building-my-personal-automation-assistant-with-n8n-1d59e160ed65",
  },
  {
    title:
      "The Ultimate Job Application Automation: AI-Powered Resume Matching",
    where: "Medium",
    date: "October 2025",
    href: "https://medium.com/@vipinsao3/the-ultimate-job-application-automation-from-zero-to-hero-with-ai-powered-resume-matching-3d7c999b7f49",
  },
  {
    title:
      "Two documented n8n workflows — a daily multi-channel opportunity digest, and a LinkedIn job scorer",
    where: "GitHub",
    date: "Repository",
    href: "https://github.com/vipinsao/workflows",
  },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering (CGPA 8.32/10)",
  institution: "SSIPMT Raipur",
  period: "2019 — 2023",
};
