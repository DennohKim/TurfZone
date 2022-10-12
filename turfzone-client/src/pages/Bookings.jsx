import React from "react";
import Sidebar from "../components/Sidebar";

import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";

const Bookings = () => {
  const { activeMenu } = useStateContext();

  return (
    <>
      <div className="flex relative">
        <div className="fixed" style={{ zIndex: "100000" }}>
          {activeMenu ? (
            <div className="w-72 fixed sidebar bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0">
              <Sidebar />
            </div>
          )}
        </div>

        <div
          className={
            activeMenu
              ? "bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg navbar w-full">
            <NavbarDashboard />
          

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;