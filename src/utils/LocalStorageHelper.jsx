export const saveWorkout = (workout) => {
  const workouts = JSON.parse(localStorage.getItem("workouts")) || [];
  workouts.push(workout);
  localStorage.setItem("workouts", JSON.stringify(workouts));
};

export const getWorkouts = () => {
  return JSON.parse(localStorage.getItem("workouts")) || [];
};

export const getWorkoutById = (id) => {
  const workouts = getWorkouts();
  return workouts.find((workout) => workout.id === id);
};

export const saveUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
};

export const findUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find(
    (user) => user.email === email && user.password === password
  );
};

export const clearUserSession = () => {
  localStorage.removeItem("currentUser");
};

export const saveDiet = (diet) => {
  const diets = JSON.parse(localStorage.getItem("diets")) || [];
  diets.push(diet);
  localStorage.setItem("diets", JSON.stringify(diets));
};

export const getDiets = () => {
  return JSON.parse(localStorage.getItem("diets")) || [];
};
