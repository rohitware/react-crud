import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import EmployeeContext from "./EmployeeContext";

const AddEmployee = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    empId: "",
    name: "",
    position: "",
    company: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const { addEmployee } = useContext(EmployeeContext);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const { empId, name, position, company } = formData;
      const employee = { id: Date.now(), empId, name, position, company };
      console.log(employee);
      addEmployee(employee);
    }
    event.preventDefault();
    setFormData({ empId: "", name: "", position: "", company: "" });
    setValidated(false);
  };
  return (
    <>
      <h3>AddEmployee</h3>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Employee Id</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Employee Id"
              name="empId"
              value={formData.empId}
              onChange={HandleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Employee Name"
              name="name"
              value={formData.name}
              onChange={HandleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Position</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Position"
              name="position"
              value={formData.position}
              onChange={HandleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Company</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Company"
              name="company"
              value={formData.company}
              onChange={HandleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button type="submit">Add Employee</Button>
      </Form>
    </>
  );
};

export default AddEmployee;
