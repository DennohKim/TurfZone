import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  const turfUrl = "http://localhost:3000/turves"
  const bookingUrl = "http://localhost:3000/bookings"
  const usersUrl = "http://localhost:3000/users"
  
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [turfs, setTurfs] = useState([])
  const [bookings, setBookings] = useState([])
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    // auto-login
    // fetch("/me").then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => {
    //       setUser(user)
    //       console.log(user)

    //     });
    //   }
    // });

    const userInfo = JSON.parse(localStorage.getItem('user'))

    if (userInfo){
      setUser(userInfo)
    }

  }, []);

  useEffect(() => {
    fetch(turfUrl)
      .then((res) => res.json())
      .then((turfs) => setTurfs(turfs));
  }, []);

  useEffect(() => {
    fetch(bookingUrl)
      .then((res) => res.json())
      .then((bookings) => setBookings(bookings));
  }, []);

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);


  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        user,
        setUser, 
        turfs,
        setTurfs,
        bookings,
        setBookings,
        users,
        setUsers,
        bookingUrl,
      
       
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);