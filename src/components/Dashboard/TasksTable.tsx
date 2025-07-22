import { SectionHeader } from "../Common/SectionHeader";

import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import { ItemList } from "../Common/List";
import { ThreeDotMenu } from "../Common/Dropdown";
import CustomSelect from "../Common/CustomSelectDropdown";
import { useState } from "react";
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

const dropdownOptions = ["Week", "Month"];
export const TasksTable = () => {
  const [selectedRange, setSelectedRange] = useState("Week");

  return (
    <div className={"w-full mt-6"}>
      <SectionHeader title="Current Tasks" subTitle="Done 30%">
        <CustomSelect
          value={selectedRange}
          options={dropdownOptions}
          onChange={setSelectedRange}
          fillColor="#fff"
        />
      </SectionHeader>

      <ItemList items={dummyItems}>
        <ThreeDotMenu />
      </ItemList>
    </div>
  );
};
