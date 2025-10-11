package com.toursandtravel.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data


//public class BookingRequestDto {
//
//	private int tourId;
//
//	private int customerId;
//
//	private int noOfTickets;
//
//	private String cardNo;
//
//	private String nameOnCard;
//
//	private String cvv;
//
//	private String expiryDate;
//
//}

public class BookingRequestDto {

	private String tourId;      // was int
	private String customerId;  // was int

	private int noOfTickets;

	private String cardNo;
	private String nameOnCard;
	private String cvv;
	private String expiryDate;
}
