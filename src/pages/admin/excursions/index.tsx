// src/pages/admin/dashboard/index.tsx
"use client";

import { useState } from "react";
import ExcursionList from "../excursions/components/ExcursionList";
import ExcursionForm from "./components/ExcursionForm";
import AdminLayout from "../AdminLayout";

const Dashboard = () => {
  const [message, setMessage] = useState<string | null>(null);

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <>
      <AdminLayout>
        <ExcursionForm/>
        <ExcursionList showMessage={showMessage} />
      </AdminLayout>
    </>
  );
};

export default Dashboard;
