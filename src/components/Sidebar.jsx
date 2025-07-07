import React from 'react';
import { Home, Users, Calendar, Settings, Bell } from 'lucide-react';

function Sidebar() {
  return (
    <aside className="bg-blue-800 text-white w-64 flex-shrink-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Gym Portal</h1>
      </div>
      <nav>
        <ul className="p-4">
          <li className="py-2 hover:bg-blue-700 rounded-md">
            <a href="#" className="flex items-center"><Home className="mr-2"/> Dashboard</a>
          </li>
          <li className="py-2 hover:bg-blue-700 rounded-md">
            <a href="#" className="flex items-center"><Users className="mr-2"/> Members</a>
          </li>
          <li className="py-2 hover:bg-blue-700 rounded-md">
            <a href="#" className="flex items-center"><Calendar className="mr-2"/> Classes</a>
          </li>
          <li className="py-2 hover:bg-blue-700 rounded-md">
            <a href="#" className="flex items-center"><Bell className="mr-2"/> Notifications</a>
          </li>
          <li className="py-2 hover:bg-blue-700 rounded-md">
            <a href="#" className="flex items-center"><Settings className="mr-2"/> Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;