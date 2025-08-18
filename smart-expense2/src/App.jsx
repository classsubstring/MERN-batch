import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import AddExpensePage from "./pages/AddExpense";
import ViewExpenses from "./pages/ViewExpenses";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="add-expense" element={<AddExpensePage />} />
          <Route path="view-expense" element={<ViewExpenses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
