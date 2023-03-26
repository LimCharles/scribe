import NavBar from "#components/NavBar";
import SideBar from "#components/SideBar";

const AppPage = (props) => {
  const { children } = props;
  return (
    <>
      <NavBar />
      <SideBar>
        <div className="w-full h-full py-8 px-8 z-10">{children}</div>
      </SideBar>
    </>
  );
};

export default AppPage;
