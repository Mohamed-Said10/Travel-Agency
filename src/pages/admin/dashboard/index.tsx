// src/pages/admin/dashboard/index.tsx
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import Header from "../components/Header";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) {
      router.push("/auth/signin"); // Redirect if not authenticated
    } else if (session.user.role !== "admin") {
      router.push("/"); // Redirect if not an admin
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header/>
        <main className="p-4">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <p>Welcome to the admin dashboard!</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
