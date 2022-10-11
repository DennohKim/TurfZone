import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
    <Routes>
            <Route path="/" element={<LandingPage/>}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route
              path="/dashboard"
              element={
               
                  <Dashboard />
               
              }
            ></Route>
            <Route path="/turfs" element={""}></Route>
            <Route path="/bookings" element={""}></Route>
          </Routes>
    </div>
  );
}

export default App;
