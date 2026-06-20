package com.fateen.systemdesigncoachapi.attempt;

import com.fateen.systemdesigncoachapi.attempt.dto.*;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.UUID;

@RestController
public class AttemptController {

    private final AttemptService attemptService;

    public AttemptController(
            AttemptService attemptService
    ) {
        this.attemptService = attemptService;
    }

    @PostMapping(
            "/api/challenges/{challengeSlug}/attempts"
    )
    public ResponseEntity<AttemptResponse>
    submitAttempt(
            @PathVariable String challengeSlug,
            @Valid @RequestBody
            SubmitAttemptRequest request
    ) {
        AttemptResponse response =
                attemptService.submit(
                        challengeSlug,
                        request
                );

        return ResponseEntity
                .created(
                        URI.create(
                                "/api/attempts/"
                                        + response.id()
                        )
                )
                .body(response);
    }

    @GetMapping("/api/attempts/{attemptId}")
    public ResponseEntity<AttemptDetailResponse>
    getAttempt(
            @PathVariable UUID attemptId
    ) {
        return ResponseEntity.ok(
                attemptService.getAttempt(attemptId)
        );
    }
}