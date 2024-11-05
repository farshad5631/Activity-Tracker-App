import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import { getWorkouts } from "../../utils/LocalStorageHelper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import SideBar from "../templates/SideBar";

function WorkoutHistory() {
  const [workouts, setWorkouts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const workouts = getWorkouts();
    setWorkouts(workouts);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this workout?")) {
      const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
      localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
      setWorkouts(updatedWorkouts);
      toast.success("This item removed successfully");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-workout/${id}`);
  };

  const handleView = (id) => {
    navigate(`/workout/${id}`);
  };

  const ActionCellRenderer = (params) => {
    return (
      <div className="flex flex-row space-x-2 text-white">
        <button
          onClick={() => handleEdit(params.data.id)}
          className="bg-customBlue px-4 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(params.data.id)}
          className="bg-customRed px-4 rounded-md"
        >
          Delete
        </button>
      </div>
    );
  };

  const ViewCellRenderer = (params) => (
    <div onClick={() => handleView(params.data.id)} className="cursor-pointer">
      {new Date(params.data.workoutDate).toLocaleDateString()} - {params.data.workoutType}
    </div>
  );

  const columns = [
    {
      headerName: 'Date - Type',
      field: 'workoutDate',
      sortable: true,
      filter: true,
      cellRenderer: ViewCellRenderer
      // headerName: "Date",
      // field: "workoutDate",
      // sortable: true,
      // filter: true,
      // valueFormatter: (params) => new Date(params.value).toLocaleString(),
    },
    { headerName: "Type", field: "workoutType", sortable: true, filter: true },
    { headerName: "Duration", field: "duration", sortable: true, filter: true },
    {
      headerName: "Calories Burned",
      field: "caloriesBurned",
      sortable: true,
      filter: true,
    },
    { headerName: "Notes", field: "notes", sortable: true, filter: true },
    {
      headerName: "Excecise Name",
      field: "exerciseName",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Actions",
      cellRenderer: ActionCellRenderer,
      colId: "action",
    },
  ];

  return (
    <div className="flex flex-row w-full font-primaryRegular">
      <SideBar />
      <ToastContainer />
      <div className="flex flex-col w-full items-center mt-10">
        <h2 className="text-xl">Workout History</h2>
        <div className="ag-theme-alpine h-auto w-full p-8 ">
          <AgGridReact
            rowData={workouts}
            columnDefs={columns}
            domLayout="autoHeight"
            frameworkComponents={{ ActionCellRenderer }}
          />
        </div>
      </div>
    </div>
  );
}

export default WorkoutHistory;




