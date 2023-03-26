import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { Upload, ArrowRight } from "react-feather";
import Switch from "react-switch";

import NavBar from "#components/NavBar";
import SideBar from "#components/SideBar";
import DroppablePDF from "#components/DroppablePDF";
import DraggablePDF from "#components/DraggablePDF";

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

  // Notes of user
  const [notes, setNotes] = useState("");
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };
  return (
    <div className="w-full h-screen overflow-hidden">
      <NavBar />
      <SideBar>
        <div className="w-full h-full py-8 px-8">
          <div className="flex flex-row justify-between items-center">
            <p className="text-4xl font-quicksand">{modelName}</p>
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[#5B2A86] hover:border-opacity-0 rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#5B2A86] group-hover:translate-x-0 ease">
                <ArrowRight size={20} />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-[#5B2A86] transition-all duration-300 transform group-hover:translate-x-full ease">
                Proceed
              </span>
              <span className="relative invisible">Proceed</span>
            </a>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-8 h-full">
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
              <a
                href="#_"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-black hover:text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br bg-[#5B2A86] group-hover:opacity-100"></span>
                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-[#360568] to-transparent opacity-10 h-1/3 group-hover:opacity-0"></span>
                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#360568] to-transparent opacity-10 group-hover:opacity-0"></span>
                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-[#360568] to-transparent opacity-10 group-hover:opacity-0"></span>
                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-[#360568] to-transparent opacity-10 group-hover:opacity-0"></span>
                <span class="absolute inset-0 w-full h-full border-2 border-[#5B2A86] group-hover:border-opacity-0 rounded-md"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative">Train Model</span>
              </a>
              <div className="border-[#5B2A86] border-opacity-30 border-[1px] rounded-xl overflow-hidden">
                <DroppablePDF
                  name="pdfs"
                  className="p-4 h-48 gap-4 flex flex-col overflow-y-auto"
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
            <div className="col-span-2 flex flex-col gap-3">
              <p className="font-quicksand font-medium text-2xl">
                Copy your notes here
              </p>

              <textarea
                style={{
                  resize: "none",
                }}
                onChange={handleNotesChange}
                className="h-full bg-slate-50 border-[1px] border-[#5B2A86] border-opacity-30 rounded-xl p-4 focus:outline-none font-inter"
              />
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default Home;
