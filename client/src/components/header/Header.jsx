import { MenuBook } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary-color text-white md:h-[50px] flex flex-col md:flex-row md:justify-between items-center py-5 md:py-8 md:px-14 gap-5 text-[14px] md:text-[16px]">
      {/* logo - TopLeft section on desktop */}
      <div className="flex items-center gap-2 border-[1px] p-2 rounded-md shadow-lg shadow-slate-400 mb-4 md:mb-0">
        <Link to="/">
          <MenuBook />
        </Link>
        <Link to="/">
          <span>ZedDiary</span>
        </Link>
      </div>

      {/*  Menu Section - TopRight section on Desktop*/}
      <div className="flex gap-5">
        <Link to="/">
          <span className="bg-white p-2 text-primary-color rounded-md">
            Home
          </span>
        </Link>
        <Link to="/about">
          <span className="p-2 hover:border-[1px] rounded-md border-white">
            About
          </span>
        </Link>
        <Link to="/register">
          <span className="p-2 hover:border-[1px] rounded-md border-white">
            Register
          </span>
        </Link>
        <Link to="/login">
          <span className="p-2 hover:border-[1px] rounded-md border-white">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;