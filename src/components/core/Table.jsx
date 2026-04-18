export const CustomTable = ({ columns, data, keyExtractor }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#0f172a]/50 text-gray-400 text-sm uppercase tracking-wider">
            {columns.map((col, index) => (
              <th 
                key={index} 
                className={`px-6 py-4 font-medium ${col.align === 'right' ? 'text-right' : 'text-left'}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {data.length > 0 ? data.map((row, rowIndex) => (
            <tr key={keyExtractor ? keyExtractor(row) : rowIndex} className="hover:bg-gray-800/50 transition-colors group">
              {columns.map((col, colIndex) => (
                <td 
                  key={colIndex} 
                  className={`px-6 py-4 ${col.align === 'right' ? 'text-right' : 'text-left'}`}
                >
                  {col.cell ? col.cell(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          )) : (
            <tr>
              <td colSpan={columns.length} className="px-6 py-8 text-center text-gray-500">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
