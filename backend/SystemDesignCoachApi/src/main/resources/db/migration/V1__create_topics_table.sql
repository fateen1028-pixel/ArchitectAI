CREATE TABLE topics
(
    id            BIGSERIAL PRIMARY KEY,
    name          VARCHAR(100) NOT NULL UNIQUE,
    slug          VARCHAR(100) NOT NULL UNIQUE,
    description   VARCHAR(500) NOT NULL,
    difficulty    VARCHAR(20)  NOT NULL,
    display_order INTEGER      NOT NULL,
    created_at    TIMESTAMPTZ  NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_topic_difficulty
        CHECK (
            difficulty IN (
                           'BEGINNER',
                           'INTERMEDIATE',
                           'ADVANCED'
                )
            ),

    CONSTRAINT chk_topic_display_order
        CHECK (display_order > 0)
);