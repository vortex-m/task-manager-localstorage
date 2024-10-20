import React, { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  const handleSubmit = (id) => {
    alert(`Task with ID ${id} submitted!`);
  };

  return (
    <div className="h-[45svh] taskslider rounded-xl overflow-x-auto p-4 gap-10 flex items-center flex-nowrap justify-start shadow-md w-full bg-gray-50 border">
      {tasks.map((task) => (
        <div
          className="h-full flex-shrink-0 w-[300px] bg-white rounded-xl shadow-lg p-4 transition-all hover:scale-100 hover:shadow-2xl transform duration-300 ease-in-out"
          key={task.id}
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {task.task}
              </h2>
              <h3>Date: {task.dueDate}</h3>
            </div>

            <p className="text-gray-600 text-center mb-4">
              {task.description}
            </p>
            <div className="flex justify-between items-center">
              <button
                id={`submit-task-${task.id}`}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-3xl mt-2"
                onClick={() => handleSubmit(task.id)}
              >
                Accept
              </button>
              <button
                id={`submit-task-${task.id}`}
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-3xl mt-2"
                onClick={() => handleSubmit(task.id)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
