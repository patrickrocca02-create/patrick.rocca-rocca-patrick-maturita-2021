package com.pimath.appserver.controller;

import com.pimath.appserver.domain.Plan;
import com.pimath.appserver.domain.Service;
import com.pimath.appserver.service.PlanService;
import com.pimath.appserver.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "*")
public class ServiceController {
    @Autowired
    ServiceService serviceService;

    @GetMapping("/available")
    public ResponseEntity<?> getAvailable(){
        List<Service> availableServices = serviceService.getAvailable(Long.valueOf(SecurityContextHolder.getContext().getAuthentication().getAuthorities().toArray()[0].toString()));
        return new ResponseEntity<List<Service>>(availableServices, HttpStatus.OK);
    }
}

