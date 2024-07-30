import React, { useState } from "react";
import Accordian from "./Accordian";
import {
  basicData,
  sections,
  settingData,
  styleGuideData,
} from "@/utils/staticContent";

interface ExpandSettingProps {
  onClose: () => void;
}

function Setting({ onClose }: ExpandSettingProps) {
  const [activeItem, setActiveItem] = useState<string | null>("viewSetting-0");

  const handleItemClick = (sectionId: string, itemIndex: number) => {
    setActiveItem(`${sectionId}-${itemIndex}`);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 bg-black bg-opacity-50">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-20 sm:align-middle sm:w-[55%] h-[700px] -mt-16 ">
          <div className=" sm:items-start">
            <div className="bg-white rounded-lg	">
              <div className="flex flex-row justify-between items-center pl-4 pr-5 pt-3 pb-4 border-b-2">
                <h1 className="text-xl font-bold">Yearbook Settings</h1>
                <button
                  onClick={onClose}
                  className="text-black hover:text-gray-700 text-2xl text-black "
                >
                  &times;
                </button>
              </div>
              <div>
                <div className="flex flex-row items-baseline">
                  <div className="w-[45%]">
                    {sections.map((section) => (
                      <div
                        key={section.id}
                        className="pl-[20px] pr-[20px] mb-6"
                      >
                        <p className="text-[16px] text-gray-600 pl-2 pb-2 font-medium">
                          {section.title}
                        </p>
                        <div className="mt-1 pl-2">
                          <aside>
                            <nav>
                              {section.content.map((item: any, index: any) => (
                                <h1
                                  key={index}
                                  className={`p-[10px] text-lg font-medium cursor-pointer ${
                                    activeItem === `${section.id}-${index}`
                                      ? "rounded-lg bg-backgroundColor"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handleItemClick(section.id, index)
                                  }
                                >
                                  {item}
                                </h1>
                              ))}
                            </nav>
                          </aside>
                        </div>
                      </div>
                    ))}
                  </div>
                  {activeItem && (
                    <div className="grid grid-cols-subgrid gap-2 col-span-3 w-full h-dvh border-l-2 border-gray-100">
                      <div className="col-start-1 pt-4 pl-1 pr-4 bg-backgroundColor">
                        <div className="bg-white rounded-lg mr-2 ml-4">
                          {/* Content for the active section goes here */}
                          {activeItem === "viewSetting-0"
                            ? settingData.map((item, index) => (
                                <React.Fragment key={index}>
                                  <Accordian
                                    title={item.title}
                                    image={item.img}
                                  >
                                    <div className="rounded-lg bg-white">
                                      <div className="grid grid-cols-3 justify-items-left p-4 gap-y-3"></div>
                                    </div>
                                  </Accordian>
                                  {index < settingData.length - 1 && (
                                    <div className="p-2 bg-backgroundColor"></div>
                                  )}
                                </React.Fragment>
                              ))
                            : activeItem === "designerSettings-0"
                            ? basicData.map((item, index) => (
                                <React.Fragment key={index}>
                                  <p className="text-sm pb-2 text-[#525252] bg-backgroundColor">
                                    {item.heading}
                                  </p>
                                  <Accordian title={item.title}>
                                    <div className="rounded-lg bg-white">
                                      <div className="grid grid-cols-3 justify-items-left p-4 gap-y-3"></div>
                                    </div>
                                  </Accordian>
                                  {index < basicData.length - 1 && (
                                    <div className="p-2 bg-backgroundColor"></div>
                                  )}
                                </React.Fragment>
                              ))
                            : activeItem === "designerSettings-1"
                            ? styleGuideData.map((item, index) => (
                                <React.Fragment key={index}>
                                  <Accordian title={item.title}>
                                    <div className="rounded-lg bg-white">
                                      <div className="grid grid-cols-1 justify-items-left p-4 gap-y-3">
                                        {item.title === "Saved text styles" ? (
                                          <>
                                            <div className=" flex px-3 py-4 pr-3 pl-3 rounded-lg bg-white">
                                              <div className="flex items-center gap-2">
                                                <div className="bg-black w-6 h-6 rounded-full inline-block"></div>
                                                <span className="text-lg text-black font-semibold border border-gray-300 rounded-lg p-2 w-[150px]">
                                                  #4F4F4F
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-2 mr-3 ml-3">
                                                <span className="text-lg text-black font-semibold border border-gray-300 rounded-lg p-2 w-[68px] mr-4">
                                                  100%
                                                </span>
                                              </div>
                                              <div>
                                                <p className="text-lg font-semibold">
                                                  BODY TEXT
                                                </p>
                                                <p className="text-base leading-tight text-gray-800 mt-2 mb-1">
                                                  Arial Regular 28
                                                </p>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    </div>
                                  </Accordian>
                                  {index < styleGuideData.length - 1 && (
                                    <div className="p-2 bg-backgroundColor"></div>
                                  )}
                                </React.Fragment>
                              ))
                            : ""}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Setting;
