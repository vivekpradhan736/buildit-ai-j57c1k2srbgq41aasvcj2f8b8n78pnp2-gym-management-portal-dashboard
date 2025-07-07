import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/DashboardContent';
import Members from './components/Members';
import Classes from './components/Classes';
import Analytics from './components/Analytics';
import Notifications from './components/Notifications';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          <DashboardContent />
          <Members />
          <Classes />
          <Analytics />
          <Notifications />
        </main>
      </div>
    </div>
  );
}

export default App;