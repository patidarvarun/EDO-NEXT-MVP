// components/Accordian.tsx
import React, { useState } from "react";

interface AccordianProps {
  title: string;
  children: React.ReactNode;
  image?: string;
}

const Accordian: React.FC<AccordianProps> = ({ title, children, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {title === "Manage data" ? (
        ""
      ) : (
        <div
          className={`${
            title === "Manage data" ? "" : "divide-y divide-slate-200"
          }`}
        ></div>
      )}
      <div className="fffff">
        <div
          className="flex justify-between items-center cursor-pointer p-4 h-12"
          onClick={toggleOpen}
        >
          <h3
            className={`${
              isOpen
                ? "text-sm font-medium "
                : title === "Manage data"
                ? "text-lg font-medium text-black"
                : "text-sm font-medium text-black"
            }`}
          >
            {image ? (
              <span className="flex flex-row items-center gap-2">
                <img
                  src={image}
                  alt="image"
                  className="w-5 h-5 rounded-3xl	object-cover"
                />
                {title}
              </span>
            ) : (
              title
            )}
          </h3>
          <span className="text-xl leading-tight font-medium mr-1 hover:bg-gray-300 w-6 h-6 text-center rounded-md">
            {title === "Manage data" ? (
              isOpen ? (
                <img
                  src="/assets/images/arrow-up.svg"
                  className="w-5 h-5 relative top-[5px]"
                />
              ) : (
                <img
                  src="/assets/images/arrow-down.svg"
                  className="w-5 h-5 relative top-[5px]"
                />
              )
            ) : isOpen ? (
              <img src="/assets/images/arrow-down-side.svg" alt="arrow" />
            ) : (
              <img src="/assets/images/arrow-right-side.svg" alt="arrow side" />
            )}
          </span>
        </div>
      </div>
      {isOpen && (
        <div
          className={`${
            title === "Manage data"
              ? "pt-3 pb-3 bg-[#f7f7f9]"
              : "pt-4 pb-4 bg-backgroundColor"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordian;
