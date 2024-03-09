import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "./assests/images/logo1.png";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { API } from "./utils";
import { TableRow } from "./components/TableRow";
import { SideBar } from "./components/SideBar";

const DoctorApplication = () => {
  const queryClient = useQueryClient();

  async function getAllDoctors() {
    const { data } = await API.get("/doctors/pending/all");
    return data;
  }

  const { data: doctorsData } = useQuery({
    queryKey: ["pending_doctors"],
    queryFn: getAllDoctors,
    cacheTime: 0,
    staleTime: 0,
  });

  async function approveDoc(id) {
    const data = await API.put(`/doctors/approve/${id}`);
    return data;
  }
  const appproveMutation = useMutation({
    mutationKey: ["approvedoc"],
    mutationFn: approveDoc,
    onSuccess: () => {
      queryClient.invalidateQueries(["pending_doctors"]);
    },
  });
  async function declineDoc(id) {
    const data = await API.put(`/doctors/decline/${id}`);
    return data;
  }

  const declineMutation = useMutation({
    mutationKey: ["approvedoc"],
    mutationFn: declineDoc,
    onSuccess: () => {
      queryClient.invalidateQueries(["pending_doctors"]);
    },
  });
  const handleApprove = (docId) => {
    appproveMutation.mutate(docId);
  };
  const handleDecline = (docId) => {
    declineMutation.mutate(docId);
  };

  console.log("data from query", { doctorsData });

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
          <div className="rounded-md bg-[#DBDFF0] h-full">
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
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-gray-500">
                      Specialization
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
                  {doctorsData?.data.map((item, index) => (
                    <TableRow
                      key={item._id}
                      id={item._id}
                      name={item.name}
                      gender={item.gender}
                      email={item.email}
                      specialization={item.specialization || "-"}
                      handleDecline={handleDecline}
                      handleApprove={handleApprove}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorApplication;
