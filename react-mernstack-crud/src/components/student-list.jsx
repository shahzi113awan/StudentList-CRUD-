import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";
import { listStudent } from "../actions/studentListAction";
const StudentList = () => {
  const dispatch = useDispatch();
  const studentLis = useSelector((state) => state.studentLis);
  const { error, loading, list } = studentLis;
  useEffect(() => {
    dispatch(listStudent());
  }, [dispatch]);
  const DataTable = () => {
    return list.map((res, i) => {
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
