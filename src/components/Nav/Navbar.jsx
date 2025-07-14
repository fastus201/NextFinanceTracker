"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlinks from "./Navlinks";
import NavButtons from "./NavButtons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-slate-100 px-6 py-4 shadow-slate-gradient-bottom">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/img/navBarLogo.png"
              alt="Logo"
              width={215}
              height={70}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* NAV LINKS - DESKTOP */}
        <ul className="hidden md:flex space-x-6 bg-slate-700 px-6 py-2 rounded-xl shadow-md shadow-slate-950">
           <Navlinks />
        </ul>

        {/* AUTH BUTTONS - DESKTOP */}
        <div className="hidden md:flex space-x-3">
          <NavButtons />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cyan-400 bg-slate-700 p-2 rounded-md cursor-pointer transition-all duration-200"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU with transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-3 bg-slate-800 rounded-xl p-4 mt-4 shadow shadow-slate-950">
          <ul className="space-y-2">
            <Navlinks />
          </ul>
          <div className="pt-3 space-y-2">
            <NavButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}
