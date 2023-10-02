import React from "react";
import Item from "./Item";
import ItemsData from "~/data/items.json";

const ItemGrid = () => {
  return (
    <div
      className="m-auto grid min-h-full max-w-7xl  grid-cols-2 justify-center gap-2 lg:grid-cols-4"
      id="itemGrid"
    >
      {ItemsData?.map((itemData) => {
        return <Item {...itemData} key={itemData.id}></Item>;
      })}
    </div>
  );
};

export default ItemGrid;
