import React from "react";
import UserIcon from "../atoms/UserIcon";
import LogoutIcon from "../atoms/LogoutIcon";
import PieChartIcon from "../atoms/PieChartIcon";
import UsersIcon from "../atoms/UsersIcon";
import BarChartIcon from "../atoms/BarChartIcon";
import SettingIcon from "../atoms/SettingIcon";
import { Link, useNavigate } from "react-router-dom";
import { clearUserSession } from "../../utils/LocalStorageHelper";

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserSession();
    navigate("/");
  };
  return (
    <div className="w-24 bg-customGray min-h-screen">
      <div className="h-36 flex flex-col items-center justify-center">
        <Link to="/dashboard">
          <UserIcon />
        </Link>
        <LogoutIcon onClick={handleLogout} />
      </div>
      <div className="flex flex-col items-center mt-20 justify-center">
        <PieChartIcon />
        <UsersIcon />
        <Link to="/workout-history">
          <BarChartIcon />
        </Link>
        <Link to="/add-workout">
          <SettingIcon />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
