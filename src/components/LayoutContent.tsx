import React, { useState } from "react";
import CollapsibleSection from "./CollapsibleSection";
import SearchInput from "./SearchInput";
import { layoutContentImages } from "@/utils/staticContent";

const LayoutContent: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div>
      <div className="px-3 py-4 rounded-lg bg-[#f7f7f9]">
        <SearchInput
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      <CollapsibleSection title="CUSTOM TEXT STYLE">
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
        <div className="border border-solid border-gray-300 px-3 py-4 rounded-lg bg-white">
          <div className="grid grid-cols-2 justify-items-center gap-y-3">
            {/* Mapping imageUrls array to generate image elements */}
            {layoutContentImages.map((imageUrl, index) => (
              <div key={index}>
                <img
                  src={imageUrl}
                  alt={`Layout ${index + 1}`}
                  className="w-24 h-24 border border-solid hover:border-[3px] hover:p-1 hover:border-red-500 rounded-md cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default LayoutContent;
