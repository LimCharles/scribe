import { MessageSquare, Sliders, Edit, Home, File } from "react-feather";
import { useRouter } from "next/router";
const SideBar = (props) => {
  const { children } = props;
  const Menus = [
    { title: "Profile", icon: <Home size={15} /> },
    { title: "Models", icon: <MessageSquare size={15} /> },
    { title: "Notes", icon: <Edit size={15} />, gap: true },
    { title: "Files", icon: <File size={15} /> },
    { title: "Settings", icon: <Sliders size={15} /> },
  ];

  // Get current path
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="flex flex-row relative">
      <div
        className={`w-48 bg-gradient-to-b from-[#00916E] via-[#00916E] min-h-screen to-[#C3EC83] px-5 pt-5 relative duration-300 flex flex-col z-30`}
      >
        <ul className="name">
          {Menus.map((item, index) => (
            <li
              key={index}
              className={`rounded-md px-3 h-10 cursor-pointer text-sm text-white items-center gap-x-4 flex transition-all duration-200 font-quicksand font-medium
                ${item.gap ? "mt-9" : "mt-2"} ${
                currentPath.includes(item.title.toLowerCase())
                  ? "bg-[#5B2A86] bg-opacity-90"
                  : "hover:bg-[#00755a]"
              } `}
            >
              {item.icon}

              {item.title}
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
};

export default SideBar;
