package com.pimath.appserver.service;

import com.pimath.appserver.domain.Chapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChapterService {
    @Autowired
    ChapterService chapterService;

    public List<Chapter> getChapters(Long chapterID){
        return chapterService.getChapters(chapterID);
    }
}
