import React, { useState } from "react";
import CollapsibleSection from "./CollapsibleSection";
import SearchInput from "./SearchInput";
import { elementContentImages } from "@/utils/staticContent";

const ElementContent: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div>
      <div className="px-3 py-4 rounded-lg bg-[#f7f7f9]">
        <div className="flex flex-row justify-around">
          <SearchInput
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button className="border border-solid text-black rounded-lg bg-white w-14 ml-3"><p className="bg-black w-6 rounded-full mx-auto">1</p></button>
        </div>
      </div>
      <CollapsibleSection title="SELECTED THEMES">
        <div className="border border-solid border-gray-300 px-3 py-4 pr-3 pl-3 rounded-lg bg-white"></div>
      </CollapsibleSection>
      <CollapsibleSection title="USED RECENTLY">
        <div className="border border-solid border-gray-300 px-3 py-4 rounded-lg bg-white"></div>
      </CollapsibleSection>
      <CollapsibleSection title="MOST POPULAR">
        <div className="border border-solid border-gray-300 px-3 py-4 pr-3 pl-3 rounded-lg bg-white"></div>
      </CollapsibleSection>
      <CollapsibleSection title="FAVOURITES">
        <div className="border border-solid border-gray-300 px-3 py-4 pr-3 pl-3 rounded-lg bg-white"></div>
      </CollapsibleSection>
      <CollapsibleSection title="ALL LAYOUTS">
        <div className="border border-solid border-gray-300 px-3 py-4 pr-3 pl-3 rounded-lg bg-white"></div>
      </CollapsibleSection>
      <CollapsibleSection title="ANIMALS">
        <div className="border border-solid border-gray-300 px-3 py-4 rounded-lg bg-white">
          <div className="grid grid-cols-3 justify-items-center gap-y-3 gap-x-3">
            {elementContentImages.map((imageUrl, index) => (
              <div key={index}>
                <img
                  src={imageUrl}
                  alt={`Layout ${index + 1}`}
                  className="w-21 h-17 border border-solid hover:border-[3px] hover:p-1 hover:border-red-500 rounded-md cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default ElementContent;
