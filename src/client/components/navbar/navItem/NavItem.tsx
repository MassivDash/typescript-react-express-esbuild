import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface NavItemProps {
  item: {
    text: string;
    path: string;
  };
}

const NavItem: FC<NavItemProps> = ({ item }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  return (
    <li
      className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white ${
        isActive && 'bg-gray-900'
      }`}
    >
      <Link to={item.path}>{item.text}</Link>
    </li>
  );
};

export default NavItem;
