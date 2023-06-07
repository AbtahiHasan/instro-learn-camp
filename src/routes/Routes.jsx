import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../client/pages/Home";
import Login from "../login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageClasses from "../admin/pages/ManageClasses";
import AddClass from "../admin/pages/AddClass";
import ManageUsers from "../admin/pages/ManageUsers";
import MyClasses from "../instructor/pages/MyClasses";
import Instructors from "../client/pages/Instructors";
import Classes from "../client/pages/Classes";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            }, 
            {
                path: "/instructors", 
                element: <Instructors/>
            },
            {
                path: "/classes", 
                element: <Classes/>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: "/dashboard/manage-classes",
                element: <ManageClasses/>
            },
            {
                path: "/dashboard/add-class",
                element: <AddClass/>
            },
            {
                path: "/dashboard/manage-users",
                element: <ManageUsers/>
            },
            {
                path: "/dashboard/my-classes",
                element: <MyClasses/>
            }
        ]
    }
])

export default Routes