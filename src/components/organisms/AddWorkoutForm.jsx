import React from "react";
import WorkoutForm from "../molecules/WorkoutForm";
import { saveWorkout } from "../../utils/LocalStorageHelper";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function AddWorkoutForm() {
  const navigate = useNavigate();
  const handleWorkoutSubmit = (data) => {
    const workout = { ...data, id: uuidv4() };
    saveWorkout(workout);
    toast.success("Workout added successfully!");
    navigate("/workout-history");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <ToastContainer />
      <h2 className="text-xl">Add Workout</h2>
      <WorkoutForm onSubmit={handleWorkoutSubmit} />
    </div>
  );
}

export default AddWorkoutForm;
