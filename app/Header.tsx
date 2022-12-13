import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkButton from "./DarkButton";

function Header() {
  return (
    <header>
      <div className=" grid grid-cols-3 p-10 items-center">
        <Bars3Icon className=" h-8 w-8 cursor-pointer " />
        <Link prefetch={false} href="/" className=" ">
          <h1 className=" tracking-wider font-serif text-2xl text-center">
            SEATTLE KD NEWS
          </h1>
        </Link>

        <div className=" flex items-center justify-end space-x-5">
          <DarkButton />

          <button className=" hidden md:inline rounded-full bg-black text-white px-6 lg:p-3 dark:bg-slate-800 ">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* nav */}
      <NavLinks />

      {/*search*/}
      <SearchBox />
    </header>
  );
}

export default Header;
