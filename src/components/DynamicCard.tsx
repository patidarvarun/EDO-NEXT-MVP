import React, { useState } from "react";
import ThemeDetail from "./theme/ThemeDetail";
import SelectedTheme from "./theme/SelectedTheme";
import PeopleDetail from "./people/PeopleDetail";

const DynamicCard = ({ data }: any) => {
  const [activeCommand, setActiveCommand] = useState<any>(null);
  const [displayedItems, setDisplayedItems] = useState<any>(7);
  const [showViewMore, setShowViewMore] = useState<any>(false);
  const [showThemeDetail, setShowThemeDetail] = useState<any>(false);
  const [selectAll, setSelectAll] = useState(false); // State for "Select all"
  const [commandStates, setCommandStates] = useState<any>({}); // State to track individual command checkbox states
  const [showPeopleDetail, setShowPeopleDetail] = useState<any>(false);

  const handleClick = (command: any, categories: any) => {
    setActiveCommand(command);
    {
      categories.name === "All People (364)"
        ? setShowPeopleDetail(true)
        : setShowThemeDetail(true);
    }
  };

  const handleLike = (command: any) => {
    console.log("command", command);
  };

  const handleViewMoreClick = (categoryIndex: number) => {
    const category = data[categoryIndex];
    setDisplayedItems((prevState: any) => ({
      ...prevState,
      [categoryIndex]: category.commands.length,
    }));
    setShowViewMore((prevState: any) => ({
      ...prevState,
      [categoryIndex]: true,
    }));
  };

  const handleHideClick = (categoryIndex: number) => {
    setDisplayedItems((prevState: any) => ({
      ...prevState,
      [categoryIndex]: 7,
    }));
    setShowViewMore((prevState: any) => ({
      ...prevState,
      [categoryIndex]: false,
    }));
  };

  const getLikeButton = (
    status: any,
    command: { title: any },
    handleLike: { (command: any): void },
    categoryIndex: number,
    commandIndex: number
  ) => {
    if (data[categoryIndex].name === "All People (364)") {
      const key = `${categoryIndex}-${commandIndex}`;
      return (
        <div className="w-8 h-8 relative right-[44px] top-[10px] bg-white p-2 border-none rounded-lg shadow-md cursor-pointer">
          <input
            type="checkbox"
            className="h-[16px] w-[19px]"
            checked={commandStates[key] || false}
            onChange={() =>
              handleIndividualCheckboxChange(categoryIndex, commandIndex)
            }
          />
        </div>
      );
    } else {
      let iconSrc, iconAlt;

      switch (status) {
        case 0:
          iconSrc = "assets/images/heart.svg";
          iconAlt = command.title;
          break;
        case 1:
          iconSrc = "assets/images/heart_fill.svg";
          iconAlt = command.title;
          break;
        default:
          iconSrc = "assets/images/bookmarks.svg";
          iconAlt = command.title;
          break;
      }

      return (
        <img
          src={iconSrc}
          alt={iconAlt}
          className="w-8 h-8 absolute right-2 top-2 bg-white p-2 border-none rounded-lg shadow-md cursor-pointer"
          onClick={() => handleLike(command)}
        />
      );
    }
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    let newCommandStates: any = {};
    data.forEach((category: any, categoryIndex: number) => {
      if (category.name === "All People (364)") {
        category.commands.forEach((command: any, commandIndex: number) => {
          newCommandStates[`${categoryIndex}-${commandIndex}`] = !selectAll;
        });
      }
    });
    setCommandStates(newCommandStates);
  };

  const handleIndividualCheckboxChange = (
    categoryIndex: number,
    commandIndex: number
  ) => {
    const key = `${categoryIndex}-${commandIndex}`;
    const newCommandStates = {
      ...commandStates,
      [key]: !commandStates[key],
    };
    setCommandStates(newCommandStates);
  };
  const onSubmit = (data:any) => {
    console.log("submit",data);
  };

  return (
    <div>
      {data.map((category: any, categoryIndex: number) => (
        <div key={category.name} className="border-b-2 border-gray-100 pb-2">
          <div className="flex flex-row justify-between items-baseline pb-2">
            <h2 className="pt-7 pl-2 font-medium text-lg text-gray-600">
              {category.name}
            </h2>

            <div>
              {category.commands.length > 7 && !showViewMore[categoryIndex] && (
                <button
                  className="bg-white text-sm text-[#0085FF] inline-flex items-center gap-2"
                  onClick={() => handleViewMoreClick(categoryIndex)}
                >
                  View more
                  <img
                    src={"assets/images/arrow-down.svg"}
                    alt="view more"
                    className="w-5 h-5 hover:bg-gray-100 pt-1 rounded-md	"
                  />
                </button>
              )}
              {showViewMore[categoryIndex] && (
                <button
                  className="bg-white text-sm inline-flex items-center gap-2"
                  onClick={() => handleHideClick(categoryIndex)}
                >
                  Hide
                  <img
                    src={"assets/images/arrow-up.svg"}
                    alt="view more"
                    className="w-5 h-5 bg-gray-200 pt-1 rounded-md	"
                  />
                </button>
              )}
            </div>
          </div>
          {category.name === "All People (364)" && (
            <div className="mb-4 border-b-2 border-solid border-[#dfdede] flex justify-between">
              <div className="mt-4 mb-4">
                <label className="ml-2 flex items-center">
                  <input
                    type="checkbox"
                    className="h-[16px] w-[19px]"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                  <p className="p-[8px] text-gray-500">Select all</p>
                </label>
              </div>

              <div className="relative top-[15px]">
                <button className="bg-white text-[#1B1B3A] font-medium py-2 px-4 ">
                  Delete selected
                </button>{" "}
                <button className="bg-[#1B1B3A] text-white font-medium py-2 px-4 border border-[#1B1B3A] rounded-lg">
                  Update selected
                </button>
              </div>
            </div>
          )}
          <div
            className={`grid grid-cols-7 justify-items-center gap-y-3 gap-x-3  ${
              displayedItems[categoryIndex] > 14
                ? "overflow-y-scroll h-[501px]"
                : ""
            }`}
          >
            {category.commands
              .slice(0, displayedItems[categoryIndex] || 7)
              .map((command: any, commandIndex: number) => (
                <>
                  <div key={command.title} className="m-2 hover:font-medium">
                    <div className="flex flex-row relative">
                      <img
                        src={command.icon}
                        alt={command.title}
                        className={`${
                          category.name === "All People (364)"
                            ? "w-[200px] h-[200px] hover:border-red-700 border-[6px]"
                            : "w-26 hover:border-red-700 border-[4px]"
                        } bg-backgroundColor p-4 mb-2 border border-solid cursor-pointer `}
                        onClick={() => handleClick(command, category)}
                      />
                      {getLikeButton(
                        command.status,
                        command,
                        handleLike,
                        categoryIndex,
                        commandIndex
                      )}
                    </div>
                    <p
                      className={`${
                        category.name === "All People (364)"
                          ? "hover:font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {command.title}
                    </p>
                  </div>
                </>
              ))}
          </div>
        </div>
      ))}

      {showThemeDetail && (
        <ThemeDetail onClose={() => setShowThemeDetail(false)} />
      )}

      {showPeopleDetail && (
        <PeopleDetail
          onClose={() => setShowPeopleDetail(false)}
          peopleInfo={activeCommand}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default DynamicCard;
