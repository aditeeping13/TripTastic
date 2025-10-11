//package com.toursandtravel.entity;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import lombok.Data;
//
//@Data
//@Entity
//public class Address {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//
//	private String street;
//
//	private String city;
//
//	private int pincode;
//
//}
package com.toursandtravel.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "address")
public class Address {

	@Id
	private String id;

	private String street;
	private String city;
	// Address.java
	private String pincode; // instead of int

}
