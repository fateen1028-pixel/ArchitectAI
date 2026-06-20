package com.fateen.systemdesigncoachapi.challenge;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "challenge_expected_components")
public class ExpectedComponent {

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
    @Column(
            name = "component_key",
            nullable = false,
            length = 50
    )
    private String componentKey;

    @Getter
    @Column(
            nullable = false,
            length = 100
    )
    private String label;

    @Getter
    @Column(
            nullable = false,
            length = 500
    )
    private String reason;

    @Getter
    @Column(
            name = "display_order",
            nullable = false
    )
    private Integer displayOrder;

    protected ExpectedComponent() {
        // Required by JPA
    }

}