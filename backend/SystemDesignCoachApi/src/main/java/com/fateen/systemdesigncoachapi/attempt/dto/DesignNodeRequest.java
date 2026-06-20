package com.fateen.systemdesigncoachapi.attempt.dto;

import com.fateen.systemdesigncoachapi.attempt.ArchitectureComponentType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record DesignNodeRequest(

        @NotBlank
        @Size(max = 150)
        String id,

        @NotNull
        ArchitectureComponentType componentType,

        @NotBlank
        @Size(max = 100)
        String label,

        double x,

        double y
) {
}