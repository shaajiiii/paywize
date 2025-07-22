// import { DashboardResponse } from "../../dummyData/dummyData";
import GreetingHeader from "../../components/Dashboard/GreetingHeader";
import { StatTile } from "../../components/Dashboard/StatTile";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import { TasksTable } from "../../components/Dashboard/TasksTable";
import CustomLineChart from "../../components/Dashboard/LineChart";
import { SectionHeader } from "../../components/Common/SectionHeader";
import CustomSelect from "../../components/Common/CustomSelectDropdown";
import { useState } from "react";

type StatTileProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta: {
    value: string;
    type: "increase" | "decrease";
    unit?: string;
  };
};
const statsData: StatTileProps[] = [
  {
    icon: <ThumbUpAltOutlinedIcon />,
    label: "Finished",
    value: "18",
    delta: { value: "+8", type: "increase", unit: "tasks" },
  },
  {
    icon: <AccessTimeIcon />,
    label: "Tracked",
    value: "31h",
    delta: { value: "-6", type: "decrease", unit: "hours" },
  },
  {
    icon: <InsightsOutlinedIcon />,
    label: "Efficiency",
    value: "93%",
    delta: { value: "+12%", type: "increase" },
  },
];

const options = ["01–07 May", "08–14 May", "15–21 May", "22–28 May"];

export const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState("01–07 May");
  return (
    <div className="min-h-screen p-12 overflow-x-hidden bg-white">
      {/* Welcome header ------  */}
      <GreetingHeader name="Margaret" date="16 May, 2023" />

      {/* stat tiles  ------------ */}
      <div className="bg-white p-4 flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-gray-200 border-y border-gray-200">
        {statsData.map((stat, idx) => (
          <div
            key={idx}
            className={`w-full ${idx === 1 ? "md:px-4" : ""} ${
              idx === 2 ? "md:pl-4" : ""
            } py-4 md:py-0`}
          >
            <StatTile {...stat} />
          </div>
        ))}
      </div>
      {/* stat tiles  ------------ END */}

      {/* Performance section with chart ------------- */}
      <SectionHeader title="Performance">
        <CustomSelect
          value={selectedRange}
          options={options}
          onChange={setSelectedRange}
        />
      </SectionHeader>

      <CustomLineChart />
      {/* Performance section with chart ------------- END*/}

      {/* tasks Section-----------   */}
      <TasksTable />
    </div>
  );
};
