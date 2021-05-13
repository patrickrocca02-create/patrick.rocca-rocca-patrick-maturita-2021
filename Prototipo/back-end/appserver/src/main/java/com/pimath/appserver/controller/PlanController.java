package com.pimath.appserver.controller;

import com.pimath.appserver.domain.Plan;
import com.pimath.appserver.domain.Service;
import com.pimath.appserver.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/plans")
@CrossOrigin(origins = "*")
public class PlanController {
    @Autowired
    PlanService planService;

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        List<Plan> plans = planService.getAll();
        if(plans.isEmpty()){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity<List<Plan>>(plans, HttpStatus.OK);
        }
    }
}
