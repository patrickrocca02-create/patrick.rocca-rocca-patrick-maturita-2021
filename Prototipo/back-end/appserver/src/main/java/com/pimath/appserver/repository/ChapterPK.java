package com.pimath.appserver.repository;

import com.pimath.appserver.domain.Chapter;
import com.pimath.appserver.domain.Topic;
import lombok.Data;

import java.io.Serializable;

@Data
public class ChapterPK implements Serializable {

    public Long chapterID;
    public Topic topic;

    public ChapterPK(){}

    public ChapterPK(Long chapterID, Topic topic) {
        this.chapterID = chapterID;
        this.topic = topic;
    }
}
