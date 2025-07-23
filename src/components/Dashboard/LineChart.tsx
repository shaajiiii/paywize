import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

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

const CustomLineChart = ({ data, monthAndYear }: any) => {
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
