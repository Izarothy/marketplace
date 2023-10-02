import Image from "next/image";
import React from "react";
import { useItemStore } from "~/utils/stores/itemStore";
import ItemsData from "~/data/items.json";
import EmailSVG from "./Icons/EmailSVG";
import PhoneSVG from "./Icons/PhoneSVG";

const ItemDetails = () => {
  const selectedItemID = useItemStore((state) => state.selectedItem);
  const item = ItemsData.find((item) => item.id === selectedItemID);

  if (!item) return <></>;
  const { name, author, description } = item;

  return (
    <div className="relative flex  min-h-full w-full flex-col bg-white p-7 pt-16">
      <Image
        src={"https://picsum.photos/96/96"}
        alt="item"
        width={96}
        height={96}
        className="absolute -top-11 left-5 rounded-full"
      />
      <h2 className="text-4xl font-semibold">{name}</h2>
      <span>@{author}</span>
      <p className="mt-16 max-w-md">
        <span className="block text-sm font-semibold text-gray-500">About</span>
        {description}
      </p>
      <p className="mt-6 w-full max-w-md">
        <span className="block text-sm font-semibold text-gray-500">
          Contact
        </span>
        <div className="flex justify-between text-xs font-semibold">
          <span className="inline-flex items-center gap-2">
            <PhoneSVG />
            123456789
          </span>
          <span className="inline-flex items-center">
            <EmailSVG />
            email@email.com
          </span>
        </div>
      </p>
    </div>
  );
};

export default ItemDetails;
