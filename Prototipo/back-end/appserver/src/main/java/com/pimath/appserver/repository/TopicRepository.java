package com.pimath.appserver.repository;

import com.pimath.appserver.domain.Plan;
import com.pimath.appserver.domain.Service;
import com.pimath.appserver.domain.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TopicRepository extends JpaRepository<Topic,Integer> {
    @Query(value = "select t.topic_id, t.name, t.description, t.topic_of_belonging_id from topics t inner join available_topics a on t.topic_id = a.topic_id where a.plan_id = :plan_id", nativeQuery = true)
    List<Topic> getAvailableTopics(@Param("plan_id") Integer planID);
}
