import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../TourComponent/ActionButtons.css";
import "../styles/TableStyles.css";

const ViewAllLodges = () => {
  const [allLodges, setAllCategories] = useState([]);
  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  let navigate = useNavigate();

  useEffect(() => {
    const getAllLodge = async () => {
      const allLodges = await retrieveAllLodge();
      if (allLodges) {
        setAllCategories(allLodges.lodges);
      }
    };

    getAllLodge();
  }, []);

  const retrieveAllLodge = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/lodge/fetch/all`
    );
    console.log(response.data);
    return response.data;
  };

  const deleteLodge = (lodgeId, e) => {
    fetch(`${process.env.REACT_APP_URL}/api/lodge/delete?lodgeId=` + lodgeId, {
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

  const updateLodge = (lodge) => {
    navigate("/admin/lodge/update", { state: lodge });
  };

  return (
    <div className="saas-table-container">
      <div className="saas-table-header">
        <h2 className="saas-table-title">All Tour Lodges</h2>
        <button className="saas-add-button">
          <span>+</span> New Lodge
        </button>
      </div>
      <div className="saas-table-body">
        <table className="saas-table">
          <thead>
            <tr>
              <th>Lodge Id</th>
              <th>Lodge Type</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allLodges.map((lodge) => {
              return (
                <tr key={lodge.id}>
                  <td>
                    <span className="saas-table-text-secondary">{lodge.id}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-primary">{lodge.type}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{lodge.description}</span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => updateLodge(lodge)}
                        className="btn-action btn-update btn-sm"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => deleteLodge(lodge.id)}
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

export default ViewAllLodges;
