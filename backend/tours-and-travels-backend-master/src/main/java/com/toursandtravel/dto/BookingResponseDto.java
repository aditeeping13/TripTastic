package com.toursandtravel.dto;

import java.util.ArrayList;
import java.util.List;

import com.toursandtravel.entity.Booking;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

//@EqualsAndHashCode(callSuper = true)
//@Data
//public class BookingResponseDto extends CommonApiResponse {
//
//	private List<Booking> bookings = new ArrayList<>();
//
//}
@Data
@EqualsAndHashCode(callSuper = true)
public class BookingResponseDto extends CommonApiResponse {
	private List<Booking> bookings = new ArrayList<>();
}
