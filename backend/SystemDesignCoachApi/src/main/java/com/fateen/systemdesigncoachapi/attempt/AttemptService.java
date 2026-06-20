package com.fateen.systemdesigncoachapi.attempt;

import com.fateen.systemdesigncoachapi.attempt.dto.*;
import com.fateen.systemdesigncoachapi.challenge.Challenge;
import com.fateen.systemdesigncoachapi.challenge.ChallengeRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import tools.jackson.databind.ObjectMapper;

import java.util.UUID;

@Service
public class AttemptService {

    private final AttemptRepository attemptRepository;
    private final ChallengeRepository challengeRepository;
    private final ArchitectureCheckService checkService;
    private final ObjectMapper objectMapper;

    public AttemptService(
            AttemptRepository attemptRepository,
            ChallengeRepository challengeRepository,
            ArchitectureCheckService checkService,
            ObjectMapper objectMapper
    ) {
        this.attemptRepository = attemptRepository;
        this.challengeRepository = challengeRepository;
        this.checkService = checkService;
        this.objectMapper = objectMapper;
    }

    @Transactional
    public AttemptResponse submit(
            String challengeSlug,
            SubmitAttemptRequest request
    ) {
        Challenge challenge = challengeRepository
                .findBySlug(challengeSlug)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "Challenge not found"
                        )
                );

        ArchitectureCheckService.CheckResult checks =
                checkService.check(
                        challenge,
                        request
                );

        Attempt attempt = new Attempt(
                challenge,
                objectMapper.valueToTree(request),
                request.explanation().trim(),
                objectMapper.valueToTree(
                        checks.publicChecks()
                ),
                objectMapper.valueToTree(
                        checks.internalChecks()
                )
        );

        Attempt saved =
                attemptRepository.save(attempt);

        return new AttemptResponse(
                saved.getId(),
                challenge.getSlug(),
                saved.getStatus(),
                checks.publicChecks(),
                saved.getCreatedAt()
        );
    }

    @Transactional(readOnly = true)
    public AttemptDetailResponse getAttempt(
            UUID attemptId
    ) {
        Attempt attempt = attemptRepository
                .findById(attemptId)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "Attempt not found"
                        )
                );

        PublicArchitectureChecks publicChecks =
                objectMapper.convertValue(
                        attempt.getPublicChecksJson(),
                        PublicArchitectureChecks.class
                );

        return new AttemptDetailResponse(
                attempt.getId(),
                attempt.getChallenge().getSlug(),
                attempt.getStatus(),
                attempt.getExplanation(),
                attempt.getDesignJson(),
                publicChecks,
                attempt.getScore(),
                attempt.getFeedbackJson(),
                attempt.getCreatedAt()
        );
    }
}