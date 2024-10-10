import React from "react";
import Nav from "./components/navbar/page";

export default function page() {
  return (
    <div>
      <Nav />
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-top"
          src="/images/note.jpg"
          alt="Note Easy Banner"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Note Easy</div>
          <p className="text-gray-700 text-base">
            Note Easy เป็นแอปพลิเคชันที่ช่วยให้การจัดการบันทึกง่ายและเป็นระเบียบ
            ฟีเจอร์ที่หลากหลายช่วยให้การจดบันทึกสะดวกและมีประสิทธิภาพ เช่น
            การสร้างบันทึก การจัดหมวดหมู่ การแสดงประวัติการแก้ไข
            และการจัดเรียงบันทึกได้ตามต้องการ
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            การจัดการบันทึก
          </span>
          <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            หมวดหมู่
          </span>
          <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            ประวัติการแก้ไข
          </span>
        </div>
      </div>
    </div>
  );
}
