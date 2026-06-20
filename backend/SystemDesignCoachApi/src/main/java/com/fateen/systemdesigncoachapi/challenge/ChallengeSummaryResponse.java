package com.fateen.systemdesigncoachapi.challenge;


import com.fateen.systemdesigncoachapi.topic.Difficulty;

public record ChallengeSummaryResponse(
        Long id,
        String title,
        String slug,
        String description,
        Difficulty difficulty,
        Integer estimatedMinutes,
        Integer displayOrder
) {

    public static ChallengeSummaryResponse from(
            Challenge challenge
    ) {
        return new ChallengeSummaryResponse(
                challenge.getId(),
                challenge.getTitle(),
                challenge.getSlug(),
                challenge.getDescription(),
                challenge.getDifficulty(),
                challenge.getEstimatedMinutes(),
                challenge.getDisplayOrder()
        );
    }
}