import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col gap-16">{children}</main>
    </div>
  );
};

export default Layout;
