export const blogData = [
    {
        slug: "stop-using-jwt-for-sessions",
        title: "Stop Using JWTs for Stateful Sessions",
        date: "2026-06-15",
        readTime: "8 min read",
        summary: "Why defaulting to JWTs for standard web authentication is a security anti-pattern, and how to implement secure, stateful session management with Redis.",
        tags: ["Authentication", "System Design", "Security"]
    },
    {
        slug: "ssrf-in-the-age-of-ai",
        title: "SSRF in the Age of AI Agents",
        date: "2026-05-22",
        readTime: "12 min read",
        summary: "Autonomous AI agents that fetch external URLs are trivially vulnerable to SSRF. How to build a zero-trust network boundary for LLM tool execution.",
        tags: ["AI Security", "SSRF", "Cloud Architecture"]
    },
    {
        slug: "reverse-engineering-android-ssl-pinning",
        title: "Bypassing Modern Android SSL Pinning with Frida",
        date: "2026-04-10",
        readTime: "15 min read",
        summary: "A deep dive into dynamic instrumentation. How to hook cryptographic functions in memory to bypass custom certificate pinning implementations.",
        tags: ["Mobile Security", "Reverse Engineering", "Frida"]
    },
    {
        slug: "building-zero-trust-gateways",
        title: "Architecting a Sub-15ms Zero-Trust Gateway",
        date: "2026-03-05",
        readTime: "10 min read",
        summary: "The engineering tradeoffs involved in building an inline security proxy that inspects payloads without adding unacceptable latency to the request lifecycle.",
        tags: ["Performance", "Zero-Trust", "Go"]
    },
    {
        slug: "threat-modeling-startups",
        title: "Pragmatic Threat Modeling for Pre-Seed Startups",
        date: "2026-02-18",
        readTime: "6 min read",
        summary: "You don't need a 50-page STRIDE document when you're trying to find product-market fit. Here's how to secure your MVP in 4 hours.",
        tags: ["Startups", "Threat Modeling", "AppSec"]
    }
];
