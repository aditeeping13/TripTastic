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
//public class Transport {  // this will be common added by Admin
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//
//	private String name;  // [Bus, Train, Flight]
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
@Document(collection = "transport")
public class Transport {

	@Id
	private String id;

	private String name;
	private String description;
	private String status;
}
