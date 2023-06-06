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
        <nav className="shadow-md">
            <div className="container flex justify-between py-4">
            <Link className="flex items-center gap-1">
            <img className="h-[50px]" src={logo} alt="" /> <h3 className="text-2xl font-bold">InstroLearnCamp</h3>
            </Link>
            <span className="lg:hidden text-xl">
                    {
                       toggle ? <IoMdClose className="cursor-pointer" onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2 className="cursor-pointer"  onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`flex items-center duration-200 z-50 flex-col py-5 lg:p-0 bg-opacity-80 top-14 bg-black lg:bg-transparent w-full lg:w-auto lg:flex-row gap-3 absolute lg:static ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/" className={({ isActive }) => isActive ? "text-main" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/instructors" className={({ isActive }) => isActive ? "text-main" : ""}>Instructors</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/classes" className={({ isActive }) => isActive ? "text-main" : ""}>Classes</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setToggle(!toggle)} to="/dashboard" className={({ isActive }) => isActive ? "text-main" : ""}> Dashboard</NavLink>
                    </li>
                    
                    <button> 
                       {isDark ? <BsFillSunFill className="cursor-pointer" onClick={() => setIsdark(false)} /> : <BsFillMoonStarsFill className="cursor-pointer" onClick={() => setIsdark(true)}/>}
                    </button>
                     <li>{
                            user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full cursor-pointer" src={user?.photoURL} title={user.displayName} alt="" /> : ""
                        }
                    </li>
                    <li>{
                            user ? <button onClick={logOut} className=" text-main px-4 py-2 flex items-center gap-2  rounded p-3"><AiOutlineLogin/> LogOut</button> : <button><Link className="flex items-center gap-2 p-3  text-main" to="/login"> <AiOutlineLogin/>  Login</Link></button>
                        }
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;