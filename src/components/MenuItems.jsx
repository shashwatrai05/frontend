import React from 'react';
import { menuItemsData } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const MenuItems = ({ setSideBarOpen }) => {
  return (
    <div className="text-gray-600 space-y-2 font-medium">
      {menuItemsData.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          onClick={() => setSideBarOpen(false)}
          className={({ isActive }) =>
            `px-3.5 py-2 flex items-center gap-3 rounded-xl transition-colors duration-200 ${
              isActive ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'hover:bg-gray-100'
            }`
          }
        >
          {Icon && <Icon className="w-5 h-5" />}
          <span>{label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default MenuItems;
