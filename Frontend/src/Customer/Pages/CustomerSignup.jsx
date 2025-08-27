import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const CustomerSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    confirmPassword: "",
    general: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      firstName: "",
      secondName: "",
      email: "",
      password: "",
      confirmPassword: "",
      general: "",
    };

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      setErrors(newErrors);
      return;
    }

    axios
      .post("http://localhost:3001/customersignup", {
        firstName,
        secondName,
        email,
        password,
      })
      .then((res) => {
        if (res.data.success) {
          navigate("/login");
        } else {
          newErrors.general = "Signup failed";
          setErrors(newErrors);
        }
      })
      .catch((err) => {
        const msg = err.response?.data?.message || "Server error";

        if (msg.toLowerCase().includes("email")) {
          newErrors.email = msg;
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
        className="bg-white/90 backdrop-blur-lg shadow-2xl w-[90%] sm:w-[450px] rounded-2xl p-8"
      >
        <p className="text-center text-3xl font-bold text-gray-800 mb-6">
          Create Account
        </p>

        {errors.general && (
          <div className="mb-4 text-red-600 text-center font-semibold">
            {errors.general}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              required
              className={`border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition`}
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              required
              className={`border ${
                errors.secondName ? "border-red-500" : "border-gray-300"
              } focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition`}
              placeholder="Enter your last name"
              onChange={(e) => setSecondName(e.target.value)}
            />
            {errors.secondName && (
              <p className="text-sm text-red-600 mt-1">{errors.secondName}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            className={`border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition`}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block mb-2 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            required
            className={`border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition`}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">{errors.password}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block mb-2 font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            required
            className={`border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition`}
            placeholder="Re-enter password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-600 mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-red-500 text-white font-semibold hover:bg-red-600 transition rounded-lg w-full py-2 shadow-md"
          >
            Sign up
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-500 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};
