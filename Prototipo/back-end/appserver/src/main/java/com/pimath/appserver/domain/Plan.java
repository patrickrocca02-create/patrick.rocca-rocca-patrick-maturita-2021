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
    @Column(name="plan_id")
    Long planID;

    @Column(name="name",length = 10)
    String planName;

    @Column(name="description", length = 100)
    String description;

    @Column(name="price_per_month", columnDefinition="Decimal(4,2)")
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
            joinColumns = @JoinColumn(name = "plan_id", referencedColumnName = "plan_id"),
            inverseJoinColumns = @JoinColumn(name = "topic_id", referencedColumnName = "topic_id")
    )
    Set<Topic> availableTopics;

    @OneToMany(
            mappedBy = "plan",
            cascade = CascadeType.ALL,
            orphanRemoval = false
    )
    private Set<User> users;
}
