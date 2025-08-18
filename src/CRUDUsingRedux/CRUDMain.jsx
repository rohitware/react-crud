import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const CRUDMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EmployeeList />}></Route>
        <Route exact path="/addEmployee" element={<AddEmployee />}></Route>
        <Route
          exact
          path="/editEmployee/:id"
          element={<EditEmployee />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CRUDMain;
