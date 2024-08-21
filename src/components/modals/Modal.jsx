import Button from "../buttons/Button";

const Modal = ({ children, btnLabel }) => {
  return (
    <div x-data="{ isOpen: true }" className="relative flex justify-center">
      <div
        // x-show="isOpen"
        // x-transition:enter="transition duration-300 ease-out"
        // x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        // x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
        // x-transition:leave="transition duration-150 ease-in"
        // x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
        // x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        className="fixed inset-0 z-10 overflow-y-auto backdrop-brightness-50"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative inline-block px-6 py-9 overflow-hidden align-bottom transition-all transform bg-white text-black text-lg rounded-3xl sm:align-middle sm:max-w-sm sm:w-full">
            <div className="text-start space-y-5">
              {children}
              <Button
                label={btnLabel}
                className="rounded-lg w-full bg-black text-white !mt-7"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
