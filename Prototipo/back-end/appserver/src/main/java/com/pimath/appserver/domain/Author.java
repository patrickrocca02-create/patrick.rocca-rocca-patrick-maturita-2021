package com.pimath.appserver.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter@Setter@ToString
@Table(name = "authors")
public class Author {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="author_id", columnDefinition = "INT")
    Integer authorID;

    @Column(name="name",length = 50, nullable = false)
    String name;

    @Column(name="email", length = 40, nullable = false)
    String email;

    @Column(name="career_description", length = 300, nullable = false)
    String careerDescription;
}
