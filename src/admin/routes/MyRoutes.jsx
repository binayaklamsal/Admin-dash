import React from "react";
import Appointments from "../Appointments";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../AdminDashboard";
import Doctors from "../Doctors";
import DoctorApplication from "../DoctorApplication";
import Patients from "../Patients";
import AdminLogin from "../AdminLogin";
import { useLoginStore } from "../utils";

// this is react router dom give me protected and public routes structure with login page

const MyRoutes = () => {
  const loggedIn = useLoginStore((state) => state.loggedIn);
  return (
    <Routes>
      {loggedIn ? (
        <>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor-applications" element={<DoctorApplication />} />
          <Route path="/patients" element={<Patients />} />
        </>
      ) : (
        <>
          <Route path="/" element={<AdminLogin />} />
        </>
      )}
    </Routes>
  );
};

export default MyRoutes;
