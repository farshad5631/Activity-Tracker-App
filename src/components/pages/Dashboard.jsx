import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { getDiets, getWorkouts } from "../../utils/LocalStorageHelper";
import SideBar from "../templates/SideBar";
import sunCloud from "../../assets/images/sun-cloud.png";
import { TbDeviceWatchStats } from "react-icons/tb";
import { FaRunning } from "react-icons/fa";
import fireFlame from "../../assets/images/fire-flame-icon-pngs-7.png";
import muscularBody from "../../assets/images/muscular-body.png";
import { Link } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [filteredDate, setFilteredDate] = useState("");
  const workouts = getWorkouts();
  const recentWorkouts = workouts.slice(-10);
  const diets = getDiets().slice(-10);

  const filteredDiets = filteredDate
    ? diets.filter(
        (diet) =>
          new Date(diet.date).toDateString() ===
          new Date(filteredDate).toDateString()
      )
    : diets;

  const pieData = {
    labels: ["Fat", "Protein", "Carbohydrate", "Water"],
    datasets: [
      {
        data: filteredDiets.length
          ? [
              filteredDiets.reduce((acc, diet) => acc + diet.fat, 0),
              filteredDiets.reduce((acc, diet) => acc + diet.protein, 0),
              filteredDiets.reduce((acc, diet) => acc + diet.carbohydrate, 0),
              filteredDiets.reduce((acc, diet) => acc + diet.water, 0),
            ]
          : [0, 0, 0, 0],
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"],
      },
    ],
  };

  const caloriesData = diets.map((diet) => ({
    date: new Date(diet.date).toLocaleDateString(),
    calories: diet.fat * 9 + diet.protein * 5 + diet.carbohydrate * 4,
  }));

  const barData = {
    labels: caloriesData.map((diet) => diet.date),
    datasets: [
      {
        label: "Calories Consumed",
        data: caloriesData.map((diet) => diet.calories),
        backgroundColor: "rgba(75, 192, 192, 0.7)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: recentWorkouts.map((workout) =>
      new Date(workout.workoutDate).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Calories Burned",
        data: recentWorkouts.map((workout) => workout.caloriesBurned),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="flex flex-row font-primaryRegular">
      <SideBar />
      <div className="flex flex-col w-4/12">
        <div className="h-60 bg-customBlue pl-16 px-12 py-12 min-w-full drop-shadow-2xl text-white">
          <div className="flex flex-row space-x-2 items-center pl-8">
            <span>
              <img width="30" height="30" src={sunCloud} alt="" />
            </span>
            <h2 className="text-center text-3xl font-primaryBold">
              Morning Walk
            </h2>
          </div>
          <div className="flex flex-row space-x-16 pt-10 px-16 pb-16 justify-center">
            <div className="flex flex-row space-x-6">
              <span className="flex items-center justify-center w-12 h-12 rounded-full ring-2 ring-gray-300">
                <FaRunning size={25} />
              </span>
              <div className="flex flex-col items-center">
                <p>Running</p>
                <h2>130 Km</h2>
              </div>
            </div>
            <div className="flex flex-row space-x-6">
              <span className="flex items-center justify-center w-12 h-12 rounded-full ring-2 ring-gray-300">
                <TbDeviceWatchStats size={25} />
              </span>
              <div className="flex flex-col items-center">
                <p>Duration</p>
                <h2>31:12 h</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-11/12 justify-center">
          <div className="flex flex-row items-center px-4 py-8 bg-gray-400 space-x-6 ">
            <div>
              <h1 className="font-bold text-3xl">Workout Information</h1>
            </div>
            <Link to="/add-workout" className="text-white">
              <button className="bg-customBlue  px-4 py-2 rounded text-white">
                Add Workout
              </button>
            </Link>
          </div>
          <div>
            <h3 className="flex justify-center text-xl mb-4">
              <Link
                className="bg-customBlue rounded p-2 text-white"
                to="/calories-burned"
              >
                {" "}
                Calories Burned{" "}
              </Link>
            </h3>
            <Line data={lineData} />
          </div>
          <div className="mt-8">
            <h3 className="flex justify-center text-xl mb-4 ">
              <Link
                className="bg-customBlue rounded p-2 text-white"
                to="/calories-consumed"
              >
                {" "}
                Calories Consumed{" "}
              </Link>
            </h3>
            <Bar data={barData} />
          </div>
        </div>
      </div>
      <div className="w-8/12 flex flex-col">
        <div className="h-52 bg-customBlack pl-16 px-12 py-12 min-w-full text-white">
          <div className="flex flex-row space-x-10 items-center">
            <span>
              <img width="30" height="30" src={fireFlame} alt="" />
            </span>
            <h2 className="text-center text-3xl font-primaryBold">
              Track Your Daily Activity
            </h2>
          </div>
          <p className="pb-8 pt-4 text-gray-200 pr-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Aperiam
            molestias optio sit eum saepe suscipit ab ipsam. autem perspiciatis!
          </p>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 bg-gray-200 flex items-center">
            <img width="100%" src={muscularBody} alt="" />
          </div>

          <div className="w-1/2">
            <div className="flex flex-row items-center p-4 justify-between">
              <h3 className="text-3xl font-primaryBold">Diet Information</h3>
              <Link to="/add-diet">
                <button
                  id="openFormBtn"
                  className="bg-customBlue text-white p-2 rounded hover:bg-blue-500"
                >
                  Add Diet Information
                </button>
              </Link>
            </div>
            <div className="mt-8">
              <div className="flex flex-col items-center justify-centerh h-96">
                <input
                  type="date"
                  value={filteredDate}
                  onChange={(e) => setFilteredDate(e.target.value)}
                  className="border p-2 rounded"
                />
                <Pie data={pieData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
