import React from "react";
import Item from "./Item";

const ItemGrid = () => {
  return (
    <div className="m-auto grid min-h-full max-w-7xl  grid-cols-2 justify-center gap-2 lg:grid-cols-4">
      <Item name="Test" categories={["Test 1"]} />
      <Item name="Test2" categories={["Test 2"]} />
      <Item name="Test3" categories={["Test 3"]} />
      <Item name="Test4" categories={[""]} />
    </div>
  );
};

export default ItemGrid;
