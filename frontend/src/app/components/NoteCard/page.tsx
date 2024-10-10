// NoteCard.tsx
import React from "react";

interface NoteCardProps {
  note: string; // ชื่อโน้ต
  creator: string; // ชื่อผู้สร้าง
  date: string; // วันที่สร้าง
}

const NoteCard: React.FC<NoteCardProps> = ({ note, creator, date }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800">{note}</h3>
      <p className="text-gray-600">สร้างโดย: {creator}</p>
      <p className="text-gray-500">{date}</p>
    </div>
  );
};

export default NoteCard;
