import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Button from "../atoms/Button";

const schema = yup.object().shape({
  workoutDate: yup.date().required("Workout date is required"),
  workoutType: yup.string().required("Workout type is required"),
  duration: yup.number().required("Duration is required").positive().integer(),
  exerciseName:yup.string().required("Exercise is required"),
  caloriesBurned: yup
    .number()
    .required("Calories burned is required")
    .positive()
    .integer(),
  notes: yup.string().optional(),
});

function WorkoutForm({ onSubmit }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="bg-white p-6 rounded shadow-md w-80"
    >
      <Controller
        name="workoutDate"
        control={control}
        render={({ field }) => (
          <div className="mb-4">
            <Input
              type="datetime-local"
              placeholder="Workout Date"
              {...field}
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.workoutDate?.message}</p>
          </div>
        )}
      />
      <Controller
        name="workoutType"
        control={control}
        render={({ field }) => (
          <div className="mb-4">
            <Select
              options={["Cardio", "Strength", "Yoga"]}
              {...field}
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.workoutType?.message}</p>
          </div>
        )}
      />
      <Controller
        name="duration"
        control={control}
        render={({ field }) => (
          <div className="mb-4">
            <Input
              type="number"
              placeholder="Duration (minutes)"
              {...field}
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.duration?.message}</p>
          </div>
        )}
      />
      <Controller
        name="caloriesBurned"
        control={control}
        render={({ field }) => (
          <div className="mb-4">
            <Input
              type="number"
              placeholder="Calories Burned"
              {...field}
              className="border p-2 w-full"
            />
            <p className="text-red-500">{errors.caloriesBurned?.message}</p>
          </div>
        )}
      />
      <Controller
        name="notes"
        control={control}
        render={({ field }) => (
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Notes"
              {...field}
              className="border p-2 w-full"
            />
          </div>
        )}
      />
      <Controller
        name="exerciseName"
        control={control}
        render={({ field }) => (
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Exercise Name"
              {...field}
              className="border p-2 w-full"
            />
          </div>
        )}
      />
      <Button
        type="submit"
        text="Add Workout"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      />
    </form>
  );
}

export default WorkoutForm;
