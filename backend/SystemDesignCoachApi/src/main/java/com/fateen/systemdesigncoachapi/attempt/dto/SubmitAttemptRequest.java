package com.fateen.systemdesigncoachapi.attempt.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

import java.util.List;

public record SubmitAttemptRequest(

        @NotBlank
        @Size(min = 40, max = 5000)
        String explanation,

        @NotEmpty
        @Size(max = 50)
        List<@Valid DesignNodeRequest> nodes,

        @NotEmpty
        @Size(max = 100)
        List<@Valid DesignEdgeRequest> edges
) {
}