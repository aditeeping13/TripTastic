import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../styles/TableStyles.css";

const ViewAllTourBookings = () => {
  const [allTourBookings, setAllTourBookings] = useState([
    {
      customer: {
        firstName: "",
        lastName: "",
      },
      tour: {
        fromLocation: {
          name: "",
        },
        toLocation: {
          name: "",
        },

        guide: {
          firstName: "",
          lastName: "",
        },
      },
    },
  ]);
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));

  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  let navigate = useNavigate();

  useEffect(() => {
    const getAllTourBookings = async () => {
      const allToursBookings = await retrieveAllTourBookings();
      if (allToursBookings && allToursBookings.bookings) {
        setAllTourBookings(allToursBookings.bookings);
      }
    };

    getAllTourBookings();
  }, []);

  const retrieveAllTourBookings = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/tour/booking/fetch/all`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching tour bookings:", error);
      return null;
    }
  };

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString(); // Adjust the format as needed

    return formattedDate;
  };

  return (
    <div className="saas-table-container">
      <div className="saas-table-header">
        <h2 className="saas-table-title">All Tour Bookings</h2>
      </div>
      <div className="saas-table-body">
        <table className="saas-table">
          <thead>
            <tr>
              <th>Tour</th>
              <th>Name</th>
              <th>Tour Guide</th>
              <th>Customer Name</th>
              <th>Tour Date</th>
              <th>From Location</th>
              <th>To Location</th>
              <th>Price (per ticket)</th>
              <th>Total Tickets</th>
              <th>Total Price</th>
              <th>Booking Time</th>
              <th>Booking Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allTourBookings.map((booking) => {
              return (
                <tr key={booking.id}>
                  <td>
                    <img
                      src={
                        `${process.env.REACT_APP_URL}/api/tour/` +
                        booking.tour.image1
                      }
                      className="saas-table-image"
                      alt="tour_pic"
                    />
                  </td>
                  <td>
                    <span className="saas-table-text-primary">{booking.tour.name}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">
                      {booking.tour.guide.firstName +
                        " " +
                        booking.tour.guide.lastName}
                    </span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">
                      {booking.customer.firstName +
                        " " +
                        booking.customer.lastName}
                    </span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">
                      {formatDateFromEpoch(booking.tour.startDate) +
                        " - " +
                        formatDateFromEpoch(booking.tour.endDate)}
                    </span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{booking.tour.fromLocation.name}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{booking.tour.toLocation.name}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-primary">₹{booking.tour.ticketPrice}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{booking.noOfTickets}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-primary">₹{booking.noOfTickets * booking.tour.ticketPrice}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{formatDateFromEpoch(booking.bookingTime)}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{booking.bookingId}</span>
                  </td>
                  <td>
                    <span className={`saas-status-badge ${booking.status ? `saas-status-${booking.status.toLowerCase()}` : 'saas-status-pending'}`}>
                      {booking.status || 'Pending'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllTourBookings;
