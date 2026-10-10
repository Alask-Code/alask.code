import React from 'react';
import { PiMagnifyingGlassThin, PiArrowUpThin } from 'react-icons/pi';

export default function SearchBar() {
  return (
    <div className="flex items-stretch safe-w-full justify-between gap-1 pb-3">
      <div
        className="flex items-center
               rounded-md bg-white/10 gap-1 p-1"
      >
        <input type="text" className="bg-black/20 rounded-sm p-1" placeholder="Search..." />
        <button className="cursor-pointer hover:bg-white/10 rounded-sm p-2">
          <PiMagnifyingGlassThin />
        </button>
      </div>
      <div className="flex items-center gap-2 bg-white/10 rounded-md p-1 px-2">
        <p>Order by</p>
        <div className="flex items-center gap-2">
          <select
            className="appearance-none px-1 border-white/10 rounded-sm
                   border"
            defaultValue="az"
          >
            <option value="az">A-Z</option>
            <option value="date">Date</option>
          </select>

          <button className="cursor-pointer hover:bg-white/10 rounded-sm p-2">
            <PiArrowUpThin />
          </button>
        </div>
      </div>
    </div>
  );
}
