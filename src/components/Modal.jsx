const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed z-[500] inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`bg-white rounded-lg p-6 w-1/3 max-[992px]:w-[50%] max-[650px]:w-[80%] transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-10'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
