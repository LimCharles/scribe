import { MessageSquare, Sliders, Edit, Home, File } from "react-feather";
import { useRouter } from "next/router";
const SideBar = (props) => {
  const { children } = props;
  const Menus = [
    { title: "Profile", icon: <Home size={15} />, path: "/profile" },
    { title: "Models", icon: <MessageSquare size={15} />, path: "/models" },
    { title: "Notes", icon: <Edit size={15} />, gap: true, path: "/notes" },
    { title: "Files", icon: <File size={15} />, path: "/files" },
    { title: "Settings", icon: <Sliders size={15} />, path: "/settings" },
  ];

  // Get current path
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="flex flex-row relative grow">
      <div
        className={`w-48 bg-gradient-to-b from-secondary via-secondary to-highlight px-5 pt-5 relative duration-300 flex flex-col z-30`}
      >
        <ul className="name">
          {Menus.map((item, index) => (
            <li
              onClick={() => router.push(item.path)}
              key={index}
              className={`rounded-md px-3 h-10 cursor-pointer text-sm text-white items-center gap-x-4 flex transition-all duration-200 font-quicksand font-medium
                ${item.gap ? "mt-9" : "mt-2"} ${
                currentPath.includes(item.title.toLowerCase())
                  ? "bg-hover bg-opacity-90"
                  : "hover:bg-hover hover:text-black"
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
