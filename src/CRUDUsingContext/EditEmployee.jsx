import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import EmployeeContext from "./EmployeeContext";

const EditEmployee = () => {
  const { id } = useParams();
  console.log(id);
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

  const { employee, updateEmployee } = useContext(EmployeeContext);
  useEffect(() => {
    const emp = employee.find((emp) => emp.id === parseInt(id));
    if (emp) {
      setFormData({
        empId: emp.empId || "",
        name: emp.name || "",
        position: emp.position || "",
        company: emp.company || "",
      });
    }
  }, [employee, id]);

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const { empId, name, position, company } = formData;
      const employee = { id: parseInt(id), empId, name, position, company };
      console.log(employee);
      updateEmployee(parseInt(id), employee);
      navigate("/");
    }
    event.preventDefault();
    setFormData({ empId: "", name: "", position: "", company: "" });
    setValidated(false);
  };
  return (
    <>
      <h3>Edit Employee</h3>

      <Form noValidate validated={validated} onSubmit={handleUpdate}>
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

        <Button type="submit">Update Employee</Button>
      </Form>
    </>
  );
};

export default EditEmployee;
