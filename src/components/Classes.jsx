import React from 'react';
import { format } from 'date-fns';

function Classes() {
  const now = new Date();
  const formattedDate = format(now, 'MMMM dd, yyyy HH:mm');

  return (
    <section className="bg-white shadow-md rounded-md p-4 mt-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Scheduled Classes <span role="img" aria-label="clock">⏰</span></h2>
      <p>Current Date and Time: {formattedDate}</p>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Class</th>
            <th>Instructor</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yoga</td>
            <td>Alice Johnson</td>
            <td>9:00 AM</td>
          </tr>
          <tr>
            <td>Zumba</td>
            <td>Bob Williams</td>
            <td>6:00 PM</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Classes;