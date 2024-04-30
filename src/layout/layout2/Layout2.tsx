import React from "react";

import Header from "./Header";
import SideMenu from "./SideMenu";
import MenuItem from "../CONST_ROUTES";
import useSidebarStore from "@/store/layoutStore";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout2: React.FC<LayoutProps> = ({ children }) => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);

  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } bg-white shadow-md w-60 fixed h-full`}
        >
          <SideMenu menuList={MenuItem} />
        </div>
        <main className="flex-1 ml-60 min-w-0 overflow-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout2;
