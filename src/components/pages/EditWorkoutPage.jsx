// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getWorkoutById, getWorkouts } from "../../utils/LocalStorageHelper";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Input from "../atoms/Input";
// import Select from "../atoms/Select";
// import Button from "../atoms/Button";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import SideBar from "../templates/SideBar";

// const schema = yup.object().shape({
//   workoutDate: yup.date().required("Workout date is required"),
//   workoutType: yup.string().required("Workout type is required"),
//   duration: yup.number().required("Duration is required").positive().integer(),
//   caloriesBurned: yup
//     .number()
//     .required("Calories burned is required")
//     .positive()
//     .integer(),
//   exceciseName: yup.string().required("Excercise Name type is required"),
//   notes: yup.string().optional(),
// });

// function EditWorkoutPage() {
//   const { workoutId } = useParams();
//   const navigate = useNavigate();
//   const [workout, setWorkout] = useState(null);

//   const {
//     control,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       workoutDate: "",
//       workoutType: "",
//       duration: "",
//       caloriesBurned: "",
//       exerciseName: "",
//       notes: "",
//     },
//   });

//   useEffect(() => {
//     const workout = getWorkoutById(workoutId);
//     if (workout) {
//       setWorkout(workout);
//       Object.keys(workout).forEach((key) => setValue(key, workout[key]));
//     }
//   }, [workoutId, setValue]);

//   const handleEditSubmit = (data) => {
//     const workouts = getWorkouts();
//     const updatedWorkouts = workouts.map((w) =>
//       w.id === workout.id ? { ...workout, ...data } : w
//     );
//     localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
//     toast.success("Workout updated successfully!");
//     navigate("/workout-history");
//   };

//   if (!workout) return <p>Loading...</p>;

//   return (
//     <div className="flex flex-row font-primaryRegular">
//       <SideBar />
//       <ToastContainer />
//       <div className="flex flex-col items-center mx-auto ">
//         <h2 className="text-2xl mb-4">Edit Workout</h2>
//         <form
//           onSubmit={handleSubmit(handleEditSubmit)}
//           className="bg-white p-6 rounded shadow-md w-96"
//         >
//           <Controller
//             name="workoutDate"
//             control={control}
//             render={({ field }) => (
//               <div className="mb-4">
//                 <label className="block text-gray-700">Workout Date</label>
//                 <Input
//                   type="datetime-local"
//                   {...field}
//                   className="border p-2 w-full"
//                 />
//                 <p className="text-red-500">{errors.workoutDate?.message}</p>
//               </div>
//             )}
//           />
//           <Controller
//             name="workoutType"
//             control={control}
//             render={({ field }) => (
//               <div className="mb-4">
//                 <label className="block text-gray-700">Workout Type</label>
//                 <Select
//                   options={["Cardio", "Strength", "Yoga"]}
//                   {...field}
//                   className="border p-2 w-full"
//                 />
//                 <p className="text-red-500">{errors.workoutType?.message}</p>
//               </div>
//             )}
//           />
//           <Controller
//             name="duration"
//             control={control}
//             render={({ field }) => (
//               <div className="mb-4">
//                 <label className="block text-gray-700">
//                   Duration: (minutes)
//                 </label>
//                 <Input type="number" {...field} className="border p-2 w-full" />
//                 <p className="text-red-500">{errors.duration?.message}</p>
//               </div>
//             )}
//           />
//           <Controller
//             name="caloriesBurned"
//             control={control}
//             render={({ field }) => (
//               <div className="mb-4">
//                 <label className="block text-gray-700">Calories Burned: </label>
//                 <Input type="number" {...field} className="border p-2 w-full" />
//                 <p className="text-red-500">{errors.caloriesBurned?.message}</p>
//               </div>
//             )}
//           />
//           <Controller
//             name="exerciseName"
//             control={control}
//             render={({ field }) => (
//               <div className="mb-4">
//                 <label className="block text-gray-700">Excercise: </label>
//                 <Input type="text" {...field} className="border p-2 w-full" />
//                 <p className="text-red-500">{}</p>
//               </div>
//             )}
//           />
//           <Controller
//             name="notes"
//             control={control}
//             render={({ field }) => (
//               <div className="mb-4">
//                 <label className="block text-gray-700">Notes</label>
//                 <Input type="text" {...field} className="border p-2 w-full" />
//               </div>
//             )}
//           />
//           <Button
//             type="submit"
//             text="Save Changes"
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EditWorkoutPage;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getWorkoutById, getWorkouts } from "../../utils/LocalStorageHelper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Button from "../atoms/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../templates/SideBar";

const schema = yup.object().shape({
  workoutDate: yup.date().required("Workout date is required"),
  workoutType: yup.string().required("Workout type is required"),
  duration: yup.number().required("Duration is required").positive().integer(),
  caloriesBurned: yup
    .number()
    .required("Calories burned is required")
    .positive()
    .integer(),
  notes: yup.string().optional(),
});

function EditWorkoutPage() {
  const { workoutId } = useParams();
  const navigate = useNavigate();
  const [workout, setWorkout] = useState(null);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      workoutDate: "",
      workoutType: "",
      duration: "",
      caloriesBurned: "",
      notes: "",
    },
  });

  useEffect(() => {
    const workout = getWorkoutById(workoutId);
    if (workout) {
      setWorkout(workout);
      Object.keys(workout).forEach((key) => setValue(key, workout[key]));
    }
  }, [workoutId, setValue]);

  const handleEditSubmit = (data) => {
    const workouts = getWorkouts();
    const updatedWorkouts = workouts.map((w) =>
      w.id === workout.id ? { ...workout, ...data } : w
    );
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
    toast.success("Workout updated successfully!");
    navigate("/workout-history");
  };

  if (!workout) return <p>Loading...</p>;

  return (
    <div className="flex flex-row items-center font-primaryRegular">
      <SideBar />
      <ToastContainer />
      <div className="flex flex-col mx-auto items-center">
        <h2 className="text-2xl mb-4">Edit Workout</h2>
        <form
          onSubmit={handleSubmit(handleEditSubmit)}
          className="bg-white p-6 rounded shadow-md w-80"
        >
          <Controller
            name="workoutDate"
            control={control}
            render={({ field }) => (
              <div className="mb-4">
                <label className="block text-gray-700">Workout Date</label>
                <Input
                  type="datetime-local"
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
                <label className="block text-gray-700">Workout Type</label>
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
                <label className="block text-gray-700">
                  Duration (minutes)
                </label>
                <Input type="number" {...field} className="border p-2 w-full" />
                <p className="text-red-500">{errors.duration?.message}</p>
              </div>
            )}
          />
          <Controller
            name="caloriesBurned"
            control={control}
            render={({ field }) => (
              <div className="mb-4">
                <label className="block text-gray-700">Calories Burned</label>
                <Input type="number" {...field} className="border p-2 w-full" />
                <p className="text-red-500">{errors.caloriesBurned?.message}</p>
              </div>
            )}
          />
          <Controller
            name="notes"
            control={control}
            render={({ field }) => (
              <div className="mb-4">
                <label className="block text-gray-700">Notes</label>
                <Input type="text" {...field} className="border p-2 w-full" />
              </div>
            )}
          />
          <Button
            type="submit"
            text="Save Changes"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          />
        </form>
      </div>
    </div>
  );
}

export default EditWorkoutPage;
