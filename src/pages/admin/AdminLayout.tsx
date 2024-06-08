// src/components/AdminLayout.tsx
import Link from 'next/link';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-gray-700 text-white py-2 px-4">
        <h1 className="text-xl">Admin Dashboard</h1>
      </header>
      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/5 bg-gray-800 text-white">
          <nav className="p-6">
            <ul className="space-y-4">
              <li>
                <Link href="/admin/dashboard">
                  <span className="hover:text-gray-400 cursor-pointer">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/excursions">
                  <span className="hover:text-gray-400 cursor-pointer">Excursions</span>
                </Link>
              </li>
              <li>
                <Link href="/admin/circuits">
                  <span className="hover:text-gray-400 cursor-pointer">Circuits</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        {/* Main content area */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
