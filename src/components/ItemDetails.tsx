import Image from "next/image";
import React from "react";

const ItemDetails = () => {
  return (
    <div className="relative flex  min-h-full w-full flex-col bg-white p-7 pt-16">
      <Image
        src={"https://picsum.photos/96/96"}
        alt="item"
        width={96}
        height={96}
        className="absolute -top-11 left-5 rounded-full"
      />
      <h2 className="text-4xl font-semibold">Test</h2>
      <span>@Author</span>
      <p className="mt-16">
        <span className="block text-sm font-semibold text-gray-500">About</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus,
        delectus reprehenderit ratione reiciendis dolorum odio quam nam eaque,
        est quibusdam ipsam blanditiis velit itaque at sit perferendis vero cum!
      </p>
    </div>
  );
};

export default ItemDetails;
