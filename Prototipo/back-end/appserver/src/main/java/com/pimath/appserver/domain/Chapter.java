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
    @Column(name="chapter_id", columnDefinition = "INT")
    Integer chapterID;

    @JsonIgnore
    @ManyToOne(optional = false)
    @Id
    @JoinColumn(name="topic_id", referencedColumnName = "topic_id", columnDefinition = "INT")
    Topic topic;

    @Column(name="name", length = 50, nullable = false)
    String name;

    @Column(name="description", length = 300, nullable = false)
    String description;

    @Column(name = "reading_time", nullable = false)
    int readingTime;

    @Column(name="difficulty", length = 50, nullable = false)
    String difficulty;

    @JsonIgnore
    @Column(name = "text",columnDefinition="TEXT", nullable = false)
    String text;

    @JsonIgnore
    @ManyToOne(optional = false)
    @Id
    @JoinColumn(name="author_id", referencedColumnName = "author_id", columnDefinition = "INT")
    Author author;
}
