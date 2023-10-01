import { create } from "zustand";

type categoryStore = {
  selectedCategories: string[] | null;
  setSelectedCategories: (category: string) => void;
};

const useCategoryStore = create<categoryStore>((set) => ({
  selectedCategories: null,
  setSelectedCategories: (clickedCategory) => {
    set((state) => {
      if (state?.selectedCategories?.includes(clickedCategory)) {
        return {
          selectedCategories: state.selectedCategories?.filter(
            (category) => category !== clickedCategory,
          ),
        };
      }

      if (state?.selectedCategories && state.selectedCategories.length > 0) {
        return {
          selectedCategories: [...state.selectedCategories, clickedCategory],
        };
      }

      return {
        selectedCategories: [clickedCategory],
      };
    });
  },
}));

export { useCategoryStore };
