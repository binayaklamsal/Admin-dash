import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "./assests/images/logo1.png";

const Patients = () => {
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
              <li className="hover:bg-[#ACAFBD] border px-4 rounded-md ">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="hover:bg-[#ACAFBD] border px-4 rounded-md ">
                <Link to="/appointments">Appointments</Link>
              </li>
              <li className="hover:bg-[#ACAFBD] border px-4 rounded-md ">
                <Link to="/doctors">Doctors</Link>
              </li>
              <li className="hover:bg-[#ACAFBD] border px-4 rounded-md ">
                <Link to="/patients">Patients</Link>
              </li>
            </div>
            <div>Log Out</div>
          </div>
        </div>
        <div className="w-full h-screen flex flex-col gap-2">
          <div className="rounded-md bg-[#DBDFF0] h-full">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-[#DBDFF0]">
              <table class="w-full text-sm text-left rtl:text-right">
                <thead class="text-xs text-gray-700 uppercase ">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 bg-[#DBDFF0] text-gray-500"
                    >
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-gray-500">
                      Gender
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 bg-[#DBDFF0] text-gray-500 "
                    >
                      Email
                    </th>
                    <th scope="col" class="px-6 py-3 text-gray-500">
                      Blood Group
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 bg-[#DBDFF0] text-gray-500"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-black-900 whitespace-nowrap bg-[#DBDFF0]"
                    >
                      John Doe
                    </th>
                    <td class="px-6 py-4">Male</td>
                    <td class="px-6 py-4 bg-[#DBDFF0]">2024-03-07</td>
                    <td class="px-6 py-4">10:00 AM</td>
                    <td class="px-6 py-4 bg-[#DBDFF0] flex flex-row text-blue gap-4 cursor-pointer">
                      <p className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md">
                        Approve
                      </p>
                      <p className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md">
                        Decline
                      </p>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-[#DBDFF0]"
                    >
                      Jane Smith
                    </th>
                    <td class="px-6 py-4">Female</td>
                    <td class="px-6 py-4 bg-[#DBDFF0]">2024-03-07</td>
                    <td class="px-6 py-4">11:30 AM</td>
                    <td class="px-6 py-4 bg-[#DBDFF0] flex flex-row text-blue gap-4 cursor-pointer">
                      <p className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md">
                        Approve
                      </p>
                      <p className="text-blue-500 hover:bg-white border-[#DBDFF0] outline-none p-2 rounded-md">
                        Decline
                      </p>
                    </td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-[#DBDFF0]"
                    >
                      binayak
                    </th>
                    <td class="px-6 py-4">Omega</td>
                    <td class="px-6 py-4 bg-[#DBDFF0]">2024-03-07</td>
                    <td class="px-6 py-4">2:45 PM</td>
                    <td class="px-6 py-4 bg-[#DBDFF0] flex flex-row  gap-4 cursor-pointer">
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
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
