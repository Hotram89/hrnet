import React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid/DataGrid/";

import { v4 as uuidv4, v4 } from "uuid";
import "./Table.css";
import SearchBar from "./SearchBar";

export default function BasicTable(props) {
  let users = props.users.users;
  let firstUser = props.users.users[0];
  let tablecells = Object.keys(firstUser);

  const [data, setData] = useState(users);

  const columns = [
    { field: "FirstName", headerName: "First name", width: 130 },
    { field: "LastName", headerName: "Last name", width: 130 },
    { field: "StartDate", headerName: "Start date", width: 130 },
    { field: "Department", headerName: "Department", width: 150 },
    { field: "DateOfBirth", headerName: "Date of Birth", width: 130 },
    { field: "Street", headerName: "Street", width: 130 },
    { field: "City", headerName: "City", width: 130 },
    { field: "State", headerName: "State", width: 130 },
    { field: "ZipCode", headerName: "Zip Code", width: 90 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <SearchBar list={data} setList={setData}></SearchBar>

      <DataGrid
        rows={data}
        getRowId={(row) => v4()}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      ></DataGrid>
    </div>
  );
}
