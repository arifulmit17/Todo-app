import React from 'react'

export default function Sidebar() {
  return (
    <div className='min-h-screen bg-gray-900'>
        {/* Sidebar */}
              <aside className="w-64 bg-gray-900 text-white p-4 hidden md:block">
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        
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
