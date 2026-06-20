package com.fateen.systemdesigncoach.attempt.dto;

public record MissingExpectedComponent(
        String componentType,
        String label,
        String reason
) {
}