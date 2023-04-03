import ChatBox from "./ChatBox";
import { FileUploader } from "react-drag-drop-files";
import { Upload } from "react-feather";

import DroppablePDF from "#components/DroppablePDF";
import DraggablePDF from "#components/DraggablePDF";

const Demo = (props) => {
  const { handleFileChange, fileTypes, files, onDelete } = props;
  return (
    <div className="w-[90%] h-[55%] flex flex-row gap-8 justify-center self-center">
      <div className="flex flex-col gap-8 min-w-[20%]">
        <FileUploader
          handleChange={handleFileChange}
          name="file"
          types={fileTypes}
        >
          <div className="flex cursor-pointer flex-col gap-3 min-w-[20%] items-center justify-center bg-page bg-opacity-10 rounded-xl h-full py-8 px-4 border-dotted border-2 border-page">
            <Upload size={50} />
            <p className="font-inter text-lg font-medium">
              Try uploading your PDFs!
            </p>
          </div>
        </FileUploader>
        <div className="border-page bg-page bg-opacity-10 border-opacity-50 border-[1px] rounded-xl overflow-hidden grow flex flex-col">
          <DroppablePDF
            id="pdfs"
            name="pdfs"
            className="p-4 h-1 grow gap-4 flex flex-col overflow-y-auto"
          >
            {files.map((file) => {
              return (
                <DraggablePDF
                  key={file.name}
                  fileName={file.name}
                  onDelete={() => {
                    onDelete(file.name);
                  }}
                />
              );
            })}
          </DroppablePDF>
        </div>
      </div>
      <div className="grow">
        <ChatBox demo />
      </div>
    </div>
  );
};

export default Demo;
