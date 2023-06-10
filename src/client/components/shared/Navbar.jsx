import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineLogin } from "react-icons/ai";
import { BsFillMoonStarsFill,  BsFillSunFill } from "react-icons/bs";
import {motion} from "framer-motion"
import logo from "/instro.png"
import { useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import useDark from "../../../hooks/useDark";
import useAuthorization from "../../../hooks/useAuthorization";



const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const {role} = useAuthorization()
    const {user, logOut} = useAuth()
    const [isDark, setIsdark] = useState(null)
    useDark(isDark)
    return (
        <nav className="shadow-md">
            <div className="container flex justify-between py-4">
                <motion.div 
                whileHover={{scale: 1.1}}
                transition={{type: "spring", stiffness: 120}}
                
                >
                    <NavLink to="/" className="flex items-center gap-1">
            <img className="h-[50px]" src={logo} alt="" /> <h3 className="text-2xl font-bold">InstroLearnCamp</h3>
            </NavLink>
                </motion.div>
            
            <span className="lg:hidden text-xl">
                    {
                       toggle ? <IoMdClose className="cursor-pointer" onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2 className="cursor-pointer"  onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul 
                  
                className={`flex items-center duration-200 z-50 flex-col py-5 lg:p-0 bg-opacity-80 top-14 bg-black lg:bg-transparent w-full lg:w-auto lg:flex-row gap-3 absolute lg:static ${toggle ? "left-0" : "-left-full"}`}>
                    <motion.li 
                    whileHover={{scale: 1.1}}
                    transition={{type: "spring", stiffness: 120}}
                    
                    
                    >
                        <NavLink onClick={() => setToggle(!toggle)} to="/" className={({ isActive }) => isActive ? "text-main" : ""}>Home</NavLink>
                    </motion.li>
                    <motion.li 
                    whileHover={{scale: 1.1}}
                    transition={{type: "spring", stiffness: 120}}
                    
                    
                    >
                        <NavLink onClick={() => setToggle(!toggle)} to="/instructors" className={({ isActive }) => isActive ? "text-main" : ""}>Instructors</NavLink>
                    </motion.li>
                    <motion.li 
                    whileHover={{scale: 1.1}}
                    transition={{type: "spring", stiffness: 120}}
                     
                    >
                        <NavLink onClick={() => setToggle(!toggle)} to="/classes" className={({ isActive }) => isActive ? "text-main" : ""}>Classes</NavLink>
                    </motion.li>
                    <motion.li 
                    whileHover={{scale: 1.1}}
                    transition={{type: "spring", stiffness: 120}}
                    
                    
                    >
                        {user?.email && <NavLink onClick={() => setToggle(!toggle)} to={`/dashboard/${role === "admin" ? "manage-classes" : role === "instructor" ? "add-class" : "selected-classes"}`} className={({ isActive }) => isActive ? "text-main" : ""}> Dashboard</NavLink> }
                    </motion.li>
                    
                    <button> 
                       {isDark ? <BsFillSunFill className="cursor-pointer" onClick={() => setIsdark(false)} /> : <BsFillMoonStarsFill className="cursor-pointer" onClick={() => setIsdark(true)}/>}
                    </button>
                     <motion.li 
                     whileHover={{scale: 1.1}}
                     transition={{type: "spring", stiffness: 120}}
                     
                     
                     >{
                            user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full cursor-pointer" src={user?.photoURL} title={user.displayName} alt="" /> : ""
                        }
                    </motion.li>
                    <motion.li 
                    whileHover={{scale: 1.1}}
                    transition={{type: "spring", stiffness: 120}}
                    
                    
                    >{
                            user ? <button onClick={logOut} className=" text-main px-4 py-2 flex items-center gap-2  rounded p-3"><AiOutlineLogin/> LogOut</button> : <button><Link className="flex items-center gap-2 p-3  text-main" to="/login"> <AiOutlineLogin/>  Login</Link></button>
                        }
                    </motion.li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;