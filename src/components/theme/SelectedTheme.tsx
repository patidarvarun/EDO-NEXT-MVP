import { SelectedThemestabs, listItems, themeContentImages } from "@/utils/staticContent";
import styles from "../../styles/dashboard.module.css";
import { useState } from "react";
import Carousel from "./Carousel";
import Rating from "./Rating";
import List from "../List";

interface SelectedThemeProps {
  onClose: () => void;
}

const SelectedTheme = ({ onClose }: SelectedThemeProps) => {
  const [activeTab, setActiveTab] = useState(SelectedThemestabs[0]?.id);
  const [rating, setRating] = useState(0);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const images = themeContentImages.map((imageUrl) => imageUrl.icon);

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
      <div className="fixed z-50 inset-0 flex items-center justify-center">
        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-x-hidden shadow-xl transform transition-all sm:align-middle w-[1260px] ${styles.scroll_height_selected_themes} `}
        >
          <div className="sm:items-start">
            <div className="bg-white rounded-lg">
              <div
                className="flex flex-row items-center pl-4 pr-5 pt-3 pb-4 border-b-2 cursor-pointer"
                onClick={onClose}
              >
                <img src="/assets/images/arrow-left1.svg" alt={"icon"} />
                <h1 className="text-lg font-medium pl-3">Back</h1>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border-r-2">
                    {/* Tabs */}
                    <div className="bg-backgroundColor">
                      <ul
                        className="relative flex flex-wrap p-2 list-none rounded-xl bg-blue-gray-50/60 gap-2"
                        data-tabs="tabs"
                        role="list"
                      >
                        {SelectedThemestabs.map((tab) => (
                          <li
                            key={tab.id}
                            className="z-30 flex-auto text-center"
                          >
                            <a
                              className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 ${
                                activeTab === tab.id
                                  ? "bg-white text-blue-500"
                                  : "bg-inherit text-slate-700"
                              }`}
                              onClick={() => handleTabClick(tab.id)}
                              role="tab"
                              aria-selected={activeTab === tab.id}
                            >
                              <span
                                className={`ml-1 ${
                                  activeTab === tab.id && "text-black"
                                }`}
                              >
                                {tab.label}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="items-center justify-center ">
                      <Carousel images={images} />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mr-8">
                    <div>
                      <img
                        src={"/assets/images/theme_details.svg"}
                        alt={"Theme Details"}
                        className="rounded-md cursor-pointer pt-5"
                      />
                    </div>
                    <div className="grid-cols-subgrid gap-4 col-span-3">
                      <div className="col-start-2 flex flex-row justify-between items-center pt-5">
                        <p className="font-medium text-2xl">Comic Book</p>
                        <button className="pl-5 pr-5 pt-1 pb-1 border border-gray-600 rounded-full hover:bg-gray-100 text-black inline-flex items-center">
                          <span className="font-medium">Selected</span>
                          <img
                            src={"assets/images/bookmarks.svg"}
                            alt={"Theme Details"}
                            className="rounded-md cursor-pointer pl-3"
                          />
                        </button>
                      </div>
                      <div className="pt-5 flex flex-row items-center">
                        <p className="pr-2 text-lg text-gray-700">Rating:</p>

                        <Rating
                          totalStars={5}
                          initialRating={rating}
                          onRatingChange={handleRatingChange}
                        />
                      </div>
                      <div className="w-auto">
                        <p
                          className={`pt-5 text-base leading-7 text-gray-700 text-justify ${styles.letterSpacing}`}
                        >
                          This kick-butt comic book theme is one of our tried
                          and true themes. This theme is designed for elementary
                          and middle school yearbooks, and includes. Choose this
                          theme for your yearbook to show off your school"s
                          super side!
                        </p>

                        <div className="container mx-auto px-4 py-8">
                            <List items={listItems} />
                          </div>
                        <div>
                          <button className="bg-[#1B1B3A] rounded-lg w-36 py-2 text-white text-lg font-medium">
                            Install theme
                          </button>
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
    </>
  );
};

export default SelectedTheme;
