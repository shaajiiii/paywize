import { useEffect, useState } from "react";
import { CustomTable } from "../../components/Table/Table";
import type { Column } from "../../components/Table/types";
import { getAllUsers } from "../../api/users/userApi";
import GreetingHeader from "../../components/Dashboard/GreetingHeader";

const userColumns: Column[] = [
  { id: "name", label: "Name" },
  { id: "email", label: "E-mail", align: "right" },
  //   { id: "avatar", label: "Fat (g)", align: "right" },
  { id: "is_active", label: "Status", align: "right" },
];

export const Users = ({ contain }: any) => {
  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers({
        page,
        limit: rowsPerPage,
      });
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
    <div className="min-h-screen p-12 overflow-x-hidden bg-white">
      {/* <h1
        className={`${
          contain
            ? "text-xl font-semibold mb-4 text-gray-700"
            : " text-3xl font-bold mb-6 text-gray-800"
        }`}
      >
        Users
      </h1> */}
      {/* {JSON.stringify({ rowsPerPage, page })} */}

      <GreetingHeader
        name="Margaret"
        date="16 May, 2023"
        description="Manage your users effortlessly"
      />
      <CustomTable
        columns={userColumns}
        rows={users}
        loading={loading}
        total={72}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={setPage}
        onRowsPerPageChange={setRowsPerPage}
        // contain
        showActions
      />
    </div>
  );
};
