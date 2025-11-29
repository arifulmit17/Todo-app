
import App from "@/App";
import { createBrowserRouter } from "react-router";
import MainLayout from './../layouts/mainLayout';
import Tasks from "@/pages/Tasks";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import DashboardLayout from './../layouts/DashboardLayout';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
        {
            index:true,
            element:<App/>
        },
        {
            path:"/tasks",
            element:<Tasks></Tasks>
        },
        {
            path:"/register",
            element:<RegisterPage></RegisterPage>
        },
        {
            path:"/login",
            element:<LoginPage></LoginPage>
        }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>
  }
]);