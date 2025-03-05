"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

import useTranslation from "next-translate/useTranslation";

export const NavgarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, lang } = useTranslation("common");

  const menuOptions = [
    {
      title: t("header.about"),
      href: "#about",
    },
    {
      title: t("header.work"),
      href: "#work",
    },
    {
      title: t("header.contact"),
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
    <nav className={`bg-white w-full shadow-md fixed top-0 left-0 `}>
      <div className="container mx-auto  flex justify-between items-center p-4">
        <Link href="#" className="text-xl font-bold">
          @sara.tsx
        </Link>

        <div>
          <button
            className={`lg:hidden  flex flex-col justify-between space-y-1`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col justify-between space-y-1">
              <MdMenu width={25} height={25} fontSize={25} />
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
                <li>
                  <Link href="/" locale="en-US">
                    EN
                  </Link>
                </li>
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
                  <li key={option.title}   onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
      </div>
    </nav>
  );
};
