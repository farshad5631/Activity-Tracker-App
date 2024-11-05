import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { getDiets } from "../../utils/LocalStorageHelper";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import SideBar from "../templates/SideBar";

function CaloriesConsumedPage() {
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    const diets = getDiets();
    setDiets(diets);
  }, []);

  const caloriesData = diets.map((diet) => ({
    date: new Date(diet.date).toLocaleDateString(),
    calories: diet.fat * 9 + diet.protein * 5 + diet.carbohydrate * 4,
    fat: diet.fat,
    protein: diet.protein,
    carbohydrate: diet.carbohydrate,
    water: diet.water,
  }));

  const columns = [
    { headerName: "Date", field: "date", sortable: true, filter: true },
    {
      headerName: "Calories Consumed",
      field: "calories",
      sortable: true,
      filter: true,
    },
    { headerName: "Fat (grams)", field: "fat", sortable: true, filter: true },
    {
      headerName: "Protein (grams)",
      field: "protein",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Carbohydrate (grams)",
      field: "carbohydrate",
      sortable: true,
      filter: true,
    },
    { headerName: "Water (ml)", field: "water", sortable: true, filter: true },
  ];

  return (
    <div className="flex flex-row w-full font-primaryRegular">
      <SideBar />
      <div className="flex flex-col w-full items-center mt-10">
        <h2 className="text-2xl mb-4">Calories Consumed</h2>
        <div className="ag-theme-alpine p-8" style={{ height: 600, width: "100%" }}>
          <AgGridReact
            rowData={caloriesData}
            columnDefs={columns}
            domLayout="autoHeight"
          />
        </div>
      </div>
    </div>
  );
}

export default CaloriesConsumedPage;
