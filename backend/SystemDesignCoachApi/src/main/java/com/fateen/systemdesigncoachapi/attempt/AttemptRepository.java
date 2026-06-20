package com.fateen.systemdesigncoachapi.attempt;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AttemptRepository
        extends JpaRepository<Attempt, UUID> {
}