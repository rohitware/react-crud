import React, { useState } from "react";
import EmployeeContext from "./EmployeeContext";

const EmployeeStore = ({ children }) => {
  const [employee, setEmployee] = useState([]);
  const addEmployee = (employeeVal) => {
    console.log("Inside Emp function", employeeVal);

    setEmployee([...employee, employeeVal]);
  };

  return (
    <EmployeeContext.Provider value={{ employee, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeStore;
