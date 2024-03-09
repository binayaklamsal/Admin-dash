import React from "react";
import Logo1 from "./assests/images/logo1.png";
import { Link } from "react-router-dom";
import { SideBar } from "./components/SideBar";

const Appointments = () => {
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
        <SideBar />
        <div className="w-full h-screen flex flex-col gap-2">
          <div className="rounded-md bg-[#DBDFF0] h-full">
            <div className="flex flex-col gap-4 m-9 bg-[]">
              <div className=" h-[50px] flex items-center bg-[#DBDFF0] rounded-md shadow-md ">
                <h1 className="text-xl px-2">Pending Appointments</h1>
              </div>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-[#DBDFF0]">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 bg-[#DBDFF0] text-gray-500"
                      >
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-gray-500">
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 bg-[#DBDFF0] text-gray-500 "
                      >
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-gray-500">
                        Time
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 bg-[#DBDFF0] text-gray-500"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black-900 whitespace-nowrap bg-[#DBDFF0]"
                      >
                        John Doe
                      </th>
                      <td className="px-6 py-4">Male</td>
                      <td className="px-6 py-4 bg-[#DBDFF0]">2024-03-07</td>
                      <td className="px-6 py-4">10:00 AM</td>
                      <td className="px-6 py-4 bg-[#DBDFF0] flex flex-row text-blue gap-4 cursor-pointer">
                        <p className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md">
                          Approve
                        </p>
                        <p className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md">
                          Decline
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-[#DBDFF0]"
                      >
                        Jane Smith
                      </th>
                      <td className="px-6 py-4">Female</td>
                      <td className="px-6 py-4 bg-[#DBDFF0]">2024-03-07</td>
                      <td className="px-6 py-4">11:30 AM</td>
                      <td className="px-6 py-4 bg-[#DBDFF0] flex flex-row text-blue gap-4 cursor-pointer">
                        <p className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md">
                          Approve
                        </p>
                        <p className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md">
                          Decline
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-[#DBDFF0]"
                      >
                        binayak
                      </th>
                      <td className="px-6 py-4">Omega</td>
                      <td className="px-6 py-4 bg-[#DBDFF0]">2024-03-07</td>
                      <td className="px-6 py-4">2:45 PM</td>
                      <td className="px-6 py-4 bg-[#DBDFF0] flex flex-row  gap-4 cursor-pointer">
                        <p className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md">
                          Approve
                        </p>
                        <p className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md">
                          Decline
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
