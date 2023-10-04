import { useEffect } from "react";
import { useItemStore } from "../stores/itemStore";
import { useCategoryStore } from "../stores/categoryStore";

const useFilterItems = () => {
  const setFilteredItems = useItemStore((state) => state.setFilteredItems);
  const allItems = useItemStore((state) => state.allItems);
  const searchedItem = useItemStore((state) => state.searchedItem);
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);

  useEffect(() => {
    const itemsAfterCategorySelection = allItems?.filter((item) =>
      selectedCategory ? item.category === selectedCategory : true,
    );

    const itemsAfterSearch = itemsAfterCategorySelection?.filter((item) =>
      item.name.includes(searchedItem),
    );

    setFilteredItems(itemsAfterSearch ?? null);
  }, [searchedItem, selectedCategory, allItems, setFilteredItems]);
};

export default useFilterItems;
