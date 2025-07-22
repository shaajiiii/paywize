import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface StatTileProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta?: {
    value: string;
    type: "increase" | "decrease";
    unit?: string;
  };
  subLabel?: string;
}

export const StatTile: React.FC<StatTileProps> = ({
  icon,
  label,
  value,
  delta,
  subLabel,
}) => {
  const isIncrease = delta?.type === "increase";

  return (
    <div className="flex items-center gap-4 w-full px-4 py-3">
      {/* Icon Circle */}
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
        {icon}
      </div>

      {/* Text Section */}
      <div className="flex flex-col flex-1">
        <span className="text-sm text-gray-500 font-semibold">{label}</span>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">{value}</span>
          {delta && (
            <span
              className={`flex items-center text-sm ${
                isIncrease ? "text-green-500" : "text-red-500"
              }`}
            >
              {isIncrease ? (
                <ArrowDropUpIcon fontSize="small" />
              ) : (
                <ArrowDropDownIcon fontSize="small" />
              )}
              {delta.value} {delta.unit}
            </span>
          )}
        </div>
        {subLabel && (
          <span className="text-xs text-green-400 font-medium">{subLabel}</span>
        )}
      </div>
    </div>
  );
};
