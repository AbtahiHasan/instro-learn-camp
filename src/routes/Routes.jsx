import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../client/pages/Home";
import Login from "../login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageClasses from "../admin/pages/ManageClasses";
import ManageUsers from "../admin/pages/ManageUsers";
import MyClasses from "../instructor/pages/MyClasses";
import Instructors from "../client/pages/Instructors";
import Classes from "../client/pages/Classes";
import AddClass from "../instructor/pages/AddClass";
import RequiredLogin from "./private/RequiredLogin";
import AdminOnly from "./private/AdminOnly";
import InstructorOnly from "./private/InstructorOnly";
import SignUp from "../sign-up/SignUp";


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
                path: "/sign-up",
                element: <SignUp/>
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
        element: <RequiredLogin><DashboardLayout/></RequiredLogin>,
        children: [
            {
                path: "/dashboard/manage-classes",
                element: <AdminOnly><ManageClasses/></AdminOnly> 
            },
            {
                path: "/dashboard/manage-users",
                element: <AdminOnly><ManageUsers/></AdminOnly>
            },
            {
                path: "/dashboard/add-class",
                element: <InstructorOnly><AddClass/></InstructorOnly> 
            },
            
            {
                path: "/dashboard/my-classes",
                element: <InstructorOnly><MyClasses/></InstructorOnly>
            }, 
            {
                path: "/dashboard/my-selected-classes"
            }
        ]
    }
])

export default Routes