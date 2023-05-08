import { Link } from "react-router-dom";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { useContext } from "react";
import { ContactProvider } from "../../context/Contact_Context";

const Header = () => {
  const { userAccess, userLogOut } = useContext(ContactProvider);
  return (
    <div className="bg-primary-color text-white md:h-[50px] flex flex-col md:flex-row md:justify-between items-center py-5 md:py-8 md:px-14 gap-5 text-[14px] md:text-[16px]">
      {/* logo - TopLeft section on desktop */}
      <div className="flex items-center gap-2 border-[1px] p-2 rounded-md shadow-lg shadow-slate-400 mb-4 md:mb-0">
        <Link to="/">
          <BsFillJournalBookmarkFill size="24px" />
        </Link>
        <Link to="/">
          <span>ZedDiary</span>
        </Link>
      </div>

      {/*  Menu Section - TopRight section on Desktop*/}
      <div className="flex item-center gap-5">
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

        {!userAccess ? (
          <Link to="/register">
            <span className="p-2 hover:border-[1px] rounded-md border-white">
              Register
            </span>
          </Link>
        ) : (
          <Link to="/profile">Profile</Link>
        )}

        {!userAccess ? (
          <Link to="/login">
            <span className="p-2 hover:border-[1px] rounded-md border-white">
              Login
            </span>
          </Link>
        ) : (
          <Link>
            <span
              className="border-[1px] bg-red-800 hover:bg-red-500 p-2"
              onClick={userLogOut}
            >
              Log Out
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
