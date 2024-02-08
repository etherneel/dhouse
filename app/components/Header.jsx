"use client";

import Link from "next/link";
import React, { useState } from "react";
import { TiArrowRight } from "react-icons/ti";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div>
      <nav 
       onMouseLeave={handleMouseLeave}
       className="border-color ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logoMain.png" class="h-12" alt="Flowbite Logo" />
          </a>

          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
              isNavbarOpen ? "active" : ""
            }`}
            aria-controls="navbar-dropdown"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <img width={30} src="/toggle.png" />
          </button>
          <div className="flex space-x-5">
            <div
            
              class={`${
                isNavbarOpen == true ? "block" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-dropdown"
            >
              <ul class="flex gap-6 md:gap-0 flex-col font-medium p-4 md:p-0  md:space-x-8 rtl:space-x-reverse md:flex-row mt-4">
                <li>
                  <a
                    href="/light.pdf"
                    download="Features of dollar house.pdf"
                    class="block py-2 cursor-pointer px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Litepaper
                  </a>
                </li>

                <li>
                  <a
                    href="https://t.me/dollerhouse"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Telegram
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Privacy
                  </a>
                </li>
                {/* <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li> */}
              </ul>
            </div>
            <div className="text-black">
              <Link className="button small text-white w-inline-block install_keplr_button" href="#">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
