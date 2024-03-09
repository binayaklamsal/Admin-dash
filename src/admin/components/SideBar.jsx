import { Link, useNavigate } from "react-router-dom";
import { useLoginStore } from "../utils";

export function SideBar() {
  const logout = useLoginStore((state) => state.logout);
  const navigate = useNavigate();

  return (
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
            <Link to="/doctor-applications">Doctor Applications</Link>
          </li>
          <li className="hover:bg-[#ACAFBD] border px-4 rounded-md ">
            <Link to="/doctors">Doctors</Link>
          </li>
          <li className="hover:bg-[#ACAFBD] border px-4 rounded-md ">
            <Link to="/patients">Patients</Link>
          </li>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Log Out
        </div>
      </div>
    </div>
  );
}
