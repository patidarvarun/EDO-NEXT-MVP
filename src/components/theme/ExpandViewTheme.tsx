import {
  InnerThemes,
  categoriesArray,
  forYouArray,
} from "@/utils/sidebarItems";
import React, { useState } from "react";
import SearchInput from "../SearchInput";
import { themeCategories } from "@/utils/staticContent";
import DynamicCard from "../DynamicCard";

interface ExpandViewThemeProps {
  onClose: () => void;
}

function ExpandViewTheme({ onClose }: ExpandViewThemeProps) {
  const [searchValue, setSearchValue] = useState("");
  const [categoriesName, setCategoriesName] = useState("");
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };
  const filteredForYouArray = forYouArray.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredCategoriesArray = categoriesArray.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const handleClick = (name: string) => {
    setCategoriesName(name);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="inline-block align-bottom bg-white rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-[90%] ">
          <div className=" sm:items-start">
            <div className="bg-white rounded-lg	">
              <div className="flex flex-row justify-between items-center pl-4 pr-5 pt-3 pb-4 border-b-2">
                <h1 className="text-xl font-bold">Themes</h1>
                <button
                  onClick={onClose}
                  className="text-black hover:text-gray-700 text-2xl text-black "
                >
                  &times;
                </button>
              </div>
              <div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="p-4 border-r-2">
                    <p className="text-sm text-gray-600 text-xs pl-2 font-medium	">
                      FOR YOU
                    </p>
                    <div className="ml-1 mt-1">
                      <aside>
                        <nav>
                          <ul className="w-full p-1 bg-white flex flex-col rounded-t rounded-b gap-1">
                            {filteredForYouArray.map((item: InnerThemes) => (
                              <li
                                key={item.name}
                                onClick={() => handleClick(item.name)}
                                className={`w-full cursor-pointer h-9 pt-[9px] pl-2 rounded-t rounded-b text-black text-sm leading-4 text-left font-medium 
                                    hover:bg-backgroundColor hover:text-black  font-medium            `}
                              >
                                {item.name}
                              </li>
                            ))}
                          </ul>
                        </nav>
                      </aside>
                      <p className="text-sm text-gray-600 text-xs mt-8 font-medium	">
                        CATEGORIES
                      </p>
                      <aside>
                        <nav>
                          <ul className="w-full p-1 bg-white flex flex-col rounded-t rounded-b gap-1">
                            {filteredCategoriesArray.map(
                              (item: InnerThemes) => (
                                <li
                                  key={item.name}
                                  // onClick={() => handleClick(item.name)}
                                  className={`w-full cursor-pointer h-9	 pt-[9px] pl-2 rounded-t rounded-b text-black text-sm leading-4 text-left font-medium hover:bg-backgroundColor hover:text-black font-medium`}
                                >
                                  {item.name}
                                </li>
                              )
                            )}
                          </ul>
                        </nav>
                      </aside>
                    </div>
                  </div>
                  <div className="grid grid-cols-subgrid gap-2 col-span-3">
                    <div className="col-start-1 pt-4 pl-1 pr-4">
                      <SearchInput
                        placeholder="Search"
                        value={searchValue}
                        onChange={handleSearchChange}
                      />
                      <div>
                        <DynamicCard data={themeCategories} onclose={onClose} />
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
