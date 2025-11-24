
import App from "@/App";
import { createBrowserRouter } from "react-router";
import MainLayout from './../layouts/mainLayout';
import Tasks from "@/pages/Tasks";

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
        }
    ]
  },
]);