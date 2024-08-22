import { getAllCategories } from "@/api";
import Card from "@/components/card/Card";
import Add from "@/components/addAnimalsOrCategories/Add";
import Categories from "@/components/categories/Categories";

export default async function Home() {
  // const { modal, setModal } = React.useState(false);
  // const handleModal = () => setModal(true);
  const categories = await getAllCategories();
  return (
    <main className="min-h-screen max-w-screen-2xl container mx-auto border border-purple-400 px-4 py-8 lg:p-16 xl:p-20">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12">
        {/* categories */}
        <Categories categories={categories} />

        {/* add animals or category */}
        <Add categories={categories} />
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10">
        <Card url="https://i.ibb.co/tpzpgdf/Elephant.png" />
        <Card url="https://i.ibb.co/tpzpgdf/Elephant.png" />
        <Card url="https://i.ibb.co/tpzpgdf/Elephant.png" />
        <Card url="https://i.ibb.co/tpzpgdf/Elephant.png" />
        <Card url="https://i.ibb.co/tpzpgdf/Elephant.png" />
        <Card url="https://i.ibb.co/tpzpgdf/Elephant.png" />
        <Card url="https://i.ibb.co/tpzpgdf/Elephant.png" />
        <Card url="https://i.ibb.co/tpzpgdf/Elephant.png" />
        <Card url="https://i.ibb.co/tpzpgdf/Elephant.png" />
        <Card url="https://i.ibb.co/tpzpgdf/Elephant.png" />
        <Card url="https://i.ibb.co/tpzpgdf/Elephant.png" />
      </div>
    </main>
  );
}
