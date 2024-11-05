import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WorkoutCard from "../molecules/WorkoutCard";
import { getWorkoutById } from "../../utils/LocalStorageHelper";
import SideBar from "../templates/SideBar";
function SingleWorkoutPage() {
  const { workoutId } = useParams();
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    const workout = getWorkoutById(workoutId);
    setWorkout(workout);
  }, [workoutId]);

  return (
    <div className="flex flex-row justify-center font-primaryRegular items-center">
      <SideBar />
      <div className="flex flex-col mx-auto  items-center">
        <h2 className="font-primaryBold text-3xl mb-10">Workout Details</h2>
        {workout ? <WorkoutCard workout={workout} /> : <p>No workout found.</p>}
      </div>
    </div>
  );
}

export default SingleWorkoutPage;
