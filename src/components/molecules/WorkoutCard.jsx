import React from "react";

function WorkoutCard({ workout }) {
  return (
    <div className="workout-card text-xl flex flex-col items-center justify-center space-y-6">
      <div className=" border-customBlack border-dotted border-b-2">
        <h3>{new Date(workout.workoutDate).toLocaleString()}</h3>
      </div>
      <p className=" border-customBlack border-dotted border-b-2">
        <strong>Type:</strong> {workout.workoutType}
      </p>
      <p className=" border-customBlack border-dotted border-b-2">
        <strong>Duration:</strong> {workout.duration} minutes
      </p>
      <p className=" border-customBlack border-dotted border-b-2">
        <strong>Calories Burned:</strong> {workout.caloriesBurned} kcal
      </p>
      <p className=" border-customBlack border-dotted border-b-2">
        <strong>Exercise:</strong>
        {workout.exerciseName}
      </p>

      <p className=" border-customBlack border-dotted border-b-2">
        <strong>Notes:</strong> {workout.notes}
      </p>
    </div>
  );
}

export default WorkoutCard;
