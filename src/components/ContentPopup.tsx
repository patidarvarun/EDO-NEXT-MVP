// components/ContentPopup.tsx
import React, { useEffect, useState } from "react";
import ExpandViewTheme from "./theme/ExpandViewTheme";
import styles from "../styles/dashboard.module.css";

interface ContentPopupProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const ContentPopup: React.FC<ContentPopupProps> = ({
  title,
  onClose,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <>
      <div className={`absolute top-[136px] ml-[120px] w-[290px] bg-white rounded-xl border-b-4 border border-solid border-gray-200 overflow-y-auto ${styles.min_content_height}`}>
        <div className="flex justify-between items-center p-4">
          <h2 className="text-l font-semibold">{title}</h2>
          <div>
            {title === "Themes" ? (
              <>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-gray-500 hover:text-gray-700 text-2xl text-black mr-2 "
                >
                  {isExpanded ? (
                    <div className="flex relative top-[-3px] rounded-full pr-1 pt-2 pb-2 pl-3 border border-gray-400">
                      <p className="text-xs text-black font-medium ">
                        Expand view
                      </p>
                      <img
                        src="/assets/images/maximize-3.svg"
                        alt="Expand Icon"
                        className="pr-2 pl-3"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex relative top-[-3px] "
                      onClick={handleOpen}
                    >
                      <p className="text-xs text-blue-600 font-medium mr-3">
                        Expand
                      </p>
                      <img
                        src="/assets/images/maximize-4.svg"
                        alt="Expand Icon"
                        className="mr-2"
                      />
                    </div>
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="text-black hover:text-gray-700 text-2xl text-black border-l border-gray-400 pl-2 "
                >
                  &times;
                </button>
              </>
            ) : (
              <button
                onClick={onClose}
                className="text-black hover:text-gray-700 text-2xl text-black "
              >
                &times;
              </button>
            )}
          </div>
        </div>
        {children}
      </div>
      {isOpen === true ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <ExpandViewTheme onClose={onClose} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ContentPopup;
