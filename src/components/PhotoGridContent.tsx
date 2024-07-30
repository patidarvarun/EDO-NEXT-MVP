import React, { useState } from "react";
import CollapsibleSection from "./CollapsibleSection";
import Dropdown from "./Dropdown";

const PhotoGridContent: React.FC = () => {
  const [photoAcrossNumber, setPhotoAcrossNumber] = useState<number>(1);
  const [nameBoxValue, setNameBoxValue] = useState<string>("");

  const photoAcrossOptions = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];

  const nameBoxOptions = [
    { value: "Under Photo", label: "Under Photo" },
    { value: "Cover Photo", label: "Cover Photo" },
  ];

  const handlePhotoAcrossChange = (value: any) => {
    setPhotoAcrossNumber(value);
  };

  const handleNameBoxChange = (value: any) => {
    setNameBoxValue(value);
  };

  return (
    <div>
      <div className="px-3 py-4 rounded-lg bg-[#f7f7f9]">
        <button className="w-full p-2 bg-customColor text-white rounded-xl hover:bg-customColor-700 flex items-center justify-center mt-2">
          Build on page
        </button>
      </div>
      <CollapsibleSection title="PHOTO ACROSS">
        <div>
          {" "}
          <Dropdown
            options={photoAcrossOptions}
            value={photoAcrossNumber}
            onChange={handlePhotoAcrossChange}
          />
        </div>
      </CollapsibleSection>
      <CollapsibleSection title="PHOTO DOWN">
        <div></div>
      </CollapsibleSection>{" "}
      <CollapsibleSection title="NAME BOXES">
        <div>
          {" "}
          <Dropdown
            options={nameBoxOptions}
            value={nameBoxValue}
            onChange={handleNameBoxChange}
          />
        </div>
      </CollapsibleSection>{" "}
      <CollapsibleSection title="PHOTO SHAPES">
        <div></div>
      </CollapsibleSection>{" "}
      <CollapsibleSection title="HORIZONTAL SPACING">
        <div></div>
      </CollapsibleSection>{" "}
      <CollapsibleSection title="VERTICAL SPACING">
        <div></div>
      </CollapsibleSection>{" "}
      <CollapsibleSection title="TOP MARGIN">
        <div></div>
      </CollapsibleSection>{" "}
      <CollapsibleSection title="RIGHT MARGIN">
        <div></div>
      </CollapsibleSection>
      <CollapsibleSection title="LEFT MARGIN">
        <div></div>
      </CollapsibleSection>{" "}
      <CollapsibleSection title="BOTTOM MARGIN">
        <div></div>
      </CollapsibleSection>
      <CollapsibleSection title="LAYERS">
        <div>
          <div className="grid grid-cols-2 justify-items-center gap-y-3">
            <div className="border border-solid border-gray-300 px-3 py-4 rounded-lg bg-white">
              {" "}
              <img
                src="/assets/images/photos.svg"
                alt={`Layout`}
                className="w-24 h-24 cursor-pointer"
              />
            </div>
            <div>
              <h5 className="font-medium text-lg">Grid preview</h5>
              <h6 className="font-medium">Photo size:</h6>
              <p>1.45/4.40</p>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default PhotoGridContent;
