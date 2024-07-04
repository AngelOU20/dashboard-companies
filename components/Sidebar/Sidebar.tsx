import { SidebarRoutes } from "@/components/SidebarRoutes";
import { Logo } from "@/components/Logo";

export const Sidebar = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col border-r">
        <Logo />

        <SidebarRoutes />
      </div>
    </div>
  );
};
