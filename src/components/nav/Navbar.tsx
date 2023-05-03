"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { menus } from "@/const/menu";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="mb-2 flex items-center justify-between flex-wrap">
      <Link
        className="text-base font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        href={"/"}
      >
        Ethan&#39;s Notes
      </Link>
      <div
        className={`${
          !isOpenMenu ? "hidden" : "block animate-fade-in-down"
        }  ${"pb-4 lg:pb-0 lg:flex justify-between items-center w-full lg:w-auto order-2"}`}
      >
        <div
          className="lg:ml-8 flex-col lg:flex-row flex lg:space-x-8 mt-0 lg:text-sm lg:font-medium
        "
        >
          {menus.map((menu: Menu, index) => (
            <Link
              key={index}
              href={menu.href}
              onClick={() => {
                setIsOpenMenu(!isOpenMenu);
              }}
              className="
               text-gray-700 dark:text-gray-200 lg:dark:hover:text-gray-400 dark:hover:text-gray-200 
               dark:hover:bg-gray-800 lg:dark:hover:bg-black
               lg:hover:text-gray-800 border-b lg:border-b-0 border-gray-200 
               lg:hover:bg-transparent lg:border-0 block pr-4 py-2 lg:p-0
               hover:bg-gray-200"
            >
              {menu.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="ml-auto lg:order-3 pt-2 ">
        <ThemeSwitch />
      </div>
      <div className="lg:hidden">
        <Hamburger
          size={32}
          distance="sm"
          toggled={isOpenMenu}
          toggle={setIsOpenMenu}
        />
      </div>
    </div>
  );
}
