import React from "react";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";

interface GreetingHeaderProps {
  name: string;
  date: string;
}

const GreetingHeader: React.FC<GreetingHeaderProps> = ({ name, date }) => (
  <section className="w-full bg-white px-0 flex flex-col gap-3 pb-15">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Hello, {name}</h1>
        <p className="text-sm text-gray-500 font-medium mt-1">
          Track team progress here. You almost reach a goal!
        </p>
      </div>
      <span className="text-gray-500 font-semibold flex items-center gap-2 text-sm">
        {date}
        <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <InsertInvitationOutlinedIcon fontSize="medium" />
        </span>
      </span>
    </div>
  </section>
);

export default GreetingHeader;
