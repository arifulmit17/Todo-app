
import App from "@/App";
import { createBrowserRouter } from "react-router";
import MainLayout from './../layouts/mainLayout';
import Tasks from "@/pages/Tasks";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import DashboardLayout from './../layouts/DashboardLayout';
import Dashboard from "@/admin/Dashboard";
import { PrivateRoute } from "./PrivateRoute";
import  ErrorPage from "@/pages/ErrorPage";
import { AdminRoute } from './AdminRoute';
import ProfilePage from "@/Dashboard/ProfilePage";



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
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,    
        element:(
           
            <PrivateRoute>
            <Dashboard></Dashboard>
            </PrivateRoute>
        )
      },
      {
        path: "/dashboard/tasks",
        element:(
           
            <AdminRoute>
            <Tasks></Tasks>
            </AdminRoute>
        )
      },
      {
        path: "/dashboard/profile",
        element:( 
          <ProfilePage></ProfilePage>
        )
      }
    ]
      
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  }
]);