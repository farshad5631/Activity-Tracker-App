import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getWorkouts } from "../utils/localStorageHelper";
import WorkoutCard from "../molecules/WorkoutCard";

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const workouts = getWorkouts();
    setWorkouts(workouts);
  }, []);

  return (
    <div>
      <h2>Workout List</h2>
      {workouts.length > 0 ? (
        workouts.map((workout) => (
          <div key={workout.id}>
            <WorkoutCard workout={workout} />
            <Link to={`/workout/${workout.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No workouts recorded.</p>
      )}
    </div>
  );
}

export default WorkoutList;
