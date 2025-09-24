// A generic, reusable table component

export default function ReusableTable({ title, columns, data }) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 text-center">
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-400">No data available.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs text-gray-300 uppercase bg-gray-900/30">
            <tr>
              {columns.map((col) => (
                <th key={col.accessor} scope="col" className="px-6 py-3">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-gray-700 hover:bg-gray-900/20">
                {columns.map((col) => (
                  <td key={col.accessor} className="px-6 py-4">
                    {col.cell ? col.cell(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
