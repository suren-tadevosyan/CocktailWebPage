"use client";

import React, { useState } from "react";
import Button from "./Button";
import { NAV_MENU, MenuItem } from "@/Constants/MenuItem";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className=" flex justify-between items-center px-6 py-4 bg-white shadow-md fixed top-0 z-[999] w-full">
        <div className="flex-1 hidden md:flex space-x-6">
          {NAV_MENU.map((item: MenuItem, index: number) => (
            <a
              key={index}
              href={item.href}
              className="text-black text-sm md:text-xs relative lg:text-lg transition-all duration-300 ease-in-out 
                before:content-[''] before:absolute before:left-0 before:bottom-0 
                before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 
                hover:before:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="ml-4 md:absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>

        <div className="flex-1 hidden md:flex justify-end">
          <Button
            text="Where to Find Us"
            className="text-black text-sm md:text-base relative transition-all duration-300 ease-in-out 
                before:content-[''] before:absolute before:left-0 before:bottom-0 
                before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 
                hover:before:w-full"
            onClick={() => console.log(2)}
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-4xl text-black"
          >
            {isOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center space-y-4 py-4">
            {NAV_MENU.map((item: MenuItem, index: number) => (
              <a
                key={index}
                href={item.href}
                className="text-black font-medium text-sm transition-all duration-300 ease-in-out hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
