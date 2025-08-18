import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

function Layout() {
  return (
    <div>
      <div>
        <ToastContainer />
        {/* Header */}
        <Header />
      </div>
      <div className="">
        {/* content area */}
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
