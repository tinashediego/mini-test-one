"use client";


import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white relative shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-black">LOGO</div>
        <nav className="hidden md:flex space-x-4">
          <div className="relative group">
            <button className="flex items-center text-black">
              For Sale <KeyboardArrowDownIcon className="text-black" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-48">
              <a href="#" className="block px-4 py-2 text-black">Option 1</a>
              <a href="#" className="block px-4 py-2 text-black">Option 2</a>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-black">
              To Rent For Sale <KeyboardArrowDownIcon className="text-black" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-48">
              <a href="#" className="block px-4 py-2 text-black">Option 1</a>
              <a href="#" className="block px-4 py-2 text-black">Option 2</a>
            </div>
          </div>
          <a href="#" className="hover:text-gray-700 text-black">New Developments</a>
          <a href="#" className="hover:text-gray-700 text-black">Showdays</a>
          <a href="#" className="hover:text-gray-700 text-black">Agencies</a>
          <a href="#" className="hover:text-gray-700 text-black">Blog</a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="bg-gray-200 text-black px-4 py-2 rounded-full">Login <AccountCircleIcon/></button>
        </div>
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <CloseIcon className="text-black" /> : <MenuIcon className="text-black" />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg py-4">
          <nav className="flex flex-col space-y-2 px-4">
            <a href="#" className="hover:text-gray-700">For Sale</a>
            <a href="#" className="hover:text-gray-700">To Rent</a>
            <a href="#" className="hover:text-gray-700">New Developments</a>
            <a href="#" className="hover:text-gray-700">Showdays</a>
            <a href="#" className="hover:text-gray-700">Agencies</a>
            <a href="#" className="hover:text-gray-700">Blog</a>
            <button className="bg-gray-200 bg-gray-100 text-black px-4 py-2 rounded-full w-full mt-2">Login <AccountCircleIcon/></button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
