import { create } from "zustand";
import { type TItem } from "../types";

type itemStore = {
  selectedItemID: string | null;
  setSelectedItemID: (itemID: string | null) => void;
  allItems: TItem[] | null;
  setAllItems: (items: TItem[] | null) => void;
  searchedItem: string;
  setSearchedItem: (input: string) => void;
  filteredItems: TItem[] | null;
  setFilteredItems: (items: TItem[] | null) => void;
  currentItemPage: number;
  setCurrentItemPage: (nextPage: number) => void;
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

  searchedItem: "",
  setSearchedItem: (input) => {
    set((state) => {
      if (state.searchedItem === input) {
        return {
          searchedItem: state.searchedItem,
        };
      }
      return {
        searchedItem: input,
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

  filteredItems: null,
  setFilteredItems: (items) => {
    set(() => {
      return {
        filteredItems: items,
      };
    });
  },

  currentItemPage: 1,
  setCurrentItemPage: (nextPage) => {
    set(() => {
      return {
        currentItemPage: nextPage,
      };
    });
  },
}));

export { useItemStore };
