"use client";
import React, { useState, useRef, useEffect } from "react";
import Nav from "./components/navbar/page";
import { CiGrid41, CiBoxList, CiTimer, CiStar } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import NoteCard from "./components/NoteCard/page";

const Page: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGridView, setIsGridView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteName, setNoteName] = useState("");
  const [notes, setNotes] = useState<
    { name: string; creator: string; date: string }[]
  >([]);
  const [filter, setFilter] = useState<
    "recent" | "favorite" | "name-asc" | "name-desc" | "date-asc" | "date-desc"
  >("recent");
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const handleAddNote = () => {
    setIsModalOpen(true);
  };

  const handleCreateNote = () => {
    if (noteName.trim()) {
      const newNote = {
        name: noteName,
        creator: "Your Name",
        date: new Date().toLocaleDateString(),
      };
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setIsModalOpen(false);
      setNoteName("");
    }
  };

  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
    setIsFilterDropdownOpen(false);
    console.log(`Filter changed to: ${newFilter}`);
  };

  const handleViewChange = (isGrid: boolean) => {
    setIsGridView(isGrid);
  };

  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-col items-center">
          <button
            onClick={handleAddNote}
            className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            เพิ่ม
          </button>
        </div>

        <div className="border rounded-lg shadow-md p-6 w-full max-w-6xl">
          {/* Filter and View Options */}
          <div className="flex justify-between w-full mt-4">
            {/* Filter Buttons */}
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

            {/* View and Filter Options */}
            <div className="flex space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                  className="px-4 py-2 rounded bg-gray-200 text-black flex"
                >
                  ตัวกรองอื่นๆ <RiArrowDropDownLine className="w-7 h-7" />
                </button>
                {isFilterDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-gray-700 border border-gray-200 rounded-md shadow-lg">
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
                <CiBoxList className="w-5 h-5 mt-0.5 font-bold" />
              </button>
              <button
                onClick={() => handleViewChange(true)}
                className={`px-4 py-2 rounded ${
                  isGridView
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <CiGrid41 className="w-5 h-5 mt-0.5 font-bold" />
              </button>
            </div>
          </div>

          {/* Notes Display */}
          <div
            className={`mt-8 ${
              isGridView ? "grid grid-cols-4 gap-5" : "flex flex-col space-y-4"
            }`}
          >
            {notes.map((note, index) => (
              <NoteCard
                key={index}
                note={note.name}
                creator={note.creator}
                date={note.date}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Adding Note */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              เพิ่มโน้ตใหม่
            </h2>
            <input
              type="text"
              value={noteName}
              onChange={(e) => setNoteName(e.target.value)}
              placeholder="ชื่อโน้ต"
              className="w-full p-2 border rounded mb-4 text-gray-700"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                ยกเลิก
              </button>
              <button
                onClick={handleCreateNote}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                สร้าง
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
