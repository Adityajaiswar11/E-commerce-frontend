import React, { useState } from 'react';
import { CreateProduct } from './CreateProduct';
import { FiPlus, FiEdit2, FiTrash2, FiBox } from 'react-icons/fi';
import { Button } from '../../../components/core/Button';
import { CustomTable } from '../../../components/core/Table';
import { Pagination } from '../../../components/core/Pagination';
import { CustomModal } from '../../../components/core/Modal';

export const ViewProductList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Dummy product data
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$120', stock: 45, status: 'Active' },
    { id: 2, name: 'Smart Watch Series 7', price: '$399', stock: 12, status: 'Low Stock' },
    { id: 3, name: 'Mechanical Keyboard', price: '$150', stock: 80, status: 'Active' },
    { id: 4, name: 'Gaming Mouse', price: '$60', stock: 0, status: 'Out of Stock' },
  ];

  const columns = [
    {
      header: 'Product Name',
      accessor: 'name',
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
            <FiBox className="text-gray-400" />
          </div>
          <span className="font-medium text-gray-200 group-hover:text-indigo-400 transition-colors">
            {row.name}
          </span>
        </div>
      )
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (row) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
          ${row.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
            row.status === 'Low Stock' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 
            'bg-red-500/10 text-red-400 border border-red-500/20'}`}
        >
          {row.status}
        </span>
      )
    },
    {
      header: 'Stock',
      accessor: 'stock',
      cell: (row) => <span className="text-gray-300">{row.stock}</span>
    },
    {
      header: 'Price',
      accessor: 'price',
      cell: (row) => <span className="font-medium text-gray-200">{row.price}</span>
    },
    {
      header: 'Actions',
      accessor: 'actions',
      align: 'right',
      cell: (row) => (
        <div className="flex items-center justify-end gap-3 text-gray-400">
          <button className="hover:text-indigo-400 transition-colors p-1" title="Edit">
            <FiEdit2 size={16} />
          </button>
          <button className="hover:text-red-400 transition-colors p-1" title="Delete">
            <FiTrash2 size={16} />
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#1e293b] rounded-xl border border-gray-800 shadow-xl overflow-hidden font-sans">
      {/* Header */}
      <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-[#1e293b]/50">
        <div>
          <h2 className="text-lg font-semibold text-white">All Products</h2>
          <p className="text-sm text-gray-400 mt-1">Manage your product inventory and pricing</p>
        </div>
        <Button 
          variant="primary" 
          icon={<FiPlus />} 
          onClick={() => setIsModalOpen(true)}
        >
          <span className="hidden sm:inline">Add Product</span>
        </Button>
      </div>

      {/* Table */}
      <CustomTable 
        columns={columns} 
        data={products} 
        keyExtractor={(row) => row.id} 
      />

      {/* Pagination */}
      <Pagination 
        currentPage={currentPage}
        totalPages={1}
        onPageChange={setCurrentPage}
        totalEntries={products.length}
        entriesPerPage={4}
      />

      <CustomModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Add Product"
      >
      <CreateProduct isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </CustomModal>
    </div>
  );
};
