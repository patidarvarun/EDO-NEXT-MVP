// components/TextContent.tsx
import React from "react";
import CollapsibleSection from "./CollapsibleSection";

const TextContent: React.FC = () => {
  return (
    <div>
      <CollapsibleSection title="CUSTOM TEXT STYLE">
        <div className=" border border-solid border-gray-300 px-3 py-4 pr-3 pl-3 rounded-lg bg-white">
          <p className="text-sm font-medium">BODY TEXT</p>
          <p className="text-base leading-tight text-gray-800 mt-2 mb-1">
            Arial Regular 16
          </p>
          <div className="border-t-[1px] divide-y divide-slate-200 mt-3 mb-3"></div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-200 w-6 h-6 rounded-full inline-block"></div>
            <span className="text-sm text-gray-500">#4F4F4F</span>
          </div>
        </div>
      </CollapsibleSection>
      <CollapsibleSection title="DEFAULT TEXT STYLE">
        <div className="mb-4 border border-solid border-gray-300 px-3 py-4 rounded-lg bg-white">
          <p className="text-sm font-medium">BODY TEXT</p>
          <p className="text-base leading-tight text-gray-800 mt-2 mb-1">
            Optima 16
          </p>
          <div className="border-t-[1px] divide-y divide-slate-200 mt-3 mb-3"></div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-200 w-6 h-6 rounded-full inline-block"></div>
            <span className="text-sm text-gray-500">#4F4F4F</span>
          </div>
        </div>

        <div className="mb-4 border border-solid border-gray-300 px-3 py-4 rounded-lg bg-white">
          <p className="text-sm font-medium">HEADLINE TEXT</p>
          <p className="text-base leading-tight text-gray-800 mt-2 mb-1">
            Oriental 12
          </p>
          <div className="border-t-[1px] divide-y divide-slate-200 mt-3 mb-3"></div>
          <div className="flex items-center gap-2">
            <div className="bg-purple-200 w-6 h-6 rounded-full inline-block"></div>
            <span className="text-sm text-gray-500">#4F4F4F</span>
          </div>
        </div>
        <div className="mb-4 border border-solid border-gray-300 px-3 py-4 rounded-lg bg-white">
          <p className="text-sm font-medium">BODY TEXT</p>
          <p className="text-base leading-tight text-gray-800 mt-2 mb-1">
            Arial Regular 32
          </p>
          <div className="border-t-[1px] divide-y divide-slate-200 mt-3 mb-3"></div>
          <div className="flex items-center gap-2">
            <div className="bg-customLightGray w-6 h-6 rounded-full inline-block"></div>
            <span className="text-sm text-gray-500">#4F4F4F</span>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default TextContent;
