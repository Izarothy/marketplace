import Image from "next/image";
import React from "react";

const Item = () => {
  return (
    <div className="flex max-w-[250px] flex-col items-center gap-2 p-2 text-white">
      <div className="relative aspect-square w-full">
        <Image
          src={"https://picsum.photos/250/250"}
          alt="Listed item"
          fill
          sizes="100vw"
          className="h-auto w-full rounded-md object-cover"
        />
        <span className="absolute bottom-4 z-10 w-full text-center">Test</span>
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
        <button className="rounded-md border border-white px-2 py-1 hover:bg-white hover:text-black">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default Item;
