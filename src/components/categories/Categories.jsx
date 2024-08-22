"use client";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import Button from "../buttons/Button";

const Categories = ({ params, categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("category") || null;
  // navigate to default tab
  if (query === null) redirect(`/?category=${categories[0]["category"]}`);
  // switch tab
  const handleTab = (name) => {
    return router.push(`/?category=${name}`);
  };

  return (
    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap gap-4">
      {categories.map(({ _id, category }) => (
        <Button
          handleOnClick={handleTab}
          key={_id}
          label={category}
          className="text-red border-red"
          active={category.toLowerCase() === query.toLowerCase() ? true : false}
        />
      ))}
    </div>
  );
};

export default Categories;
