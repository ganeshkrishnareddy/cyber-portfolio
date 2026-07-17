export const projectsData = [
    {
        slug: "flowmatch",
        title: "FlowMatch",
        shortDescription: "AI-powered platform to build and orchestrate autonomous AI agent workflows.",
        overview: "FlowMatch is a visual orchestration engine designed to manage state and execution for autonomous AI agents. It provides a node-based interface for building complex multi-agent workflows, combined with real-time telemetry and execution logging.",
        problem: "Orchestrating autonomous AI agents requires maintaining state across distributed nodes while ensuring secure, isolated execution environments. Existing tools were either too rigid (no code) or lacked proper observability for agent hallucinations and failures.",
        requirements: "1. Sub-50ms latency for agent state updates. 2. Secure isolation of execution environments. 3. Visual node-based workflow builder. 4. Real-time WebSocket telemetry.",
        architecture: `
graph TD
    A[Browser Client] -->|WebSocket / HTTPS| B(API Gateway / Next.js)
    B --> C{Authentication}
    C -->|Valid| D[Workflow Engine]
    D --> E[(Redis State Store)]
    D --> F[Agent Execution Nodes]
    F --> G[(PostgreSQL)]
    F --> H[External LLM APIs]
        `,
        database: "PostgreSQL (Prisma ORM) for persistent workflow definitions and user accounts. Redis for high-throughput, ephemeral agent state and WebSocket pub/sub.",
        apiDesign: "RESTful architecture for CRUD operations on workflows. WebSocket connections for real-time execution logs and state mutations.",
        securityDecisions: "1. Enforced strict RBAC to prevent cross-tenant workflow execution. 2. Implemented rate limiting on the LLM API proxy to prevent billing exhaustion attacks. 3. Scrubbed sensitive API keys from logs before broadcasting over WebSockets.",
        tradeoffs: "Chose eventual consistency for the real-time logging UI (via Redis) to guarantee sub-10ms agent execution latency on the backend, accepting that logs might arrive slightly out of order under extreme load.",
        performance: "Tested to support 500 concurrent agent workflows with <50ms message propagation and 99.9% uptime during load testing.",
        deployment: "Containerized the agent execution environment using Docker. Next.js frontend and API routes deployed on Vercel. Managed PostgreSQL on Supabase.",
        lessonsLearned: "Discovered that WebSocket connection drops in serverless environments required building a robust client-side reconnection and event queuing mechanism.",
        futureImprovements: "Migrating the core execution engine to Rust for memory safety and significantly lower baseline resource consumption.",
        tags: ["AI Agents", "Workflow Orchestration", "Next.js", "Full-Stack"],
        githubUrl: "https://github.com/ganeshkrishnareddy/FlowMatch"
    },
    {
        slug: "pixopdf",
        title: "PixoPDF (ZeroPDF)",
        shortDescription: "A fast, client-side PDF processing suite for editing, merging, and converting PDF documents.",
        overview: "PixoPDF is a privacy-first web application that utilizes WebAssembly to process PDF files entirely within the user's browser, ensuring that sensitive documents never touch external servers.",
        problem: "Many online PDF tools compromise privacy by uploading sensitive documents (like tax returns or legal contracts) to external servers for processing. This creates a massive data exfiltration risk.",
        requirements: "1. 100% client-side execution. 2. Support for merging, splitting, and compressing PDFs. 3. Near-native performance for files up to 50MB.",
        architecture: `
graph TD
    A[Browser DOM] -->|File API| B(Next.js Client)
    B --> C{WebAssembly Worker}
    C -->|PDF-lib| D[Memory Buffer]
    D --> E[Blob URL Download]
        `,
        database: "None. Zero-state architecture. All operations happen ephemerally in the browser's RAM.",
        apiDesign: "No external APIs for processing. Utilized Web Workers to offload heavy WebAssembly computations from the main UI thread.",
        securityDecisions: "1. CSP (Content Security Policy) strictly forbids outbound data connections, mathematically proving zero data exfiltration. 2. Implemented strict memory limits to prevent browser crashing (OOM) on malicious files.",
        tradeoffs: "Traded broader device compatibility (e.g., very old mobile devices with limited RAM) for absolute privacy guarantees by forcing client-side processing.",
        performance: "Processes 20MB PDFs in under 2 seconds. Zero network latency.",
        deployment: "Static site generation (SSG) deployed on Vercel edge network for global sub-100ms load times.",
        lessonsLearned: "Managing memory leaks in WebAssembly within a React environment is non-trivial. Required deep dive into manual garbage collection and object URL revocation.",
        futureImprovements: "Implementing a local-first encrypted storage feature via IndexedDB to allow users to save workspaces safely.",
        tags: ["WebAssembly", "Privacy-First", "Client-Side", "Next.js"],
        githubUrl: "https://github.com/ganeshkrishnareddy/PixoPDF"
    },
    {
        slug: "instademox",
        title: "InstaDemoX",
        shortDescription: "Interactive product demo creation platform for SaaS companies.",
        overview: "InstaDemoX empowers marketing and sales teams to create highly interactive product walkthroughs by capturing DOM states rather than recording heavy video files.",
        problem: "Creating engaging product demonstrations requires significant engineering resources to build custom sandboxes, or forces users to watch non-interactive video recordings.",
        requirements: "1. Chrome extension to capture accurate DOM snapshots. 2. Web editor to add interactive hotspots. 3. Embeddable player for client websites.",
        architecture: `
graph TD
    A[Chrome Extension] -->|DOM Serialization| B(API Gateway)
    B --> C[(PostgreSQL / Supabase)]
    C --> D[Next.js Editor App]
    D --> E[Iframe Embed Player]
        `,
        database: "Supabase (PostgreSQL) for storing serialized DOM nodes, user accounts, and analytics events.",
        apiDesign: "REST API for managing demo assets. Lightweight analytics ping endpoint for tracking user engagement inside the embedded player.",
        securityDecisions: "1. Implemented strict HTML sanitization (DOMPurify) on the serialized DOM before rendering in the player to prevent Stored XSS attacks. 2. Enforced CORS policies on the embed player API.",
        tradeoffs: "Opted for DOM capturing instead of video recording. This reduced storage costs by 99% and allowed interactivity, but required writing complex CSS mutation observers to handle dynamic styling.",
        performance: "Embed player script is <30kb gzipped. Average demo loads in under 1 second.",
        deployment: "Vercel for the web app, Chrome Web Store for the capture extension, Supabase for backend.",
        lessonsLearned: "Shadow DOM boundaries break standard serialization libraries. Had to write custom traversal logic to capture modern web components.",
        futureImprovements: "Adding AI-generated voiceovers synchronized with the user's click path.",
        tags: ["SaaS", "DOM Capture", "Interactive UI", "React"],
        githubUrl: "https://github.com/ganeshkrishnareddy/InstaDemoX"
    },
    {
        slug: "launchwise",
        title: "LaunchWise",
        shortDescription: "All-in-one product launch and marketing automation platform for creators.",
        overview: "LaunchWise centralizes waitlist management, email automation, and conversion tracking into a single dashboard, streamlining the go-to-market motion for indie hackers.",
        problem: "Founders struggle to coordinate multiple fragmented marketing channels (Mailchimp, Google Analytics, Typeform) during critical product launches, leading to lost leads and poor conversion visibility.",
        requirements: "1. High-throughput waitlist capture API. 2. Email automation engine. 3. Real-time conversion dashboard.",
        architecture: `
graph TD
    A[Public Waitlist Form] -->|POST| B(Edge API / Next.js)
    B --> C[(PostgreSQL)]
    B --> D[Email Service Provider]
    E[Founder Dashboard] -->|Auth| B
        `,
        database: "PostgreSQL for relational data integrity regarding users, waitlist entries, and email campaign statuses.",
        apiDesign: "Edge API routes for the public waitlist capture to handle high concurrency during viral launches. Standard REST for the authenticated dashboard.",
        securityDecisions: "1. Implemented strict rate-limiting on the waitlist endpoints to mitigate bot spam. 2. Server-side validation of all form inputs to prevent SQL injection and XSS.",
        tradeoffs: "Chose Serverless functions over a long-running Express server to optimize for cost and auto-scaling during traffic spikes, accepting slight cold-start latency.",
        performance: "Waitlist API endpoint handles 1000 requests/sec with average 40ms response time.",
        deployment: "Vercel edge network for APIs, Supabase database.",
        lessonsLearned: "Third-party email delivery services (like Resend/Sendgrid) have strict limits for new accounts. Had to implement queueing and batching to avoid API rate limits.",
        futureImprovements: "Integrating a Stripe billing portal for premium tiers and webhook support for Zapier integration.",
        tags: ["Marketing Automation", "SaaS", "Analytics", "Full-Stack"],
        githubUrl: "https://github.com/ganeshkrishnareddy/LaunchWise"
    }
];
