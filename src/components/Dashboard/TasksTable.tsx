import { SectionHeader } from "../Common/SectionHeader";

import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import { ItemList } from "../Common/List";
import { ThreeDotMenu } from "../Common/Dropdown";
const dummyItems = [
  {
    id: 1,
    icon: <TroubleshootOutlinedIcon className="text-gray-600" />,
    title: "Product Review for UI8 Market",
    status: { label: "In progress", color: "bg-orange-500" },
    time: "4h",
  },
  {
    id: 2,
    icon: <ManageSearchOutlinedIcon className="text-gray-600" />,
    title: "UX Research for Product",
    status: { label: "On hold", color: "bg-blue-500" },
    time: "8h",
  },
  {
    id: 3,
    icon: <TerminalOutlinedIcon className="text-gray-600" />,
    title: "App design and development",
    status: { label: "Done", color: "bg-green-500" },
    time: "32h",
  },
];

export const TasksTable = ({ contain }: any) => {
  //   const [users, setUsers] = useState<any[]>([]);
  //   const [page, setPage] = useState(1);
  //   const [rowsPerPage, setRowsPerPage] = useState(5);
  //   const [loading, setLoading] = useState(false);

  //   const fetchUsers = async () => {
  //     setLoading(true);
  //     try {
  //       const data = await getAllUsers({
  //         page,
  //         limit: rowsPerPage,
  //       });
  //       setUsers(data);
  //     } catch (err) {
  //       console.error("Error fetching users", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchUsers();
  //   }, [page, rowsPerPage]);

  return (
    <div className={"w-full mt-6"}>
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

      <ItemList items={dummyItems}>
        <ThreeDotMenu />
      </ItemList>
    </div>
  );
};
