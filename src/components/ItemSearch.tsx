import React from "react";
import { useItemStore } from "~/utils/stores/itemStore";

const ItemSearch = () => {
  const searchedItem = useItemStore((state) => state.searchedItem);
  const setSearchedItem = useItemStore((state) => state.setSearchedItem);
  return (
    <input
      type="text"
      value={searchedItem}
      onChange={(e) => setSearchedItem(e.target.value)}
      className="mx-auto my-4 block"
    />
  );
};

export default ItemSearch;
