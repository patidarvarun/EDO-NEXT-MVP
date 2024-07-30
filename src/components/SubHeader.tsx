import { headerData } from "@/utils/subheader";
import React, { useState } from "react";
import ColorPicker from "./colorPicker";
import SubHeaderOptionsClick from "./SubHeaderOptionsClick";
import Ladder from "./Ladder";

const SubHeader: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedCheckBoxes, setSelectedCheckboxes] = useState<any[] | []>([]);
  const [openModal, setModal] = useState({
    createLayer: false,
    deleteLayer: false,
  });
  const [optionValue, setOptionValue] = useState();

  const handleClick = (index: number, row: any) => {
    if (selectedIndex !== index) {
      setSelectedIndex(index);
    }
  };

  const handleClose = (index: number, row: any) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    }
  };

  const handleSelectDropdown = (value: boolean, label: string) => {
    const updatedCheckboxes = selectedCheckBoxes.map((item) => {
      if (item.hasOwnProperty(label)) {
        return { ...item, [label]: value };
      }
      return item;
    });
    if (!updatedCheckboxes.some((item) => item.hasOwnProperty(label))) {
      updatedCheckboxes.push({ [label]: value });
    }
    setSelectedCheckboxes(updatedCheckboxes);
  };

  const gridItem = selectedCheckBoxes.find((item) =>
    item.hasOwnProperty("grid")
  );

  const handleDropdownOptionsTrigger = (value: any) => {
    setOptionValue(value);
    if (value.label === "create layer") {
      setSelectedIndex(selectedIndex && null);
      setModal({ ...openModal, createLayer: !openModal.createLayer });
    } else if (value.label === "delete layer") {
      setSelectedIndex(selectedIndex && null);
      setModal({ ...openModal, deleteLayer: !openModal.deleteLayer });
    }
  };
  
  return (
    <>
      <header className="bg-customColor">
        <div className="bg-white h-11 flex justify-center items-center rounded-tl-3xl rounded-tr-2xl">
          <ul className="flex items-center">
            {headerData.map((item, index) => (
              <React.Fragment key={index}>
                <li
                  className={`flex items-center mx-2 p-2 hover:bg-gray-200 rounded cursor-pointer ${
                    selectedIndex === index
                      ? "text-red-500"
                      : "text-sidebarFontColor"
                  } ${
                    selectedIndex === index
                      ? "hover:text-red-500"
                      : "hover:text-red-500"
                  }`}
                  onClick={() => handleClick(index, item)}
                >
                  {item.component === "dropdown" ? (
                    <div className="group cursor-pointer ">
                      <div className="flex items-center justify-center ">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-4 h-4"
                        />
                        {item.text && (
                          <span
                            className={`ml-2 text-sm ${
                              selectedIndex === index
                                ? "text-red-500"
                                : "text-sidebarFontColor"
                            } ${
                              selectedIndex === index
                                ? "hover:text-red-500"
                                : "hover:text-red-500"
                            } mx-2`}
                          >
                            {item.text}
                          </span>
                        )}
                        {item.extraSrc && (
                          <img
                            src={item.extraSrc}
                            alt={`${item.alt} extra`}
                            className="w-4 h-4 mr-3"
                          />
                        )}
                      </div>
                      {selectedIndex === index && (
                        <div
                          className={` absolute z-50 ${
                            !item.onlyLabels || !item.ladder 
                              ? "w-[240px]"
                              : item.onlyLabels   || item.ladder
                              ? "w-[281px]"
                              : "w-auto"
                          } flex flex-col bg-backgroundColor text-gray-800 shadow-xl group-hover:visible rounded-xl mt-[13px]`}
                        >
                          {/* dropdown header */}

                          <div className="bg-white flex justify-between items-center w-full border-b border-gray-300 py-2 px-2">
                            <h2 className="text-base font-medium text-gray-900 ">
                              {item.text}
                            </h2>
                            <button
                              type="button"
                              className="px-2 text-2xl hover:bg-gray-200 rounded-2xl"
                              onClick={() => handleClose(index, item)}
                            >
                              &times;
                            </button>
                          </div>

                          {item.colorPicker ? (
                            <ColorPicker />
                          ) : (
                            item.options?.map((value: any, index: number) => (
                              <>
                                <div
                                  className={`flex items-center mb-1 justify-between bg-white py-2 ${
                                    index === 0 && "rounded-t-xl"
                                  } ${
                                    item.options.length - 1 === index &&
                                    "rounded-b-xl"
                                  }`}
                                  onClick={() => {
                                    handleDropdownOptionsTrigger(value);
                                  }}
                                >
                                  <label
                                    htmlFor="default-checkbox"
                                    className="uppercase ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  >
                                    {value.label}
                                  </label>
                                  {item.checkbox &&
                                    item.icons &&
                                    value.icon === null && (
                                      <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        value=""
                                        className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                        onChange={(e) =>
                                          handleSelectDropdown(
                                            e.target.checked,
                                            value.label
                                          )
                                        }
                                      />
                                    )}
                                  {item.icons &&
                                    value.icon !== null && ( // Check if icon is not null
                                      <img
                                        src={value.icon}
                                        className="block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                                      />
                                    )}
                                </div>
                                {item.checkbox &&
                                  gridItem?.grid &&
                                  value.label === "grid" && (
                                    <div className="flex items-center justify-between px-2 pt-1 pb-2">
                                      <input
                                        value="0.25"
                                        className="w-[40%] rounded-xl p-2 border-solid border-[1px] border-[#E5E7EB]"
                                      />
                                      <button
                                        type="button"
                                        className="bg-customColor text-white p-2 text-sm rounded-xl"
                                      >
                                        Update grid
                                      </button>
                                    </div>
                                  )}
                              </>
                            ))
                          )}

                          {/* //for Ladder  */}
                          {item.ladder && <Ladder />}
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <img src={item.src} alt={item.alt} className="w-4 h-4" />
                      {item.text && (
                        <span
                          className={` text-sm ${
                            selectedIndex === index
                              ? "text-red-500"
                              : "text-sidebarFontColor"
                          } ${
                            selectedIndex === index
                              ? "hover:text-red-500"
                              : "hover:text-red-500"
                          } mx-2`}
                        >
                          {item.text}
                        </span>
                      )}
                      {item.extraSrc && (
                        <img
                          src={item.extraSrc}
                          alt={`${item.alt} extra`}
                          className="w-4 h-4 mr-3"
                        />
                      )}
                    </>
                  )}
                </li>
                {index < headerData.length - 1 && (
                  <li className="border-r border-subHeaderBorderRight h-4"></li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </header>
      {/* Options Modal */}
      <SubHeaderOptionsClick
        openModal={openModal}
        optionValue={optionValue}
        modalClose={handleDropdownOptionsTrigger}
      />
    </>
  );
};

export default SubHeader;
