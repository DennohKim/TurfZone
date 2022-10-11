import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Bookings from "./pages/Bookings";
import Turfs from "./pages/Turfs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={""}></Route>
        <Route path="/signup" element={""}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/turfs" element={<Turfs />}></Route>
        <Route path="/bookings" element={<Bookings />}></Route>
      </Routes>
    </div>
  );
}

export default App;
