import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Dashboard from "./components/pages/Dashboard";
import AddWorkout from "./components/pages/AddWorkout";
import WorkoutHistory from "./components/pages/WorkoutHistory";
import SingleWorkoutPage from "./components/pages/SingleWorkoutPage";
import EditWorkoutPage from "./components/pages/EditWorkoutPage";
import AddDietPage from "./components/pages/AddDietPage";
import CaloriesConsumedPage from "./components/pages/CaloriesConsumedPage";
import CaloriesBurnedPage from "./components/pages/CaloriesBurnedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calories-consumed" element={<CaloriesConsumedPage />} />
        <Route path="/calories-burned" element={<CaloriesBurnedPage />} />
        <Route path="/add-workout" element={<AddWorkout />} />
        <Route path="/workout-history" element={<WorkoutHistory />} />
        <Route path="/workout/:workoutId" element={<SingleWorkoutPage />} />
        <Route path="/edit-workout/:workoutId" element={<EditWorkoutPage />} />
        <Route path="/add-diet" element={<AddDietPage />} />
      </Routes>
    </Router>
  );
}

export default App;
