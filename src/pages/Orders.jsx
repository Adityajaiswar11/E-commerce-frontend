import React from 'react';

const Orders = () => {
  return (
    <div className="bg-[#1e293b] rounded-xl border border-gray-800 shadow-xl overflow-hidden font-sans">
      <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-[#1e293b]/50">
        <div>
          <h2 className="text-lg font-semibold text-white">Order History</h2>
          <p className="text-sm text-gray-400 mt-1">Manage and track customer orders</p>
        </div>
      </div>

      <div className="p-6 text-center text-gray-500">
        Orders management feature is coming soon!
      </div>
    </div>
  );
};

export default Orders;
