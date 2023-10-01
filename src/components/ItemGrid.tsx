import React from "react";
import Item from "./Item";

const ItemGrid = () => {
  return (
    <aside className="m-auto grid h-full max-w-7xl grid-cols-2 justify-center gap-2 px-[10%] md:grid-cols-4">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </aside>
  );
};

export default ItemGrid;
