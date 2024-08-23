"use server";
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";

const revalidateCategories = async () => revalidateTag("categories");

const revalidateAnimals = async (query) => {
  revalidatePath(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/animals?category=${query}`
  );
  redirect("/");
};

export { revalidateCategories, revalidateAnimals };
