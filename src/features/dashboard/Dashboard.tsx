import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import AddUser from "../User/AddUser";
import ViewUser from "../User/ViewUser";

export default function Dashboard() {

  return (
    <div>
      <div className="is-header-blur is-sidebar-open navigation:sideblock">
        <div
          id="root"
          className="min-h-100vh cloak flex grow bg-slate-50 dark:bg-navy-900"
        >
          <Sidebar />
          <Navbar />
          {/* <main className="main-content w-full px-[var(--margin-x)] pb-8">
            <div className="flex items-center space-x-4 py-5 lg:py-6">
            <ViewUser />
            </div>
          </main> */}
          <AddUser />
         
        </div>
      </div>
    </div>
  );
}
