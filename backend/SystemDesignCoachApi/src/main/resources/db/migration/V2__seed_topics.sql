INSERT INTO topics
(
    name,
    slug,
    description,
    difficulty,
    display_order
)
VALUES
    (
        'Load Balancing',
        'load-balancing',
        'Learn how incoming traffic is distributed across multiple servers.',
        'BEGINNER',
        1
    ),
    (
        'Caching',
        'caching',
        'Learn how frequently accessed data can be served faster.',
        'BEGINNER',
        2
    ),
    (
        'Content Delivery Networks',
        'content-delivery-networks',
        'Learn how content is delivered from servers closer to users.',
        'BEGINNER',
        3
    ),
    (
        'Message Queues',
        'message-queues',
        'Learn how asynchronous communication improves reliability and scalability.',
        'INTERMEDIATE',
        4
    ),
    (
        'Database Replication',
        'database-replication',
        'Learn how database copies improve availability and read scalability.',
        'INTERMEDIATE',
        5
    ),
    (
        'Database Sharding',
        'database-sharding',
        'Learn how large datasets are divided across multiple database servers.',
        'ADVANCED',
        6
    );