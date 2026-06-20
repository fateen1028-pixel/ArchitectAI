package com.fateen.systemdesigncoachapi.attempt.dto;

import com.fateen.systemdesigncoachapi.attempt.AttemptStatus;
import com.fateen.systemdesigncoachapi.attempt.dto.PublicArchitectureChecks;

import java.time.Instant;
import java.util.UUID;

public record AttemptResponse(
        UUID id,
        String challengeSlug,
        AttemptStatus status,
        PublicArchitectureChecks checks,
        Instant createdAt
) {
}