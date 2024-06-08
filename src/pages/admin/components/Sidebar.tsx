// src/components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/admin/excursions" className="block px-4 py-2 hover:bg-gray-700">
              Excursions
            </Link>
          </li>
          <li>
            <Link href="/admin/circuits" className="block px-4 py-2 hover:bg-gray-700">
              Circuits
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
