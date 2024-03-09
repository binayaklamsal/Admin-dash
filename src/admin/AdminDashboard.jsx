import React from "react";
import Logo1 from "../admin/assests/images/logo1.png";
import { Link } from "react-router-dom";
import Appointments from "./Appointments";

const AdminDashboard = () => {
  return (
    <div className="grid gap-2 m-3">
      <div className="flex flex-row items-center justify-between h-[70px] border rounded-md bg-[#DBDFF0] ">
        <div>
          <img className="h-[50px] px-2" src={Logo1} alt="" />
          <section></section>
        </div>
        <div className="px-2">Logout avatar name </div>
      </div>
      <div className="flex flex-row gap-2 ">
        <div className=" w-[300px] h-screen rounded-md bg-[#DBDFF0]">
          <div className="flex flex-col items-center justify-between">
            <div className="h-[500px] flex flex-col gap-4 py-9 list-none">
              <li className="hover:bg-[#ACAFBD] border px-2 rounded-md ">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="hover:bg-[#ACAFBD] border px-2 rounded-md ">
                <Link to="/appointments">Appointments</Link>
              </li>
              <li className="hover:bg-[#ACAFBD] border px-2 rounded-md ">
                <Link to="/doctors">Doctors</Link>
              </li>
              <li className="hover:bg-[#ACAFBD] border px-2 rounded-md ">
                <Link to="/patients">Patients</Link>
              </li>
            </div>
            <div>Log Out</div>
          </div>
        </div>
        <div className="w-full h-screen flex flex-col gap-2">
          <div className=" flex flex-row items-center justify-between rounded-md h-[110px] ">
            <div className="bg-[#DBDFF0] w-[200px] h-full border rounded-md flex flex-col items-center py-4">
              <p>Total Appointments</p>
              <p>100+</p>
            </div>
            <div className="bg-[#DBDFF0] w-[200px] h-full border rounded-md flex flex-col items-center py-4">
              <p>Total Doctors</p>
              <p>100+</p>
            </div>
            <div className="bg-[#DBDFF0] w-[200px] h-full border rounded-md flex flex-col items-center py-4">
              <p>Total Patients</p>
              <p>100+</p>
            </div>
          </div>
          <div className="rounded-md bg-[#DBDFF0] h-full">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
