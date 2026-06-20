package com.fateen.systemdesigncoachapi.attempt.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record DesignEdgeRequest(

        @NotBlank
        @Size(max = 150)
        String id,

        @NotBlank
        @Size(max = 150)
        String source,

        @NotBlank
        @Size(max = 150)
        String target
) {
}