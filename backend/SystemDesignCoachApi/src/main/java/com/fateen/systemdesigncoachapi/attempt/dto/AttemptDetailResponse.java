package com.fateen.systemdesigncoachapi.attempt.dto;


import com.fateen.systemdesigncoachapi.attempt.AttemptStatus;
import tools.jackson.databind.JsonNode;

import java.time.Instant;
import java.util.UUID;

public record AttemptDetailResponse(
        UUID id,
        String challengeSlug,
        AttemptStatus status,
        String explanation,
        JsonNode design,
        PublicArchitectureChecks checks,
        Integer score,
        JsonNode feedback,
        Instant createdAt
) {
}