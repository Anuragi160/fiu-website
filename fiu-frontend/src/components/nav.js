"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [teamsOpen, setTeamsOpen] = useState(false);

  return (
    <div className="w-[80%] mx-auto border-b border-black h-fit px-8 md:px-20 py-3 font-sans">
      <ul className="flex justify-between items-center text-base font-bold tracking-wide">
        <li className="cursor-pointer hover:text-blue-700 transition-colors duration-150">
          <Link href="/">HOME</Link>
        </li>

        <li
          className="relative group cursor-pointer"
          onClick={() => {
            setTeamsOpen(!teamsOpen);
          }}
        >
          <span className="flex items-center gap-1 hover:text-blue-700 transition-colors duration-150">
            TEAMS
            <span className="text-sm transform group-hover:rotate-180 transition-transform duration-200">
              ▾
            </span>
          </span>

          <ul
            className={`absolute top-full left-0 mt-1 ${
              teamsOpen ? "block" : "hidden"
            } bg-white border  border-gray-300 shadow-lg w-max min-w-[150px] rounded-md z-10`}
          >
            <li className="px-4 py-2 hover:bg-gray-100 transition-colors duration-150">
              <Link href="/team/current">Current Members</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 transition-colors duration-150">
              <Link href="/team/alumni">Alumni</Link>
            </li>
          </ul>
        </li>

        <li className="cursor-pointer hover:text-blue-700 transition-colors duration-150">
          <Link href="/research">RESEARCH AREA</Link>
        </li>
        <li className="cursor-pointer hover:text-blue-700 transition-colors duration-150">
          <Link href="/facilities">FACILITIES</Link>
        </li>
        <li className="cursor-pointer hover:text-blue-700 transition-colors duration-150">
          <Link href="/teaching">TEACHING</Link>
        </li>
      </ul>
    </div>
  );
}
