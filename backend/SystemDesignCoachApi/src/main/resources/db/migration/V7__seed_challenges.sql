INSERT INTO challenges
(
    title,
    slug,
    description,
    difficulty,
    estimated_minutes,
    display_order
)
VALUES
    (
        'Design a URL Shortener',
        'design-url-shortener',
        'Design a service that converts long URLs into short links and redirects users efficiently.',
        'BEGINNER',
        30,
        1
    ),
    (
        'Design a Real-Time Chat Application',
        'design-real-time-chat-application',
        'Design a messaging platform that supports direct messages, online presence and message delivery.',
        'INTERMEDIATE',
        45,
        2
    ),
    (
        'Design a Video Streaming Platform',
        'design-video-streaming-platform',
        'Design a platform that stores, processes and delivers video content to users around the world.',
        'ADVANCED',
        60,
        3
    );


INSERT INTO challenge_requirements
(
    challenge_id,
    requirement_type,
    description,
    display_order
)
VALUES
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-url-shortener'
        ),
        'FUNCTIONAL',
        'Users can submit a long URL and receive a unique short URL.',
        1
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-url-shortener'
        ),
        'FUNCTIONAL',
        'Opening the short URL redirects the user to the original URL.',
        2
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-url-shortener'
        ),
        'FUNCTIONAL',
        'Short URLs may optionally expire after a configured duration.',
        3
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-url-shortener'
        ),
        'NON_FUNCTIONAL',
        'Redirect requests should have very low latency.',
        1
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-url-shortener'
        ),
        'NON_FUNCTIONAL',
        'The system should support millions of stored URLs.',
        2
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-url-shortener'
        ),
        'NON_FUNCTIONAL',
        'The redirect service should remain highly available.',
        3
    );


INSERT INTO challenge_expected_components
(
    challenge_id,
    component_key,
    label,
    reason,
    display_order
)
VALUES
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-url-shortener'
        ),
        'LOAD_BALANCER',
        'Load Balancer',
        'Distributes incoming creation and redirect requests across application servers.',
        1
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-url-shortener'
        ),
        'APPLICATION_SERVER',
        'URL Service',
        'Creates short codes and resolves existing short URLs.',
        2
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-url-shortener'
        ),
        'CACHE',
        'Cache',
        'Stores frequently accessed short-code mappings for fast redirects.',
        3
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-url-shortener'
        ),
        'DATABASE',
        'URL Database',
        'Persistently stores mappings between short codes and original URLs.',
        4
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-url-shortener'
        ),
        'ID_GENERATOR',
        'Unique ID Generator',
        'Generates unique identifiers without collisions across multiple servers.',
        5
    );


INSERT INTO challenge_requirements
(
    challenge_id,
    requirement_type,
    description,
    display_order
)
VALUES
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-real-time-chat-application'
        ),
        'FUNCTIONAL',
        'Users can send and receive direct messages in real time.',
        1
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-real-time-chat-application'
        ),
        'FUNCTIONAL',
        'Users can view whether another user is online.',
        2
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-real-time-chat-application'
        ),
        'FUNCTIONAL',
        'Messages are available after users reconnect.',
        3
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-real-time-chat-application'
        ),
        'NON_FUNCTIONAL',
        'Message delivery should have low latency.',
        1
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-real-time-chat-application'
        ),
        'NON_FUNCTIONAL',
        'The application should support many concurrent connections.',
        2
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-real-time-chat-application'
        ),
        'NON_FUNCTIONAL',
        'Messages must not be lost when a service temporarily fails.',
        3
    );



INSERT INTO challenge_expected_components
(
    challenge_id,
    component_key,
    label,
    reason,
    display_order
)
VALUES
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-real-time-chat-application'
        ),
        'LOAD_BALANCER',
        'Load Balancer',
        'Distributes client connections across chat servers.',
        1
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-real-time-chat-application'
        ),
        'WEBSOCKET_SERVER',
        'WebSocket Server',
        'Maintains real-time bidirectional connections with clients.',
        2
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-real-time-chat-application'
        ),
        'MESSAGE_BROKER',
        'Message Broker',
        'Routes messages between users connected to different servers.',
        3
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-real-time-chat-application'
        ),
        'DATABASE',
        'Message Database',
        'Stores message history for offline access and reconnection.',
        4
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-real-time-chat-application'
        ),
        'PRESENCE_SERVICE',
        'Presence Service',
        'Tracks online status and active user connections.',
        5
    );


INSERT INTO challenge_requirements
(
    challenge_id,
    requirement_type,
    description,
    display_order
)
VALUES
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'FUNCTIONAL',
        'Creators can upload video files.',
        1
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'FUNCTIONAL',
        'Users can stream videos using different quality levels.',
        2
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'FUNCTIONAL',
        'Users can search for uploaded videos.',
        3
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'NON_FUNCTIONAL',
        'Video playback should have low startup latency.',
        1
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'NON_FUNCTIONAL',
        'The platform should serve users from multiple geographic regions.',
        2
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'NON_FUNCTIONAL',
        'Large video uploads should be processed asynchronously.',
        3
    );



INSERT INTO challenge_expected_components
(
    challenge_id,
    component_key,
    label,
    reason,
    display_order
)
VALUES
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'API_GATEWAY',
        'API Gateway',
        'Routes upload, metadata, search and playback requests.',
        1
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'OBJECT_STORAGE',
        'Object Storage',
        'Stores original and processed video files.',
        2
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'MESSAGE_QUEUE',
        'Processing Queue',
        'Buffers video-processing tasks.',
        3
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'TRANSCODING_SERVICE',
        'Transcoding Service',
        'Produces multiple video resolutions and formats.',
        4
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'CDN',
        'Content Delivery Network',
        'Delivers processed video files from locations close to users.',
        5
    ),
    (
        (
            SELECT id
            FROM challenges
            WHERE slug = 'design-video-streaming-platform'
        ),
        'DATABASE',
        'Metadata Database',
        'Stores video titles, owners, status and storage locations.',
        6
    );

