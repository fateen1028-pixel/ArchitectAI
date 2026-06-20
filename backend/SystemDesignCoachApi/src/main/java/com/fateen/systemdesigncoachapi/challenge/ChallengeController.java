package com.fateen.systemdesigncoachapi.challenge;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/challenges")
public class ChallengeController {

    private final ChallengeService challengeService;

    public ChallengeController(
            ChallengeService challengeService
    ) {
        this.challengeService = challengeService;
    }

    @GetMapping
    public ResponseEntity<List<ChallengeSummaryResponse>>
    getAllChallenges() {

        return ResponseEntity.ok(
                challengeService.getAllChallenges()
        );
    }

    @GetMapping("/{challengeSlug}")
    public ResponseEntity<ChallengeDetailResponse>
    getChallenge(
            @PathVariable String challengeSlug
    ) {
        return ResponseEntity.ok(
                challengeService.getChallenge(
                        challengeSlug
                )
        );
    }
}