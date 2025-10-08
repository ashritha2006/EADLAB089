import React, { useState } from 'react';


// Sample data to display in the table
const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eve' },
  { id: 6, name: 'Frank' },
  { id: 7, name: 'Moulya'}
];
const TableWithPagination = () => {
  // useState to keep track of the current page number
  const [currentPage, setCurrentPage] = useState(1);
 
  // Number of rows to display per page
  const rowsPerPage = 2;

  // Calculate the index of the last row for the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  // Calculate the index of the first row for the current page
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  // Slice the data array to show only rows for the current page
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
return (
    <div>
      {/* Simple HTML table */}
      <table border="1">
        <thead>
          <tr>  <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
       
{/* Map through currentRows to render table rows */}
          {currentRows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
{/* Pagination buttons */}
      {/* Prev button decreases current page but ensures it doesn't go below 1 */}
      <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>
        Prev
      </button>

      {/* Next button increases current page but ensures it doesn't exceed max pages */}
      <button onClick={() => setCurrentPage(prev =>
        Math.min(prev + 1, Math.ceil(data.length / rowsPerPage))
      )}>
        Next
      </button>
    </div>
  );
};
export default TableWithPagination;