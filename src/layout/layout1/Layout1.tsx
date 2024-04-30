import React from "react";

import Header from "./Header";
import SideMenu from "./SideMenu";
import MenuItem from "../CONST_ROUTES";
import useSidebarStore from "@/store/layoutStore";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout1: React.FC<LayoutProps> = ({ children }) => {
  const isSidebarOpen = useSidebarStore((state) => state.isSidebarOpen);
  
  return (
    <div>
      <Header />

      <div className="flex flex-row">
        <div
          className={`z-10 ${
            isSidebarOpen ? "block" : "hidden"
          }  bg-yellow-200 w-full md:w-auto`}
        >
          <SideMenu menuList={MenuItem} />
        </div>
        <main className="flex-1 min-w-0 overflow-auto min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default Layout1;
