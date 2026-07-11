"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      <Sidebar />

      <div className="lg:ml-72">

        <Topbar />

        <main className="p-6 lg:p-10">
          {children}
        </main>

      </div>

    </div>
  );
}