import Sidebar from "@/components/shared/dashboard/Sidebar";
import { Navbar } from "@/components/shared/navbar";
import { Outlet } from "react-router";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
  return (
    <div className="min-h-screen flex">
      
      
      {isSidebarOpen && <Sidebar />}
     


      <div>
        <button  onClick={handleSidebarToggle}><IoMenu className="w-10 h-10" /></button>
      </div>

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
