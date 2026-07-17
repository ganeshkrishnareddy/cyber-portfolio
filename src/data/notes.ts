export const notesData = [
    {
        slug: "caching-strategies",
        title: "Distributed Caching Strategies",
        category: "System Design",
        lastUpdated: "2026-07-10",
        summary: "Write-through vs Write-behind vs Cache-aside. Cache invalidation patterns and dealing with the Thundering Herd problem using Redis.",
        content: `
            <h2>The Cache-Aside Pattern</h2>
            <p>The most common distributed caching pattern. The application code first asks the cache (e.g., Redis). If the data is missing (Cache Miss), the application queries the database, writes the result to the cache, and then returns it. Subsequent requests hit the cache (Cache Hit).</p>
            
            <h3>The Thundering Herd Problem</h3>
            <p>When a popular, computationally expensive key expires in the cache, hundreds of concurrent requests might simultaneously experience a Cache Miss. All of them will hit the database at the exact same time, potentially taking the database offline.</p>
            
            <h4>Mitigation: Mutex Locks</h4>
            <p>Implement a distributed lock in Redis. When a cache miss occurs, the application attempts to acquire a lock for that specific key. If successful, it queries the database and updates the cache. If it fails to acquire the lock, it means another thread is already fetching the data, so it sleeps for 50ms and retries the cache.</p>
            <pre><code>
// Conceptual pseudo-code
val = redis.get(key)
if (val == null) {
  if (redis.acquireLock(key + "_lock", 5s)) {
    val = db.query()
    redis.set(key, val, TTL)
    redis.releaseLock(key + "_lock")
  } else {
    sleep(50ms)
    return fetch(key) // Retry
  }
}
return val
            </code></pre>
        `
    },
    {
        slug: "rate-limiting",
        title: "API Rate Limiting Algorithms",
        category: "API Design",
        lastUpdated: "2026-06-28",
        summary: "Implementing Token Bucket, Leaky Bucket, and Sliding Window Log algorithms in Redis to prevent API abuse and DDoS attacks.",
        content: `
            <h2>The Sliding Window Algorithm</h2>
            <p>Fixed Window rate limiting (e.g., "100 requests per minute") allows an attacker to send 200 requests in a 1-second burst at the boundary of the minute window (100 at 0:59, 100 at 1:00). To prevent this burst traffic, we must use a Sliding Window.</p>
            
            <h3>Implementation in Redis via Sorted Sets</h3>
            <p>A highly accurate sliding window can be built using Redis Sorted Sets (ZSET). The key is the user's IP or API Key, the score is the current timestamp, and the value is a unique request ID (or the timestamp itself).</p>
            
            <ol>
                <li>Remove all elements with a score older than <em>current_time - window_size</em> using <code>ZREMRANGEBYSCORE</code>.</li>
                <li>Count the remaining elements in the set using <code>ZCARD</code>.</li>
                <li>If the count is less than the limit, add the new request using <code>ZADD</code> and return HTTP 200.</li>
                <li>If the count exceeds the limit, return HTTP 429 Too Many Requests.</li>
                <li>Set an expiry (TTL) on the sorted set equal to the window size so inactive keys clean themselves up.</li>
            </ol>
            
            <p><strong>Note:</strong> To avoid race conditions, these steps must be executed atomically using a Redis Lua script or a MULTI/EXEC pipeline.</p>
        `
    },
    {
        slug: "idempotency",
        title: "Designing Idempotent APIs",
        category: "API Design",
        lastUpdated: "2026-05-14",
        summary: "How to safely handle retries in distributed systems using Idempotency Keys and distributed locking mechanisms."
    },
    {
        slug: "message-queues",
        title: "Event-Driven Architecture",
        category: "Microservices",
        lastUpdated: "2026-04-30",
        summary: "Decoupling services using RabbitMQ and Kafka. Handling dead-letter queues, message ordering, and exactly-once delivery semantics."
    },
    {
        slug: "database-sharding",
        title: "Database Sharding & Partitioning",
        category: "Data Engineering",
        lastUpdated: "2026-03-12",
        summary: "Horizontal vs Vertical scaling. Consistent hashing algorithms for distributing load across database clusters without downtime."
    }
];
