import { useState } from "react";

import NavBar from "#components/NavBar";

export async function getServerSideProps(context) {
  const modelName = "Philo 13";

  return {
    props: { modelName },
  };
}

const Home = (props) => {
  const { modelName } = props;
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="w-full h-screen">
      <NavBar />
      <div className="flex flex-col py-12 px-16">
        <p className="text-4xl font-quicksand">{modelName}</p>
        <div className="grid grid-cols-3">
          <div className="mt-12">
            <form>
              <input
                type="file"
                id="input-file-upload"
                className="hidden"
                multiple={true}
              />
              <label
                id="label-file-upload"
                className="cursor-pointer"
                htmlFor="input-file-upload"
              >
                <div className="flex flex-col items-center justify-center bg-[#5B2A86] bg-opacity-10 rounded-xl h-56 border-dotted border-4 border-[#5B2A86]">
                  <p className="text-xl font-semibold font-inter">
                    Drag & Drop PDFs here or click to select files
                  </p>
                </div>
              </label>
            </form>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
