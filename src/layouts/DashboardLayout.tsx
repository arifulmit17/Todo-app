import Sidebar from "@/components/shared/dashboard/Sidebar";
import { Navbar } from "@/components/shared/navbar";
import { Outlet } from "react-router";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
  return (
    <div className="min-h-screen flex">
      
      
      {/* {isSidebarOpen && <Sidebar />} */}
     
       {/* Sidebar with animation */}
      <div
        className={`
          fixed md:static 
          top-0 left-0 h-full 
          bg-gray-900 text-white
          transition-transform duration-300 ease-in-out 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          w-64 z-50
        `}
      >
        <Sidebar handleSidebarToggle={handleSidebarToggle} isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Toggle button */}
  <button
    onClick={handleSidebarToggle}
    className={`
      fixed top-4 left-4 z-50 
      transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? "translate-x-64" : "translate-x-0"}
    `}
  >
    <IoMenu className="w-10 h-10" />
  </button>
      {/* Main Area */}
      <div className="flex-1 flex flex-col">

          {!isSidebarOpen && <Navbar/>}

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
