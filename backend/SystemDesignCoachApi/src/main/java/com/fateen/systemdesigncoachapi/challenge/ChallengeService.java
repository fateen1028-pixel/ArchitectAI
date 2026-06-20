package com.fateen.systemdesigncoachapi.challenge;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class ChallengeService {

    private final ChallengeRepository challengeRepository;

    public ChallengeService(
            ChallengeRepository challengeRepository
    ) {
        this.challengeRepository = challengeRepository;
    }

    public List<ChallengeSummaryResponse>
    getAllChallenges() {

        return challengeRepository
                .findAllByOrderByDisplayOrderAsc()
                .stream()
                .map(ChallengeSummaryResponse::from)
                .toList();
    }

    public ChallengeDetailResponse getChallenge(
            String challengeSlug
    ) {
        Challenge challenge = challengeRepository
                .findBySlug(challengeSlug)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "Challenge not found"
                        )
                );

        return ChallengeDetailResponse.from(challenge);
    }
}