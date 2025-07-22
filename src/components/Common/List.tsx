// components/ItemList.tsx
import React from "react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

type Status = {
  label: string;
  color: string; // Tailwind color class like "bg-orange-500"
};

type Item = {
  id: string | number;
  icon: React.ReactNode;
  title: string;
  status: Status;
  time: string;
};

type ItemListProps = {
  items: Item[];
  children?: React.ReactNode;
};

export const ItemList: React.FC<ItemListProps> = ({ items, children }) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[700px] divide-y divide-gray-200">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-4 gap-4"
          >
            {/* Left: Icon + Title */}
            <div className="flex items-center gap-4 w-[50%]">
              <div className="p-2 rounded-full bg-gray-100 shrink-0">
                {item.icon}
              </div>
              <div className="text-sm font-semibold text-gray-800 truncate">
                {item.title}
              </div>
            </div>

            {/* Right: Status + Time + Menu */}
            <div className="flex items-center justify-end gap-6 w-[50%] text-sm text-gray-600">
              <div className="flex items-center gap-1 w-[35%] min-w-fit">
                <span className={`w-2 h-2 rounded-full ${item.status.color}`} />
                <span>{item.status.label}</span>
              </div>

              <div className="flex items-center px-12 gap-1 w-[45%] min-w-fit">
                <WatchLaterIcon sx={{ fontSize: 16, color: "#bebebeff" }} />
                <span>{item.time}</span>
              </div>

              {children && <div>{children}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
