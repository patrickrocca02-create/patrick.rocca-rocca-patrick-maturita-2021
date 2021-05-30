package com.pimath.appserver.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter@Setter@ToString
@Table(name = "plans")
@JsonIgnoreProperties(allowSetters = true, value = {"availableServices","users"})
public class Plan {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="plan_id",columnDefinition="SMALLINT")
    Integer planID;

    @Column(name="name",length = 15, nullable = false)
    String planName;

    @Column(name="description", length = 100, nullable = false)
    String description;

    @Column(name="price_per_month", columnDefinition="DECIMAL(5,2)", nullable = false)
    float pricePerMonth;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "available_services",
            joinColumns = @JoinColumn(name = "plan_id", referencedColumnName = "plan_id"),
            inverseJoinColumns = @JoinColumn(name = "service_id", referencedColumnName = "service_id")
    )
    Set<Service> availableServices;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "available_topics",
            joinColumns = @JoinColumn(name = "plan_id", referencedColumnName = "plan_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "topic_id", referencedColumnName = "topic_id", nullable = false)
    )
    Set<Topic> availableTopics;

    @OneToMany(
            mappedBy = "plan",
            cascade = CascadeType.ALL,
            orphanRemoval = false
    )
    private Set<User> users;
}
