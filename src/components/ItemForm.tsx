import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { api } from "~/utils/api";
import { useItemFormStore } from "~/utils/stores/itemFormStore";
import { useRouter } from "next/router";

type FormValues = {
  name: string;
  description: string;
  price: number;
  category: string;
};

const ItemForm = () => {
  const router = useRouter();
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
    router.reload();
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
        className="bg-dark-gray flex h-1/2 w-1/2 flex-col p-4 font-semibold text-gray-300"
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
        <label className="flex h-full flex-col">
          Description
          <input
            type="text"
            {...register("description")}
            required
            className="h-full"
          />
        </label>
        <label>
          Category
          <select {...register("category")} required className="text-gray-600">
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
