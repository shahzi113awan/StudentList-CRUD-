import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [1]);

  const DataTable = () => {
    return students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
export default StudentList;
