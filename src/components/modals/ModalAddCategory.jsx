import Modal from "./Modal";
import CommonInput from "../form/CommonInput";

const ModalAddCategory = ({ isOpen, onClose }) => {
  return (
    <Modal btnLabel="Save" isOpen={isOpen} onClose={onClose}>
      {/* form label */}
      <h1>Add Category</h1>
      {/* input: category name */}
      <CommonInput name="category" placeholder="Category Name" />
    </Modal>
  );
};

export default ModalAddCategory;
