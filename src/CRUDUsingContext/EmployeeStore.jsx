import React, { useState } from "react";
import EmployeeContext from "./EmployeeContext";

const EmployeeStore = ({ children }) => {
  const [employee, setEmployee] = useState([]);

  const addEmployee = (employeeVal) => {
    console.log("Inside Emp function", employeeVal);
    setEmployee([...employee, employeeVal]);
  };

  const updateEmployee = (id, updatedEmp) => {
    setEmployee(employee.map((emp) => (emp.id === id ? updatedEmp : emp)));
  };

  const deleteEmployee = (id) => {
    setEmployee(employee.filter((emp) => emp.id != id));
  };

  return (
    <EmployeeContext.Provider
      value={{ employee, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeStore;
