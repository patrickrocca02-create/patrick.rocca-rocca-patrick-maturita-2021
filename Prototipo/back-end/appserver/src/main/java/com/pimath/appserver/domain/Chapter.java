package com.pimath.appserver.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pimath.appserver.repository.ChapterPK;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@ToString
@Table(name = "chapters")
@IdClass(ChapterPK.class)
public class Chapter implements Serializable {

    @Id
    @Column(name="chapter_id")
    Long chapterID;

    @JsonIgnore
    @ManyToOne(optional = false)
    @Id
    @JoinColumn(name="topic_id", referencedColumnName = "topic_id")
    Topic topic;

    @Column(name="name", length = 50)
    String name;

    @Column(name="description", length = 100)
    String description;

    @Column(name = "reading_time")
    int readingTime;

    @Column(name="difficulty", length = 50)
    String difficulty;

    @JsonIgnore
    @Column(name = "text",columnDefinition="TEXT")
    String text;
}
