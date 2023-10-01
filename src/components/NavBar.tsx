import Link from "next/link";
import React from "react";
import AuthButton from "./AuthButton";

const NavBar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-4 py-2">
      <Link href="/">
        <span className="text-lg font-bold text-white">Marketplace</span>
      </Link>
      <AuthButton />
    </nav>
  );
};

export default NavBar;
