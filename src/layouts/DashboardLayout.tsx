import Sidebar from "@/components/shared/dashboard/Sidebar";
import { Navbar } from "@/components/shared/navbar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex">

      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <header className="p-4 bg-white shadow">
          <Navbar />
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
