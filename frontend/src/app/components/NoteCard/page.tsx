import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface NoteCardProps {
  note: string;
  creator: string;
  date: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, creator, date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Note content */}
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-gray-800">{note}</p>
      </div>

      {/* Note details */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-600 text-sm">Created by: {creator}</p>
          <p className="text-gray-600 text-sm">Created on: {date}</p>
        </div>

        {/* Three dots button */}
        <button className="text-gray-500">
          <BsThreeDotsVertical className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
