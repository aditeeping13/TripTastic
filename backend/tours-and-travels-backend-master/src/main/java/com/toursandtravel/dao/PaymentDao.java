//package com.toursandtravel.dao;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import com.toursandtravel.entity.Payment;
//
//@Repository
//public interface PaymentDao extends JpaRepository<Payment, Integer> {
//
//}
package com.toursandtravel.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.toursandtravel.entity.Payment;

@Repository
public interface PaymentDao extends MongoRepository<Payment, String> {
}
