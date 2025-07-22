import { BarChart } from "@mui/x-charts/BarChart";
import { Tile } from "../../components/Dashboard/Tiles";
import { DashboardResponse } from "../../dummyData/dummyData";
import { Users } from "../Users/Users";
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
      {/* <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> */}
      {/* Tiles */}
      {/* {DashboardResponse.dashboardStats.map((stat: any) => (
          <Tile key={stat.id} stat={stat} />
        ))} */}
      {/* BarChart */}
      {/* <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white p-4 shadow-md rounded-xl overflow-hidden">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Monthly Performance
          </h2>
          <BarChart
            xAxis={[{ data: ["group A", "group B", "group C"] }]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] },
            ]}
            height={300}
          />
        </div> */}
      {/* Users */}
      {/* <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white p-4 shadow-md rounded-xl overflow-hidden">
          <Users contain />
        </div> */}
      {/* </div> */}
      {/* Welcome   */}
      <GreetingHeader name="Margaret" date="16 May, 2023" />
      {/* stat tiles  */}
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

      <SectionHeader title="Performance">
        <CustomSelect
          value={selectedRange}
          options={options}
          onChange={setSelectedRange}
        />
      </SectionHeader>

      <CustomLineChart />
      {/* tasks table   */}

      <TasksTable />
    </div>
  );
};
