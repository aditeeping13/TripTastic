import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./ActionButtons.css";
import "../styles/TableStyles.css";

const ViewAllEvents = () => {
  const [allEvents, setAllEvents] = useState([]);
  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  let navigate = useNavigate();

  useEffect(() => {
    const getAllEvent = async () => {
      const allEvents = await retrieveAllEvent();
      if (allEvents) {
        setAllEvents(allEvents.events);
      }
    };

    getAllEvent();
  }, []);

  const retrieveAllEvent = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/event/fetch/all?status=Active`
    );
    console.log(response.data);
    return response.data;
  };

  const deleteEvent = (eventId) => {
    fetch(`${process.env.REACT_APP_URL}/api/event/delete?eventId=` + eventId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        //   Authorization: "Bearer " + admin_jwtToken,
      },
    })
      .then((result) => {
        result.json().then((res) => {
          if (res.success) {
            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          } else if (!res.success) {
            toast.error(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setTimeout(() => {
              window.location.reload(true);
            }, 1000); // Redirect after 3 seconds
          }
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("It seems server is down", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(true);
        }, 1000); // Redirect after 3 seconds
      });
  };

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString(); // Adjust the format as needed

    return formattedDate;
  };

  const updateEvent = (event) => {
    navigate("/admin/event/update", { state: event });
  };

  return (
    <div className="saas-table-container">
      <div className="saas-table-header">
        <h2 className="saas-table-title">All Events</h2>
        <button className="saas-add-button">
          <span>+</span> New Event
        </button>
      </div>
      <div className="saas-table-body">
        <table className="saas-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Event Name</th>
              <th>Category</th>
              <th>Venue Type</th>
              <th>Venue Name</th>
              <th>Location</th>
              <th>Total Tickets</th>
              <th>Ticket Price</th>
              <th>Event Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allEvents.map((event) => {
              return (
                <tr key={event.id}>
                  <td>
                    <img
                      src={`${process.env.REACT_APP_URL}/api/event/` + event.image}
                      className="saas-table-image"
                      alt="event_pic"
                    />
                  </td>
                  <td>
                    <span className="saas-table-text-primary">{event.name}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{event.category.name}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{event.venueType}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{event.venueName}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{event.location}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{event.noOfTickets}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-primary">₹{event.ticketPrice}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{formatDateFromEpoch(event.startDate)}</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => updateEvent(event)}
                        className="btn-action btn-update btn-sm"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => deleteEvent(event.id)}
                        className="btn-action btn-delete btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                    <ToastContainer />
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

export default ViewAllEvents;
