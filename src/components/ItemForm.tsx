import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { api } from "~/utils/api";
import { useItemFormStore } from "~/utils/stores/itemFormStore";

type FormValues = {
  name: string;
  description: string;
  price: number;
  category: string;
};

const ItemForm = () => {
  const setIsItemFormShown = useItemFormStore(
    (state) => state.setIsItemFormShown,
  );
  const isItemFormShown = useItemFormStore((state) => state.isItemFormShown);

  const { mutate: itemMutate } = api.item.addItem.useMutation();

  const { handleSubmit, register, reset } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (values) => {
    const price = Number(values.price);
    reset();
    setIsItemFormShown(false);
    itemMutate({ ...values, price });
  };

  return (
    <div
      className={`${
        isItemFormShown ? `fixed` : `hidden`
      } overlay z-10 grid h-full w-full place-items-center bg-black/50`}
      onClick={(e) => {
        const element = e.target as HTMLElement;

        if (Array.from(element.classList).includes("overlay"))
          return setIsItemFormShown(false);
      }}
    >
      <form
        className="flex h-1/2 w-1/2 flex-col bg-white p-4 font-semibold"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          Item name
          <input
            type="text"
            placeholder='e.g. "fridge" '
            {...register("name")}
            required
          />
        </label>
        <label>
          Price
          <input
            type="number"
            placeholder='e.g. "500" '
            {...register("price")}
            required
          />
        </label>
        <label>
          Description
          <input type="text" {...register("description")} required />
        </label>
        <label>
          Category
          <select {...register("category")} required>
            <option value="Test 1">Test 1</option>
            <option value="Test 2">Test 2</option>
            <option value="Test 3">Test 3</option>
            <option value="Test 4">Test 4</option>
          </select>
        </label>
        <button
          type="submit"
          className="mx-auto mt-auto w-min cursor-pointer rounded-sm bg-blue-500 px-8 py-1 font-bold text-gray-200"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ItemForm;
