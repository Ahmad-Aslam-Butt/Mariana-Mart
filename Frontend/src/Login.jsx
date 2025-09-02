import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({ email: "", password: "", general: "" });
 
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log("Success:", result.data.user);
        localStorage.setItem(
          "user",
          JSON.stringify({ id: result.data.user._id, email: result.data.user.email })
        );
        navigate("/customer/dashboard/");
      })
      .catch((err) => {
        const msg = err.response?.data?.message || "Login failed";

        const newErrors = { email: "", password: "", general: "" };

        if (msg.toLowerCase().includes("user not found")) {
          newErrors.email = "Email does not exist";
        } else if (msg.toLowerCase().includes("email")) {
          newErrors.email = msg;
        } else if (msg.toLowerCase().includes("password")) {
          newErrors.password = msg;
        } else {
          newErrors.general = msg;
        }

        setErrors(newErrors);
      });
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-lg shadow-2xl w-[90%] sm:w-[400px] rounded-2xl p-8"
      >
        <p className="text-center text-3xl font-bold text-gray-800 mb-6">
          Welcome Back
        </p>

        {errors.general && (
          <div className="mb-4 text-red-600 text-center font-semibold">{errors.general}</div>
        )}

        <div className="space-y-6">
          {/* Email */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className={`border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition`}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              className={`border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition`}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-red-500 text-white font-semibold hover:bg-red-600 transition rounded-lg w-full py-2 shadow-md"
          >
            Sign in
          </button>

          {/* Footer */}
          <p className="text-center text-gray-600">
            Don’t have an account?{" "}
            <Link
              className="text-red-500 font-semibold hover:underline"
              to="/customersignup"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
