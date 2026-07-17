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
        summary: "How to safely handle retries in distributed systems using Idempotency Keys and distributed locking mechanisms.",
        content: `
            <h2>The Network is Unreliable</h2>
            <p>In distributed systems, a network timeout does not mean the request failed. If a client sends a <code>POST /charge</code> request and the connection drops, the client doesn't know if the server charged the credit card or not. If the client retries, the user might be double-charged. This is why financial and state-mutating APIs must be Idempotent.</p>
            
            <h3>Idempotency Keys</h3>
            <p>The standard solution (popularized by Stripe) is for the client to generate a unique UUID for every operation and pass it in a header, e.g., <code>Idempotency-Key: &lt;UUID&gt;</code>.</p>
            <p>The server flow looks like this:</p>
            <ol>
                <li>Extract the Idempotency Key from the request header.</li>
                <li>Check the database (or Redis) to see if this key has already been processed.</li>
                <li><strong>If YES:</strong> Return the cached HTTP response from the original successful request.</li>
                <li><strong>If NO:</strong> Acquire a distributed lock on the Idempotency Key to prevent concurrent retries from processing simultaneously.</li>
                <li>Process the business logic (e.g., charge the card).</li>
                <li>Save the result to the database mapped to the Idempotency Key, and return the response.</li>
            </ol>
            
            <p>Always enforce an expiry (e.g., 24 hours) on Idempotency Keys so your cache does not grow infinitely.</p>
        `
    },
    {
        slug: "message-queues",
        title: "Event-Driven Architecture",
        category: "Microservices",
        lastUpdated: "2026-04-30",
        summary: "Decoupling services using RabbitMQ and Kafka. Handling dead-letter queues, message ordering, and exactly-once delivery semantics.",
        content: `
            <h2>Decoupling with Queues</h2>
            <p>Synchronous HTTP calls between microservices create tightly coupled systems that fail cascadingly. If Service A calls Service B synchronously, and Service B is down, Service A fails too. Event-driven architecture solves this by introducing a Message Broker (like RabbitMQ or Apache Kafka) in the middle.</p>
            
            <h3>RabbitMQ vs Kafka</h3>
            <ul>
                <li><strong>RabbitMQ:</strong> A "smart broker, dumb consumer" model. Best for traditional task queueing where messages are ephemeral. It pushes messages to consumers and deletes them once acknowledged.</li>
                <li><strong>Kafka:</strong> A "dumb broker, smart consumer" model. Best for high-throughput event streaming. It persists messages to disk as an immutable append-only log. Consumers track their own offsets and can "replay" events from the past.</li>
            </ul>
            
            <h3>Handling Failures: Dead-Letter Queues (DLQ)</h3>
            <p>If a consumer receives a message but crashes during processing (e.g., due to a malformed payload or a database timeout), it shouldn't just drop the message or retry infinitely. Instead, after N failed retries, the message should be routed to a Dead-Letter Queue. Engineers can monitor the DLQ, fix the underlying bug, and then replay the messages back into the main queue.</p>
        `
    },
    {
        slug: "database-sharding",
        title: "Database Sharding & Partitioning",
        category: "Data Engineering",
        lastUpdated: "2026-03-12",
        summary: "Horizontal vs Vertical scaling. Consistent hashing algorithms for distributing load across database clusters without downtime.",
        content: `
            <h2>The Limits of Vertical Scaling</h2>
            <p>When a relational database becomes the bottleneck, the first instinct is Vertical Scaling: buying a bigger server with more RAM and CPU. However, vertical scaling has physical limits and becomes exponentially expensive. The ultimate solution is Horizontal Scaling via Sharding.</p>
            
            <h3>What is Sharding?</h3>
            <p>Sharding involves splitting a single logical database across multiple physical database nodes (shards). For example, in a multi-tenant SaaS, you might put Users 1-1000 on Database A, and Users 1001-2000 on Database B.</p>
            
            <h3>The Sharding Key (Shard Key)</h3>
            <p>Choosing the right shard key is the most critical decision in database architecture. If you shard by <code>Country</code>, and 90% of your users are in the US, one shard will be overwhelmed while the others sit idle (a "hot spot"). A good shard key distributes data uniformly across nodes.</p>
            
            <h2>Consistent Hashing</h2>
            <p>If you use a simple modulo hash (e.g., <code>hash(user_id) % num_servers</code>), adding or removing a database server changes the modulus, requiring you to re-shuffle nearly all your data.</p>
            <p><strong>Consistent Hashing</strong> solves this by mapping both the servers and the data keys onto a conceptual circle (a hash ring). When a new server is added, it only takes over a portion of the keys from its immediate neighbor on the ring, minimizing data migration and preventing downtime.</p>
        `
    }
];
