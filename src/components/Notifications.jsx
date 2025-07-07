import React from 'react';

function Notifications() {
  return (
    <section className="bg-white shadow-md rounded-md p-4 mt-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Notifications <span role="img" aria-label="bell">🔔</span></h2>
      <ul>
        <li>New member joined!</li>
        <li>Class starting soon.</li>
      </ul>
    </section>
  );
}

export default Notifications;