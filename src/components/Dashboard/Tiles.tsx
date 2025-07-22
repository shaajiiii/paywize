import { Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Tile = ({ stat }: any) => {
  return (
    <>
      <div
        key={stat.id}
        className="bg-white shadow-md rounded-xl p-6 cursor-pointer transition duration-300 hover:scale-105"
      >
        <p className="text-sm text-gray-500">{stat.label}</p>
        <h2 className={`text-2xl font-bold text-${stat.color}-600 mb-3`}>
          {stat.value}
        </h2>
        <Divider />

        <div className="flex items-center justify-between mt-4 mb-1">
          <h2 className="text-xl font-medium text-gray-400">View Report</h2>
          <ArrowForwardIcon className="text-gray-400 mt-2" />
        </div>
      </div>
    </>
  );
};
