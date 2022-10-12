import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Astroturf } from '../assets/images';

import { useStateContext } from "../context/ContextProvider";
import NavbarDashboard from "../components/NavbarDashboard";

// import DatetimeRangePicker from "react-datetime-range-picker";
// import moment from "moment";

// import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";

const BookTurf = () => {
  const { activeMenu } = useStateContext();
  const [value, onChange] = useState([new Date(), new Date()]);

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

            <div className="px-12 mx-auto my-4 grid grid-cols-2 gap-8 w-full">
              <div className="px-4 py-2 bg-slate-200 rounded flex justify-between hover:text-white">
                <div>
                  <p className="pb-3 text-gray-600">Image</p>
                  <div>
                    <img src={Astroturf} alt="" />
                  </div>
                  <div className="p-2 flex flex-col gap-8">
                    <p>Turf Name</p>
                    <div className="flex">
                      <div>
                        <p>Location</p>
                        <p>Ngong Road</p>
                      </div>
                      <div className="pl-20 ">
                        <p>Rates</p>
                        <p>3500</p>
                      </div>
                    </div>
                    <div>
                      <p>Description</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida mi praesent ac sapien nisl, et quis sit.Quis massa tort</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 bg-slate-200 rounded justify-between hover:text-white">
                <div>
                  <p className="pb-3 text-gray-600">Collin Omwami</p>
                  <p className="pb-3 text-gray-600">Turf Manager</p>
                </div>

                <div>
                  <p>Email: collins@gmail.com</p>
                  <p>Phone: 0724 127890</p>
                </div>

                <div>
                  {/* <DatetimeRangePicker  /> */}

                </div>
              </div>
            </div>

            {/* <div className="h-full flex">
              <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                <div className="flex-1 relative z-0 flex overflow-hidden">
                  <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none h-72">
                    <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                      <div className="h-full border-2 border-gray-200 border-dashed rounded-lg" />
                    </div>
                  </main>
                  <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200 overflow-y-auto">
                    <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                      <div className="h-full border-2 border-gray-200 border-dashed rounded-lg">
                        <div>
                          <p className="pb-3 text-gray-600">Collin Omwami</p>
                          <p className="pb-3 text-gray-600">Turf Manager</p>
                        </div>

                        <div>
                          <p>Email: collins@gmail.com</p>
                          <p>Phone: 0724 127890</p>
                        </div>

                        <div>
                          <DateTimeRangePicker
                            onChange={onChange}
                            value={value}
                          />
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTurf;
