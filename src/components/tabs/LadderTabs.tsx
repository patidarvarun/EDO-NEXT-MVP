import React, { useState } from "react";
import ImageComponent from "../ImageComponent";
import { imageData } from "@/utils/staticContent";
import styles from "../../styles/dashboard.module.css";

const LadderTabs = ({
  tabs,
}: {
  tabs: { id: number; label: string; icon: string }[];
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div className="">
      <div
        className={`relative right-0 p-4 bg-white ${styles.min_content_height} `}
      >
        <div className="bg-backgroundColor border rounded-2xl">
          <ul
            className="relative flex flex-wrap p-2 list-none rounded-xl bg-blue-gray-50/60 gap-2"
            data-tabs="tabs"
            role="list"
          >
            {tabs.map((tab) => (
              <li key={tab.id} className="z-30 flex-auto text-center">
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
                  <img
                    src={tab.icon}
                    alt={`${tab.label} icon`}
                    className="w-6 h-5 mr-1"
                  />
                  <span
                    className={`ml-1 ${activeTab === tab.id && "text-black"}`}
                  >
                    {tab.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="grid grid-cols-1 ">
            {imageData.map((image: any) => (
              <ImageComponent data={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LadderTabs;
