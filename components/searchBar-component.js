import { SearchIcon } from "lucide-react";
import React from "react";

export default function SearchComponent() {
  return (
    <div className="w-full  py-4">
      <form className="max-w-md mx-auto relative w-full">
        <input
          type="search"
          id="default-search"
          className="block p-4 ps-10 w-full text-sm text-[#0B3954] border border-gray-300 rounded-[30px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
          placeholder="Search anything you want to"
          aria-label="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-4 h-4 text-gray-500" />
        </div>
      </form>
    </div>
  );
}
