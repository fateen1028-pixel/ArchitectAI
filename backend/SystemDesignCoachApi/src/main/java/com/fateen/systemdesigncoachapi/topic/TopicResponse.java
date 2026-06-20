package com.fateen.systemdesigncoachapi.topic;

public record TopicResponse(
        Long id,
        String name,
        String slug,
        String description,
        Difficulty difficulty,
        Integer displayOrder
) {

    public static TopicResponse from(
            Topic topic
    ) {
        return new TopicResponse(
                topic.getId(),
                topic.getName(),
                topic.getSlug(),
                topic.getDescription(),
                topic.getDifficulty(),
                topic.getDisplayOrder()
        );
    }
}
