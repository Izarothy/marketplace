import Image from "next/image";
import React, { useState } from "react";

const Item = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex max-w-[250px] flex-col items-center gap-2 p-2 text-white hover:bg-white hover:text-black">
      <div className="relative flex aspect-square w-full justify-center">
        <Image
          src={"https://picsum.photos/250/250"}
          alt="Listed item"
          fill
          sizes="100vw"
          className="h-auto w-full rounded-md object-cover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <div
          className={`bg-black/15 absolute bottom-4 rounded-md px-1 text-center font-semibold text-white ${
            isHovered ? `` : `hidden`
          }`}
        >
          Test
        </div>
      </div>
      <div className="mr-auto flex items-center gap-2">
        <Image
          src={"https://picsum.photos/32/32"}
          alt="Author"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span>Author</span>
      </div>
      <div className="flex w-full items-center justify-between ">
        <h5>$500</h5>
        <button className="rounded-md border border-black px-2 py-1 hover:bg-black hover:text-white">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Item;
