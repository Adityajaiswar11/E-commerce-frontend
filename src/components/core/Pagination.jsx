import React from 'react';
import { Button } from './Button';

export const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange, 
  totalEntries = 0,
  entriesPerPage = 10 
}) => {
  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="p-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 bg-[#1e293b]/50 gap-4">
      <span>
        Showing {totalEntries > 0 ? startEntry : 0} to {endEntry} of {totalEntries} entries
      </span>
      <div className="flex gap-2">
        <Button 
          variant="secondary" 
          size="sm" 
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Button variant="primary" size="sm">
          {currentPage}
        </Button>
        <Button 
          variant="secondary" 
          size="sm" 
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
