import { Navbar } from "@/components/shared/navbar";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <nav className="space-y-4">
          <a href="/dashboard" className="block hover:text-blue-400">Home</a>
          <a href="/dashboard/users" className="block hover:text-blue-400">Users</a>
          <a href="/dashboard/settings" className="block hover:text-blue-400">Settings</a>
        </nav>
      </aside>

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
