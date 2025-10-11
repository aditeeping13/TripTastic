//package com.toursandtravel.dao;
//
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import com.toursandtravel.entity.Lodging;
//
//@Repository
//public interface LodgingDao extends JpaRepository<Lodging, Integer> {
//
//	List<Lodging> findByStatus(String status);
//
//}
package com.toursandtravel.dao;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.toursandtravel.entity.Lodging;

@Repository
public interface LodgingDao extends MongoRepository<Lodging, String> {
	List<Lodging> findByStatus(String status);
}
