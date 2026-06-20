package com.fateen.systemdesigncoachapi.challenge;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "challenge_requirements")
public class ChallengeRequirement {

    @Getter
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;

    @ManyToOne(
            fetch = FetchType.LAZY,
            optional = false
    )
    @JoinColumn(
            name = "challenge_id",
            nullable = false
    )
    private Challenge challenge;

    @Getter
    @Enumerated(EnumType.STRING)
    @Column(
            name = "requirement_type",
            nullable = false,
            length = 30
    )
    private RequirementType requirementType;

    @Getter
    @Column(
            nullable = false,
            length = 500
    )
    private String description;

    @Getter
    @Column(
            name = "display_order",
            nullable = false
    )
    private Integer displayOrder;

    protected ChallengeRequirement() {
        // Required by JPA
    }

}