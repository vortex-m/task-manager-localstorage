import React from "react";
import TaskList from "../TaskList/TaskList";

function EmployeeDash() {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600">Hello</p>
            <h1 className="text-2xl font-bold">Mayank 👋</h1>
          </div>
          <div>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200">
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-6">
        <div className="h-[20svh] w-full border flex items-center flex-col justify-center bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">0</h1>
          <h3 className="text-xl">New Task</h3>
        </div>
        <div className="h-[20svh] w-full border flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">0</h1>
          <h1 className="text-xl">Completed</h1>
        </div>
        <div className="h-[20svh] w-full border flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">0</h1>
          <h1 className="text-xl">Accepted</h1>
        </div>
        <div className="h-[20svh] w-full border flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">0</h1>
          <h1 className="text-xl">Failed</h1>
        </div>
      </div>
      <TaskList />
    </div>
  );
}

export default EmployeeDash;
