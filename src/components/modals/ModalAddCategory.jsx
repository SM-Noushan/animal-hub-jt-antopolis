import Button from "../buttons/Button";
import CommonInput from "../form/CommonInput";
import Modal from "./Modal";

const ModalAddCategory = () => {
  return (
    <Modal btnLabel="Save">
      {/* form label */}
      <h1>Add Category</h1>
      {/* input: category name */}
      <CommonInput name="category" placeholder="Category Name" />
    </Modal>
  );
};

export default ModalAddCategory;
