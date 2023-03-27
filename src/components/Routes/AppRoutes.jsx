import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/SignUp";
import Movies from "../../pages/Movies";
import TVSeries from "../../pages/TVSeries";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/tv" element={<TVSeries />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  );
};

export default AppRoutes;
