import { useEffect, useState } from "react";
import { CustomTable } from "../../components/Table/Table";
import type { Column } from "../../components/Table/types";
import { getAllUsers } from "../../api/users/userApi";
import { SectionHeader } from "../Common/SectionHeader";
import { MenuItem, Select } from "@mui/material";

const userColumns: Column[] = [
  { id: "name", label: "Name" },
  { id: "email", label: "E-mail", align: "right" },
  //   { id: "avatar", label: "Fat (g)", align: "right" },
  { id: "is_active", label: "Status", align: "right" },
];

export const TasksTable = ({ contain }: any) => {
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
    <div className={"min-h-screen w-full mt-6"}>
      <SectionHeader title="Current Tasks" subTitle="Done 30%">
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
      </SectionHeader>

      {/* {JSON.stringify({ rowsPerPage, page })} */}
      <CustomTable
        columns={userColumns}
        rows={users}
        loading={loading}
        total={72}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={setPage}
        onRowsPerPageChange={setRowsPerPage}
        contain
      />
    </div>
  );
};
