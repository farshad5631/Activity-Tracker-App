import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { findUser } from "../../utils/LocalStorageHelper";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = findUser(email, password);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-primaryRegular">
      <h2 className="text-xl mb-4">Login</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 border border-r-8"
        />
        <div className="flex flex-col">
          <Button
            type="submit"
            text="Login"

          />
          <button
            type="button"
            text="Register"
            onClick={() => navigate("/register")}
            className="bg-customGreen text-white px-4 py-2 rounded"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;


