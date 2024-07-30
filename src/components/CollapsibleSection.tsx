// components/CollapsibleSection.tsx
import React, { useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
}) => {
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
            title === "Manage data"
              ? ""
              : "border-t-[1px] divide-y divide-slate-200"
          }`}
        ></div>
      )}
      <div
        className="flex justify-between items-center cursor-pointer p-4 h-12"
        onClick={toggleOpen}
      >
        <h3
          className={`${
            isOpen
              ? title === "Manage data"
                ? "text-lg font-medium "
                : "text-sm font-medium text-sidebarText"
              : title === "Manage data"
              ? "text-lg font-medium text-black"
              : "text-sm font-medium text-black"
          }`}
        >
          {title}
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
            "-"
          ) : (
            "+"
          )}
        </span>
      </div>
      <div className="border-t-[1px] divide-y divide-slate-200 "></div>

      {isOpen && (
        <div
          className={`${
            title === "Manage data"
              ? "pt-3 pb-3 bg-[#f7f7f9]"
              : "p-4 bg-[#f7f7f9]"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
