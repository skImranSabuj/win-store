"use client"; // Needed if you’re using Next.js App Router

import { useState } from "react";

export default function DropDown() {
  const [open, setOpen] = useState(false);
  const categories = ["Electronics", "Fashion", "Books", "Home & Living"];

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-tr-none rounded-br-none"
        >
        Categories
        <svg
          className="-mr-1 ml-2 h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
          >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8l5 5 5-5" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          onMouseLeave={() => setOpen(false)}
        >
          <div className="py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-900"
                onClick={() => {
                  setOpen(false);
                  console.log("Selected:", cat);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}