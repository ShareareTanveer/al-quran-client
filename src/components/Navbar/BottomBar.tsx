import React from "react";
import {
  FaBookmark,
  FaCopy,
  FaInfo,
  FaLightbulb,
  FaShare,
} from "react-icons/fa";

function BottomBar() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border flex justify-around py-6 text-lg rounded-t-3xl shadow-2xl md:hidden">
        <button className="text-gray-500">
          <FaLightbulb className="text-gray-400" />
        </button>
        <button className="text-gray-500">
          <FaInfo className="text-gray-400" />
        </button>{" "}
        <button className="text-gray-500">
          <FaShare className="text-gray-400" />
        </button>{" "}
        <button className="text-gray-500">
          <FaCopy className="text-gray-400" />
        </button>{" "}
        <button className="text-gray-500">
          <FaBookmark className="text-gray-400" />
        </button>
      </div>
    </>
  );
}

export default BottomBar;
