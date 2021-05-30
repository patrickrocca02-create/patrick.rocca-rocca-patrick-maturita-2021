package com.pimath.appserver.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter@Setter@ToString
@Table(name = "services")
public class Service {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="service_id",columnDefinition = "SMALLINT")
    Integer serviceID;

    @Column(name="name",length = 25, nullable = false)
    String serviceName;

    @Column(name="description", length = 100, nullable = false)
    String description;
}
