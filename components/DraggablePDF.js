import React from "react";
import { FileText, Trash2 } from "react-feather";

const DraggablePDF = (props) => {
  const { fileName, onDelete } = props;

  // Shorten file name into max 15 characters if too long
  const formattedFileName =
    fileName.length > 30 ? fileName.slice(0, 30) + "..." : fileName;
  return (
    <div className="transition-all duration-100 ease-out p-4 flex flex-row shadow-lg items-center border-[1px] justify-between rounded-xl bg-white border-[#5B2A86] border-opacity-30">
      <div className="flex flex-row items-center gap-4">
        <FileText />
        <p className="font-inter font-base text-sm">{formattedFileName}</p>
      </div>
      <Trash2
        className="cursor-pointer hover:text-red-500"
        onClick={onDelete}
      />
    </div>
  );
};

export default DraggablePDF;
