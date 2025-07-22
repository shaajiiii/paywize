import { BarChart } from "@mui/x-charts/BarChart";
import { Tile } from "../../components/Dashboard/Tiles";
import { DashboardResponse } from "../../dummyData/dummyData";
import { Users } from "../Users/Users";

export const Dashboard = () => {
  return (
    <div className="min-h-screen p-6 overflow-x-hidden bg-white">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Tiles */}
        {DashboardResponse.dashboardStats.map((stat: any) => (
          <Tile key={stat.id} stat={stat} />
        ))}

        {/* BarChart */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white p-4 shadow-md rounded-xl overflow-hidden">
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
        </div>

        {/* Users */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-white p-4 shadow-md rounded-xl overflow-hidden">
          <Users contain />
        </div>
      </div>
    </div>
  );
};
