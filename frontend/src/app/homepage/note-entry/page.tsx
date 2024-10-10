import { useRouter } from "next/router";
import React, { useState } from "react";

const NoteEntryPage = () => {
  const router = useRouter();
  const { noteId } = router.query; // Get the note ID from the URL
  const [pages, setPages] = useState([1]); // Array to manage multiple pages

  // Function to add a new page
  const addPage = () => {
    setPages([...pages, pages.length + 1]);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-xl font-semibold mb-4">Note Entry - {noteId}</h1>

      {/* A4-sized Paper */}
      {pages.map((page) => (
        <div
          key={page}
          className="bg-white shadow-lg w-[210mm] h-[297mm] p-8 mb-4 flex flex-col"
          style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}
        >
          <textarea
            className="w-full h-full border border-gray-300 p-4"
            placeholder={`Page ${page} - Enter your notes here...`}
          />
        </div>
      ))}

      {/* Button to add a new page */}
      <button
        onClick={addPage}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Add Page
      </button>
    </div>
  );
};

export default NoteEntryPage;
