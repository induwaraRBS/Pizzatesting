import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [orderDropdown, setOrderDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleOrderDropdown = () => {
    setOrderDropdown(!orderDropdown);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#c20404]">Pizzahut</h1>
      <ul className="hidden md:flex">
        <li className=" relative group p-4" onClick={toggleOrderDropdown}>
          OrderNow
          {orderDropdown && (
            <ul className=" absolute left-0 mt-2 bg-white border  border-gray-300 rounded shadow-lg z-10">
              <li className="p-2">Pizza</li>
              <li className="p-2">Beverages</li>
              <li className="p-2">Promos</li>
            </ul>
          )}
        </li>
        <li className="p-4">About</li>
        <li className="p-4">Policy</li>
        <li className="p-4">Account</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-red-600 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#c20404] m-4">
          Pizzahut
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-red-600">OrderNow</li>
          <li className="p-4 border-b border-red-600">About</li>
          <li className="p-4 border-b border-red-600">Policy</li>
          <li className="p-4 ">Account</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
