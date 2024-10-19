import React from "react";
import Login from "./components/auth/Login";
import EmployeeDash from "./components/Dashboard/EmployeeDash";
import AdminDash from "./components/Dashboard/AdminDash";
import AuthContext from "./context/AuthContext";
import TaskContext from "./context/TaskContext";

function App() {
  return (
    <>
      <AuthContext>
        <TaskContext>
          {/* <Login/> */}
          {/* <EmployeeDash/> */}
          {/* <AdminDash /> */}
        </TaskContext>
      </AuthContext>
    </>
  );
}

export default App;
