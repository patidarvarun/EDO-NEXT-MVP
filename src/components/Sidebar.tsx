import { SidebarItem, sidebarItems } from "@/utils/sidebarItems";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import ContentPopup from "./ContentPopup";
import PeopleContent from "./people/PeopleContent";

// Dynamically import the content components
const componentsMap: { [key: string]: React.ComponentType<any> } = {
  Text: dynamic(() => import("./TextContent")),
  Images: dynamic(() => import("./ImageContent")),
  Themes: dynamic(() => import("./theme/ThemeContent")),
  Layouts: dynamic(() => import("./LayoutContent")),
  Elements: dynamic(() => import("./ElementContent")),
  Ads: dynamic(() => import("./AdsContent")),
  ["Photo grid"]: dynamic(() => import("./PhotoGridContent")),
};

const Sidebar: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleClose = () => {
    setSelectedItem(null);
  };

  const ContentComponent = selectedItem ? componentsMap[selectedItem] : null;

  const handleManageToggle = (value: string) => {
    setValue(value);
  };

  const handleClick = (value: string) => {
    setSelectedItem(value);
  };

  return (
    <div>
      <aside>
        <nav>
          <ul className="w-[102px] h-[708px] p-1 bg-backgroundColor flex flex-col rounded-t rounded-b">
            {sidebarItems.map((item: SidebarItem) => (
              <li
                key={item.name}
                onClick={() => handleClick(item.name)}
                className={`w-full cursor-pointer h-16 px-4 py-3 rounded-t rounded-b text-sidebarFontColor text-xs font-normal leading-4 text-center hover:bg-sidebarText hover:text-white  ${
                  selectedItem === item.name ? "bg-sidebarText text-white" : "bg-white"
                }`}
                onMouseEnter={() => handleManageToggle(item.name)}
                onMouseLeave={() => handleManageToggle("")}
              >
                <img
                  src={
                    value === item.name || selectedItem === item.name
                      ? item.hoverIcon
                      : item.icon
                  }
                  alt={item.alt}
                  className="ml-[22px]"
                />
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {selectedItem === "People" && (
        <ContentPopup title="People" onClose={handleClose}>
          <PeopleContent onClose={handleClose} />
        </ContentPopup>
      )}
      {selectedItem && ContentComponent && (
        <ContentPopup title={selectedItem} onClose={handleClose}>
          <ContentComponent />
        </ContentPopup>
      )}
    </div>
  );
};

export default Sidebar;
