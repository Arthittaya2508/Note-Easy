"use client";
import React, { useState, useRef, useEffect } from "react";
import Nav from "./components/navbar/page";
import { CiGrid41, CiBoxList, CiTimer, CiStar } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const Page: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGridView, setIsGridView] = useState(true); // State for toggling list/grid view
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the popover
  const [filter, setFilter] = useState<
    "recent" | "favorite" | "name-asc" | "name-desc" | "date-asc" | "date-desc"
  >("recent");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false); // For dropdown

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleAddNote = () => {
    console.log("Creating a note...");
    setIsMenuOpen(false);
  };

  const handleCreateFolder = () => {
    console.log("Creating a folder...");
    setIsMenuOpen(false);
  };

  const handleAddImage = () => {
    console.log("Adding an image...");
    setIsMenuOpen(false);
  };

  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
    setIsFilterDropdownOpen(false); // Close dropdown after selecting filter
    console.log(`Filter changed to: ${newFilter}`);
  };

  const handleViewChange = (isGrid: boolean) => {
    setIsGridView(isGrid);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center mt-8">
        {/* Unified container with border and shadow */}
        <div className="flex flex-col items-center">
          <button
            onClick={toggleMenu}
            className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            เพิ่ม
          </button>
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="flex flex-col items-center bg-gray-400 shadow-md rounded-lg p-4 mb-4"
            >
              <button
                onClick={handleAddNote}
                className="mb-2 text-blue-600 hover:underline"
              >
                สร้างโน๊ต
              </button>
              <button
                onClick={handleCreateFolder}
                className="mb-2 text-blue-600 hover:underline"
              >
                สร้างโฟลเดอร์
              </button>
              <button
                onClick={handleAddImage}
                className="text-blue-600 hover:underline"
              >
                เพิ่มรูป
              </button>
            </div>
          )}
        </div>
        <div className="border rounded-lg shadow-md p-6 w-full max-w-6xl">
          {/* Filter and View Options in a single row */}
          <div className="flex justify-between w-full mt-4">
            <div className="flex space-x-4">
              <button
                onClick={() => handleFilterChange("recent")}
                className={`px-4 py-2 rounded flex ${
                  filter === "recent"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <CiTimer className="w-5 h-5 mt-0.5 font-bold mr-1" />
                ล่าสุด
              </button>
              <button
                onClick={() => handleFilterChange("favorite")}
                className={`px-4 py-2 rounded flex ${
                  filter === "favorite"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <CiStar className="w-5 h-5 mt-0.5 font-bold mr-1" />
                ชื่นชอบ
              </button>
            </div>

            {/* Dropdown and View buttons on the right */}
            <div className="flex space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                  className="px-4 py-2 rounded bg-gray-200 text-black flex"
                >
                  ตัวกรองอื่นๆ <RiArrowDropDownLine className="w-7 h-7  " />
                </button>
                {isFilterDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                    <button
                      onClick={() => handleFilterChange("name-asc")}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      ชื่อ (ก-ฮ, A-Z)
                    </button>
                    <button
                      onClick={() => handleFilterChange("name-desc")}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      ชื่อ (ฮ-ก, Z-A)
                    </button>
                    <button
                      onClick={() => handleFilterChange("date-asc")}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      วันที่ (เก่าไปใหม่)
                    </button>
                    <button
                      onClick={() => handleFilterChange("date-desc")}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      วันที่ (ใหม่ไปเก่า)
                    </button>
                  </div>
                )}
              </div>

              {/* Toggle View (List/Grid) */}
              <button
                onClick={() => handleViewChange(false)}
                className={`px-4 py-2 rounded ${
                  !isGridView
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <CiBoxList className="w-5 h-5 mt-0.5 font-bold " />
              </button>
              <button
                onClick={() => handleViewChange(true)}
                className={`px-4 py-2 rounded ${
                  isGridView
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <CiGrid41 className="w-5 h-5 mt-0.5 font-bold " />
              </button>
            </div>
          </div>

          {/* Notes Display (List or Grid) */}
          <div
            className={`mt-8 ${
              isGridView ? "grid grid-cols-4 gap-5" : "flex flex-col space-y-4"
            }`}
          >
            {/* Replace the below divs with dynamic note content */}
            <div className="bg-gray-200 p-4 rounded-lg">Note 1</div>
            <div className="bg-gray-200 p-4 rounded-lg">Note 2</div>
            <div className="bg-gray-200 p-4 rounded-lg">Note 3</div>
            <div className="bg-gray-200 p-4 rounded-lg">Note 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
