CREATE TABLE attempts
(
    id                   UUID PRIMARY KEY,
    challenge_id         BIGINT      NOT NULL,
    design_json          JSONB       NOT NULL,
    explanation          TEXT        NOT NULL,
    public_checks_json   JSONB       NOT NULL,
    internal_checks_json JSONB       NOT NULL,
    status               VARCHAR(30) NOT NULL,
    score                INTEGER,
    feedback_json        JSONB,
    created_at           TIMESTAMPTZ NOT NULL,
    updated_at           TIMESTAMPTZ NOT NULL,

    CONSTRAINT fk_attempt_challenge
        FOREIGN KEY (challenge_id)
            REFERENCES challenges (id)
            ON DELETE CASCADE,

    CONSTRAINT chk_attempt_status
        CHECK (
            status IN (
                       'PENDING',
                       'COMPLETED',
                       'FAILED'
                )
            ),

    CONSTRAINT chk_attempt_score
        CHECK (
            score IS NULL
                OR score BETWEEN 0 AND 100
            )
);

CREATE INDEX idx_attempts_challenge_id
    ON attempts (challenge_id);

CREATE INDEX idx_attempts_status
    ON attempts (status);

CREATE INDEX idx_attempts_created_at
    ON attempts (created_at DESC);