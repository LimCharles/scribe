import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { Upload } from "react-feather";
import Switch from "react-switch";

import NavBar from "#components/NavBar";
import SideBar from "#components/SideBar";
import DroppablePDF from "#components/DroppablePDF";
import DraggablePDF from "#components/DraggablePDF";
import ChatBox from "#components/ChatBox";

export async function getServerSideProps(context) {
  const modelName = "Philo 13";

  return {
    props: { modelName },
  };
}

const Home = (props) => {
  const { modelName } = props;

  // File Handling Code
  const [files, setFiles] = useState([]);

  const handleFileChange = (file) => {
    setFiles([...files, file]);
  };

  const fileTypes = ["PDF"];

  // Function to handle deletion of PDFs
  const onDelete = (fileName) => {
    const newFiles = files.filter((file) => file.name !== fileName);
    setFiles(newFiles);
  };

  // Switch code for user notes
  const [checked, setChecked] = useState(false);
  const handleNotes = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className="w-full h-screen">
      <NavBar />
      <SideBar>
        <div className="w-full h-full py-8 px-16">
          <p className="text-4xl font-quicksand">{modelName}</p>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between items-center">
                <p className="font-quicksand font-medium text-base">
                  Upload your PDFs here
                </p>
                <div className="flex flex-row gap-4 items-center">
                  <p className="font-quicksand font-medium text-base">
                    Use Notes
                  </p>
                  <Switch onChange={handleNotes} checked={checked} />
                </div>
              </div>

              <FileUploader
                handleChange={handleFileChange}
                name="file"
                types={fileTypes}
              >
                <div className="flex cursor-pointer flex-col gap-3 items-center justify-center bg-[#5B2A86] bg-opacity-10 rounded-xl h-56 py-8 px-4 border-dotted border-2 border-[#5B2A86]">
                  <Upload size={50} />
                  <p className="font-inter text-sm">Upload PDFs</p>
                </div>
              </FileUploader>
              <DroppablePDF
                name="pdfs"
                className="p-4 border-[#5B2A86] border-opacity-30 border-[1px] rounded-xl min-h-[300px] gap-4 flex flex-col"
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
              <a
                href="#_"
                className="px-5 py-2.5 relative rounded group text-white font-medium inline-block"
              >
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-[#00916E] to-[#9CFF29]"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-[#00916E] to-[#C3EC83]"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#00916E] to-[#C3EC83]"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br from-[#00916E] to-[#9CFF29"></span>
                <span className="relative font-inter center">
                  Train your model
                </span>
              </a>
            </div>
            <div className="col-span-2 flex flex-col gap-8">
              <p className="font-quicksand font-medium text-2xl">
                Chat with your model
              </p>

              <ChatBox />
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default Home;
