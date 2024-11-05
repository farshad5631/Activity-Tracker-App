import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { getWorkouts } from "../../utils/LocalStorageHelper";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import SideBar from "../templates/SideBar";

function CaloriesBurnedPage() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const workouts = getWorkouts();
    setWorkouts(workouts);
  }, []);

  const columns = [
    {
      headerName: "Date",
      field: "workoutDate",
      sortable: true,
      filter: true,
      valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
    },
    {
      headerName: "Calories Burned",
      field: "caloriesBurned",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Workout Type",
      field: "workoutType",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Duration (minutes)",
      field: "duration",
      sortable: true,
      filter: true,
    },
    { headerName: "Notes", field: "notes", sortable: true, filter: true },
  ];

  return (
    <div className="flex flex-row w-full font-primaryRegular">
      <SideBar />
      <div className="flex flex-col w-full items-center mt-10">
        <h2 className="text-2xl mb-4">Calories Burned</h2>
        <div className="ag-theme-alpine h-auto  p-8" style={{ height: 600, width: "100%" }}>
          <AgGridReact
            rowData={workouts}
            columnDefs={columns}
            domLayout="autoHeight"
          />
        </div>
      </div>
    </div>
  );
}

export default CaloriesBurnedPage;
