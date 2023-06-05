"use client";

import { useRef, useState } from "react";

export default function Dropdown({ name, data, selected, handler }: any) {
  const [visibility, setVisibility] = useState(false);

  // 드랍다운 외 클릭 시 드랍다운 닫기
  const menuRef = useRef<HTMLDivElement>(null);
  const closeDropdown = (e: any) => {
    if (menuRef.current && visibility && !menuRef.current.contains(e.target)) {
      setVisibility(false);
    }
  };
  document.addEventListener("mousedown", closeDropdown);
  // 드랍다운 닫기

  return (
    <div ref={menuRef} className="w-fit">
      <button
        className="text-gray-800 bg-white hover:bg-gray-200 shadow 
        focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium
        rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:text-white 
      dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        onClick={(e) => setVisibility(!visibility)}
      >
        {name}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`absolute mt-1 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700 ${
          visibility ? "block" : "hidden"
        }`}
      >
        <ul className="p-3 space-y-1 text-sm shadow-md text-gray-700 dark:text-gray-200">
          {data.map((p: any) => {
            const isSelected = selected.includes(p);
            return (
              <li key={p} onClick={() => handler(p)}>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    className="w-4 h-4 text-blue-600 bg-gray-100 
                    border-gray-300 rounded focus:ring-blue-500
                     dark:focus:ring-blue-600 dark:ring-offset-gray-700
                      dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    type="checkbox"
                    readOnly
                    checked={isSelected}
                  />
                  <label className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                    {p}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
