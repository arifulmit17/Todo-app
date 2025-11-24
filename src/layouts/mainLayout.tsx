import { Navbar } from "@/components/shared/navbar";
import { Outlet } from "react-router";


export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="p-4 bg-blue-600 text-white">
        <Navbar></Navbar>
      </header>

      {/* Page Content */}
      <main className="flex-1 p-4">
        <Outlet />   {/* ← Child pages render here */}
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-200">
        <p>© 2024</p>
      </footer>

    </div>
  );
}
