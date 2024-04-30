import React from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  name: string;
  path: string;
}

interface Props {
  menuList: MenuItem[];
}

const SideMenu: React.FC<Props> = ({ menuList }) => {
  return (
    <div className="min-w-60 bg-yellow-200">
      <ul className="list-none p-0">
        {menuList.map((item, index) => (
          <li key={index} className="border-b border-gray-300">
            <Link
              to={item.path}
              className="block p-4 text-gray-800 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
