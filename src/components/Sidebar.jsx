import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiBox, FiUsers, FiSettings, FiX } from 'react-icons/fi';

export const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className={`fixed inset-y-0 left-0 bg-[#1e293b] border-r border-gray-800 w-64 transform transition-transform duration-300 ease-in-out z-30 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 flex flex-col font-sans`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800 shrink-0">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            EazyShop Admin
          </span>
          <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <FiX size={24} />
          </button>
        </div>
        
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          <NavLink 
            to="/dashboard" 
            end
            className={({ isActive }) => `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-900/20' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <FiHome size={20} />
            <span>Overview</span>
          </NavLink>
          <NavLink 
            to="/dashboard/products" 
            className={({ isActive }) => `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-900/20' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <FiBox size={20} />
            <span>Products</span>
          </NavLink>
          <NavLink 
            to="/dashboard/orders" 
            className={({ isActive }) => `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-900/20' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <FiUsers size={20} />
            <span>Orders</span>
          </NavLink>
          <NavLink 
            to="/dashboard/settings" 
            className={({ isActive }) => `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-900/20' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
          >
            <FiSettings size={20} />
            <span>Settings</span>
          </NavLink>
        </nav>
        
        {/* Bottom user section */}
        <div className="shrink-0 w-full p-4 border-t border-gray-800">
           <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
             <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
               AD
             </div>
             <div>
               <p className="text-sm font-medium text-white">Admin User</p>
               <p className="text-xs text-gray-500">admin@eazyshop.com</p>
             </div>
           </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};
