import React, { useState, useEffect } from 'react';
import { FiMenu, FiSearch, FiBell } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { useLayout } from '../context/LayoutContext';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { setShowHeader, setShowFooter } = useLayout();

  useEffect(() => {
    setShowHeader(false);
    setShowFooter(false);
    
    return () => {
      setShowHeader(true);
      setShowFooter(true);
    };
  }, [setShowHeader, setShowFooter]);

  return (
    <div className="flex h-screen bg-[#0f172a] text-gray-100 overflow-hidden font-sans">
      
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-[#1e293b]/80 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-4 z-20 w-full shrink-0">
          <div className="flex items-center">
            <button className="md:hidden text-gray-400 hover:text-white mr-4 transition-colors" onClick={() => setSidebarOpen(true)}>
              <FiMenu size={24} />
            </button>
            <h1 className="text-xl font-semibold hidden sm:block text-white">Admin Dashboard</h1>
          </div>
          <div className="flex items-center space-x-5">
            <div className="relative hidden md:block">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input type="text" placeholder="Search..." className="bg-[#0f172a] text-sm text-gray-200 placeholder-gray-500 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 w-64 transition-all border border-gray-700" />
            </div>
            <button className="text-gray-400 hover:text-white transition-colors relative">
              <FiBell size={20} />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-indigo-500 rounded-full animate-pulse"></span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#0f172a] p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
