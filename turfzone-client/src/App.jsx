import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Bookings from "./pages/Bookings";
import Turfs from "./pages/Turfs";
import BookTurf from "./pages/BookTurf";
import Example from "./pages/bookturfdemo";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/turfs" element={<Turfs />}></Route>
        <Route path="/bookings" element={<Bookings />}></Route>
        <Route path="/bookturf" element={<BookTurf />}></Route>
        <Route path="/bookturfdemo" element={<Example />}></Route>
      </Routes>
    </div>
  );
}

export default App;
