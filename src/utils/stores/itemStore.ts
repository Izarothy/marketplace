import { create } from "zustand";
import { type TItem } from "../types";

type itemStore = {
  selectedItemID: string | null;
  setSelectedItemID: (itemID: string | null) => void;
  allItems: TItem[] | null;
  setAllItems: (items: TItem[] | null) => void;
};

const useItemStore = create<itemStore>((set) => ({
  selectedItemID: null,
  setSelectedItemID: (clickedItemID) => {
    set((state) => {
      if (state.selectedItemID === clickedItemID) {
        return {
          selectedItemID: state.selectedItemID,
        };
      }

      return {
        selectedItemID: clickedItemID,
      };
    });
  },

  allItems: null,
  setAllItems: (items) => {
    set(() => {
      return {
        allItems: items,
      };
    });
  },
}));

export { useItemStore };
