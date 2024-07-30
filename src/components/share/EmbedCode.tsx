import React, { useState } from "react";
import styles from "../../styles/dashboard.module.css";
import SearchInput from "../SearchInput";
import CollapsibleSection from "../CollapsibleSection";
import Accordian from "../setting/Accordian";
import ShareAccordian from "./ShareAccordian";

interface ExpandSettingProps {
  onClose: () => void;
  setEmbeded: (value: boolean) => void;
}

function EmbedCode({ onClose, setEmbeded }: ExpandSettingProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleBack = () => {
    setEmbeded(false);
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
                <div
                  className="flex row items-center gap-2 cursor-pointer"
                  onClick={handleBack}
                >
                  <img
                    src="/assets/images/arrow-leftshare.svg"
                    alt=""
                    className="w-5 h-5"
                  />{" "}
                  <h1 className="text-xl font-bold">Copy public embed code</h1>
                </div>
                <div className="flex flex-row items-center">
                  <button
                    onClick={onClose}
                    className="text-black hover:text-gray-700 text-2xl text-black "
                  >
                    &times;
                  </button>
                </div>
              </div>
              <div className="bg-backgroundColor rounded-lg p-[15px]">
                <div className="flex flex-row items-baseline p-4 bg-white rounded-lg">
                  <div className="w-full">
                    <p className="text-gray-600">{`<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign
                    ${(
                      <br />
                    )}%2FUtsZu7cUuVsw5SjCFKb8sv%2FECS%252C-WebApp-%257C-Uxrs---Workfile%3Fnode-id%3D219-4003%26t%3DnvzwZrz99JqcSoWj-1" allowfullscreen></iframe>`}</p>
                  </div>
                </div>
              <div className="relative top-[15px]">
                <button className=" text-[#0085FF] font-medium py-2 px-4 mr-2">
                  Cancel
                </button>{" "}
                <button className="bg-[#1B1B3A] text-white font-medium py-2 px-4 border border-[#1B1B3A] rounded-lg">
                  Copy code
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmbedCode;
