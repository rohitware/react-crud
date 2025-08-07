import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import "./crudStyle.css";
import { useNavigate } from "react-router-dom";
import EmployeeContext from "./EmployeeContext";
import Table from "react-bootstrap/Table";
const EmployeeList = () => {
  const navigate = useNavigate();
  const { employee, deleteEmployee } = useContext(EmployeeContext);
  return (
    <>
      <h3>Employee List</h3>

      <div className="addEmployeeBtn">
        <Button variant="primary" onClick={() => navigate("/add-employee")}>
          Add Employee
        </Button>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Employee Name</th>
            <th>Position</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.empId}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.company}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  className="me-2"
                  onClick={() => navigate(`/edit-employee/${emp.id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => {
                    deleteEmployee(emp.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default EmployeeList;
