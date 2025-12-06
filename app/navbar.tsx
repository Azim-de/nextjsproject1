"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMail } from "react-icons/hi"; //library untuk icon

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "Our Team", href: "/team" },
    { label: "Client", href: "/client" },
    { label: "Contact Us", href: "/contact" },
    { label: "Glossary of Terms & FAQ", href: "/faq" },
  ];

  

  return (
    <>
      <nav className="sticky top-0 z-50 w-full px-6 py-4 bg-white shadow flex items-center">
        
        {/* LOGO + Company Name */}
        <div className="flex items-center gap-3">
          <img src="images/sti_logo.png" alt="logo" className="w-16 h-auto" />
          <span className="font-semibold text-blue-900">
            PT. SARANA TATA INDORAYA
          </span>
        </div>

        {/* MENU - Desktop */}
        <ul className="hidden lg:flex gap-14 mx-auto text-gray-700 font-regular">
          {menu.map((item) => (
            <Link key={item.label} href={item.href}>
              <li className="hover:text-red-600 transition cursor-pointer">
                {item.label}
              </li>
            </Link>
          ))}

          {/* LOGIN */}
          <Link href="/login">
            <li className="text-red-600 font-semibold cursor-pointer">
              Login
            </li>
          </Link>
        </ul>

        {/* EMAIL RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-2">
          <HiMail size={22} className="text-black" />
       <span className="text-sm font-semibold text-gray-900">sti@gmail.com</span>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden ml-auto text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="lg:hidden bg-white shadow px-6 py-4 space-y-4">
          {menu.map((item) => (
            <div key={item.label} className="w-full">
              <Link href={item.href}>
                <span className="block py-2 text-gray-700 font-medium ">
                  {item.label}
                </span>
              </Link>
            </div>
          ))}

          <Link href="/login">
            <span className="block text-red-600 py-2 font-semibold border-b">
              Login
            </span>
          </Link>

          {/* EMAIL MOBILE */}
          <div className="flex items-center gap-2 pt-3">
            <HiMail size={20} />
         <span className="text-sm font-semibold text-gray-900">sti@gmail.com</span>

          </div>
        </div>
      )}
    </>
  );
}
