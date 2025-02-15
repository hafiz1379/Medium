import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-6xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt=""
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="bg-green-600 text-white px-4 py-1 rounded-full cursor-pointer">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-6 text-green-600">
        <h3 className="cursor-pointer">Sing In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600 cursor-pointer hover:bg-green-600 hover:text-white transition duration-300">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
