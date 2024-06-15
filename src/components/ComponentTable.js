import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableExample = () => {
  return (
    <div className="container mt-5">
      <h2>Bootstrap Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>28</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>32</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableExample;
