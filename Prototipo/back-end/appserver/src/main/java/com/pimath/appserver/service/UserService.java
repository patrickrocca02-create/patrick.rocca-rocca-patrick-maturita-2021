package com.pimath.appserver.service;

import com.pimath.appserver.repository.PlanRepository;
import com.pimath.appserver.repository.UserRepository;
import com.pimath.appserver.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    PlanRepository planRepository;
    @Autowired
    PasswordEncoder encoder;

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public Set<com.pimath.appserver.domain.Service> getAvailableService(String username){
        Optional<User> optUser = userRepository.findById(username);
        if(optUser.isPresent()){
            return optUser.get().getPlan().getAvailableServices();
        }else{
            return new HashSet<>();
        }
    }

    public boolean addUser(User user){
        if(user == null){
            return false;
        }
        user.setCreationDate(LocalDateTime.now());
        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        user.setPlan(planRepository.getOne(user.getPlan().getPlanID()));
        userRepository.save(user);
        return true;
    }

    public String getFirstName(String username){
        Optional<User> optUser = userRepository.findById(username);
        if(optUser.isPresent()){
            return optUser.get().getName();
        }else{
            return "unknown";
        }
    }
}
