import React from "react";
import ItemCategory from "./ItemCategory";

const ItemCategories = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <ItemCategory name="Test 1" />
      <ItemCategory name="Test 2" />
      <ItemCategory name="Test 3" />
      <ItemCategory name="Test 4" />
    </div>
  );
};

export default ItemCategories;
