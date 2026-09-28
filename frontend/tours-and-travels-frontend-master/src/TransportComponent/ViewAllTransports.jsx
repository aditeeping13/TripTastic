import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../TourComponent/ActionButtons.css";
import "../styles/TableStyles.css";

const ViewAllTransports = () => {
  const [allTransports, setAllCategories] = useState([]);
  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  let navigate = useNavigate();

  useEffect(() => {
    const getAllTransport = async () => {
      const allTransports = await retrieveAllTransport();
      if (allTransports) {
        setAllCategories(allTransports.transports);
      }
    };

    getAllTransport();
  }, []);

  const retrieveAllTransport = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/transport/fetch/all`
    );
    console.log(response.data);
    return response.data;
  };

  const deleteTransport = (transportId, e) => {
    fetch(
      `${process.env.REACT_APP_URL}/api/transport/delete?transportId=` + transportId,
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

  const updateTransport = (transport) => {
    navigate("/admin/transport/update", { state: transport });
  };

  return (
    <div className="saas-table-container">
      <div className="saas-table-header">
        <h2 className="saas-table-title">All Tour Transports</h2>
        <button className="saas-add-button">
          <span>+</span> New Transport
        </button>
      </div>
      <div className="saas-table-body">
        <table className="saas-table">
          <thead>
            <tr>
              <th>Transport Id</th>
              <th>Transport Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allTransports.map((transport) => {
              return (
                <tr key={transport.id}>
                  <td>
                    <span className="saas-table-text-secondary">{transport.id}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-primary">{transport.name}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{transport.description}</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => updateTransport(transport)}
                        className="btn-action btn-update btn-sm"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => deleteTransport(transport.id)}
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

export default ViewAllTransports;
