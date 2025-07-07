import React from 'react';

function DashboardContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-lg font-semibold text-gray-700">Total Members <span role="img" aria-label="muscle">💪</span></h2>
        <p className="text-3xl font-bold text-blue-500">150</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-lg font-semibold text-gray-700">Active Classes <span role="img" aria-label="calendar">📅</span></h2>
        <p className="text-3xl font-bold text-green-500">10</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-lg font-semibold text-gray-700">Revenue <span role="img" aria-label="money">💰</span></h2>
        <p className="text-3xl font-bold text-yellow-500">$5,000</p>
      </div>
    </div>
  );
}

export default DashboardContent;