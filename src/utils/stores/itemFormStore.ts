import { create } from "zustand";

type itemFormStore = {
  isItemFormShown: boolean;
  setIsItemFormShown: (shown: boolean) => void;
};

const useItemFormStore = create<itemFormStore>((set) => ({
  isItemFormShown: false,
  setIsItemFormShown: (shown) => {
    set(() => {
      return {
        isItemFormShown: shown,
      };
    });
  },
}));

export { useItemFormStore };
