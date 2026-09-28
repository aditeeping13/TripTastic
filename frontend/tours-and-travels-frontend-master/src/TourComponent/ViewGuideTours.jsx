import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ActionButtons.css";
import "../styles/TableStyles.css";

const ViewGuideTours = () => {
  const [tours, setTours] = useState([]);

  const guide = JSON.parse(sessionStorage.getItem("active-guide"));
  const guide_jwtToken = sessionStorage.getItem("guide-jwtToken");

  let navigate = useNavigate();

  useEffect(() => {
    const getAllTour = async () => {
      const allTour = await retrieveAllTour();
      if (allTour) {
        setTours(allTour.tours);
      }
    };

    getAllTour();
  }, []);

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString(); // Adjust the format as needed

    return formattedDate;
  };

  const retrieveAllTour = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/tour/fetch/guide-wise?tourGuideId=` + guide.id
    );
    console.log(response.data);
    return response.data;
  };

  const deleteTour = (tourId, e) => {
    fetch(`${process.env.REACT_APP_URL}/api/tour/delete?tourId=` + tourId, {
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
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });

            setTimeout(() => {
              window.location.reload(true);
            }, 3000); // Redirect after 3 seconds
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

  const viewTour = (tourId) => {
    navigate(`/tour/${tourId}/detail`);
  };

  return (
    <div className="saas-table-container">
      <div className="saas-table-header">
        <h2 className="saas-table-title">My Tours</h2>
        <button className="saas-add-button">
          <span>+</span> New Tour
        </button>
      </div>
      <div className="saas-table-body">
        <table className="saas-table">
          <thead>
            <tr>
              <th>Tour</th>
              <th>Name</th>
              <th>Description</th>
              <th>Tour Date</th>
              <th>From Location</th>
              <th>To Location</th>
              <th>Total Ticket</th>
              <th>Ticket Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => {
              return (
                <tr key={tour.id}>
                  <td>
                    <img
                      src={`${process.env.REACT_APP_URL}/api/tour/` + tour.image1}
                      className="saas-table-image"
                      alt="tour_pic"
                    />
                  </td>
                  <td>
                    <span className="saas-table-text-primary">{tour.name}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{tour.description}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">
                      {formatDateFromEpoch(tour.startDate)} - {formatDateFromEpoch(tour.endDate)}
                    </span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{tour.fromLocation.name}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{tour.toLocation.name}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{tour.totalTickets}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-primary">₹{tour.ticketPrice}</span>
                  </td>
                  <td>
                    <span className={`saas-status-badge saas-status-${tour.status.toLowerCase()}`}>
                      {tour.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => viewTour(tour.id)}
                        className="btn-action btn-update btn-sm"
                      >
                        View
                      </button>

                      {(() => {
                        if (tour.status !== "Deactivated") {
                          return (
                            <button
                              onClick={() => deleteTour(tour.id)}
                              className="btn-action btn-delete btn-sm"
                            >
                              Delete
                            </button>
                          );
                        }
                      })()}
                    </div>
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

export default ViewGuideTours;
