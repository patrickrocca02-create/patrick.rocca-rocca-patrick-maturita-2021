package com.pimath.appserver.repository;

import com.pimath.appserver.domain.Chapter;
import com.pimath.appserver.domain.Topic;
import lombok.Data;

import java.io.Serializable;

@Data
public class ChapterPK implements Serializable {

    public Integer chapterID;
    public Topic topic;

    public ChapterPK(){}

    public ChapterPK(Integer chapterID, Topic topic) {
        this.chapterID = chapterID;
        this.topic = topic;
    }
}
