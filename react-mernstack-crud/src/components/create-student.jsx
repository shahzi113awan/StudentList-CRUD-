import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createList } from "../actions/cerateStudentList";

const CreateStudent = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  const onChange = (e) => {
    console.log(e.target.name);
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const studentObject = {
      name: state.name,
      email: state.email,
      rollno: state.rollno,
    };

    dispatch(createList(studentObject));
    setState({ name: "", email: "", rollno: "" });
  };

  return (
    <div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={state.email}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control
            type="text"
            name="rollno"
            value={state.rollno}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>
  );
};

export default CreateStudent;
