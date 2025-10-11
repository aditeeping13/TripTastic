//package com.toursandtravel.entity;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import jakarta.persistence.Column;
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
//public class Activity {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//
//	private String name;
//
//	@Column(length = 2000)
//	private String description;
//
//	// Many activities can belong to one tour
//	@JsonIgnore
//	@ManyToOne
//	@JoinColumn(name = "tour_id")
//	private Tour tour;
//
//}
package com.toursandtravel.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.DBRef;

@Data
@Document(collection = "activity")
public class Activity {

	@Id
	private String id;

	private String name;
	private String description;

	// Many activities can belong to one tour
	@DBRef
	private Tour tour;
}

