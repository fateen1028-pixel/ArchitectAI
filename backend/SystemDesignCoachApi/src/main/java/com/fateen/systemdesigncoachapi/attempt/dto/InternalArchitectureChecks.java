package com.fateen.systemdesigncoachapi.attempt.dto;

import java.util.List;

public record InternalArchitectureChecks(
        List<com.fateen.systemdesigncoach.attempt.dto.MissingExpectedComponent> missingExpectedComponents,
        boolean containsClient,
        boolean containsPersistentStorage
) {
}