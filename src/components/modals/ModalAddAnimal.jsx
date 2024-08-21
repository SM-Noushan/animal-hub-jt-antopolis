import React from "react";
import Button from "../buttons/Button";
import Modal from "./Modal";
import CommonInput from "../form/CommonInput";

const ModalAddAnimal = () => {
  return (
    <Modal btnLabel="Create Animal">
      {/* form label */}
      <h1>Add Animal</h1>
      {/* input: animal name */}
      <CommonInput name="animal" placeholder="Animal Name" />
      {/* input: animal image */}
      <div className="relative flex items-center mt-4">
        <span className="inline-block p-4 bg-gray rounded-lg w-full text-start text-black">
          Image
        </span>
        <span className="absolute right-4">
          <label
            htmlFor="image"
            className="inline-block cursor-pointer bg-[#cccccc] rounded-lg px-2 py-1.5 hover:brightness-90"
          >
            upload
          </label>
          <input type="file" name="image" id="image" className="hidden" />
        </span>
      </div>
      {/* input: animal category */}
      <div className="relative">
        <select
          name="animalCategory"
          id="animalCategory"
          className="cursor-pointer w-full rounded-lg p-4 bg-gray text-black appearance-none"
        >
          <option value="Animal 1">Animal 1</option>
          <option value="Animal 2">Animal 2</option>
          <option value="Animal 3">Animal 3</option>
        </select>
        <span className="absolute top-2 right-4 inline-block bg-[#cccccc] rounded-lg px-2 py-1.5">
          category
        </span>
      </div>
    </Modal>
  );
};

export default ModalAddAnimal;
