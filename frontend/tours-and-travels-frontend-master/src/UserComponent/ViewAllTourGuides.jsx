import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import "../styles/TableStyles.css";

const ViewAllTourGuides = () => {
  const [allEmployee, setAllEmployee] = useState([]);
  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveAllUser();
      if (allUsers) {
        setAllEmployee(allUsers.users);
      }
    };

    getAllUsers();
  }, []);

  const retrieveAllUser = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/user/fetch/role-wise?role=Tour Guide`,
      {
        headers: {
          //   Authorization: "Bearer " + admin_jwtToken, // Replace with your actual JWT token
        },
      }
    );
    console.log(response.data);
    return response.data;
  };

  const formatDateFromEpoch = (epochTime) => {
    const date = new Date(Number(epochTime));
    const formattedDate = date.toLocaleString(); // Adjust the format as needed

    return formattedDate;
  };

  return (
    <div className="saas-table-container">
      <div className="saas-table-header">
        <h2 className="saas-table-title">All Tour Guides</h2>
      </div>
      <div className="saas-table-body">
        <table className="saas-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Phone No</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {allEmployee.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>
                    <span className="saas-table-text-primary">{employee.firstName}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-primary">{employee.lastName}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{employee.emailId}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">{employee.phoneNo}</span>
                  </td>
                  <td>
                    <span className="saas-table-text-secondary">
                      {employee.address
                        ? employee.address.street +
                        ", " +
                        employee.address.city +
                        ", " +
                        employee.address.pincode
                        : "N/A"}
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

export default ViewAllTourGuides;
