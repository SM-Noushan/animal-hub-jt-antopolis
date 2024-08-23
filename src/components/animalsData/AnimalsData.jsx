"use client";
import React from "react";
import Card from "../card/Card";
import toast from "react-hot-toast";
import { getAllAnimals } from "@/api";
import { useSearchParams } from "next/navigation";

const SkeletonCard = () => (
  <div className="w-full space-y-3.5 overflow-x-clip mx-auto">
    <div className="bg-slate-900 animate-pulse border-white/10 rounded-lg h-48" />
    <div className="bg-slate-800 animate-pulse rounded-lg h-4" />
  </div>
);

const AnimalsData = () => {
  const skeletonCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [data, setData] = React.useState([]);
  const [isPending, setIsPending] = React.useState(true);
  const searchParams = useSearchParams();
  const query = searchParams.get("category");

  React.useEffect(() => {
    setIsPending(true);
    const fetchData = async () => {
      try {
        const resData = await getAllAnimals(query);
        setData(resData);
      } catch (error) {
        toast.error(error?.msg || error);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10">
        {isPending
          ? skeletonCards.map((i) => <SkeletonCard key={i} />)
          : data.length
          ? data.map((item) => <Card key={item._id} item={item} />)
          : ""}
      </div>
      {!isPending && !data.length && (
        <div className="text-white text-4xl border h-[20vh] flex flex-col justify-center items-center rounded-lg">
          No Data Found
        </div>
      )}
    </>
  );
};

export default AnimalsData;
