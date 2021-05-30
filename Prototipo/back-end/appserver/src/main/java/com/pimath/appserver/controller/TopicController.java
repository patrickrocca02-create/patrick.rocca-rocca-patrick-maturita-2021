package com.pimath.appserver.controller;

import com.pimath.appserver.domain.Chapter;
import com.pimath.appserver.domain.Service;
import com.pimath.appserver.domain.Topic;
import com.pimath.appserver.domain.User;
import com.pimath.appserver.service.ServiceService;
import com.pimath.appserver.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/topics")
@CrossOrigin(origins = "*")
public class TopicController {
    @Autowired
    TopicService topicService;

    @GetMapping("/available")
    public ResponseEntity<?> getAvailable(){
        List<Topic> availableServices = topicService.getAvailable(Integer.valueOf(SecurityContextHolder.getContext().getAuthentication().getAuthorities().toArray()[0].toString()));
        return new ResponseEntity<List<Topic>>(availableServices, HttpStatus.OK);
    }

    @GetMapping("/chapters/{topicID}")
    public ResponseEntity<?> getAvailable(@PathVariable Integer topicID){
        Set<Chapter> chapters = topicService.getChapters(topicID);
        return new ResponseEntity<Set<Chapter>>(chapters, HttpStatus.OK);
    }

    @GetMapping("/chapter-text/{topicID}/{chapterID}")
    public ResponseEntity<?> getChapterText(@PathVariable Integer topicID, @PathVariable Integer chapterID){
        String text = topicService.getChapterText(topicID, chapterID);
        return new ResponseEntity<String>(text, HttpStatus.OK);
    }
}
