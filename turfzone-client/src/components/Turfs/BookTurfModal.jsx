import React, { useState } from "react";

import { useStateContext } from "../../context/ContextProvider";
// import DateTimePicker from "./DateTimePicker"
export default function BookTurfModal({
  userId,
  turfId,
  turfname,
  manager,
  rates,
  managerEmail,
  managerNumber,
}) {
  const { bookingUrl, bookings, setBookings } = useStateContext();
  const [showModal, setShowModal] = React.useState(false);
  const [selectedStartTime, setSelectedStartTime] = useState(new Date());
  const [selectedEndTime, setSelectedEndTime] = useState(new Date());

  function handleAddBooking(newBookings) {
    setBookings([...bookings, newBookings]);
  }


  function handleSubmit(event) {
    event.preventDefault();
    const addTime = {
      start_time: selectedStartTime,
      end_time: selectedEndTime,
      user_id: userId,
      turf_id: turfId,
    };
    fetch("https://turfzone.herokuapp.com/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addTime),
    })
      .then((response) => response.json())
      .then((newBooking) => {
        handleAddBooking(newBooking);
      });
  }
  
  return (
    <>
      <button
        className="w-full active:scale-90 bg-secondary-color transition duration-150 ease-in-out hover:bg-secondary-darker rounded text-white hover:font-semibold px-8 py-3 text-sm"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Book Turf
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{turfname}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div>
                    <h1 className="my-4 text-black text-lg leading-relaxed">
                      <span className="font-semibold">Turf Manager:</span>{" "}
                      {manager}
                    </h1>
                  </div>
                  <div>
                    <h2>
                      
                      <span className="font-semibold">Email:</span>{" "}
                      {managerEmail}
                    </h2>
                    <h2>
                      <span className="font-semibold">Phone Number:</span>{" "}
                      {managerNumber}
                    </h2>
                  </div>
                  <h2 className="pt-6 font-semibold ">
                    {" "}
                    <span>Kshs. </span>
                    {rates} <span>/hour</span>
                  </h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="p-6">
                    <label className="pb-2">Start time: </label>
                    <input
                      type="date"
                      value={selectedStartTime}
                      onChange={(e) => setSelectedStartTime(e.target.value)}
                    />
                    <label className="pb-2">End time:</label>
                    <input
                      type="date"
                      value={selectedEndTime}
                      onChange={(e) => setSelectedEndTime(e.target.value)}
                    />
                    
                    <button
                      className="w-full active:scale-90 bg-secondary-color transition duration-150 ease-in-out hover:bg-secondary-darker rounded text-white hover:font-semibold px-2 py-3 text-sm"
                      type="submit"
                    >
                      Book Turf
                    </button>

                    
                    
                    
                  </div>
                </form>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}