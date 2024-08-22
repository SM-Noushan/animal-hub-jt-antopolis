"use server";
import { revalidateTag } from "next/cache";

const revalidateCategories = async () => revalidateTag("categories");

export { revalidateCategories };
