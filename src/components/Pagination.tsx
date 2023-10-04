import React from "react";
import handleElementScroll from "~/utils/handleElementScroll";
import { useItemStore } from "~/utils/stores/itemStore";

const Pagination = () => {
  const filteredItemsLength = useItemStore((state) => state.filteredItems)
    ?.length;
  const pageCount = Math.ceil(
    filteredItemsLength ? filteredItemsLength / 8 : 1,
  );
  const setCurrentItemPage = useItemStore((state) => state.setCurrentItemPage);
  const currentItemPage = useItemStore((state) => state.currentItemPage);

  return (
    <div className="mx-auto mt-auto flex w-min gap-2">
      {Array(pageCount)
        .fill("")
        ?.map((_, idx) => {
          return (
            <button
              className={`w-6 rounded-md text-white ${
                currentItemPage - 1 === idx && `border border-gray-600`
              }`}
              key={`btn-${idx}`}
              onClick={() => {
                setCurrentItemPage(idx + 1);
                handleElementScroll("header");
              }}
            >
              {idx + 1}
            </button>
          );
        })}
    </div>
  );
};

export default Pagination;
