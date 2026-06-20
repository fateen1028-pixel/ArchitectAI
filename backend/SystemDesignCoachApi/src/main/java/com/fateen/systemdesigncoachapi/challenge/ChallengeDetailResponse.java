package com.fateen.systemdesigncoachapi.challenge;

import com.fateen.systemdesigncoachapi.topic.Difficulty;

import java.util.List;

public record ChallengeDetailResponse(
        Long id,
        String title,
        String slug,
        String description,
        Difficulty difficulty,
        Integer estimatedMinutes,
        List<String> functionalRequirements,
        List<String> nonFunctionalRequirements
) {

    public static ChallengeDetailResponse from(
            Challenge challenge
    ) {
        List<String> functionalRequirements =
                challenge.getRequirements()
                        .stream()
                        .filter(requirement ->
                                requirement.getRequirementType()
                                        == RequirementType.FUNCTIONAL
                        )
                        .map(ChallengeRequirement::getDescription)
                        .toList();

        List<String> nonFunctionalRequirements =
                challenge.getRequirements()
                        .stream()
                        .filter(requirement ->
                                requirement.getRequirementType()
                                        == RequirementType.NON_FUNCTIONAL
                        )
                        .map(ChallengeRequirement::getDescription)
                        .toList();

        return new ChallengeDetailResponse(
                challenge.getId(),
                challenge.getTitle(),
                challenge.getSlug(),
                challenge.getDescription(),
                challenge.getDifficulty(),
                challenge.getEstimatedMinutes(),
                functionalRequirements,
                nonFunctionalRequirements
        );
    }
}