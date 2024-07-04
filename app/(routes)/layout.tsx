import React from "react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Dashboardlayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full h-full">
      <div className="hidden lg:block w-80 h-full xl:fixed">
        <Sidebar />
      </div>
      <div className="w-full xl:ml-80">
        <Navbar />
        <div className="p-6 bg-[#fafbfc] dark:bg-secondary">{children}</div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
