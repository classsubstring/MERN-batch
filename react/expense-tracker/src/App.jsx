import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListExpenses from "./components/ListExpenses";
import MyButton from "./components/MyButton";
import Banner from "./components/Banner";
function App() {
  // const buttons = [
  //   "click me",
  //   "login",
  //   "signup",
  //   "query",
  //   "buy now",
  //   "add",
  //   "update",
  // ];

  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
}
export default App;
