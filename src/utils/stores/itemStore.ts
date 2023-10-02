import { create } from "zustand";

type itemStore = {
  selectedItem: number | null;
  setSelectedItem: (itemID: number | null) => void;
};

const useItemStore = create<itemStore>((set) => ({
  selectedItem: null,
  setSelectedItem: (clickedItem) => {
    set((state) => {
      if (state.selectedItem === clickedItem) {
        return {
          selectedItem: state.selectedItem,
        };
      }

      return {
        selectedItem: clickedItem,
      };
    });
  },
}));

export { useItemStore };
