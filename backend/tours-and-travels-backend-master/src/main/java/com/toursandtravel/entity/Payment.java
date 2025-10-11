//package com.toursandtravel.entity;
//
//import java.math.BigDecimal;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//import lombok.Data;
//
//@Data
//@Entity
//public class Payment {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//
//	private String paymentId;
//
//	private String nameOnCard;
//
//	private String cvv;
//
//	private String cardNo;
//
//	private String expiryDate;
//
//	private BigDecimal amount;
//
//	private String bookingId;
//
//	@JsonIgnore
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "customer_id")
//	private User customer;
//
//}
package com.toursandtravel.entity;

import java.math.BigDecimal;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;
import lombok.Data;

@Data
@Document(collection = "payment")
public class Payment {

	@Id
	private String id;

	private String paymentId;
	private String nameOnCard;
	private String cvv;
	private String cardNo;
	private String expiryDate;
	private BigDecimal amount;
	private String bookingId;

	@DBRef
	private User customer;
}
