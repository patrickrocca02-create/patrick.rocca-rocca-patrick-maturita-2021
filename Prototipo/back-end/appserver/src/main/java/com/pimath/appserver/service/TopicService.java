package com.pimath.appserver.service;

import com.pimath.appserver.domain.Chapter;
import com.pimath.appserver.domain.Topic;
import com.pimath.appserver.repository.ChapterPK;
import com.pimath.appserver.repository.ChapterRepository;
import com.pimath.appserver.repository.ServiceRepository;
import com.pimath.appserver.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class TopicService {
    @Autowired
    TopicRepository topicRepository;
    @Autowired
    ChapterRepository chapterRepository;

    public List<Topic> getAvailable(Integer planID){
        return topicRepository.getAvailableTopics(planID);
    }

    public Set<Chapter> getChapters(Integer topicID){
        return topicRepository.getOne(topicID).getChapters();
    }

    public String getChapterText(Integer topicID, Integer chapterID){
        return chapterRepository.getOne(new ChapterPK(chapterID, topicRepository.getOne(topicID))).getText();
    }
}
