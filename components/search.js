import { Search, SearchIcon } from "lucide-react";
import React from "react";

export default function SearchComponent() {
  return ( 
    <div className="w-[100%] bg-orange-400">
        <form className="max-w-md mx-auto m-[20px]">   
            <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-[100%] bg-black">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <SearchIcon />
                    </svg>
                </div>
                <input type="search" id="default-search" className="block p-4 ps-10  w-full text-sm text-[#0B3954] border border-gray-300 
                    rounded-[30px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search anything you want to" />
            </div>
        </form>
    </div>
    

  );
}
