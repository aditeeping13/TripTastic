import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../TourComponent/ActionButtons.css";
import "../styles/TableStyles.css";

const ViewAllLocations = () => {
  const [allLocations, setAllCategories] = useState([]);
  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  let navigate = useNavigate();

  useEffect(() => {
    const getAllLocation = async () => {
      const allLocations = await retrieveAllLocation();
      if (allLocations) {
        setAllCategories(allLocations.locations);
      }
    };

    getAllLocation();
  }, []);

  const retrieveAllLocation = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/location/fetch/all`
    );
    console.log(response.data);
    return response.data;
  };

  const deleteLocation = (locationId, e) => {
    fetch(
      `${process.env.REACT_APP_URL}/api/location/delete?locationId=` + locationId,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          //   Authorization: "Bearer " + admin_jwtToken,
        },
      }
    )
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

  const updateLocation = (location) => {
    navigate("/admin/location/update", { state: location });
  };

  return (
    <div className="saas-table-container">
      <div className="saas-table-header">
        <h2 className="saas-table-title">All Tour Locations</h2>
        <button className="saas-add-button">
          <span>+</span> New Location
        </button>
      </div>
      <div className="saas-table-body">
        <table className="saas-table">
          <thead>
            <tr>
              <th>Location Id</th>
              <th>Location Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allLocations.map((location) => {
              return (
                <tr key={location.id}>
                  <td>
                    <span className="saas-table-text-secondary">{location.id}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-primary">{location.name}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{location.description}</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => updateLocation(location)}
                        className="btn-action btn-update btn-sm"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => deleteLocation(location.id)}
                        className="btn-action btn-delete btn-sm"
                      >
                        Delete
                      </button>
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

export default ViewAllLocations;
