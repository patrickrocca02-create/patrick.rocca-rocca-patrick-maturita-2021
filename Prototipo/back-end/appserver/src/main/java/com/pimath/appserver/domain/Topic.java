package com.pimath.appserver.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Data
@Table(name = "topics")
public class Topic implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="topic_id",columnDefinition = "INT")
    Integer id;

    @Column(name="name",length=30,nullable=false)
    String name;

    @Column(name="description",length=300,nullable=false)
    String description;

    @JsonIgnore
    @OneToMany(
            mappedBy = "topicOfBelonging",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private Set<Topic> subTopics;

    @JsonIgnore
    @ManyToOne(optional = true)
    @JoinColumn(name="topic_of_belonging_id", referencedColumnName = "topic_id")
    Topic topicOfBelonging;

    @JsonIgnore
    @OneToMany(
            mappedBy = "topic",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private Set<Chapter> chapters;
}
