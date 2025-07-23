import { SectionHeader } from "../Common/SectionHeader";
import { ItemList } from "../Common/List";
import { ThreeDotMenu } from "../Common/Dropdown";
import CustomSelect from "../Common/CustomSelectDropdown";
import { useState } from "react";

const dropdownOptions = ["Week", "Month"];
export const TasksTable = ({ taskItems }: any) => {
  const [selectedRange, setSelectedRange] = useState("Week");

  return (
    <div className={"w-full mt-6"}>
      <SectionHeader title="Current Tasks" subTitle="Done 30%">
        <CustomSelect
          value={selectedRange}
          options={dropdownOptions}
          onChange={setSelectedRange}
          fillColor="#fff"
        />
      </SectionHeader>

      <ItemList items={taskItems}>
        <ThreeDotMenu />
      </ItemList>
    </div>
  );
};
