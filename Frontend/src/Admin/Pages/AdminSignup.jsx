import React, { useState } from "react";
import axios from "axios";

export const AdminSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        firstName,
        secondName,
        email,
        password,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
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

        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your first name"
              className="border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Second Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your last name"
              className="border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition"
              onChange={(e) => setSecondName(e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-4">
          <label className="block mb-2 font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="block mb-2 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            className="border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password */}
        <div className="mt-4">
          <label className="block mb-2 font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            required
            placeholder="Re-enter your password"
            className="border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200 rounded-lg px-3 py-2 w-full outline-none transition"
          />
        </div>

        {/* Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-red-500 text-white font-semibold hover:bg-red-600 transition rounded-lg w-full py-2 shadow-md"
          >
            Sign Up
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-red-500 font-semibold hover:underline"
          >
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};
