CREATE TABLE challenges
(
    id                BIGSERIAL PRIMARY KEY,
    title             VARCHAR(150) NOT NULL UNIQUE,
    slug              VARCHAR(150) NOT NULL UNIQUE,
    description       TEXT         NOT NULL,
    difficulty        VARCHAR(20)  NOT NULL,
    estimated_minutes INTEGER      NOT NULL,
    display_order     INTEGER      NOT NULL,
    created_at        TIMESTAMPTZ  NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_challenge_difficulty
        CHECK (
            difficulty IN (
                           'BEGINNER',
                           'INTERMEDIATE',
                           'ADVANCED'
                )
            ),

    CONSTRAINT chk_challenge_estimated_minutes
        CHECK (estimated_minutes > 0),

    CONSTRAINT chk_challenge_display_order
        CHECK (display_order > 0)
);


CREATE TABLE challenge_requirements
(
    id               BIGSERIAL PRIMARY KEY,
    challenge_id     BIGINT       NOT NULL,
    requirement_type VARCHAR(30)  NOT NULL,
    description      VARCHAR(500) NOT NULL,
    display_order    INTEGER      NOT NULL,

    CONSTRAINT fk_requirement_challenge
        FOREIGN KEY (challenge_id)
            REFERENCES challenges (id)
            ON DELETE CASCADE,

    CONSTRAINT chk_requirement_type
        CHECK (
            requirement_type IN (
                                 'FUNCTIONAL',
                                 'NON_FUNCTIONAL'
                )
            ),

    CONSTRAINT chk_requirement_display_order
        CHECK (display_order > 0),

    CONSTRAINT uq_requirement_order
        UNIQUE (
                challenge_id,
                requirement_type,
                display_order
            )
);


CREATE TABLE challenge_expected_components
(
    id            BIGSERIAL PRIMARY KEY,
    challenge_id  BIGINT       NOT NULL,
    component_key VARCHAR(50)  NOT NULL,
    label         VARCHAR(100) NOT NULL,
    reason        VARCHAR(500) NOT NULL,
    display_order INTEGER      NOT NULL,

    CONSTRAINT fk_expected_component_challenge
        FOREIGN KEY (challenge_id)
            REFERENCES challenges (id)
            ON DELETE CASCADE,

    CONSTRAINT uq_expected_component_key
        UNIQUE (
                challenge_id,
                component_key
            ),

    CONSTRAINT uq_expected_component_order
        UNIQUE (
                challenge_id,
                display_order
            ),

    CONSTRAINT chk_expected_component_display_order
        CHECK (display_order > 0)
);


CREATE INDEX idx_challenge_requirements_challenge_id
    ON challenge_requirements (challenge_id);


CREATE INDEX idx_expected_components_challenge_id
    ON challenge_expected_components (challenge_id);