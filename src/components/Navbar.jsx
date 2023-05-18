// import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Lottie from "lottie-react";
import Logo from "../assets/logo.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div
      className={` ${
        open ? "w-[14rem]" : "w-20"
      } bg-[#f0f8ff1c] h-screen p-5 pt-8 relative duration-300`}
    >
      <FaArrowAltCircleLeft
        className={`absolute cursor-pointer -right-3 top-[3.7rem] w-7 h-[20px] ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <Link to={"/"}>
        <div className="flex gap-x-4 items-center">
          <Lottie
            animationData={Logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            } h-[70px]`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            GameHub
          </h1>
        </div>
      </Link>
      <ul className="pt-6">
        <Link to="/action">
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
          ${Menus.gap ? "mt-9" : "mt-2"}`}
          >
            <img src={`./src/assets/${Menus.src}.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Action
            </span>
          </li>
        </Link>
        <li
          className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
          ${Menus.gap ? "mt-9" : "mt-2"}`}
        >
          <img src={`./src/assets/${Menus.src}.png`} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            {Menus.title}
          </span>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
