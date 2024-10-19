import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("submit");
    handleLogin(email, password);
    console.log({ email, password });
  };
  return (
    <div className="flex h-screen justify-center items-center bg-cover bg-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white p-2 rounded w-full hover:bg-red-700 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
