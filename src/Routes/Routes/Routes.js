import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AllUser from "../../Pages/DashBoard/AllUser/AllUser";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Login/Login";
import SignUp from "../../Pages/Shared/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <PrivateRoutes><Appointment></Appointment></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    
    {
        path: '/',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children:[
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            },
            {
                path: '/alluser',
                element: <AllUser></AllUser>
            }
        ]
    }
])