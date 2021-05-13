package com.pimath.appserver.domain;

import java.time.LocalDateTime;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString; 

@Entity
@Getter @Setter @ToString
@JsonIgnoreProperties(allowSetters = true, value = {"plan"})
@Table(name="users")
public class User{
    @Id
    @Column(name="user_name",length=20) 
    String userName;

    @Column(name="name",length=20,nullable=false)
    String name;

    @Column(name="surname",length=20,nullable=false)
    String surname;
    
    @Column(name="email",length=40,nullable=false)
    String email;

    @Column(name="password",length = 60,nullable=false)
    String password;

    @Column(name="creation_date",length=20,nullable = false)
    LocalDateTime creationDate;

    @Column(name="active",nullable = false)
    boolean active;

    @ManyToOne(optional = false)
    @JoinColumn(name="plan_id",referencedColumnName = "plan_id")
    Plan plan;
}
