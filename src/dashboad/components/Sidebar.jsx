import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg"


const Sidebar = () => {
const role = "admin";
 
    return (
        <aside className=" w-dashboard-md p-10 h-screen fixed top-0 bottom-0">
            <Link className="flex items-center gap-1">
            <img className="h-[50px]" src={logo} alt="" /> <h3 className="text-2xl font-bold uppercase">{role}</h3>
            </Link>
            <ul className="mt-[60px]">

                {
                   role === "admin" ? <>
                    <li className="mt-4 font-bold"><NavLink to="/dashboard/manage-classes" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><span>Manage Classes</span></NavLink></li>
                    <li className="mt-4 font-bold"><NavLink to="/dashboard/add-class" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><span>Add Class</span></NavLink></li>
                    <li className="mt-4 font-bold"><NavLink to="/dashboard/manage-users" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><span>Manage Users</span></NavLink></li>
                    </>
                    :
                    <>
                    
                    </>
                }
                
               
            </ul>
        </aside>
    );
};

export default Sidebar;