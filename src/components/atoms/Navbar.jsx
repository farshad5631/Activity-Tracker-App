import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearUserSession } from "../../utils/LocalStorageHelper";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserSession();
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/dashboard" className="text-white">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/add-workout" className="text-white">
            Add Workout
          </Link>
        </li>
        <li>
          <Link to="/workout-history" className="text-white">
            Workout History
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="text-white">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
