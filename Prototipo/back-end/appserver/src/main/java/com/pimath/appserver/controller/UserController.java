package com.pimath.appserver.controller;

import com.pimath.appserver.service.UserService;
import com.pimath.appserver.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        System.out.println(SecurityContextHolder.getContext().getAuthentication().getAuthorities().toArray()[0]);
        return new ResponseEntity<List<User>>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/first-name/{username}")
    public ResponseEntity<?> getName(@PathVariable String username){
        return new ResponseEntity<String>(userService.getFirstName(username), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user){
        if(userService.addUser(user)){
            return new ResponseEntity<Void>(HttpStatus.OK);
        }else{
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
    }
}
