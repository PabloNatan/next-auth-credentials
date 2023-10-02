"use client";

import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  return (
    <div>
      <h1>Dashboard</h1>
      {JSON.stringify(session)}
      <br />
      {status}
    </div>
  );
}
