import { Outlet } from "react-router-dom";
import Sidebar from "../dashboad/components/Sidebar";


const DashboardLayout = () => {
    return (        
    <main className="grid grid-cols-dashboard-md">
            <Sidebar/>
            <main className="md:absolute left-dashboard-md md:w-dashboard-body h-full ">
                <div className="max-w-[1140px] mx-auto">
                    <Outlet/>
                </div>
            </main>
        </main>
    );
};

export default DashboardLayout;