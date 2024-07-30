import React, { useState } from "react";
import styles from "../../styles/dashboard.module.css";
import SearchInput from "../SearchInput";
import CollapsibleSection from "../CollapsibleSection";
import Accordian from "../setting/Accordian";
import ShareAccordian from "./ShareAccordian";
import EmbedCode from "./EmbedCode";
import { sharingData } from "@/utils/staticContent";

interface ExpandSettingProps {
  onClose: () => void;
}

function Share({ onClose }: ExpandSettingProps) {
  const [searchValue, setSearchValue] = useState("");
  const [embed, setEmbed] = useState(false);
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleEmbedCode = () => {
    setEmbed(true);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 bg-black bg-opacity-50">
        <div
          className={`inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:w-[600px] h-[450px] -mt-16 ${styles.shareDiv} bg-backgroundColor `}
        >
          <div className=" sm:items-start">
            <div className="bg-white rounded-lg	">
              <div className="flex flex-row justify-between items-center pl-4 pr-5 pt-3 pb-4 border-b-2">
                <h1 className="text-xl font-bold">Share the file</h1>

                <div className="flex flex-row items-center">
                  <button className="bg-transparent hover:bg-blue-500 text-[#0085FF] font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
                    Copy link
                  </button>
                  <button
                    onClick={onClose}
                    className="text-black hover:text-gray-700 text-2xl text-black "
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="bg-backgroundColor rounded-lg p-[15px]">
                <div className="pb-3 rounded-lg bg-backgroundColor">
                  <div className="flex flex-row justify-around">
                    <div className="relative w-[96%] ">
                      <input
                        type="search"
                        id="default-search"
                        className="block w-[96%] pl-3 pt-3 pb-3 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={"placeholder"}
                        defaultValue={"Invite others by name or email"}
                        // onChange={handleChange}
                        required
                      />
                    </div>
                    <button className="border border-solid text-white font-semibold rounded-lg bg-[#D1D5DB] w-[20%] ">
                      Invite
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-baseline p-4 bg-white rounded-lg">
                  <div className="w-full">
                    <p className="text-gray-600">Who has access</p>
                    <div>
                      {sharingData.map((item, index) => (
                        <React.Fragment key={index}>
                          <ShareAccordian title={item.title} image={item.img}>
                            <div className="rounded-lg bg-white">
                              {/* <div className="grid grid-cols-3 justify-items-left p-3 gap-y-3"></div> */}
                            </div>
                          </ShareAccordian>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-lg bg-white ">
                  <div
                    className="flex flex-row justify-between cursor-pointer"
                    onClick={handleEmbedCode}
                  >
                    <h1>Embed Code</h1>
                    <img src="/assets/images/arrow-right-side.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {embed ? (
        <EmbedCode
          onClose={onClose}
          setEmbeded={(value: boolean) => setEmbed(value)}
        />
      ) : null}
    </div>
  );
}
export default Share;
