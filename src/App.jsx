import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDash from "./components/Dashboard/EmployeeDash";
import AdminDash from "./components/Dashboard/AdminDash";
import { AuthContext } from "./context/AuthProvider";
import { TaskContext } from "./context/TaskContext";

function App() {
  const [user, setUser] = useState(null);
  const AuthData = useContext(AuthContext);

  useEffect(() => {
    if (AuthData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [AuthData]);

  useEffect(() => {
    if (AuthData) {
      console.log(AuthData.employee);
    }
  }, [AuthData]);

  const handleLogin = (email, password) => {
    // if (email == "admin@gmail.com" && password == "123") {
    if (
      AuthData &&
      AuthData.admin.find((e) => email == e.email && e.password == password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      AuthData &&
      AuthData.employee.find((e) => email == e.email && e.password == password)
    ) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
    }
  };

  return (
    <>
      <TaskContext>
        {!user ? <Login handleLogin={handleLogin} /> : ""}
        {user === "admin" ? <AdminDash /> : <EmployeeDash />}
      </TaskContext>
    </>
  );
}

export default App;
