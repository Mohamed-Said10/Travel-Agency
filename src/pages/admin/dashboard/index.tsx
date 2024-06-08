// src/pages/admin/dashboard/index.tsx
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <header className="bg-gray-900 text-white p-4">
          <h1 className="text-xl">Admin Panel</h1>
        </header>
        <main className="p-4">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <p>Welcome to the admin dashboard!</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
