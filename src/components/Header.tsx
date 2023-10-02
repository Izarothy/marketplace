import Image from "next/image";
import React from "react";
import landing from "../../public/landing.jpg";

const Header = () => {
  return (
    <header className="relative mx-auto h-[70vh] w-screen md:h-[80vh] lg:w-[80%]">
      <Image
        src={landing}
        alt="Landscape"
        fill
        quality={100}
        sizes={"100vw"}
        className="object-cover"
      />
      <span className="absolute bottom-0 mb-8 flex w-full justify-center gap-8">
        <button className="text-gray-00 rounded-sm bg-white px-6 py-1 font-semibold">
          View offers
        </button>
        <button className="rounded-sm bg-white px-6 py-1 font-semibold text-gray-800">
          Add an item
        </button>
      </span>
    </header>
  );
};

export default Header;
