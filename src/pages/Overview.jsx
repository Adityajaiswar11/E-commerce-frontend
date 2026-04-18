import React from 'react';

const Overview = () => {
  return (
    <div className="text-gray-100 font-sans h-full">
      <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-[#1e293b]/50 rounded-xl rounded-b-none border border-gray-800 shadow-xl mb-4">
        <div>
          <h2 className="text-lg font-semibold text-white">Dashboard Overview</h2>
          <p className="text-sm text-gray-400 mt-1">Welcome back! Here is a summary of your shop's performance.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-800 shadow-xl">
          <h3 className="text-gray-400 text-sm font-medium">Total Revenue</h3>
          <p className="text-2xl font-bold text-white mt-2">$24,562.00</p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-800 shadow-xl">
          <h3 className="text-gray-400 text-sm font-medium">Active Products</h3>
          <p className="text-2xl font-bold text-white mt-2">124</p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl border border-gray-800 shadow-xl">
          <h3 className="text-gray-400 text-sm font-medium">New Orders</h3>
          <p className="text-2xl font-bold text-white mt-2">8</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
