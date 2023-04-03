import { motion } from "framer-motion";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ArrowDown } from "react-feather";

import Demo from "#modules/Demo";

const Home = () => {
  const { user, error, isLoading } = useUser();

  // Files
  const [files, setFiles] = useState([]);

  const handleFileChange = (file) => {
    setFiles([...files, file]);
  };

  const fileTypes = ["PDF"];

  const onDelete = (fileName) => {
    const newFiles = files.filter((file) => file.name !== fileName);
    setFiles(newFiles);
  };

  return (
    <motion.div className="h-screen w-screen overflow-x-hidden">
      <div className="h-screen flex flex-col">
        <div className="w-full flex flex-col pb-20 pt-5 items-start bg-hover h-[85%] px-[15%] gap-20 justify-between">
          <div className="w-full flex flex-row items-center justify-between justify-self-start ">
            <div>
              <p className="text-3xl text-primary font-cairo">Scribe</p>
            </div>
            <div className="flex flex-row text-primary font-quicksand text-lg font-bold gap-12">
              {user ? (
                <a
                  className="rounded-md px-4 py-2 cursor-pointer transition-all font-quicksand hover:bg-secondary hover:text-hover flex justify-center items-center"
                  href="/api/auth/logout"
                >
                  SIGN OUT
                </a>
              ) : (
                <>
                  <a
                    className="rounded-md px-4 py-2 cursor-pointer transition-all font-quicksand hover:bg-secondary hover:text-hover flex justify-center items-center"
                    href="/api/auth/login"
                  >
                    SIGN IN
                  </a>
                  <a
                    className="rounded-md px-4 py-2 cursor-pointer transition-all font-quicksand hover:bg-secondary hover:text-hover flex justify-center items-center"
                    href="/api/auth/signup"
                  >
                    SIGN UP
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center self-center">
            <p className="text-2xl font-quicksand font-bold text-center">
              INTRODUCING SCRIBE
            </p>
            <p className="text-5xl font-quicksand font-medium text-center leading-[1.2]">
              Upload your notes and readings and <br /> leave the hardwork to
              Scribe
            </p>
          </div>
          <Demo
            handleFileChange={handleFileChange}
            fileTypes={fileTypes}
            files={files}
            onDelete={onDelete}
          />
        </div>
        <div className="width full flex flex-row items-center justify-center grow">
          <ArrowDown size={60} className="animate-bounce" />
        </div>
      </div>
      <div className="h-fit flex flex-col px-[10%] py-60 gap-44 items-center">
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.75,
          }}
          viewport={{ once: false }}
          className="w-[60%] flex flex-row"
        >
          <div className="p-10">
            <p className="text-black">1</p>
          </div>
          <div className="grow p-10 bg-page bg-opacity-10 rounded-xl">
            <p className="text-black">BYE</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
