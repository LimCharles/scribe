import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { Upload, ArrowRight, ArrowLeft } from "react-feather";
import Switch from "react-switch";
import { motion, AnimatePresence } from "framer-motion";

import AppPage from "#components/AppPage";
import DroppablePDF from "#components/DroppablePDF";
import DraggablePDF from "#components/DraggablePDF";
import ChatBox from "#components/ChatBox";

export async function getServerSideProps(context) {
  const modelName = "Philo 13";

  return {
    props: { modelName },
  };
}

const ModelPage = (props) => {
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

  // Proceed to Chat
  const [doneTraining, setDoneTraining] = useState(false);
  const handleProceed = () => {
    if (doneTraining) {
      setDoneTraining(false);
    } else {
      setDoneTraining(true);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <AppPage>
        <AnimatePresence mode="popLayout">
          {doneTraining ? (
            <motion.div
              key={"chat"}
              initial={{ x: -1000, y: 0, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{ x: -1000, y: 0, opacity: 0 }}
              transition={{
                type: "spring",
                bounce: 0,
              }}
              className="flex flex-col gap-8 h-full"
            >
              <div>
                <a
                  onClick={() => {
                    handleProceed();
                  }}
                  className="cursor-pointer relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-[1px] border-[#5B2A86] hover:border-opacity-0 rounded-full shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-[#5B2A86] group-hover:translate-x-0 ease">
                    <ArrowLeft size={20} />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-[#5B2A86] transition-all duration-300 transform group-hover:-translate-x-full ease">
                    Return
                  </span>
                  <span className="relative invisible">Return</span>
                </a>
              </div>
              <ChatBox />
            </motion.div>
          ) : (
            <motion.div
              key={"train"}
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 1000, opacity: 0 }}
              transition={{ type: "spring", bounce: 0 }}
              className="z-10 h-full"
            >
              <div className="flex flex-row justify-between items-center">
                <p className="text-4xl font-quicksand">{modelName}</p>
                <a
                  onClick={() => {
                    handleProceed();
                  }}
                  className="cursor-pointer relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition duration-300 ease-out border-[1px] border-[#5B2A86] hover:border-opacity-0 rounded-full shadow-md group"
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
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div className="col-span-2 flex flex-col gap-3">
                  <p className="font-quicksand font-medium text-2xl">
                    Copy your notes here
                  </p>
                  <div className="h-full bg-slate-50 border-[1px] border-[#5B2A86] border-opacity-50 rounded-xl pl-4 pt-4 pb-4 focus:outline-none font-inter">
                    <textarea
                      id="notes"
                      style={{
                        resize: "none",
                      }}
                      onChange={handleNotesChange}
                      className="h-full w-full focus:outline-none font-inter"
                    />
                  </div>
                </div>
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

                  <div className="border-[#5B2A86] border-opacity-50 border-[1px] rounded-xl overflow-hidden">
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
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-black hover:text-white rounded-md shadow-2xl group"
                  >
                    <span className="absolute inset-0 w-full h-full shadow-xl transition duration-300 ease-out opacity-0 bg-gradient-to-br bg-[#5B2A86] group-hover:opacity-100"></span>
                    <span className="absolute inset-0 w-full h-full border-[1px] border-[#5B2A86] rounded-md"></span>
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span className="relative">Train Model</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AppPage>
    </div>
  );
};

export default ModelPage;
