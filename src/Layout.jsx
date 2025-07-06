import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="h-screen lg:px-28 sm:px-3 md:px-6 xl:px-32 2xl:px-30">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
