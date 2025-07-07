import React from 'react';

function Members() {
  return (
    <section className="bg-white shadow-md rounded-md p-4 mt-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Members List <span role="img" aria-label="group">👥</span></h2>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Name</th>
            <th>Email</th>
            <th>Membership</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john.doe@example.com</td>
            <td>Premium</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane.smith@example.com</td>
            <td>Basic</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Members;