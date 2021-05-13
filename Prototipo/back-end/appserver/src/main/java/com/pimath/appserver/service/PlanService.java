package com.pimath.appserver.service;

import com.pimath.appserver.domain.Plan;
import com.pimath.appserver.repository.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanService {
    @Autowired
    PlanRepository planRepository;

    public List<Plan> getAll(){
        return planRepository.findAll();
    }
}
