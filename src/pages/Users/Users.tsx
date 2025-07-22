// import React from "react";

import { useState } from "react";
import { CustomTable } from "../../components/Table/Table";
import type { Column } from "../../components/Table/types";
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const renderedData = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const columns: Column[] = [
  { id: "name", label: "Dessert" },
  { id: "calories", label: "Calories", align: "right" },
  { id: "fat", label: "Fat (g)", align: "right" },
  { id: "carbs", label: "Carbs (g)", align: "right" },
  { id: "protein", label: "Protein (g)", align: "right" },
];

export const Users = () => {
  const [data, setData] = useState(renderedData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  return (
    <div className="min-h-screen min-w-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>
      {/* <CustomTable rows={rows} /> */}
      <CustomTable
        columns={columns}
        rows={data}
        loading={false}
        total={100}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={setPage}
        onRowsPerPageChange={setRowsPerPage}
      />
      ;
    </div>
  );
};
