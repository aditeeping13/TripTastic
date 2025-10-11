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
//public class Location {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//
//	private String name;
//
//	private String description;
//
//	private String status;
//
//}
package com.toursandtravel.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "location")
public class Location {

	@Id
	private String id;

	private String name;
	private String description;
	private String status;
}
