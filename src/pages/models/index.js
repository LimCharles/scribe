import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { Upload, ArrowRight } from "react-feather";
import Switch from "react-switch";

import AppPage from "#components/AppPage";
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

  return (
    <div className="w-full h-screen overflow-hidden">
      <AppPage>
        <div>
          <p> HEY</p>
        </div>
      </AppPage>
    </div>
  );
};

export default Home;
