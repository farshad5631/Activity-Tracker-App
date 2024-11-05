import React from "react";
import { LuUsers } from "react-icons/lu";

const UsersIcon = () => {
  return (
    <div>
      <a className="p-6 cursor-pointer" href="#">
        <LuUsers size={25} />
      </a>
    </div>
  );
};

export default UsersIcon;
