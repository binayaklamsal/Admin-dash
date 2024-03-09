import React from "react";
import Logo1 from "../admin/assests/images/logo1.png";
import { Link } from "react-router-dom";
import { SideBar } from "./components/SideBar";

const AdminDashboard = () => {
  return (
    <div className="grid gap-2 m-3">
      <div className="flex flex-row items-center justify-between h-[70px] border rounded-md bg-[#DBDFF0] ">
        <div>
          <img className="h-[50px] px-2" src={Logo1} alt="" />
          <section></section>
        </div>
      </div>
      <div className="flex flex-row gap-2 ">
        <SideBar />
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
