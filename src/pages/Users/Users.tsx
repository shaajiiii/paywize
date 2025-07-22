// import React from "react";

import { useEffect, useState } from "react";
import { CustomTable } from "../../components/Table/Table";
import type { Column } from "../../components/Table/types";
import axios from "../../config/axiosInstance";
import { getAllUsers } from "../../api/users/userApi";

const userColumns: Column[] = [
  { id: "name", label: "Name" },
  { id: "email", label: "E-mail", align: "right" },
  //   { id: "avatar", label: "Fat (g)", align: "right" },
  { id: "is_active", label: "Status", align: "right" },
];

export const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const getUsers = async () => {
    const res = await axios.get("/users");
    console.log(res.data);

    return res.data;
  };
  useEffect(() => {
    getUsers();
  }, []);

  //   const [page, setPage] = useState(1);
  //   const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers({
        page,
        limit: rowsPerPage,
      });
      console.log("Users>>> :", data);

      setUsers(data);
    } catch (err) {
      console.error("Error fetching users", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, rowsPerPage]);

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>
      {/* {JSON.stringify({ rowsPerPage, page })} */}
      <CustomTable
        columns={userColumns}
        rows={users}
        loading={false}
        total={72}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={setPage}
        onRowsPerPageChange={setRowsPerPage}
      />
    </div>
  );
};
