import React, { useState } from "react";
import { listItems, themeContentImages } from "@/utils/staticContent";
import styles from "../../styles/dashboard.module.css";
import List from "../List";
import Rating from "./Rating";
import SelectedTheme from "./SelectedTheme";
interface ThemeDetailProps {
  onClose: () => void;
}

function ThemeDetail({ onClose }: ThemeDetailProps) {
  const [rating, setRating] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  const handleThemeDetails = (detail: { name: string; icon: string }) => {
    setDetailOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
      <div className="fixed z-50 inset-0 flex items-center justify-center">
        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-x-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[1260px] ${styles.scroll_height} varuu `}
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
                  <div className="p-4 border-r-2">
                    <p className="pb-4 pl-4 font-medium">Ladder Layouts</p>
                    <div className="grid grid-cols-3 justify-items-center gap-y-2 gap-x-2">
                      {themeContentImages.map((imageUrl, index) => (
                        <div
                          key={index}
                          className=""
                          onClick={() => handleThemeDetails(imageUrl)}
                        >
                          <img
                            src={imageUrl.icon}
                            alt={`Theme ${index + 1}`}
                            className="rounded-md cursor-pointer hover:border-[4px] p-1 hover:border-red-700 "
                          />
                          <p className="pb-3 pt-2 text-gray-600 text-sm cursor-pointer">
                            {imageUrl.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
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
                        <button className="pl-5 pr-5 mr-2 pt-1 pb-1 border border-gray-600 rounded-full hover:bg-gray-100 text-black inline-flex items-center">
                          <span className="font-medium">Select theme</span>
                          <img
                            src={"/assets/images/bookmark.svg"}
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
                      <div className="w-[450px]">
                        <p
                          className={`pt-5 text-base leading-7 text-gray-700 ${styles.letterSpacing}`}
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
        {detailOpen && <SelectedTheme onClose={onClose} />}
    </>
  );
}
export default ThemeDetail;
