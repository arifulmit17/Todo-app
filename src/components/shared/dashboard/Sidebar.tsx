import React from 'react'
import { IoMenu } from 'react-icons/io5'

export default function Sidebar({handleSidebarToggle,isSidebarOpen}:any) {
  return (
    <div className='min-h-screen bg-gray-900'>
        {/* Sidebar */}
              <aside className="w-64 bg-gray-900 text-white p-4 hidden md:block">
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>
                <button
                    onClick={handleSidebarToggle}
                    className='absolute right-4 top-4 z-50'
                  >
                    <IoMenu className="w-10 h-10 text-white" />
                  </button>
        
                <nav className="space-y-4">
                  <a href="/dashboard" className="block hover:text-blue-400">Home</a>
                  <a href="/dashboard/tasks" className="block hover:text-blue-400">Tasks</a>
                  <a href="/login" className="block hover:text-blue-400">Login</a>
                  <a href="/register" className="block hover:text-blue-400">Register</a>
                  <a href="/logout" className="block hover:text-blue-400">Logout</a>
                  
                </nav>
              </aside>
    </div>
  )
}
