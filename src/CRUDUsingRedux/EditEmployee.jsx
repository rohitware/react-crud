import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
// import { EmployeeContext } from './EmployeeStore';
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee } from "./employeeSlice";

const EditEmployee = () => {
  const { id } = useParams();

  const [validated, setValidated] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  // const {updateEmployee, employee}= useContext(EmployeeContext)
  const employee = useSelector((state) => state.employeeReducer.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    const emp = employee.find((emp) => emp.id === parseInt(id));
    if (emp) {
      setFirstName(emp.firstName);
      setLastName(emp.lastName);
      setCity(emp.city);
      setState(emp.state);
      setZip(emp.zip);
    }
  }, [id, employee]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //alert('Inside Submit button');
    console.log("Inside handle Submit");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const empl = { id: parseInt(id), firstName, lastName, city, state, zip };
    console.log("emp object in emp method-" + empl.lastName);

    dispatch(updateEmployee({ id: parseInt(id), empl }));

    navigate("/");
    event.preventDefault();
    setValidated(true);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              required
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">SUBMIT</Button>
      </Form>
    </>
  );
};

export default EditEmployee;
