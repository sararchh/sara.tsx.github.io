"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export const NavgarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOptions = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Work",
      href: "#work",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth > 1026);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`bg-white w-full  ${
        isMenuOpen ? "lg:shadow-md" : "shadow-md"
      }`}
    >
      <div className="container mx-auto  flex justify-between items-center p-4">
        <Link href="#" className="text-xl font-bold">
          @sara.tsx
        </Link>

        <button
          className={`lg:hidden  flex flex-col justify-between space-y-1`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="flex flex-col justify-between space-y-1">
            <span>X</span>
          </div>
        </button>

        {isMenuOpen && window.innerWidth > 1026 ? (
          <div className="">
            <ul className="flex flex-row space-x-6">
              {menuOptions.map((option) => (
                <li key={option.title}>
                  <Link
                    href={option.href}
                    className="block  text-gray-700 hover:text-gray-900"
                  >
                    {option.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div
            className={`absolute top-14 left-0 w-full  bg-white shadow-md  items-center space-x-6 overflow-hidden transition-all duration-700 ${
              isMenuOpen ? " max-h-96 " : "max-h-0 block"
            }`}
          >
            <ul className="flex flex-col">
              {menuOptions.map((option) => (
                <li key={option.title}>
                  <Link
                    href={option.href}
                    className="block py-2 px-4 text-gray-700 hover:text-gray-900"
                  >
                    {option.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
