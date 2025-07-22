// components/CustomLineChart.tsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { date: "01", thisMonth: 8, lastMonth: 7 },
  { date: "02", thisMonth: 6, lastMonth: 8 },
  { date: "03", thisMonth: 7, lastMonth: 6 },
  { date: "04", thisMonth: 6, lastMonth: 6 },
  { date: "05", thisMonth: 9, lastMonth: 5 },
  { date: "06", thisMonth: 7, lastMonth: 4 },
  { date: "07", thisMonth: 8, lastMonth: 5 },
];

const monthAndYear = "July 2025";

const CustomTooltip = ({ active, payload, label, monthAndYear }: any) => {
  if (active && payload?.length) {
    return (
      <div className="rounded-lg bg-[#0F172A] px-4 py-2 text-white shadow-md">
        <div className="font-semibold mb-1">
          {label} {monthAndYear}{" "}
        </div>
        <div className="flex justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-blue-500 rounded-sm"></span>
            This month
          </div>
          <div className="font-semibold">{payload[0].value}h</div>
        </div>
        <div className="flex justify-between gap-4 text-sm mt-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-orange-400 rounded-sm"></span>
            Last month
          </div>
          <div className="font-semibold">{payload[1].value}h</div>
        </div>
      </div>
    );
  }
  return null;
};

// const CustomCursor = ({ points, activePayload }: any) => {
//   if (!activePayload || activePayload.length === 0) return null;

//   const { x } = points[0];
//   const { coordinate } = activePayload[0]; // This gives access to { x, y }

//   return (
//     <line
//       x1={x}
//       x2={x}
//       y1={coordinate.y}
//       y2={coordinate.y + 5} // slightly extend downward if needed
//       stroke="#94a3b8"
//       strokeDasharray="4 4"
//     />
//   );
// };
const CustomLineChart = () => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 10, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="0 0"
            horizontal={false}
            vertical={false}
          />

          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "#64748B" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 12]}
            ticks={[0, 2, 4, 6, 8, 10, 12]}
            tick={{ fontSize: 12, fill: "#64748B" }}
            tickFormatter={(value) => `${value}h`}
            width={30}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip monthAndYear={monthAndYear} />}
            // cursor={<CustomCursor />}
            cursor={{ stroke: "#94a3b8", strokeDasharray: "4 4" }}
          />

          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Line
            type="monotone"
            dataKey="thisMonth"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              stroke: "#3B82F6",
              strokeWidth: 2,
              fill: "#3B82F6",
            }}
          />
          <Line
            type="monotone"
            dataKey="lastMonth"
            stroke="#F59E0B"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              stroke: "#F59E0B",
              strokeWidth: 2,
              fill: "#F59E0B",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
