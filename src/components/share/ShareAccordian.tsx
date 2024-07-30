// components/ShareAccordian.tsx
import React, { useState } from "react";

interface ShareAccordianProps {
  title: string;
  children: React.ReactNode;
  image: string;
}

const ShareAccordian: React.FC<ShareAccordianProps> = ({
  title,
  children,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className={`${
          title === "Manage data" ? "" : "divide-y divide-slate-200"
        }`}
      ></div>

      <div className="fffff">
        <div
          className="flex justify-between items-center cursor-pointer h-10"
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
            <span className="flex flex-row items-center gap-2">
              <img
                src={image}
                alt="image"
                className="w-6 h-6 rounded-3xl	object-cover"
              />
              {title}
            </span>
          </h3>
          <span className="text-xl leading-tight font-medium mr-1 hover:bg-gray-300 h-6 mr-4 text-center rounded-md">
            {isOpen ? (
              <div className="flex flex-row items-center gap-2">
                <p className="text-sm">Can view</p>
                <img src="/assets/images/arrow-down-side.svg" alt="arrow" />
              </div>
            ) : (
              <div className="flex flex-row items-center gap-2">
                <p className="text-sm">Can view</p>
                <img
                  src="/assets/images/arrow-right-side.svg"
                  alt="arrow side"
                />
              </div>
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

export default ShareAccordian;
