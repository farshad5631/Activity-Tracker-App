import React from "react";
import AddWorkoutForm from "../organisms/AddWorkoutForm";
import SideBar from "../templates/SideBar";

function AddWorkout() {
  return (
    <div className="flex flex-row items-center font-primaryRegular">
      <SideBar />
      <div className="flex justify-center mx-auto">
        <AddWorkoutForm />
      </div>
    </div>
  );
}

export default AddWorkout;
