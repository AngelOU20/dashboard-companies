import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full flex items-center justify-center bg-sky-700">
      {children}
    </div>
  );
};

export default AuthLayout;
