import Image from "next/image";
import React from "react";
import { useItemStore } from "~/utils/stores/itemStore";
import EmailSVG from "./Icons/EmailSVG";
import PhoneSVG from "./Icons/PhoneSVG";
import { useSession } from "next-auth/react";
import getFirstName from "~/utils/getFirstName";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

const ItemDetails = () => {
  const selectedItemID = useItemStore((state) => state.selectedItemID);
  const allItems = useItemStore((state) => state.allItems);
  const item = allItems?.find((item) => item.id === selectedItemID);

  const { mutate: itemMutate } = api.item.deleteItem.useMutation();

  const { data: session } = useSession();
  const router = useRouter();

  const handleDelete = () => {
    if (!selectedItemID) return;
    itemMutate({ id: selectedItemID });
    router.reload();
  };

  if (!item) return <></>;
  const { name, author, description } = item;

  return (
    <div className="relative flex min-h-full w-full flex-col bg-white p-7 pt-16">
      <Image
        src={"https://picsum.photos/96/96"}
        alt="item"
        width={96}
        height={96}
        className="absolute -top-11 left-5 rounded-full"
      />
      <div className="flex justify-between">
        <h2 className="text-4xl font-semibold">{name}</h2>
        {session?.user.name === author && (
          <p
            className="cursor-pointer text-sm font-semibold text-red-500"
            onClick={handleDelete}
          >
            Delete this post
          </p>
        )}
      </div>
      <span>@{getFirstName(author)}</span>
      <p className="mt-16 max-w-md">
        <span className="block text-sm font-semibold text-gray-500">About</span>
        {description}
      </p>
      {session ? (
        <p className="mt-6 w-full max-w-md">
          <span className="block text-sm font-semibold text-gray-500">
            Contact
          </span>
          <div className="flex justify-between text-xs font-semibold">
            <span className="inline-flex items-center gap-2">
              <PhoneSVG />
              123456789
            </span>
            <span className="inline-flex items-center">
              <EmailSVG />
              email@email.com
            </span>
          </div>
        </p>
      ) : (
        <p className="mt-8 font-semibold text-red-500">
          Log in to see contact info
        </p>
      )}
    </div>
  );
};

export default ItemDetails;
