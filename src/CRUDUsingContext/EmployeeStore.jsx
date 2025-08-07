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

  return (
    <EmployeeContext.Provider value={{ employee, addEmployee, updateEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeStore;
