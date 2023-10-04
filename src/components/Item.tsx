import Image from "next/image";
import React, { useState } from "react";
import getFirstName from "~/utils/getFirstName";
import { useItemStore } from "~/utils/stores/itemStore";
import { type TItem } from "~/utils/types";

type TProps = TItem;

const Item = ({ id, name, category, author, price }: TProps) => {
  const setSelectedItem = useItemStore((state) => state.setSelectedItemID);
  const selectedItemID = useItemStore((state) => state.selectedItemID);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex max-h-[250px] max-w-[250px] cursor-pointer flex-col items-center gap-2 p-2  hover:bg-white hover:text-black ${
        selectedItemID === id ? `bg-white text-black` : `text-white`
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        setSelectedItem(id);
      }}
    >
      <div className="relative flex aspect-square w-full justify-center">
        <Image
          src={"https://picsum.photos/250/250"}
          alt="Listed item"
          fill
          sizes="100vw"
          className="h-auto w-full rounded-md object-cover"
        />
        <div
          className={`absolute bottom-4 z-10 rounded-md bg-black/40 px-2 text-center font-semibold text-white ${
            isHovered ? `` : `hidden`
          }`}
        >
          {name}
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
        <span className="text-sm">{getFirstName(author)}</span>
      </div>
      <div className="flex w-full items-center justify-between ">
        <h5>${price}</h5>
      </div>
    </div>
  );
};

export default Item;
