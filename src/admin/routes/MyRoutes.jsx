import React from "react";
import Appointments from "../Appointments";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../AdminDashboard";
import Doctors from "../Doctors";
import Patients from "../Patients";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/patients" element={<Patients />} />
    </Routes>
  );
};

export default MyRoutes;
