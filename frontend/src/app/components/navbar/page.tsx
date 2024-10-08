"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // import search icon
import { TbUserPlus } from "react-icons/tb"; // import user icon
import LoginModal from "../login-modal/page";

function Nav() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <>
      <nav className="bg-gable-green-900 border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold dark:text-white">
            Note Easy
          </span>

          {/* Search Bar */}
          <div className="flex-grow flex justify-center">
            <div className="relative hidden md:block w-full max-w-md">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <FiSearch
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-titan-white-50 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>

          {/* ลงชื่อเข้าใช้ */}
          <div className="flex items-center ml-auto">
            <span
              className="ml-10 text-sm font-medium text-white dark:text-white cursor-pointer"
              onClick={openLoginModal}
            >
              ลงชื่อเข้าใช้
            </span>
            <div
              className="bg-white rounded-full w-10 h-10 ml-4 flex items-center justify-center cursor-pointer"
              onClick={openLoginModal}
            >
              <TbUserPlus
                className="w-6 h-6 text-gray-800 dark:text-gray-800"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
    </>
  );
}

export default Nav;
