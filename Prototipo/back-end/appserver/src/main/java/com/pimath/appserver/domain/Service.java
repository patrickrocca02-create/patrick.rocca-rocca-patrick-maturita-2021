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
    @Column(name="service_id")
    Long serviceID;

    @Column(name="name",length = 25)
    String serviceName;

    @Column(name="description", length = 100)
    String description;
}
