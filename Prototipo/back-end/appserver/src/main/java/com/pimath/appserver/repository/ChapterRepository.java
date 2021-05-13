package com.pimath.appserver.repository;

import com.pimath.appserver.domain.Chapter;
import com.pimath.appserver.domain.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChapterRepository extends JpaRepository<Chapter,ChapterPK> {
    @Query(value = "select * from chapters as c where c.topic_id = :topic_id", nativeQuery = true)
    List<Service> getChapters(@Param("topic_id") Long topicID);
}
