import React, { FC } from 'react';
import NavItem from './navItem';

const items = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Data', path: '/data' },
];

const Navbar: FC = () => {
  return (
    <nav className="bg-gray-800 w-full h-14 flex justify-start items-center p-2">
      <div className="ml-3 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <img
          className="h-8 w-8 rounded-full"
          src="https://blog.spaceout.pl/content/images/2020/03/spaceghost-1.jpg"
          alt="Spaceghost"
        />
      </div>
      <ul className="flex ml-2  w-56 justify-evenly">
        {items.map((item) => (
          <NavItem key={item.text} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
