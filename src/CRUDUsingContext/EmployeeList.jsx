import React from "react";
import Button from "react-bootstrap/Button";
import "./crudStyle.css";
import { useNavigate } from "react-router-dom";
const EmployeeList = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Employee List</h3>
      <div className="addEmployeeBtn">
        <Button variant="primary" onClick={() => navigate("/add-employee")}>
          Add Employee
        </Button>
      </div>
    </>
  );
};

export default EmployeeList;
