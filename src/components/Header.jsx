import React from 'react';
import { User, Search } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="relative">
          <input type="text" placeholder="Search..." className="border rounded-md py-2 px-8 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <Search className="absolute left-2 top-2.5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center">
        <User className="mr-2" />
        <span className="font-semibold">John Doe</span>
      </div>
    </header>
  );
}

export default Header;