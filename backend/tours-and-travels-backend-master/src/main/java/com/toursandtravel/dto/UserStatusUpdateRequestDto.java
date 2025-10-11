//package com.toursandtravel.dto;
//
//import lombok.Data;
//
//@Data
//public class UserStatusUpdateRequestDto {
//
//	private int userId;
//
//	private String status;
//
//}
package com.toursandtravel.dto;

import lombok.Data;

@Data
public class UserStatusUpdateRequestDto {

	private String userId; // MongoDB ObjectId
	private String status;
}
