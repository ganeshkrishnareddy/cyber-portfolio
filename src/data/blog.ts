export const blogData = [
    {
        slug: "stop-using-jwt-for-sessions",
        title: "Stop Using JWTs for Stateful Sessions",
        date: "2026-06-15",
        readTime: "8 min read",
        summary: "Why defaulting to JWTs for standard web authentication is a security anti-pattern, and how to implement secure, stateful session management with Redis.",
        tags: ["Authentication", "System Design", "Security"],
        content: `
            <h2>The Anti-Pattern</h2>
            <p>It has become a pervasive trend in modern web development to use JSON Web Tokens (JWTs) as standard session cookies. Developers often reach for JWTs because they are "stateless" and supposedly easier to scale. However, when used for typical user session management in web applications, JWTs introduce significant security and operational overhead.</p>
            
            <h3>Why JWTs Fail as Sessions</h3>
            <ul>
                <li><strong>Revocation is Hard:</strong> Because JWTs are stateless, you cannot simply "invalidate" a session on the server. If a token is compromised, it remains valid until it expires. To solve this, teams often build a token blocklist—which immediately re-introduces the state they were trying to avoid.</li>
                <li><strong>Token Size:</strong> JWTs can be quite large, especially if they carry numerous claims. Sending a 1KB token on every single HTTP request adds unnecessary overhead compared to a 32-byte opaque session ID.</li>
                <li><strong>Data Staleness:</strong> If user roles or permissions change, the JWT remains unaware until it is refreshed. This can lead to privilege escalation if a user's access is revoked but their token is still active.</li>
            </ul>

            <h2>The Solution: Opaque Session IDs + Redis</h2>
            <p>For 99% of standard web applications, a traditional stateful session management system is far superior.</p>
            <ol>
                <li>The server generates a cryptographically secure, random <strong>Opaque String</strong> (e.g., using <code>crypto.randomBytes(32)</code>).</li>
                <li>This string is sent to the client and stored in a <code>HttpOnly, Secure, SameSite=Strict</code> cookie.</li>
                <li>The server maps this string to the user's session data in an in-memory datastore like Redis.</li>
            </ol>
            
            <p>This approach gives you instantaneous revocation, perfectly fresh data on every request, and minimal payload size over the wire. Save JWTs for what they are actually good for: Server-to-Server authentication and short-lived, single-use delegated authorization (like OAuth2).</p>
        `
    },
    {
        slug: "ssrf-in-the-age-of-ai",
        title: "SSRF in the Age of AI Agents",
        date: "2026-05-22",
        readTime: "12 min read",
        summary: "Autonomous AI agents that fetch external URLs are trivially vulnerable to SSRF. How to build a zero-trust network boundary for LLM tool execution.",
        tags: ["AI Security", "SSRF", "Cloud Architecture"],
        content: `
            <h2>The New Threat Landscape</h2>
            <p>Server-Side Request Forgery (SSRF) has historically been a critical vulnerability, but the rise of autonomous AI agents has poured gasoline on the fire. When we give LLMs the ability to browse the web or execute API calls via tools, we are essentially building a proxy controlled by natural language.</p>
            
            <h3>The Naive Implementation</h3>
            <p>Consider a typical agentic workflow where an LLM is given a <code>fetch_url</code> tool. A malicious user can prompt the agent: <em>"Summarize the content located at http://169.254.169.254/latest/meta-data/iam/security-credentials/"</em>. If the agent's execution environment isn't tightly locked down, it will happily fetch AWS metadata credentials and return them to the attacker.</p>

            <h2>Architecting a Zero-Trust Boundary</h2>
            <p>To safely deploy web-browsing AI agents, you must assume the LLM is actively malicious. Mitigation requires defense-in-depth:</p>
            <ul>
                <li><strong>Dedicated Egress Proxies:</strong> Never allow the application server running the LLM orchestrator to make direct external requests. Route all agent traffic through a dedicated egress proxy (like Smokescreen or a strict Squid configuration).</li>
                <li><strong>Network Isolation:</strong> Run the proxy in a completely isolated VPC with no route to internal infrastructure, databases, or cloud metadata services.</li>
                <li><strong>DNS Resolution Filtering:</strong> Block the resolution of internal IPs, loopback addresses (127.0.0.1), and cloud metadata IPs (169.254.169.254) at the DNS level.</li>
                <li><strong>Enforce HTTPS:</strong> Disallow plain HTTP and non-standard ports to prevent protocol smuggling.</li>
            </ul>
            <p>Building secure AI systems requires treating the AI as an untrusted user. By implementing hard network boundaries, we can enable powerful agentic capabilities without compromising internal infrastructure.</p>
        `
    },
    {
        slug: "reverse-engineering-android-ssl-pinning",
        title: "Bypassing Modern Android SSL Pinning with Frida",
        date: "2026-04-10",
        readTime: "15 min read",
        summary: "A deep dive into dynamic instrumentation. How to hook cryptographic functions in memory to bypass custom certificate pinning implementations.",
        tags: ["Mobile Security", "Reverse Engineering", "Frida"],
        content: `
            <h2>The Cat and Mouse Game of SSL Pinning</h2>
            <p>SSL Pinning is a fundamental defense mechanism in mobile applications used to prevent Man-In-The-Middle (MITM) attacks. Instead of trusting any certificate signed by the device's root CA store, the application is hardcoded to trust only the specific public key or certificate of the backend server.</p>
            <p>However, from a reverse engineering perspective, anything running on a client-controlled device can be manipulated. If an attacker has root access to the device, they can use dynamic instrumentation frameworks to hook into the SSL verification logic at runtime and force it to return true.</p>
            
            <h3>Introduction to Frida</h3>
            <p>Frida is a dynamic code instrumentation toolkit. It lets you inject snippets of JavaScript into native apps on Windows, macOS, GNU/Linux, iOS, Android, and QNX. For Android, it uses the V8 engine to execute JavaScript that interacts directly with the Java Native Interface (JNI) and the Dalvik/ART virtual machine.</p>

            <h2>Bypassing OkHttp3 Pinning</h2>
            <p>Modern Android applications frequently use the <code>OkHttpClient</code> library, which has built-in support for Certificate Pinning. By writing a Frida script, we can hook the <code>CertificatePinner.check()</code> method and neutralize it.</p>
            
            <pre><code>
Java.perform(function () {
    var CertificatePinner = Java.use("okhttp3.CertificatePinner");
    
    // Hook the check method
    CertificatePinner.check.overload('java.lang.String', 'java.util.List').implementation = function (hostname, peerCertificates) {
        console.log("[*] Bypassing OkHttp3 Pinning for: " + hostname);
        // Do nothing, effectively bypassing the check
        return;
    };
});
            </code></pre>
            
            <h3>Advanced Evasion: Native Hooking</h3>
            <p>When developers implement custom C/C++ SSL validation (via JNI) to evade Java-level hooking, we must drop down to native hooking. Using Frida's <code>Interceptor</code> API, we can hook functions inside <code>libssl.so</code> directly, such as <code>SSL_CTX_set_custom_verify</code>, manipulating the return values in memory before the application even processes them.</p>
            <p>Ultimately, client-side security is about raising the bar, not creating impenetrable walls. By understanding how these bypasses work, we can build stronger, multi-layered defensive architectures.</p>
        `
    },
    {
        slug: "building-zero-trust-gateways",
        title: "Architecting a Sub-15ms Zero-Trust Gateway",
        date: "2026-03-05",
        readTime: "10 min read",
        summary: "The engineering tradeoffs involved in building an inline security proxy that inspects payloads without adding unacceptable latency to the request lifecycle.",
        tags: ["Performance", "Zero-Trust", "Go"],
        content: `
            <h2>The Latency Problem in Security</h2>
            <p>Security teams often clash with engineering teams over one metric: Latency. When you introduce an inline security gateway (like a WAF or a Zero-Trust proxy) to inspect incoming payloads, you inevitably add processing time to every single request.</p>
            <p>In high-frequency trading or high-throughput API environments, adding 100ms of latency for regex matching is unacceptable. The challenge is building a proxy that can perform deep packet inspection (DPI) and heuristic analysis in under 15 milliseconds.</p>
            
            <h3>Choosing the Right Stack: Go vs. Rust</h3>
            <p>For building ultra-fast network proxies, the language choice is critical. While Rust offers deterministic memory management, Go's incredibly mature <code>net/http</code> standard library and goroutine scheduling make it the industry standard for proxies (e.g., Traefik, Caddy, Envoy's control plane).</p>
            
            <h2>Optimizing the Hot Path</h2>
            <p>To achieve sub-15ms latency, every microsecond on the "hot path" (the direct line of code handling a request) counts.</p>
            <ol>
                <li><strong>Zero-Allocation Parsing:</strong> Standard JSON unmarshaling allocates memory, triggering the Garbage Collector (GC). By using zero-allocation parsers like <code>fastjson</code>, we avoid GC pauses entirely during payload inspection.</li>
                <li><strong>Aho-Corasick Automaton:</strong> When scanning a payload against thousands of malicious keywords or signatures, running thousands of regular expressions sequentially is O(n*m). Implementing the Aho-Corasick algorithm allows us to search for all keywords simultaneously in a single pass of O(n).</li>
                <li><strong>Connection Pooling:</strong> Reusing TCP connections to the upstream services prevents the massive overhead of TLS handshakes on every request.</li>
            </ol>
            
            <p>By shifting complex, stateful analysis (like rate limiting) to asynchronous worker queues (via Redis) and keeping the inline proxy focused strictly on stateless heuristic evaluation, we successfully deployed a zero-trust gateway that maintains a p99 latency of just 12ms under load.</p>
        `
    },
    {
        slug: "threat-modeling-startups",
        title: "Pragmatic Threat Modeling for Pre-Seed Startups",
        date: "2026-02-18",
        readTime: "6 min read",
        summary: "You don't need a 50-page STRIDE document when you're trying to find product-market fit. Here's how to secure your MVP in 4 hours.",
        tags: ["Startups", "Threat Modeling", "AppSec"],
        content: `
            <h2>The Startup Security Dilemma</h2>
            <p>Pre-seed startups operate under extreme resource constraints. When survival depends on finding product-market fit within six months, spending three weeks conducting a comprehensive STRIDE threat model on an MVP that might pivot next week is an irresponsible use of engineering time.</p>
            <p>However, completely ignoring security leads to devastating breaches that kill startups instantly. The solution is pragmatic, highly-focused threat modeling.</p>
            
            <h3>The 4-Hour Threat Model</h3>
            <p>Instead of mapping every theoretical attack vector, focus purely on existential risks. Use a whiteboard and answer these four questions:</p>
            <ol>
                <li><strong>What is our most radioactive data?</strong> (e.g., PII, API keys, financial records). Where is it stored, and who has access?</li>
                <li><strong>What action, if performed maliciously, would destroy our business?</strong> (e.g., draining user wallets, deleting the production database).</li>
                <li><strong>How do we authenticate and authorize users?</strong> Are we rolling our own crypto, or using a proven provider like Auth0 or Supabase?</li>
                <li><strong>What third-party dependencies have access to our data?</strong></li>
            </ol>
            
            <h2>Minimum Viable Security (MVS)</h2>
            <p>Once you identify the existential threats, implement the Minimum Viable Security controls:</p>
            <ul>
                <li><strong>Enforce MFA for all developers.</strong></li>
                <li><strong>Never store secrets in code.</strong> Use a secrets manager (AWS Secrets Manager, Vercel Env Vars).</li>
                <li><strong>Use parameterized queries.</strong> SQL Injection should not exist in modern codebases; use an ORM (Prisma, Drizzle) or prepared statements.</li>
                <li><strong>Implement basic rate limiting.</strong> Protect your login endpoints and expensive AI API calls from brute-forcing and billing exhaustion.</li>
            </ul>
            <p>Security is a spectrum, not a binary state. By adopting a pragmatic approach, startups can protect themselves from 99% of automated attacks while maintaining the velocity needed to succeed.</p>
        `
    }
];
