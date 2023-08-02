"use client";
import Sidebar from "@/components/layout/sidebar";
import { UserAuth } from "./auth-context";
import { redirect, usePathname } from "next/navigation";
import LoadingPage from "@/components/shared/loading";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = UserAuth();
  const path = usePathname();

  if (loading) return <LoadingPage />;

  if (!user && path !== "/login") {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen w-full bg-stone-100">
      {user && <Sidebar />}
      <div className="flex-grow">{children}</div>
    </main>
  );
}
