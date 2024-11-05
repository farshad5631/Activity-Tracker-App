import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SettingIcon = () => {
  return (
    <div>
      <Link id="logoutButton" className="p-6 cursor-pointer">
        <IoSettingsOutline size={25} />
      </Link>
    </div>
  );
};

export default SettingIcon;
