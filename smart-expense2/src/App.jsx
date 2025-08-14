import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddExpense from "./components/expense/AddExpense";
import { ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ToastContainer />
      <Header />

      <div>
        <AddExpense />
      </div>

      <Footer />
    </div>
  );
}

export default App;
