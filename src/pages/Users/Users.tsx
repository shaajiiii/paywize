import { useEffect, useState } from "react";
import { CustomTable } from "../../components/Table/Table";
import type { Column } from "../../components/Table/types";
import { getAllUsers } from "../../api/users/userApi";
import GreetingHeader from "../../components/Dashboard/GreetingHeader";
import SearchInput from "../../components/Common/SearchInput";

const userColumns: Column[] = [
  { id: "name", label: "Name" },
  { id: "email", label: "E-mail", align: "right" },
  { id: "is_active", label: "Status", align: "right" },
];

export const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [searchKey, setSearchKey] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers({
        search: searchKey,
        ...(searchKey ? {} : { page, limit: rowsPerPage }),
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
  }, [page, rowsPerPage, searchKey]);

  const handleSearch = (query: string) => {
    setSearchKey(query);
  };

  return (
    <div className="min-h-screen p-12 overflow-x-hidden bg-white">

      <GreetingHeader
        name="Margaret"
        description="Manage your users effortlessly"
      />

      <div className="pb-3 space-y-4">
        <SearchInput
          onSearch={handleSearch}
          placeholder="Search..."
          debounceMs={300}
          message={
            searchKey && users.length > 0
              ? `Showing ${users.length} ${
                  users.length > 1 ? "results" : "result"
                }`
              : ""
          }
        />
      </div>

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
        hidePagination={!!searchKey}
      />
    </div>
  );
};
