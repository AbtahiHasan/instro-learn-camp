import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../client/pages/Home";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])

export default Routes