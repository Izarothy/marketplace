import React from "react";
import Item from "./Item";
import { useItemStore } from "~/utils/stores/itemStore";

const ItemGrid = () => {
  const filteredItems = useItemStore((state) => state.filteredItems);

  return (
    <div
      className="m-auto grid min-h-full max-w-7xl  grid-cols-2 justify-center gap-2 lg:grid-cols-4"
      id="itemGrid"
    >
      {filteredItems?.map((itemData) => {
        return <Item {...itemData} id={itemData.id} key={itemData.id}></Item>;
      })}
    </div>
  );
};

export default ItemGrid;
