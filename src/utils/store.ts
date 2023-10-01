import { create } from "zustand";

type categoryStore = {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
};

const useCategoryStore = create<categoryStore>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (clickedCategory) => {
    set(() => ({
      selectedCategory: clickedCategory,
    }));
  },
}));

export { useCategoryStore };
