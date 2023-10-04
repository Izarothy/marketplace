import { create } from "zustand";

type categoryStore = {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
};

const useCategoryStore = create<categoryStore>((set, get) => ({
  selectedCategory: null,
  setSelectedCategory: (clickedCategory) => {
    const selectedCategory = get().selectedCategory;
    if (selectedCategory === clickedCategory) {
      set(() => ({
        selectedCategory: null,
      }));
      return;
    }
    set(() => ({
      selectedCategory: clickedCategory,
    }));
  },
}));

export { useCategoryStore };

// limit 8
// init page 1
// filter items based on page
// dynamically display math.ceil allitems.length / 8 pages
