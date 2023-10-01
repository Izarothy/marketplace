import React from "react";
import { useCategoryStore } from "~/utils/store";

type TProps = {
  name: string;
};
const ItemCategory = ({ name }: TProps) => {
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);
  const isClicked = selectedCategory === name;
  const setSelectedCategories = useCategoryStore(
    (state) => state.setSelectedCategory,
  );

  return (
    <div
      onClick={() => void setSelectedCategories(name)}
      className={`cursor-pointer rounded-md px-6 py-1 text-sm font-semibold  ${
        isClicked ? `bg-gray-200 text-black` : `text-white`
      }`}
    >
      {name}
    </div>
  );
};

export default ItemCategory;
