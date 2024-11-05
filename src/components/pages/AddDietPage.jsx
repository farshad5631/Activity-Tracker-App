import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { saveDiet } from "../../utils/LocalStorageHelper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  date: yup.date().required("Date is required"),
  fat: yup.number().required("Fat is required").positive().integer(),
  protein: yup.number().required("Protein is required").positive().integer(),
  carbohydrate: yup
    .number()
    .required("Carbohydrate is required")
    .positive()
    .integer(),
  water: yup.number().required("Water is required").positive().integer(),
});

function AddDietPage() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (data) => {
    saveDiet(data);
    toast.success("Diet information added successfully!");
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <h2 className="text-2xl mb-4">Add Your Diet</h2>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <div className="mb-4">
              <label className="block text-gray-700">Date</label>
              <Input type="date" {...field} className="border p-2 w-full" />
              <p className="text-red-500">{errors.date?.message}</p>
            </div>
          )}
        />
        <Controller
          name="fat"
          control={control}
          render={({ field }) => (
            <div className="mb-4">
              <label className="block text-gray-700">Fat (grams)</label>
              <Input type="number" {...field} className="border p-2 w-full" />
              <p className="text-red-500">{errors.fat?.message}</p>
            </div>
          )}
        />
        <Controller
          name="protein"
          control={control}
          render={({ field }) => (
            <div className="mb-4">
              <label className="block text-gray-700">Protein (grams)</label>
              <Input type="number" {...field} className="border p-2 w-full" />
              <p className="text-red-500">{errors.protein?.message}</p>
            </div>
          )}
        />
        <Controller
          name="carbohydrate"
          control={control}
          render={({ field }) => (
            <div className="mb-4">
              <label className="block text-gray-700">
                Carbohydrate (grams)
              </label>
              <Input type="number" {...field} className="border p-2 w-full" />
              <p className="text-red-500">{errors.carbohydrate?.message}</p>
            </div>
          )}
        />
        <Controller
          name="water"
          control={control}
          render={({ field }) => (
            <div className="mb-4">
              <label className="block text-gray-700">Water (ml)</label>
              <Input type="number" {...field} className="border p-2 w-full" />
              <p className="text-red-500">{errors.water?.message}</p>
            </div>
          )}
        />
        <Button
          type="submit"
          text="Add Diet"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        />
      </form>
    </div>
  );
}

export default AddDietPage;
