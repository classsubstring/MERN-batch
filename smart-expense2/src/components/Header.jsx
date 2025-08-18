import React from "react";
import MyButton from "./MyButton";
import { Link } from "react-router";
export default function Header() {
  return (
    <nav className=" text-white bg-gradient-to-r from-red-700 to-gray-950 flex justify-between px-32 h-18 items-center ">
      <div className="brand_logo">
        <span className="text-3xl font-semibold">Smart Expense</span>
      </div>
      <div className="flex gap-5  items-center">
        <ul className="flex gap-5 hover:cursor-pointer">
          <li className="hover:text-blue-400">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to={"/add-expense"}>Add Expense</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to={"/view-expense"}>View Expense</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
        <MyButton
          hoverColor={"hover:bg-blue-500"}
          backgroundColor={"bg-blue-900"}
          text={"Login"}
          clickFun={() => {
            console.log("Login button clicked");
          }}
        />
        <MyButton
          clickFun={() => {
            console.log("register fun");
          }}
          text={"Register"}
        />
      </div>
    </nav>
  );
}
