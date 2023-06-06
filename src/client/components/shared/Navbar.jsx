import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineLogin } from "react-icons/ai";
import { BsFillMoonStarsFill,  BsFillSunFill } from "react-icons/bs";

import logo from "/logo.svg"
import { useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import useDark from "../../../hooks/useDark";



const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const {user, logOut} = useAuth()
    const [isDark, setIsdark] = useState(null)
    useDark(isDark)
    return (
        <nav className="dark:bg-dark-bg dark:text-white">
            <div className="container flex justify-between py-4">
            <Link className="flex items-center gap-1">
            <img className="h-[50px]" src={logo} alt="" /> <h3 className="text-2xl font-bold">InstroLearnCamp</h3>
            </Link>
            <span className="lg:hidden text-xl">
                    {
                       toggle ? <IoMdClose className="cursor-pointer" onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2 className="cursor-pointer"  onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`flex items-center duration-200 z-50 flex-col py-5 lg:p-0 text-white bg-opacity-80 lg:text-black top-14 bg-black lg:bg-transparent w-full lg:w-auto lg:flex-row gap-3 absolute lg:static ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/" className={({ isActive }) => isActive ? "text-primary " : "text-white"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/instructors" className={({ isActive }) => isActive ? "text-primary " : "text-white"}>Instructors</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/classes" className={({ isActive }) => isActive ? "text-primary " : "text-white"}>Classes</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/dashboard" className={({ isActive }) => isActive ? "text-primary " : "text-white"}> Dashboard</NavLink>
                    </li>
                    

                   
                   
             
                    <button onClick={() => setIsdark(!isDark)}> 
                       {isDark ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
                    </button>
                     <li>{
                            user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full cursor-pointer" src={user?.photoURL} title={user.displayName} alt="" /> : ""
                        }
                    </li>
                    <li>{
                            user ? <button onClick={logOut} className="border-[#00abe4] text-[#00abe4] px-4 py-2 flex items-center gap-2  border rounded p-3"><AiOutlineLogin/> LogOut</button> : <button><Link className="flex items-center gap-2 border rounded p-3 border-[#00abe4] text-[#00abe4]" to="/login"> <AiOutlineLogin/>  Login</Link></button>
                        }
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;