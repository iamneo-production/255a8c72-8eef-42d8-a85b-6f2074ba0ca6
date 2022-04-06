import React from 'react';
import "./App.css";
import Login from "./Components/Login";
// import Booking from "./Components/Lawyer/booking.js";
import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import DashBoard from './Components/Lawyer/dashboard';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/Login" />} />
          <Route exact path="/Login" element={< Login/>} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/DashBoard" element={<DashBoard />} />

        </Routes>
      </Router>
    </div>
  );

}

export default App;

