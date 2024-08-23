"use client";
import React from "react";
import Button from "../buttons/Button";
import ModalAddAnimal from "../modals/ModalAddAnimal";
import ModalAddCategory from "../modals/ModalAddCategory";

const Add = ({ categories }) => {
  const [animalModal, setAnimalModal] = React.useState(false);
  const [categoryModal, setCategoryModal] = React.useState(false);
  //   handle modals
  const handleAnimalModal = () => setAnimalModal(true);
  const handleCategoryModal = () => setCategoryModal(true);
  return (
    <>
      <div className="flex gap-4 justify-between md:justify-center">
        <Button label="Add Animal" handleOnClick={handleAnimalModal} />
        <Button handleOnClick={handleCategoryModal} label="Add Category" />
      </div>
      <ModalAddAnimal
        isOpen={animalModal}
        onClose={setAnimalModal}
        categories={categories}
      />
      <ModalAddCategory
        isOpen={categoryModal}
        onClose={setCategoryModal}
        categories={categories}
      />
    </>
  );
};

export default Add;
