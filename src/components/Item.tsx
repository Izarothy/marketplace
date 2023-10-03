import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCategoryStore } from "~/utils/stores/categoryStore";
import { useItemStore } from "~/utils/stores/itemStore";
import { type TItem } from "~/utils/types";

type TProps = TItem;

const Item = ({ id, name, category, author, price }: TProps) => {
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const setSelectedItem = useItemStore((state) => state.setSelectedItemID);
  const selectedItemID = useItemStore((state) => state.selectedItemID);

  const [isHovered, setIsHovered] = useState(false);
  const [areCategoriesMatching, setAreCategoriesMatching] = useState(true);

  useEffect(() => {
    if (selectedCategory) {
      setAreCategoriesMatching(category === selectedCategory);
      return;
    }
    setAreCategoriesMatching(true);
  }, [selectedCategory, category]);
  return (
    <div
      className={`flex max-w-[250px] cursor-pointer flex-col items-center gap-2 p-2  hover:bg-white hover:text-black ${
        areCategoriesMatching ? `` : `hidden`
      } ${selectedItemID === id ? `bg-white text-black` : `text-white`}`}
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
          className={`h-auto w-full rounded-md object-cover ${
            isHovered && `opacity-90`
          }`}
        />
        <div
          className={`bg-black/15 absolute bottom-4 z-10 rounded-md px-1 text-center font-semibold text-white ${
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
        <span className="text-sm">{author}</span>
      </div>
      <div className="flex w-full items-center justify-between ">
        <h5>${price}</h5>
      </div>
    </div>
  );
};

export default Item;
