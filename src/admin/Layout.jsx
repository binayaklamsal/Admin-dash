import React from "react";
import Logo1 from "../admin/assests/images/logo1.png";

const Layout = () => {
  return (
    <div>
      <div className=" m-4 ">
        <div className="  flex flex-row items-center justify-between h-[70px]  border rounded-md bg-[#DBDFF0] ">
          <img className="h-[50px] px-2" src={Logo1} alt="" />
          <div className="px-2">Logout avatar name </div>
        </div>
        <div className="flex flex-row gap-2 pt-2  ">
          <div className=" w-[300px] h-screen rounded-md bg-[#DBDFF0] ">
            <div className="flex flex-col items-center justify-between">
              <div className="h-[500px] flex flex-col gap-4 py-9 list-none">
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <a href="">Appointments</a>
                </li>
                <li>
                  <a href="">Doctors</a>
                </li>
                <li>
                  <a href="">Patients</a>
                </li>
              </div>
              <div>Log Out</div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-screen overflow-auto gap-4 grid ">
              <div className=" flex flex-row items-center gap-2 justify-between rounded-md  h-[110px]  ">
                <div className=" bg-[#DBDFF0] w-[200px] h-full border rounded-md flex flex-col items-center py-4">
                  <p>Totoal Appointments</p>
                  <p>100+</p>
                </div>
                <div className=" bg-[#DBDFF0] w-[200px] h-full border rounded-md flex flex-col items-center py-4">
                  <p>Totoal Doctors</p>
                  <p>100+</p>
                </div>
                <div className="bg-[#DBDFF0] w-[200px] h-full border rounded-md flex flex-col items-center py-4">
                  <p>Totoal Patients</p>
                  <p>100+</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md bg-[#DBDFF0] h-[100px] ">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px] ">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
                <div className="rounded-md bg-[#DBDFF0] h-[100px]">omg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
