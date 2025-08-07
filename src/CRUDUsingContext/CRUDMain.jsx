import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import EmployeeStore from "./EmployeeStore";

const CRUDMain = () => {
  return (
    <Router>
      <EmployeeStore>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
        </Routes>
      </EmployeeStore>
    </Router>
  );
};

export default CRUDMain;
