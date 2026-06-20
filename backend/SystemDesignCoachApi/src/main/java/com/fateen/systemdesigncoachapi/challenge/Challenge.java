package com.fateen.systemdesigncoachapi.challenge;


import com.fateen.systemdesigncoachapi.topic.Difficulty;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "challenges")
public class Challenge {

    @Getter
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;

    @Getter
    @Column(
            nullable = false,
            unique = true,
            length = 150
    )
    private String title;

    @Getter
    @Column(
            nullable = false,
            unique = true,
            length = 150
    )
    private String slug;

    @Getter
    @Column(
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String description;

    @Getter
    @Enumerated(EnumType.STRING)
    @Column(
            nullable = false,
            length = 20
    )
    private Difficulty difficulty;

    @Getter
    @Column(
            name = "estimated_minutes",
            nullable = false
    )
    private Integer estimatedMinutes;

    @Getter
    @Column(
            name = "display_order",
            nullable = false
    )
    private Integer displayOrder;

    @Getter
    @Column(
            name = "created_at",
            nullable = false,
            updatable = false
    )
    private Instant createdAt;

    @OneToMany(
            mappedBy = "challenge",
            fetch = FetchType.LAZY
    )
    @OrderBy("displayOrder ASC")
    private List<ChallengeRequirement> requirements =
            new ArrayList<>();

    @OneToMany(
            mappedBy = "challenge",
            fetch = FetchType.LAZY
    )
    @OrderBy("displayOrder ASC")
    private List<ExpectedComponent> expectedComponents =
            new ArrayList<>();

    protected Challenge() {
        // Required by JPA
    }

    public List<ChallengeRequirement> getRequirements() {
        return List.copyOf(requirements);
    }

    public List<ExpectedComponent> getExpectedComponents() {
        return List.copyOf(expectedComponents);
    }
}