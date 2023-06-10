import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { HiOutlineViewGridAdd,HiOutlineHome } from "react-icons/hi";
import { MdClass, MdOutlinePaid, MdOutlineManageAccounts } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSelectMultiple } from "react-icons/bi";
import { SiManageiq } from "react-icons/si";
import useAuthorization from "../hooks/useAuthorization";


const DashboardLayout = () => {
  const {role} = useAuthorization()
  const [open, setOpen] = useState(true);
  
  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple  p-5 border-r-2 pt-8 relative duration-300`}
      >
        <img
          src="/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center ">
          <img
            src="/instro.png"
            className="cursor-pointer w-[60px]"
          />
          <h1
            className={` origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {role || "Student"}
          </h1>
        </div>
        <ul className="pt-6">
           {
                   role === "admin" ? <>
                    <li className="mt-4 font-bold"><NavLink to="/dashboard/manage-classes" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><SiManageiq className="text-2xl"/><span className={`${open !== true && "hidden"} origin-left duration-200 whitespace-nowrap`}>Manage Classes</span></NavLink></li>
                    <li className="mt-4 font-bold"><NavLink to="/dashboard/manage-users" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><MdOutlineManageAccounts className="text-2xl"/><span className={`${!open && "hidden"} origin-left duration-200 whitespace-nowrap`}>Manage Users</span></NavLink></li>
                    </>
                    :
                    role === "instructor" ? <>
                    <li className="mt-4 font-bold"><NavLink to="/dashboard/add-class" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><HiOutlineViewGridAdd className="text-2xl"/> <span className={`${open !== true && "hidden"} origin-left duration-200 whitespace-nowrap`}>Add Class</span></NavLink></li>
                    <li className="mt-4 font-bold"><NavLink to="/dashboard/my-classes" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><MdClass className="text-2xl"/><span className={`${open !== true && "hidden"} origin-left duration-200 whitespace-nowrap`}>My Classes</span></NavLink></li>
                    </> : 
                    <>
                        <li className="mt-4 font-bold"><NavLink to="/dashboard/payment-history" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><FaHistory className="text-2xl" /><span className={`${open !== true && "hidden"} origin-left duration-200 whitespace-nowrap`}>Payment History</span></NavLink></li>
                        <li className="mt-4 font-bold"><NavLink to="/dashboard/selected-classes" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><BiSelectMultiple className="text-2xl" /><span className={`${open !== true && "hidden"} origin-left duration-200 whitespace-nowrap`}>Selected Classes</span></NavLink></li>
                        <li className="mt-4 font-bold"><NavLink to="/dashboard/enrolled-classes" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><MdOutlinePaid className="text-2xl" /><span className={`${open !== true && "hidden"} origin-left duration-200 whitespace-nowrap`}>Enrolled Classes</span></NavLink></li>
                    </>
                }
                <Link className="bg-main px-3 py-1 rounded text-white inline-block mt-[100px]" to="/"><HiOutlineHome/></Link>
                
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <Outlet/>
      </div>
    </div>
  );
};
export default DashboardLayout;