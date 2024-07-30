import React from "react";
import styles from "../styles/dashboard.module.css";
interface ColorPickerProps {
  header: {
    title: string;
    closeButtonFunction: () => void;
  };
  children: React.ReactNode;
  footer: {
    title?: string;
    isSingleButton: boolean;
    submitFunction?: () => void;
    submitButtonText?: string;
    children?: React.ReactNode;
  };
}

const ModalView = ({ header, children, footer }: ColorPickerProps) => {
  return (
    <div
      className={`min-w-[400px] bg-white shadow-lg py-2 rounded-md ${styles.popup_width}`}
    >
      <div className="flex justify-between items-center w-full border-b border-gray-300 pb-3 px-4">
        <h2 className="text-base font-medium text-gray-900 ">{header.title}</h2>
        <button
          type="button"
          className="px-2 text-2xl hover:bg-gray-200 rounded-2xl"
          onClick={header.closeButtonFunction}
        >
          &times;
        </button>
      </div>

      {children}

      {footer.isSingleButton ? (
        <div className="border-t border-gray-300 flex justify-between items-center px-4 pt-2 bg-white py-4">
          <button
            className="px-4 py-2 bg-customColor text-white rounded w-full"
            onClick={footer.submitFunction}
          >
            {footer.submitButtonText}
          </button>
        </div>
      ) : (
        footer.children
      )}
    </div>
  );
};

export default ModalView;
