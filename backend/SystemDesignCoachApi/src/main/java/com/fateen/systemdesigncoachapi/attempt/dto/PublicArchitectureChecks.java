package com.fateen.systemdesigncoachapi.attempt.dto;

import java.util.List;

public record PublicArchitectureChecks(
        int componentCount,
        int connectionCount,
        List<String> disconnectedComponents,
        List<String> warnings
) {
}