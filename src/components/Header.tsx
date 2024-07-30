import React, { useEffect, useRef, useState } from "react";
import Tooltip from "./ToolTips";
import ClickedModel from "./models/ClickedModel";
import Setting from "./setting/Setting";
import Share from "./share/Share";

const Header: React.FC = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modelRef.current &&
        !modelRef.current.contains(event.target as Node)
      ) {
        setModelOpen(false);
        setSettingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSave = () => {
    setModelOpen(!modelOpen);
  };

  const handleSetting = () => {
    setSettingOpen(!settingOpen);
  };

  const handleShare = () => {
    setShareOpen(!shareOpen);
  };
  const handleSaveAsDraft = () => {
    console.log("Saving as draft");
    setModelOpen(false);
  };

  const handleSaveAsTemplate = () => {
    console.log("Saving as template");
    setModelOpen(false);
  };

  return (
    <header className="bg-customColor p-3 flex justify-between items-center h-11">
      {/* Left side (50%) */}
      <ul className="w-1/2 flex items-center ">
        <li className="text-white ml-2 mr-3 hover:bg-gray-600 p-2 rounded">
          <img
            src="/assets/images/menu.svg"
            alt="Menu Icon"
            className="w-5 h-5 cursor-pointer"
          />
        </li>
        <li
          className="text-white ml-4  w-10 cursor-pointer hover:bg-gray-600 p-2 rounded"
          onClick={handleSetting}
        >
          <img
            src="/assets/images/setting-2.svg"
            alt="Settings Icon"
            className="w-5 h-5 "
          />
        </li>
        <li className="border-r border-borderRight h-6"></li>
      </ul>
      {settingOpen && (
        <div ref={modelRef}>
          <Setting onClose={() => setSettingOpen(false)} />
        </div>
      )}
      {/* Right side (50%) */}
      <ul className="w-1/2 flex items-center justify-end">
        <Tooltip
          text1="Carla Winson"
          text2=" Click to follow"
          bgcolor="[#1B1B3A]"
          textcolor="white"
          icon1=""
          icon2=""
          fontSize="sm"
          fontSizes="xl"
          fontWeight1="font-light"
          fontWeight2=""
          border=""
          align="center"
        >
          <li className="flex -space-x-2 rtl:space-x-reverse items-center justify-center w-20 p-1 rounded">
            <img
              className=" w-7 h-7 rounded-full dark:border-gray-800 cursor-pointer hover:border-2 border-[#0085FF] rounded"
              src="/assets/images/avatar.svg"
              alt="image"
            />
            <img
              className=" w-7 h-7 rounded-full dark:border-gray-800 cursor-pointer hover:border-2 border-[#0085FF] rounded"
              src="/assets/images/avatar2.svg"
              alt="image"
            />
          </li>
        </Tooltip>
        <li className="border-r border-borderRight h-6 mx-2"></li>
        <li
          className="w-42 text-white mr-5 text-sm cursor-pointer hover:bg-gray-600 p-2 rounded"
          onClick={handleShare}
        >
          Share
        </li>
        {shareOpen && (
          <div ref={modelRef}>
            <Share onClose={() => setShareOpen(false)} />
          </div>
        )}
        <Tooltip
          text1="Board"
          text2="Frames"
          bgcolor="white"
          textcolor="zinc-600"
          icon1="/assets/images/keyboard-open.svg"
          icon2="/assets/images/frame11.svg"
          fontSize="lg"
          fontSizes="lg"
          fontWeight1="font-light"
          fontWeight2="font-light"
          border="rounded-b-lg"
          align="left"
        >
          <li className="flex items-center justify-center mr-4 bg-btnbg bg-opacity-50 w-27 h-8 rounded-t-lg rounded-b-lg cursor-pointer hover:bg-btnbg bg-opacity-30">
            <span className="w-42 text-white ml-3 text-sm ">Preview</span>
            <img
              src="/assets/images/play.svg"
              alt="Play"
              className="w-5 h-7 text-white ml-2 mr-2"
            />
          </li>
        </Tooltip>
        <span className="border-l border-gray-200 vertical-line bg-gray-2 opacity-30">
          &nbsp;
        </span>
        <li className="w-[120px] text-white pl-5 mx-2 text-sm cursor-pointer hover:bg-gray-600 p-1 rounded">
          Page revisions
        </li>
        <li
          className="flex items-center justify-center mr-6 bg-white w-26 h-8 rounded-t-lg rounded-b-lg cursor-pointer hover:bg-btnbg bg-opacity-90"
          onClick={handleSave}
        >
          <span className="w-42 text-sidebarFontColor ml-3 text-sm ">Save</span>
          <img
            src="/assets/images/arrow-down.svg"
            alt="Arrow Down"
            className="w-5 h-7 text-white ml-2 mr-2"
          />
        </li>
        {modelOpen && (
          <div ref={modelRef}>
            <ClickedModel
              onSaveAsDraft={handleSaveAsDraft}
              onSaveAsTemplate={handleSaveAsTemplate}
            />{" "}
          </div>
        )}
        <li className="w-10 h-6 text-white px-3 mr-2 hover:bg-gray-600 rounded">
          <img
            src="/assets/images/cloud-plus.svg"
            alt="Cloud Plus"
            className="w-5 h-6 text-white cursor-pointer"
          />
        </li>
        <li className="border-r border-borderRight h-6"></li>
        <li className="flex items-center justify-center mr-1 ml-3 bg-btnbg bg-opacity-50 w-9 h-8 rounded-t-lg rounded-b-lg hover:bg-btnbg bg-opacity-30">
          <img
            src="/assets/images/login.svg"
            alt="Login"
            className="w-5 h-7 text-white ml-2 mr-2 cursor-pointer"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
