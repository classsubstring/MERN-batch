import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<h1>This is login page</h1>} />
        <Route path="signup" element={<Signup />} />
        <Route path="expenses" element={<h1>This is Expenses page</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
