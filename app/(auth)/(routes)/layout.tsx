import { Logo } from "@/components/Logo";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
