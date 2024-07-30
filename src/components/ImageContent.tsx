import React, { useState } from "react";
import CollapsibleSection from "./CollapsibleSection";
import SearchInput from "./SearchInput";
import { imageContentImages } from "@/utils/staticContent";

const ImageContent: React.FC = () => {
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
        <button className="w-full p-2 bg-customColor text-white rounded-xl hover:bg-customColor-700 flex items-center justify-center mt-2">
          Upload
          <img
            src="/assets/images/frame.svg"
            alt="Upload Icon"
            className="ml-2 w-5 h-5"
          />
        </button>
      </div>
      <CollapsibleSection title="PUBLIC PHOTOS">
        <div className="border border-solid border-gray-300 px-3 py-4 rounded-lg bg-white">
          <div className="grid grid-cols-3 justify-items-center gap-y-3">
            {imageContentImages.slice(0, 1).map((imageUrl, index) => (
              <div key={index}>
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="w-19 h-17 border-2 hover:border hover:border-[3px] hover:border-red-500 hover:rounded-md cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>
      <CollapsibleSection title="PEOPLE PHOTOS">
        <div className="border border-solid border-gray-300 px-3 py-4 rounded-lg bg-white">
          <div className="grid grid-cols-3 justify-items-center gap-y-3">
            {imageContentImages.map((imageUrl, index) => (
              <div key={index}>
                <img
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className="w-19 h-17 border-2 hover:border hover:border-[3px] hover:border-red-500 hover:rounded-md cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default ImageContent;
