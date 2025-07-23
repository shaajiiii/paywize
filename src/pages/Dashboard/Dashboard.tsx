import { dashboardDummyResponse } from "../../dummyData/dummyData";
import GreetingHeader from "../../components/Dashboard/GreetingHeader";
import { StatTile } from "../../components/Dashboard/StatTile";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import { TasksTable } from "../../components/Dashboard/TasksTable";
import CustomLineChart from "../../components/Dashboard/LineChart";
import { SectionHeader } from "../../components/Common/SectionHeader";
import CustomSelect from "../../components/Common/CustomSelectDropdown";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import { useEffect, useState } from "react";

const iconMapper: any = {
  thumbsUp: <ThumbUpAltOutlinedIcon />,
  clock: <AccessTimeIcon />,
  insights: <InsightsOutlinedIcon />,
  troubleshoot: <TroubleshootOutlinedIcon className="text-gray-600" />,
  search: <ManageSearchOutlinedIcon className="text-gray-600" />,
  terminal: <TerminalOutlinedIcon className="text-gray-600" />,
};

const performanceDropdownOptions = [
  "01-07 May",
  "08-14 May",
  "15-21 May",
  "22-28 May",
];

export const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState("01-07 May");

  const [stats, setStats] = useState<any>([]);
  const [performance, setPerformance] = useState<any>({ month: "", data: [] });
  const [tasks, setTasks] = useState<any>([]);

  useEffect(() => {
    // Simulating fetch
    const response = dashboardDummyResponse;

    // Map icon components into the response
    const enrichedStats = response.stats.map((item) => ({
      ...item,
      icon: iconMapper[item.iconType],
    }));

    const enrichedTasks = response.tasks.map((task) => ({
      ...task,
      icon: iconMapper[task.iconType],
    }));

    setStats(enrichedStats);
    setPerformance(response.performance);
    setTasks(enrichedTasks);
  }, []);
  return (
    <div className="min-h-screen p-12 overflow-x-hidden bg-white">
      {/* Welcome header ------  */}
      <GreetingHeader
        name="Margaret"
        description="Track team progress here. You almost reach a goal!"
      />

      {/* stat tiles  ------------ */}
      <div className="bg-white p-4 flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-gray-200 border-y border-gray-200">
        {stats.map((stat: any, idx: any) => (
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
          options={performanceDropdownOptions}
          onChange={setSelectedRange}
        />
      </SectionHeader>

      <CustomLineChart
        data={performance?.data}
        monthAndYear={performance.month}
      />
      {/* Performance section with chart ------------- END*/}

      {/* tasks Section-----------   */}
      <TasksTable taskItems={tasks} />
    </div>
  );
};
