"use client";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // icons for eye

interface LoginModalProps {
  onClose: () => void; // Explicitly define the type for onClose
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Close Button in the top-right corner */}
        <button
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          เข้าสู่ระบบ
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              className="w-full p-2 border text-gray-600 border-gray-300 rounded-lg"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border  text-gray-600 border-gray-300 rounded-lg"
              placeholder="Enter password"
            />
            <div
              className="absolute inset-y-0 right-0 top-4 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FiEye className="text-gray-500" />
              ) : (
                <FiEyeOff className="text-gray-500" />
              )}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-gable-green-900 text-white p-2 rounded-lg"
            >
              ลงชื่อเข้าใช้
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600 ">ยังไม่มีบัญชี? </span>
          <span className="text-sm text-blue-600 cursor-pointer">
            สมัครสมาชิก
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
