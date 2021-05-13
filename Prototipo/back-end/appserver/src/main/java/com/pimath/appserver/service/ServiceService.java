package com.pimath.appserver.service;

import com.pimath.appserver.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Set;

@Service
public class ServiceService {

    @Autowired
    ServiceRepository serviceRepository;

    public List<com.pimath.appserver.domain.Service> getAvailable(Long planID){
        return serviceRepository.getAvailableServices(planID);
    }
}
