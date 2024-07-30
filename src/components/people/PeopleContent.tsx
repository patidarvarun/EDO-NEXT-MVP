import React, { useState } from "react";
import SearchInput from "../SearchInput";
import {
  allPeoples,
  menuItems,
  photoAcrossOptions,
  themeCategories,
} from "@/utils/staticContent";
import DynamicCard from "../DynamicCard";
import CollapsibleSection from "../CollapsibleSection";
import Dropdown from "../Dropdown";

interface ExpandViewThemeProps {
  onClose: () => void;
}

function ExpandViewTheme({ onClose }: ExpandViewThemeProps) {
  const [searchValue, setSearchValue] = useState("");
  const [photoAcrossNumbers, setPhotoAcrossNumbers] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handlePhotoAcrossChange = (index: number, value: any) => {
    const newPhotoAcrossNumbers = [...photoAcrossNumbers];
    newPhotoAcrossNumbers[index] = value;
    setPhotoAcrossNumbers(newPhotoAcrossNumbers);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 bg-black bg-opacity-50">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-[90%] h-[852px] -mt-16">
          <div className=" sm:items-start">
            <div className="bg-white rounded-lg	">
              <div className="flex flex-row justify-between items-center pl-4 pr-5 pt-3 pb-4 border-b-2">
                <h1 className="text-xl font-bold">People</h1>
                <button
                  onClick={onClose}
                  className="text-black hover:text-gray-700 text-2xl text-black "
                >
                  &times;
                </button>
              </div>
              <div>
                <div className="flex flex-row items-baseline">
                  <div className="pl-[20px] pr-[20px] w-[18%]">
                    <p className="text-[15px] text-gray-600 text-xs pl-2 pb-2 font-medium	">
                      FOR YOU
                    </p>
                    <div className=" mt-2">
                      <aside>
                        <nav className="bg-backgroundColor rounded-lg">
                          <CollapsibleSection title="Manage data">
                            <div className="bg-backgroundColor px-3 py-4 pr-3 pl-3 rounded-lg ">
                              <p className="text-[16px] font-medium cursor-pointer">
                                Browse People Data
                              </p>
                              <div className="border-t-[1px] divide-y divide-slate-200 mt-3 mb-3"></div>
                              <div className="flex flex-col ">
                                <span className="text-[16px] text-gray-500 cursor-pointer">
                                  Check Duplicates
                                </span>
                                <div className="border-t-[1px] divide-y divide-slate-200 mt-3 mb-3"></div>
                                <span className="text-[16px] text-gray-500 cursor-pointer">
                                  Import Photo Tags
                                </span>
                              </div>
                            </div>
                          </CollapsibleSection>
                        </nav>
                      </aside>
                      {menuItems.map((item, index) => (
                        <div className="flex flex-col px-1 py-1 pr-3 pl-3 rounded-lg mt-1">
                          <h1 className="pr-2 pt-2 pb-3 text-lg font-medium cursor-pointer">
                            {item}
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-subgrid gap-2 col-span-3 w-full border-l-2 border-gray-100">
                    <div className="col-start-1 pt-4 pl-1 pr-4">
                      <div className="bg-backgroundColor px-3 py-6 pr-4 pl-4">
                        <div className="flex flex-row justify-around">
                          <div className="w-[60%]">
                            <SearchInput
                              placeholder="Search"
                              value={searchValue}
                              onChange={handleSearchChange}
                            />
                          </div>
                          <button className="bg-backgroundColor hover:bg-gray-200 text-[#1B1B3A] hover:text-[#1B1B3A] py-2 px-4 border border-[#1B1B3A] rounded-lg w-[12%]">
                            Match photos
                          </button>
                          <button className="bg-backgroundColor hover:bg-gray-200 text-[#1B1B3A] hover:text-[#1B1B3A] py-2 px-4 border border-[#1B1B3A] rounded-lg w-[12%]">
                            Upload photos
                          </button>
                          <button className="bg-[#1B1B3A] text-white font-medium py-2 px-4 border border-[#1B1B3A] rounded-lg w-[10%]">
                            Add user
                          </button>
                        </div>
                        <div className="flex gap-4 pt-4 pl-4">
                          {photoAcrossNumbers.map((value, index) => (
                            <div key={index} className="w-29">
                              <Dropdown
                                options={photoAcrossOptions}
                                value={value}
                                onChange={(val) =>
                                  handlePhotoAcrossChange(index, val)
                                }
                                optionalPerameterCheck={true}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <DynamicCard data={allPeoples} onclose={onClose} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExpandViewTheme;
