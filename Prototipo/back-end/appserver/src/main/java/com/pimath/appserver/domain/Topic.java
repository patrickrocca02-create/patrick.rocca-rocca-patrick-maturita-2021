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
    @Column(name="topic_id")
    Long id;

    @Column(name="name",length=30,nullable=false)
    String name;

    @Column(name="description",length=100,nullable=false)
    String description;

    @JsonIgnore
    @OneToMany(
            mappedBy = "sub_topic",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private Set<Topic> sub_topics;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="sub_topic", referencedColumnName = "topic_id")
    Topic sub_topic;

    @JsonIgnore
    @OneToMany(
            mappedBy = "topic",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private Set<Chapter> chapters;
}
