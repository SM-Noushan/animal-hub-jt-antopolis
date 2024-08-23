import toast from "react-hot-toast";
import Button from "../buttons/Button";
import { useRouter } from "next/navigation";
import { addAnimal, addCategory, uploadImage } from "@/api";
import { revalidateAnimals, revalidateCategories } from "@/app/action";

const Modal = ({ children, btnLabel, isOpen, onClose }) => {
  const router = useRouter();
  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form?.name?.value?.toLowerCase();
    // new animals
    if (name) {
      const category = form?.category?.value;
      const image = form?.image?.files[0];
      if (!image) return toast.error("Upload Image");
      const formData = new FormData();
      formData.append("image", image);
      try {
        // upload image and get url
        const { data } = await uploadImage(formData);
        const imgUrl = data.display_url;
        await addAnimal({ name, category, image: imgUrl });
        await revalidateAnimals(category);
        router.refresh();
        toast.success("Successfully added");
        onClose(false);
      } catch (error) {
        toast.error(error?.msg || error);
      }
    } else {
      // new category
      const category = form?.category?.value?.toLowerCase();
      try {
        await addCategory({ category });
        toast.success("Successfully added");
        await revalidateCategories();
        onClose(false);
      } catch (error) {
        toast.error(error?.msg || error);
      }
    }
  };
  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 z-10 overflow-y-auto backdrop-brightness-50 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 transition-transform duration-500 ease-in-out ${
              isOpen
                ? "translate-y-0"
                : "translate-y-4 sm:translate-y-0 sm:scale-95"
            }`}
            onClick={() => onClose(false)}
          >
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <form
              className="relative inline-block px-6 py-9 overflow-hidden align-bottom transition-all transform bg-white text-black text-lg rounded-3xl sm:align-middle sm:max-w-sm sm:w-full"
              onSubmit={handleForm}
              // prevents closing the modal when clicking inside it
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-start space-y-5">
                {children}
                <Button
                  label={btnLabel}
                  btnType="submit"
                  className="rounded-lg w-full bg-black text-white !mt-7"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
