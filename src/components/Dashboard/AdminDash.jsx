import React, { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function AdminDash() {
  const { addTask } = useContext(TaskContext); 

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignedTo: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new task to the context
    addTask({
      id: Math.random().toString(36).substr(2, 9),
      task: formData.title,
      dueDate: formData.date,
      description: formData.description,
    });

    setFormData({
      title: "",
      description: "",
      assignedTo: "",
      category: "",
      date: "",
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-6 bg-gray-100 rounded-lg w-[70%] mx-auto shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-10">
          Admin Dashboard
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="flex flex-col">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700">Assigned To:</label>
            <input
              type="text"
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700">Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-gray-700">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="block text-gray-700">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full h-32 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-300 ease-in-out"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminDash;
