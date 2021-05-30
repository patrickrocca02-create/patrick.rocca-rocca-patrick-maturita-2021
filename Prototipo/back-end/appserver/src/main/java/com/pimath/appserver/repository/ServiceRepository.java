package com.pimath.appserver.repository;

import com.pimath.appserver.domain.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service,Integer> {
    @Query(value = "SELECT s.service_id, s.name, s.description FROM services s INNER JOIN available_services a ON s.service_id = a.service_id WHERE a.plan_id = :plan_id", nativeQuery = true)
    List<Service> getAvailableServices(@Param("plan_id") Integer planID);
}
