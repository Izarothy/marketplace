import Head from "next/head";
import { useEffect } from "react";
import Header from "~/components/Header";
import ItemCategories from "~/components/ItemCategories";
import ItemDetails from "~/components/ItemDetails";
import ItemForm from "~/components/ItemForm";
import ItemGrid from "~/components/ItemGrid";
import ItemSearch from "~/components/ItemSearch";
import NavBar from "~/components/NavBar";
import { api } from "~/utils/api";
import { useItemStore } from "~/utils/stores/itemStore";

export default function Home() {
  const fetchedItems = api.item.fetchItems.useQuery().data;
  const setAllItems = useItemStore((state) => state.setAllItems);

  useEffect(() => {
    if (fetchedItems) setAllItems(fetchedItems);
  }, [fetchedItems, setAllItems]);

  return (
    <>
      <Head>
        <title>Marketplace</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <ItemForm />
        <NavBar />
        <Header />
        <main className="mb-12 flex min-h-[80vh]  w-screen justify-between gap-6 px-[10%] pt-12">
          <aside className="min-h-full w-full">
            <ItemDetails />
          </aside>
          <aside className="h-full w-full">
            <ItemCategories />
            <ItemSearch />
            <ItemGrid />
          </aside>
        </main>
      </>
    </>
  );
}
