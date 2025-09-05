import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import DashboardLayout from "./pages/user/DashboardLayout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="expenses" element={<h1>This is Expenses page</h1>} />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="" element={<h1>This user admin home</h1>} />
          <Route path="add-expense" element={<h1>Add expense form</h1>} />
          <Route path="expenses" element={<h1>View expenses</h1>} />
          <Route path="assistant" element={<h1>Chat Assistant</h1>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
