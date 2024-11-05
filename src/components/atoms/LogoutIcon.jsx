import React from "react";
import { TbLogout2 } from "react-icons/tb";


const LogoutIcon = (props) => {
  return (
    <div>
      <a id="logoutButton" onClick={props.onClick} className="p-6 cursor-pointer">
        <TbLogout2  size={25} />
      </a>
    </div>
  );
};

export default LogoutIcon;
