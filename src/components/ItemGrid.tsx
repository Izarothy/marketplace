import React from "react";
import Item from "./Item";
import { useItemStore } from "~/utils/stores/itemStore";
import chunkifyArray from "~/utils/chunkifyArray";

const ItemGrid = () => {
  const filteredItems = useItemStore((state) => state.filteredItems);
  const currentItemPage = useItemStore((state) => state.currentItemPage);

  if (!filteredItems) return <></>;
  const itemsOnCurrentPage = chunkifyArray(filteredItems, 8)[
    currentItemPage - 1
  ];
  return (
    <div
      className="m-auto grid min-h-full max-w-7xl  grid-cols-2 justify-center gap-2 lg:grid-cols-4"
      id="itemGrid"
    >
      {itemsOnCurrentPage?.map((itemData) => {
        return <Item {...itemData} id={itemData.id} key={itemData.id}></Item>;
      })}
    </div>
  );
};

export default ItemGrid;
