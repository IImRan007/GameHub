import Lottie from "lottie-react";
import Logo from "../assets/logo.json";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-[#bbbbbb4a]">
      <div className="flex-1">
        <Lottie animationData={Logo} className="h-[3rem]" />
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          GameHub
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
