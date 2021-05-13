package com.pimath.appserver.repository;

import com.pimath.appserver.domain.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service,Long> {
    @Query(value = "select s.service_id as service_id, s.name as name, s.description as description from services as s inner join available_services as a on s.service_id = a.service_id where a.plan_id = :plan_id", nativeQuery = true)
    List<Service> getAvailableServices(@Param("plan_id") Long planID);
}
