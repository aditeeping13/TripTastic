//package com.toursandtravel.entity;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
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
//public class Meal {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private int id;
//
//	private String name;  // [Breakfast, lunch, Dinner]
//
//	private String description;  // for eg. In break you'll get Tea, Bread Butter
//
//	// Many meals can belong to one tour
//	@JsonIgnore
//    @ManyToOne
//    @JoinColumn(name = "tour_id")
//    private Tour tour;
//
//}
package com.toursandtravel.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;
import lombok.Data;

@Data
@Document(collection = "meal")
public class Meal {

	@Id
	private String id;

	private String name;
	private String description;

	// Many meals can belong to one tour
	@DBRef
	private Tour tour;
}

