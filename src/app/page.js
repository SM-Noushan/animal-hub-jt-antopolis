import { getAllCategories } from "@/api";
import Add from "@/components/addAnimalsOrCategories/Add";
import Categories from "@/components/categories/Categories";
import AnimalsData from "@/components/animalsData/AnimalsData";
import { Suspense } from "react";

export default async function Home() {
  const categories = await getAllCategories();
  return (
    <Suspense>
      <main className="min-h-screen max-w-screen-2xl container mx-auto px-4 py-8 lg:p-16 xl:p-20">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12">
          {/* categories */}
          <Categories categories={categories} />

          {/* add animals or category */}
          <Add categories={categories} />
        </div>
        {/* animals data */}
        <AnimalsData />
      </main>
    </Suspense>
  );
}
