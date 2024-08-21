import Button from "@/components/buttons/Button";
import Card from "@/components/card/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-2xl container mx-auto border border-purple-400 px-4 py-8 lg:p-16 xl:p-20">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 lg:gap-12">
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap gap-4">
          <Button
            label="Land Animal"
            className="text-red border-red"
            active={true}
          />
          <Button label="Bird" className="text-red border-red" />
          <Button label="Fish" className="text-red border-red" />
          <Button label="Insect" className="text-red border-red" />
        </div>
        <div className="flex gap-4 justify-between md:justify-center">
          <Button label="Add Animal" />
          <Button label="Add Category" />
        </div>
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
