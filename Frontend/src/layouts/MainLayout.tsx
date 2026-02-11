import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function MainLayout() {
  return (
    <>
      <Header />
      {/* KHÔNG container ở đây */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;