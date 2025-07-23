import React from "react";
import moment from "moment";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";

interface GreetingHeaderProps {
  name: string;
  description?: string;
}

const GreetingHeader: React.FC<GreetingHeaderProps> = ({
  name,
  description,
}) => {
  const formattedDate = moment().format("D MMM, YYYY"); 

  return (
    <section className="w-full bg-white px-0 flex flex-col gap-3 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Hello, {name}</h1>
          <p className="text-sm text-gray-500 font-medium mt-1">
            {description}
          </p>
        </div>
        <span className="text-gray-500 font-semibold flex items-center gap-2 text-sm">
          {formattedDate}
          <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <InsertInvitationOutlinedIcon fontSize="medium" />
          </span>
        </span>
      </div>
    </section>
  );
};

export default GreetingHeader;
